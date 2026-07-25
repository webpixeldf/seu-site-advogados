#!/usr/bin/env node
/**
 * Varredura completa sobre out/:
 *  1. Diversificação dos anchors internos apontando para a home
 *  2. Densidade de palavras-chave (detecção de keyword stuffing)
 *  3. Meta tags (title, description, canonical, OG, Twitter, robots, lang)
 *  4. Atributos alt das imagens
 *  5. Validade e completude dos schemas JSON-LD
 */

import fs from 'node:fs'
import path from 'node:path'

const OUT = 'out'
const SITE = 'https://seusiteadvogados.com.br'

function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name)
    if (e.isDirectory()) walk(f, a)
    else if (e.name.endsWith('.html')) a.push(f)
  }
  return a
}
const strip = (h) =>
  h.replace(/<script[\s\S]*?<\/script>/gi, ' ')
   .replace(/<style[\s\S]*?<\/style>/gi, ' ')
   .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
   .replace(/<[^>]+>/g, ' ')
   .replace(/&nbsp;/g, ' ')
   .replace(/&amp;/g, '&')
   .replace(/&[a-z]+;/g, ' ')
   .replace(/\s+/g, ' ')
   .trim()

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`${name}="([^"]*)"`, 'i'))
  return m ? m[1] : null
}

const files = walk(OUT)
const pages = files.map((f) => {
  const html = fs.readFileSync(f, 'utf-8')
  const rel = path.relative(OUT, f).replace(/\\/g, '/').replace(/\.html$/, '')
  return { url: rel === 'index' ? '/' : '/' + rel, file: rel, html }
})

const line = (c = '─') => console.log(c.repeat(72))

// ══════════════════════════════════════════════════════════════
// 1. DIVERSIFICAÇÃO DOS ANCHORS PARA A HOME
// ══════════════════════════════════════════════════════════════
console.log('\n╔══ 1. ANCHORS INTERNOS APONTANDO PARA A HOME ══╗\n')

const anchors = new Map()
let totalHomeLinks = 0
let navFooterLinks = 0

for (const p of pages) {
  const body = p.html
    .replace(/<header[\s\S]*?<\/header>/gi, (m) => {
      navFooterLinks += (m.match(/href="\/"/g) || []).length
      return ' '
    })
    .replace(/<footer[\s\S]*?<\/footer>/gi, (m) => {
      navFooterLinks += (m.match(/href="\/"/g) || []).length
      return ' '
    })
  for (const m of body.matchAll(/<a[^>]+href="\/"[^>]*>([\s\S]*?)<\/a>/gi)) {
    const t = strip(m[1])
    if (!t) continue
    anchors.set(t, (anchors.get(t) || 0) + 1)
    totalHomeLinks++
  }
}

const sorted = [...anchors.entries()].sort((a, b) => b[1] - a[1])
const distinct = sorted.length
const top = sorted[0]
const genericRe = /^(home|in[ií]cio|clique aqui|aqui|saiba mais|leia mais|veja mais|link|este site)$/i
const generic = sorted.filter(([t]) => genericRe.test(t))
const genericCount = generic.reduce((s, [, n]) => s + n, 0)
const contentful = sorted.filter(([t]) => !genericRe.test(t))
const contentfulCount = contentful.reduce((s, [, n]) => s + n, 0)

// exact-match da keyword-alvo
const exactRe = /^(cria[çc][ãa]o de sites? para advogados?|sites? para advogados?)$/i
const exact = contentful.filter(([t]) => exactRe.test(t))
const exactCount = exact.reduce((s, [, n]) => s + n, 0)

console.log(`  Total de links para /:         ${totalHomeLinks + navFooterLinks} (${navFooterLinks} em nav/footer, ${totalHomeLinks} em conteúdo)`)
console.log(`  Anchors distintos no conteúdo: ${distinct}`)
console.log(`  Anchor mais usado:             "${top[0]}" (${top[1]}x = ${((top[1] / totalHomeLinks) * 100).toFixed(1)}%)`)
console.log(`  Genéricos:                     ${genericCount} (${((genericCount / totalHomeLinks) * 100).toFixed(1)}%)`)
console.log(`  Descritivos:                   ${contentfulCount} (${((contentfulCount / totalHomeLinks) * 100).toFixed(1)}%)`)
console.log(`  Exact-match da keyword-alvo:   ${exactCount} (${((exactCount / contentfulCount) * 100).toFixed(1)}% dos descritivos)`)

