#!/usr/bin/env node
/** Análise de qualidade/originalidade do conteúdo dos artigos. */

import fs from 'node:fs'
import path from 'node:path'

const SNAP = path.resolve(import.meta.dirname, '..', 'snapshot-live')
const strip = (h) =>
  h.replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const blogDir = path.join(SNAP, 'blog')
const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.html'))
const arts = files.map((f) => {
  const html = fs.readFileSync(path.join(blogDir, f), 'utf-8')
  const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || ''
  const paras = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((m) => strip(m[1]))
    .filter((t) => t.split(/\s+/).length >= 8)
  const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => strip(m[1]))
  const imgs = [...html.matchAll(/<img[^>]*>/gi)]
  return {
    slug: f.replace(/\.html$/, ''),
    title,
    paras,
    h2s,
    words: paras.join(' ').split(/\s+/).filter(Boolean).length,
    imgCount: imgs.length,
    // imagens dentro do corpo do artigo (não header/footer/related)
    hasBodyImg: /<img[^>]+src="\/images\/blog\//.test(html),
    hasList: /<ul[^>]*>|<ol[^>]*>/.test(html),
    hasTable: /<table/i.test(html),
    hasBlockquote: /<blockquote/i.test(html),
  }
})

console.log(`Analisando ${arts.length} artigos\n`)

// ═══ 1. TAMANHO ═══
console.log('═══ 1. VOLUME DE CONTEÚDO ═══\n')
const buckets = { '<600': 0, '600-1000': 0, '1000-1500': 0, '1500+': 0 }
arts.forEach((a) => {
  if (a.words < 600) buckets['<600']++
  else if (a.words < 1000) buckets['600-1000']++
  else if (a.words < 1500) buckets['1000-1500']++
  else buckets['1500+']++
})
Object.entries(buckets).forEach(([k, v]) => console.log(`  ${k.padEnd(12)} palavras: ${v} artigos`))
const short = arts.filter((a) => a.words < 600).sort((a, b) => a.words - b.words)
console.log(`\n  Artigos mais curtos:`)
short.slice(0, 12).forEach((a) => console.log(`    ${String(a.words).padStart(4)}w | ${a.slug}`))

// ═══ 2. ELEMENTOS DE RIQUEZA (o Core Update pede isso) ═══
console.log('\n═══ 2. ELEMENTOS DE ENRIQUECIMENTO ═══\n')
const withImg = arts.filter((a) => a.hasBodyImg).length
const withList = arts.filter((a) => a.hasList).length
const withTable = arts.filter((a) => a.hasTable).length
const withQuote = arts.filter((a) => a.hasBlockquote).length
const pct = (n) => `${n}/${arts.length} (${((n / arts.length) * 100).toFixed(0)}%)`
console.log(`  Imagem no corpo do artigo:  ${pct(withImg)}`)
console.log(`  Lista (ul/ol):              ${pct(withList)}`)
console.log(`  Tabela:                     ${pct(withTable)}`)
console.log(`  Citação (blockquote):       ${pct(withQuote)}`)

// ═══ 3. PADRÕES DE ESCRITA REPETITIVOS (assinatura de IA) ═══
console.log('\n═══ 3. PADRÕES REPETITIVOS DE ABERTURA ═══\n')
const openings = new Map()
arts.forEach((a) => {
  if (!a.paras.length) return
  const first = a.paras[0]
  // primeiras 4 palavras
  const key = first.split(/\s+/).slice(0, 4).join(' ').toLowerCase()
  if (!openings.has(key)) openings.set(key, [])
  openings.get(key).push(a.slug)
})
const repeatedOpenings = [...openings.entries()].filter(([, v]) => v.length > 1).sort((a, b) => b[1].length - a[1].length)
console.log(`  Aberturas com início idêntico (4 primeiras palavras): ${repeatedOpenings.length} grupos`)
repeatedOpenings.slice(0, 8).forEach(([k, v]) => console.log(`    ${v.length}x "${k}..."`))

// Frases típicas de IA
console.log('\n  Marcadores textuais de escrita gerada:')
const aiPhrases = [
  'Você já parou pra pensar',
  'Você já reparou',
  'A verdade é que',
  'Vamos ser sinceros',
  'Pois é',
  'Mas calma',
  'Não é sobre',
  'a diferença está',
]
aiPhrases.forEach((ph) => {
  const n = arts.filter((a) => a.paras.some((p) => p.toLowerCase().includes(ph.toLowerCase()))).length
  if (n > 0) console.log(`    ${String(n).padStart(3)} artigos | "${ph}"`)
})

// ═══ 4. PARÁGRAFOS DUPLICADOS ENTRE ARTIGOS ═══
console.log('\n═══ 4. PARÁGRAFOS DUPLICADOS ENTRE ARTIGOS ═══\n')
const pMap = new Map()
arts.forEach((a) => {
  new Set(a.paras).forEach((t) => {
    const k = t.toLowerCase()
    if (!pMap.has(k)) pMap.set(k, { text: t, slugs: [] })
    pMap.get(k).slugs.push(a.slug)
  })
})
const dupes = [...pMap.values()].filter((e) => e.slugs.length > 1).sort((a, b) => b.slugs.length - a.slugs.length)
console.log(`  Parágrafos que aparecem em 2+ artigos: ${dupes.length}`)
dupes.slice(0, 10).forEach((d) => {
  console.log(`    ${d.slugs.length}x | "${d.text.slice(0, 80)}..."`)
})

// ═══ 5. CTA REPETIDO NO CORPO ═══
console.log('\n═══ 5. CTA / LINK INTERNO PARA HOME ═══\n')
const anchorTexts = new Map()
files.forEach((f) => {
  const html = fs.readFileSync(path.join(blogDir, f), 'utf-8')
  // links para a home dentro do <article>
  const m = [...html.matchAll(/<a[^>]+href="\/"[^>]*>([\s\S]*?)<\/a>/gi)].map((x) => strip(x[1]))
  m.forEach((t) => {
    if (!t || t.length > 90) return
    anchorTexts.set(t, (anchorTexts.get(t) || 0) + 1)
  })
})
const sorted = [...anchorTexts.entries()].sort((a, b) => b[1] - a[1])
console.log(`  Anchor texts distintos apontando para a home: ${sorted.length}`)
console.log(`  Mais repetidos:`)
sorted.slice(0, 8).forEach(([t, n]) => console.log(`    ${String(n).padStart(3)}x "${t}"`))
