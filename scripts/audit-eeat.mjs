#!/usr/bin/env node
/**
 * Auditoria E-E-A-T e duplicação de conteúdo sobre o snapshot em snapshot-live/.
 *
 * Analisa:
 *  1. Volume de conteúdo único por página (descontando boilerplate)
 *  2. Blocos de texto duplicados entre páginas
 *  3. Meta tags duplicadas (title / description)
 *  4. Sinais de E-E-A-T (autor, credenciais, fontes, datas)
 *  5. Páginas de cidade (risco de doorway page)
 */

import fs from 'node:fs'
import path from 'node:path'

const SNAP = path.resolve(import.meta.dirname, '..', 'snapshot-live')

// ---------- helpers ----------
function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, acc)
    else if (entry.name.endsWith('.html')) acc.push(full)
  }
  return acc
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractMeta(html) {
  const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || ''
  const desc =
    (html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) || [])[1] ||
    (html.match(/<meta\s+content="([^"]*)"\s+name="description"/i) || [])[1] ||
    ''
  const canonical = (html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i) || [])[1] || ''
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => stripTags(m[1]))
  const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => stripTags(m[1]))
  const h3s = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map((m) => stripTags(m[1]))
  return { title, desc, canonical, h1s, h2s, h3s }
}