console.log(`\n  Distribuição (top 15 descritivos):`)
contentful.slice(0, 15).forEach(([t, n]) => {
  const bar = '▪'.repeat(Math.min(30, n))
  console.log(`    ${String(n).padStart(3)}x ${bar} "${t}"`)
})

console.log(`\n  Diagnóstico:`)
const topShare = (top[1] / totalHomeLinks) * 100
if (genericRe.test(top[0])) {
  console.log(`    ℹ️  Anchor dominante é genérico ("${top[0]}") — vem do link do logo/menu.`)
  const topContentful = contentful[0]
  const share = (topContentful[1] / contentfulCount) * 100
  console.log(`    Entre os descritivos, o maior é "${topContentful[0]}" com ${share.toFixed(1)}%.`)
  if (share > 30) console.log(`    ⚠️  Acima de 30% — concentração alta.`)
  else console.log(`    ✅ Abaixo de 30% — distribuição saudável.`)
} else if (topShare > 40) {
  console.log(`    ⚠️  Anchor dominante concentra ${topShare.toFixed(1)}% — risco de over-optimization.`)
} else {
  console.log(`    ✅ Nenhum anchor domina a distribuição.`)
}
const exactShare = (exactCount / contentfulCount) * 100
if (exactShare > 30) console.log(`    ⚠️  Exact-match em ${exactShare.toFixed(1)}% dos anchors descritivos (ideal < 30%).`)
else console.log(`    ✅ Exact-match em ${exactShare.toFixed(1)}% — dentro do natural.`)

// ══════════════════════════════════════════════════════════════
// 2. KEYWORD STUFFING
// ══════════════════════════════════════════════════════════════
console.log('\n\n╔══ 2. DENSIDADE DE PALAVRAS-CHAVE ══╗\n')

const KW = [
  'criação de site para advogado',
  'criação de sites para advogados',
  'site para advogado',
  'sites para advogados',
  'site jurídico',
  'advogado',
  'advogados',
]

const results = []
for (const p of pages) {
  const text = strip(p.html).toLowerCase()
  const words = text.split(/\s+/).filter(Boolean).length
  if (words < 50) continue

  // família "site para advogado(s)" sem double counting
  const criacao = (text.match(/cria[çc][ãa]o\s+de\s+sites?\s+para\s+advogados?/g) || []).length
  const siteSolo = (text.match(/(?<!cria[çc][ãa]o\s+de\s+)\bsites?\s+para\s+advogados?/g) || []).length
  const famWords = criacao * 5 + siteSolo * 3
  const density = (famWords / words) * 100

  const advCount = (text.match(/\badvogad[oa]s?\b/g) || []).length
  const advDensity = (advCount / words) * 100

  results.push({ url: p.url, words, criacao, siteSolo, density, advCount, advDensity })
}

results.sort((a, b) => b.density - a.density)
const over = results.filter((r) => r.density > 3)
const advOver = results.filter((r) => r.advDensity > 4)

console.log(`  Páginas analisadas: ${results.length}`)
console.log(`  Densidade "site para advogado(s)" — média: ${(results.reduce((s, r) => s + r.density, 0) / results.length).toFixed(2)}%`)
console.log(`  Páginas acima de 3% (limiar de atenção): ${over.length}`)
console.log(`  Páginas com "advogado" acima de 4%:      ${advOver.length}`)

console.log(`\n  Top 10 por densidade da keyword-alvo:`)
results.slice(0, 10).forEach((r) => {
  const flag = r.density > 3 ? '⚠️ ' : '✅'
  console.log(`    ${flag} ${r.density.toFixed(2)}%  ${String(r.words).padStart(5)}w  ${r.url}`)
})

if (advOver.length) {
  console.log(`\n  ⚠️  Páginas com alta densidade de "advogado(s)":`)
  advOver.slice(0, 8).forEach((r) => console.log(`     ${r.advDensity.toFixed(2)}% (${r.advCount}x em ${r.words}w)  ${r.url}`))
}

// repetição em headings
console.log(`\n  Repetição da keyword em H2/H3:`)
let hStuffed = 0
for (const p of pages) {
  const hs = [...p.html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi)].map((m) => strip(m[1]).toLowerCase())
  if (hs.length < 3) continue
  const withKw = hs.filter((h) => /sites?\s+para\s+advogados?|advogad/.test(h)).length
  const share = (withKw / hs.length) * 100
  if (share > 70) {
    hStuffed++
    console.log(`    ⚠️  ${share.toFixed(0)}% dos ${hs.length} headings contêm a keyword — ${p.url}`)
  }
}
if (hStuffed === 0) console.log(`    ✅ Nenhuma página com keyword em mais de 70% dos headings.`)

// ══════════════════════════════════════════════════════════════
// 3. META TAGS
// ══════════════════════════════════════════════════════════════
console.log('\n\n╔══ 3. META TAGS ══╗\n')

const meta = pages.map((p) => {
  const h = p.html
  const title = (h.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || ''
  const descTag = h.match(/<meta[^>]+name="description"[^>]*>/i)
  const desc = descTag ? attr(descTag[0], 'content') || '' : ''
  const canTag = h.match(/<link[^>]+rel="canonical"[^>]*>/i)
  const canonical = canTag ? attr(canTag[0], 'href') || '' : ''
  const og = {}
  for (const m of h.matchAll(/<meta[^>]+property="(og:[^"]+)"[^>]*>/gi)) {
    og[m[1]] = attr(m[0], 'content')
  }
  const tw = {}
  for (const m of h.matchAll(/<meta[^>]+name="(twitter:[^"]+)"[^>]*>/gi)) {
    tw[m[1]] = attr(m[0], 'content')
  }
  const robots = [...h.matchAll(/<meta[^>]+name="robots"[^>]+content="([^"]*)"/gi)].map((m) => m[1])
  const lang = (h.match(/<html[^>]+lang="([^"]*)"/i) || [])[1] || ''
  const viewport = /name="viewport"/i.test(h)
  const charset = /charSet="utf-8"|charset="utf-8"/i.test(h)
  return { url: p.url, title, desc, canonical, og, tw, robots, lang, viewport, charset }
})

const dupe = (field) => {
  const m = new Map()
  meta.forEach((x) => {
    const v = (x[field] || '').trim()
    if (!v) return
    if (!m.has(v)) m.set(v, [])
    m.get(v).push(x.url)
  })
  return [...m.entries()].filter(([, u]) => u.length > 1)
}

const noTitle = meta.filter((m) => !m.title.trim())
const longTitle = meta.filter((m) => m.title.length > 70)
const shortTitle = meta.filter((m) => m.title.trim() && m.title.length < 30)
const noDesc = meta.filter((m) => !m.desc.trim())
const longDesc = meta.filter((m) => m.desc.length > 160)
const shortDesc = meta.filter((m) => m.desc.trim() && m.desc.length < 70)
const noCanon = meta.filter((m) => !m.canonical.trim())
const relCanon = meta.filter((m) => m.canonical && !m.canonical.startsWith('http'))
const badLang = meta.filter((m) => m.lang !== 'pt-BR')
const noViewport = meta.filter((m) => !m.viewport)
const noCharset = meta.filter((m) => !m.charset)

console.log(`  Páginas: ${meta.length}\n`)
console.log(`  TITLE`)
console.log(`    Ausente:              ${noTitle.length}`)
console.log(`    > 70 chars:           ${longTitle.length}`)
longTitle.slice(0, 5).forEach((m) => console.log(`      ${m.title.length}ch ${m.url}`))
console.log(`    < 30 chars:           ${shortTitle.length}`)
console.log(`    Duplicados:           ${dupe('title').length} grupos`)
dupe('title').slice(0, 3).forEach(([v, u]) => console.log(`      ${u.length}x "${v.slice(0, 55)}"`))

console.log(`\n  DESCRIPTION`)
console.log(`    Ausente:              ${noDesc.length}`)
noDesc.slice(0, 5).forEach((m) => console.log(`      ${m.url}`))
console.log(`    > 160 chars:          ${longDesc.length}`)
longDesc.slice(0, 5).forEach((m) => console.log(`      ${m.desc.length}ch ${m.url}`))
console.log(`    < 70 chars:           ${shortDesc.length}`)
console.log(`    Duplicadas:           ${dupe('desc').length} grupos`)
dupe('desc').slice(0, 3).forEach(([v, u]) => console.log(`      ${u.length}x "${v.slice(0, 55)}"`))