// Extrai apenas parágrafos (conteúdo textual real, não navegação)
function extractParagraphs(html) {
  return [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((m) => stripTags(m[1]))
    .filter((t) => t.split(/\s+/).length >= 5) // ignora fragmentos
}

// ---------- coleta ----------
const files = walk(SNAP)
const pages = files.map((f) => {
  const html = fs.readFileSync(f, 'utf-8')
  const rel = path.relative(SNAP, f).replace(/\\/g, '/')
  const meta = extractMeta(html)
  const paras = extractParagraphs(html)
  const fullText = stripTags(html)
  return {
    file: rel,
    url: '/' + rel.replace(/\.html$/, '').replace(/^index$/, ''),
    html,
    ...meta,
    paras,
    words: fullText.split(/\s+/).filter(Boolean).length,
    paraWords: paras.join(' ').split(/\s+/).filter(Boolean).length,
  }
})

console.log(`Analisando ${pages.length} páginas do snapshot\n`)

// ---------- 1. BOILERPLATE: parágrafos que aparecem em muitas páginas ----------
const paraCount = new Map()
for (const p of pages) {
  for (const para of new Set(p.paras)) {
    const key = para.toLowerCase()
    if (!paraCount.has(key)) paraCount.set(key, { text: para, pages: [] })
    paraCount.get(key).pages.push(p.url)
  }
}

const boilerplate = [...paraCount.values()]
  .filter((e) => e.pages.length >= pages.length * 0.5) // em 50%+ das páginas
  .sort((a, b) => b.pages.length - a.pages.length)

const boilerplateSet = new Set(boilerplate.map((b) => b.text.toLowerCase()))

console.log('═══ 1. BOILERPLATE (texto repetido em 50%+ das páginas) ═══\n')
if (boilerplate.length === 0) {
  console.log('  Nenhum parágrafo global detectado.\n')
} else {
  boilerplate.forEach((b) => {
    console.log(`  ${b.pages.length}/${pages.length} páginas | "${b.text.slice(0, 90)}..."`)
  })
  const bpWords = boilerplate.reduce((s, b) => s + b.text.split(/\s+/).length, 0)
  console.log(`\n  Total boilerplate: ${bpWords} palavras repetidas em quase todas as páginas`)
}

// ---------- 2. CONTEÚDO ÚNICO POR PÁGINA ----------
console.log('\n═══ 2. CONTEÚDO ÚNICO POR PÁGINA (descontando boilerplate) ═══\n')

for (const p of pages) {
  const uniqueParas = p.paras.filter((t) => !boilerplateSet.has(t.toLowerCase()))
  p.uniqueWords = uniqueParas.join(' ').split(/\s+/).filter(Boolean).length
  p.uniqueParas = uniqueParas
}

const thin = pages.filter((p) => p.uniqueWords < 300).sort((a, b) => a.uniqueWords - b.uniqueWords)
console.log(`  Páginas com < 300 palavras únicas: ${thin.length}/${pages.length}\n`)
thin.slice(0, 25).forEach((p) => {
  console.log(`  ${String(p.uniqueWords).padStart(5)} palavras | ${p.url}`)
})
if (thin.length > 25) console.log(`  ... e mais ${thin.length - 25}`)

// ---------- 3. META DUPLICADAS ----------
console.log('\n═══ 3. TITLE / DESCRIPTION DUPLICADOS ═══\n')

function findDupes(field) {
  const map = new Map()
  for (const p of pages) {
    const v = (p[field] || '').trim()
    if (!v) continue
    if (!map.has(v)) map.set(v, [])
    map.get(v).push(p.url)
  }
  return [...map.entries()].filter(([, urls]) => urls.length > 1)
}

const dupTitles = findDupes('title')
const dupDescs = findDupes('desc')
const noTitle = pages.filter((p) => !p.title.trim())
const noDesc = pages.filter((p) => !p.desc.trim())

console.log(`  Titles duplicados:       ${dupTitles.length} grupos`)
dupTitles.slice(0, 5).forEach(([v, urls]) => console.log(`    "${v.slice(0, 60)}" → ${urls.length}x`))
console.log(`  Descriptions duplicadas: ${dupDescs.length} grupos`)
dupDescs.slice(0, 5).forEach(([v, urls]) => console.log(`    "${v.slice(0, 60)}" → ${urls.length}x`))
console.log(`  Sem title:               ${noTitle.length}`)
console.log(`  Sem description:         ${noDesc.length}`)

// ---------- 4. H1 ----------
console.log('\n═══ 4. ESTRUTURA DE HEADINGS ═══\n')
const noH1 = pages.filter((p) => p.h1s.length === 0)
const multiH1 = pages.filter((p) => p.h1s.length > 1)
console.log(`  Sem H1:        ${noH1.length}`)
noH1.slice(0, 10).forEach((p) => console.log(`    ${p.url}`))
console.log(`  Múltiplos H1:  ${multiH1.length}`)
multiH1.slice(0, 10).forEach((p) => console.log(`    ${p.url} (${p.h1s.length})`))

// ---------- 5. E-E-A-T ----------
console.log('\n═══ 5. SINAIS DE E-E-A-T ═══\n')

const eeatChecks = {
  'Autor nomeado (Person schema)': (h) => /"@type"\s*:\s*"Person"/.test(h),
  'author em Article schema': (h) => /"author"\s*:\s*\{[^}]*"name"/.test(h),
  'datePublished': (h) => /"datePublished"/.test(h),
  'dateModified': (h) => /"dateModified"/.test(h),
  'Link externo (fonte/citação)': (h) => {
    const ext = [...h.matchAll(/href="(https?:\/\/[^"]+)"/g)]
      .map((m) => m[1])
      .filter((u) => !/seusiteadvogados|wa\.me|whatsapp|facebook\.com\/seusite|instagram\.com\/(seusite|criacao)/.test(u))
    return ext.length > 0
  },
  'Menção a OAB (autoridade do nicho)': (h) => /\bOAB\b/.test(stripTags(h)),
}

const blogPages = pages.filter((p) => p.url.startsWith('/blog/'))
console.log(`  Analisando ${blogPages.length} artigos de blog:\n`)
for (const [label, fn] of Object.entries(eeatChecks)) {
  const hits = blogPages.filter((p) => fn(p.html)).length
  const pct = ((hits / blogPages.length) * 100).toFixed(0)
  const icon = pct >= 80 ? '✅' : pct >= 30 ? '⚠️ ' : '❌'
  console.log(`  ${icon} ${label.padEnd(35)} ${hits}/${blogPages.length} (${pct}%)`)
}

// Autor genérico vs pessoa real
const orgAuthor = blogPages.filter((p) => /"author"[\s\S]{0,80}"Organization"/.test(p.html)).length
const personAuthor = blogPages.filter((p) => /"author"[\s\S]{0,80}"Person"/.test(p.html)).length
console.log(`\n  Autor = Organization (genérico): ${orgAuthor}`)
console.log(`  Autor = Person (nomeado):        ${personAuthor}`)

// ---------- 6. PÁGINAS DE CIDADE ----------
console.log('\n═══ 6. PÁGINAS DE CIDADE (risco doorway) ═══\n')
const cityPages = pages.filter((p) => p.url.startsWith('/site-para-advogados/'))
if (cityPages.length >= 2) {
  const a = cityPages[0]
  const b = cityPages[1]
  const setA = new Set(a.paras.map((t) => t.toLowerCase()))
  const shared = b.paras.filter((t) => setA.has(t.toLowerCase()))
  console.log(`  Comparando ${a.url} × ${b.url}`)
  console.log(`  Parágrafos em A: ${a.paras.length} | em B: ${b.paras.length}`)
  console.log(`  Parágrafos idênticos: ${shared.length}`)
  console.log(`  Palavras únicas por cidade (média): ${Math.round(cityPages.reduce((s, p) => s + p.uniqueWords, 0) / cityPages.length)}`)
}
cityPages.forEach((p) => console.log(`    ${String(p.uniqueWords).padStart(5)} palavras únicas | ${p.url}`))

// ---------- salvar dados ----------
fs.writeFileSync(
  path.join(SNAP, '_audit-data.json'),
  JSON.stringify(
    pages.map((p) => ({
      url: p.url,
      title: p.title,
      desc: p.desc,
      canonical: p.canonical,
      h1: p.h1s,
      h2count: p.h2s.length,
      words: p.words,
      paraWords: p.paraWords,
      uniqueWords: p.uniqueWords,
    })),
    null,
    2
  )
)
console.log('\n📊 Dados detalhados salvos em snapshot-live/_audit-data.json')