console.log(`\n  CANONICAL`)
console.log(`    Ausente:              ${noCanon.length}`)
noCanon.slice(0, 5).forEach((m) => console.log(`      ${m.url}`))
console.log(`    Relativo (deve ser absoluto): ${relCanon.length}`)
const selfMismatch = meta.filter((m) => {
  if (!m.canonical) return false
  const expected = (SITE + (m.url === '/' ? '' : m.url)).replace(/\/$/, '')
  return m.canonical.replace(/\/$/, '') !== expected
})
console.log(`    Não self-referencing: ${selfMismatch.length}`)
selfMismatch.slice(0, 5).forEach((m) => console.log(`      ${m.url} → ${m.canonical}`))

console.log(`\n  OPEN GRAPH`)
const OG_REQ = ['og:title', 'og:description', 'og:url', 'og:image', 'og:type']
OG_REQ.forEach((k) => {
  const missing = meta.filter((m) => !m.og[k]).length
  const icon = missing === 0 ? '✅' : '⚠️ '
  console.log(`    ${icon} ${k.padEnd(16)} ausente em ${missing}`)
})
const ogDims = meta.filter((m) => m.og['og:image'] && (!m.og['og:image:width'] || !m.og['og:image:height'])).length
console.log(`    og:image sem width/height: ${ogDims}`)

console.log(`\n  TWITTER`)
const TW_REQ = ['twitter:card', 'twitter:title', 'twitter:description']
TW_REQ.forEach((k) => {
  const missing = meta.filter((m) => !m.tw[k]).length
  const icon = missing === 0 ? '✅' : '⚠️ '
  console.log(`    ${icon} ${k.padEnd(22)} ausente em ${missing}`)
})

console.log(`\n  OUTROS`)
console.log(`    lang != pt-BR:        ${badLang.length}`)
console.log(`    Sem viewport:         ${noViewport.length}`)
console.log(`    Sem charset:          ${noCharset.length}`)
const multiRobots = meta.filter((m) => m.robots.length > 1)
console.log(`    Múltiplas meta robots: ${multiRobots.length}`)
if (multiRobots.length) console.log(`      ex.: ${multiRobots[0].url} → ${JSON.stringify(multiRobots[0].robots)}`)
const noindex = meta.filter((m) => m.robots.some((r) => /noindex/i.test(r)))
console.log(`    Com noindex:          ${noindex.length}`)
noindex.slice(0, 5).forEach((m) => console.log(`      ${m.url}`))

// ══════════════════════════════════════════════════════════════
// 4. IMAGENS / ALT
// ══════════════════════════════════════════════════════════════
console.log('\n\n╔══ 4. IMAGENS E ATRIBUTOS ALT ══╗\n')

let totalImgs = 0, noAlt = 0, emptyAlt = 0, longAlt = 0, noDims = 0
const altValues = new Map()
const problems = []

for (const p of pages) {
  for (const m of p.html.matchAll(/<img[^>]*>/gi)) {
    const tag = m[0]
    totalImgs++
    const alt = attr(tag, 'alt')
    const w = attr(tag, 'width')
    const h = attr(tag, 'height')
    const hasFill = /data-nimg="fill"/.test(tag) || /style="[^"]*position:absolute/.test(tag)
    if (alt === null) { noAlt++; problems.push({ url: p.url, issue: 'sem alt', tag: tag.slice(0, 80) }) }
    else if (!alt.trim()) { emptyAlt++; problems.push({ url: p.url, issue: 'alt vazio', tag: tag.slice(0, 80) }) }
    else {
      if (alt.length > 125) { longAlt++; problems.push({ url: p.url, issue: `alt ${alt.length} chars`, tag: alt.slice(0, 70) }) }
      altValues.set(alt, (altValues.get(alt) || 0) + 1)
    }
    if (!hasFill && (!w || !h)) noDims++
  }
}

console.log(`  Total de <img>:        ${totalImgs}`)
console.log(`  Sem atributo alt:      ${noAlt}`)
console.log(`  Alt vazio:             ${emptyAlt}`)
console.log(`  Alt > 125 chars:       ${longAlt}`)
console.log(`  Sem width/height:      ${noDims} (excluindo fill)`)

const dupAlt = [...altValues.entries()].filter(([, n]) => n > 5).sort((a, b) => b[1] - a[1])
console.log(`\n  Alts repetidos (>5x):  ${dupAlt.length}`)
dupAlt.slice(0, 8).forEach(([t, n]) => console.log(`    ${String(n).padStart(4)}x "${t.slice(0, 60)}"`))

// alt com keyword stuffing
const kwAlt = [...altValues.keys()].filter((a) => {
  const c = (a.toLowerCase().match(/advogad/g) || []).length
  return c >= 3
})
console.log(`\n  Alts com "advogado" 3+ vezes (possível stuffing): ${kwAlt.length}`)
kwAlt.slice(0, 5).forEach((a) => console.log(`    "${a.slice(0, 70)}"`))

if (problems.length) {
  console.log(`\n  Problemas (primeiros 10):`)
  problems.slice(0, 10).forEach((p) => console.log(`    [${p.issue}] ${p.url}`))
}

// ══════════════════════════════════════════════════════════════
// 5. SCHEMAS JSON-LD
// ══════════════════════════════════════════════════════════════
console.log('\n\n╔══ 5. SCHEMA JSON-LD ══╗\n')

let totalBlocks = 0, invalid = 0
const typeCount = new Map()
const schemaProblems = []
const allIds = new Set()
const refIds = new Set()

const collectTypes = (node, bag) => {
  if (Array.isArray(node)) return node.forEach((n) => collectTypes(n, bag))
  if (node && typeof node === 'object') {
    if (node['@type']) bag.push(node['@type'])
    if (node['@id']) allIds.add(node['@id'])
    for (const [k, v] of Object.entries(node)) {
      if (k !== '@type' && v && typeof v === 'object') {
        if (v['@id'] && Object.keys(v).length === 1) refIds.add(v['@id'])
        collectTypes(v, bag)
      }
    }
  }
}

for (const p of pages) {
  for (const m of p.html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    totalBlocks++
    let json
    try {
      json = JSON.parse(m[1])
    } catch (e) {
      invalid++
      schemaProblems.push({ url: p.url, issue: 'JSON inválido', detail: e.message.slice(0, 60) })
      continue
    }
    const bag = []
    collectTypes(json, bag)
    bag.forEach((t) => typeCount.set(t, (typeCount.get(t) || 0) + 1))

    // valida Article
    const findType = (n, t) => {
      if (Array.isArray(n)) return n.map((x) => findType(x, t)).find(Boolean)
      if (n && typeof n === 'object') {
        if (n['@type'] === t) return n
        for (const v of Object.values(n)) {
          const r = findType(v, t)
          if (r) return r
        }
      }
      return null
    }
    const art = findType(json, 'Article')
    if (art) {
      for (const req of ['headline', 'image', 'datePublished', 'author', 'publisher']) {
        if (!art[req]) schemaProblems.push({ url: p.url, issue: `Article sem ${req}` })
      }
      if (art.headline && art.headline.length > 110) {
        schemaProblems.push({ url: p.url, issue: `Article headline ${art.headline.length} chars (max 110)` })
      }
    }
    const faq = findType(json, 'FAQPage')
    if (faq && (!faq.mainEntity || !faq.mainEntity.length)) {
      schemaProblems.push({ url: p.url, issue: 'FAQPage sem mainEntity' })
    }
    const lb = findType(json, 'LocalBusiness')
    if (lb) {
      for (const req of ['name', 'address', 'telephone']) {
        if (!lb[req]) schemaProblems.push({ url: p.url, issue: `LocalBusiness sem ${req}` })
      }
    }
  }
}

console.log(`  Blocos JSON-LD:        ${totalBlocks}`)
console.log(`  JSON inválido:         ${invalid}`)
console.log(`\n  Tipos encontrados:`)
;[...typeCount.entries()].sort((a, b) => b[1] - a[1]).forEach(([t, n]) => console.log(`    ${String(n).padStart(4)}x ${t}`))

const brokenRefs = [...refIds].filter((id) => !allIds.has(id))
console.log(`\n  Referências @id quebradas: ${brokenRefs.length}`)
brokenRefs.slice(0, 5).forEach((id) => console.log(`    ${id}`))

if (schemaProblems.length) {
  const grouped = new Map()
  schemaProblems.forEach((p) => grouped.set(p.issue, (grouped.get(p.issue) || 0) + 1))
  console.log(`\n  Problemas (${schemaProblems.length} ocorrências):`)
  ;[...grouped.entries()].sort((a, b) => b[1] - a[1]).forEach(([i, n]) => console.log(`    ${String(n).padStart(4)}x ${i}`))
  console.log(`\n  Exemplos:`)
  schemaProblems.slice(0, 5).forEach((p) => console.log(`    ${p.url} → ${p.issue}`))
} else {
  console.log(`\n  ✅ Nenhum problema estrutural nos schemas.`)
}

line('═')
