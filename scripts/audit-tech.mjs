#!/usr/bin/env node
/**
 * Verificações técnicas ainda não cobertas nas auditorias anteriores:
 *  1. Peso das páginas e proxies de Core Web Vitals
 *  2. Hierarquia de headings (níveis pulados)
 *  3. Links internos quebrados (apontam para página inexistente)
 *  4. Profundidade de clique a partir da home
 *  5. Páginas fora do sitemap
 *  6. Breadcrumbs
 *  7. Text-to-HTML ratio
 *  8. Canibalização entre artigos (títulos/temas sobrepostos)
 *  9. Peso dos assets estáticos
 */

import fs from 'node:fs'
import path from 'node:path'

const OUT = 'out'
const strip = (h) =>
  h.replace(/<script[\s\S]*?<\/script>/gi, ' ')
   .replace(/<style[\s\S]*?<\/style>/gi, ' ')
   .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
   .replace(/<[^>]+>/g, ' ')
   .replace(/&[a-z]+;/g, ' ')
   .replace(/\s+/g, ' ')
   .trim()

function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name)
    if (e.isDirectory()) walk(f, a)
    else a.push(f)
  }
  return a
}

const allFiles = walk(OUT)
const htmlFiles = allFiles.filter((f) => f.endsWith('.html'))
const urlOf = (f) => {
  const rel = path.relative(OUT, f).split(path.sep).join('/').replace(/\.html$/, '')
  return rel === 'index' ? '/' : '/' + rel
}
const pages = htmlFiles.map((f) => ({
  url: urlOf(f),
  file: f,
  html: fs.readFileSync(f, 'utf-8'),
  size: fs.statSync(f).size,
}))
const known = new Set(pages.map((p) => p.url))

// ═══ 1. PESO DAS PÁGINAS ═══
console.log('\n╔══ 1. PESO DAS PÁGINAS (proxy de LCP) ══╗\n')
const bySize = [...pages].sort((a, b) => b.size - a.size)
const avgKb = pages.reduce((s, p) => s + p.size, 0) / pages.length / 1024
console.log(`  HTML médio por página: ${avgKb.toFixed(1)} KB`)
console.log(`  Maior:                 ${(bySize[0].size / 1024).toFixed(1)} KB  ${bySize[0].url}`)
console.log(`  Menor:                 ${(bySize[bySize.length - 1].size / 1024).toFixed(1)} KB  ${bySize[bySize.length - 1].url}`)
const heavy = pages.filter((p) => p.size > 150 * 1024)
console.log(`  Acima de 150 KB:       ${heavy.length}`)
heavy.slice(0, 6).forEach((p) => console.log(`    ${(p.size / 1024).toFixed(0)} KB  ${p.url}`))

// assets
const jsFiles = allFiles.filter((f) => f.endsWith('.js'))
const cssFiles = allFiles.filter((f) => f.endsWith('.css'))
const imgFiles = allFiles.filter((f) => /\.(webp|jpg|jpeg|png|avif|svg)$/i.test(f))
const sum = (arr) => arr.reduce((s, f) => s + fs.statSync(f).size, 0)
console.log(`\n  JS total:   ${(sum(jsFiles) / 1024).toFixed(0)} KB em ${jsFiles.length} arquivos`)
console.log(`  CSS total:  ${(sum(cssFiles) / 1024).toFixed(0)} KB em ${cssFiles.length} arquivos`)
console.log(`  Imagens:    ${(sum(imgFiles) / 1024 / 1024).toFixed(2)} MB em ${imgFiles.length} arquivos`)

const bigImgs = imgFiles
  .map((f) => ({ f: path.relative(OUT, f).split(path.sep).join('/'), kb: fs.statSync(f).size / 1024 }))
  .filter((i) => i.kb > 200)
  .sort((a, b) => b.kb - a.kb)
console.log(`\n  Imagens acima de 200 KB: ${bigImgs.length}`)
bigImgs.slice(0, 8).forEach((i) => console.log(`    ${i.kb.toFixed(0)} KB  ${i.f}`))

const nonWebp = imgFiles.filter((f) => /\.(jpg|jpeg|png)$/i.test(f))
console.log(`  Imagens fora de WebP/AVIF: ${nonWebp.length}`)
nonWebp.slice(0, 8).forEach((f) => {
  const kb = fs.statSync(f).size / 1024
  console.log(`    ${kb.toFixed(0)} KB  ${path.relative(OUT, f).split(path.sep).join('/')}`)
})

// ═══ 2. HIERARQUIA DE HEADINGS ═══
console.log('\n\n╔══ 2. HIERARQUIA DE HEADINGS ══╗\n')
let skipped = 0
const skipExamples = []
for (const p of pages) {
  const hs = [...p.html.matchAll(/<(h[1-6])[^>]*>/gi)].map((m) => parseInt(m[1][1]))
  let prev = 0
  for (const level of hs) {
    if (prev && level > prev + 1) {
      skipped++
      if (skipExamples.length < 8) skipExamples.push(`${p.url}: h${prev} → h${level}`)
      break
    }
    prev = level
  }
}
console.log(`  Páginas com nível pulado (ex: h2 → h4): ${skipped}/${pages.length}`)
skipExamples.forEach((e) => console.log(`    ${e}`))
if (skipped === 0) console.log('    ✅ Hierarquia consistente em todas as páginas.')

// ═══ 3. LINKS INTERNOS QUEBRADOS ═══
console.log('\n\n╔══ 3. LINKS INTERNOS QUEBRADOS ══╗\n')
const redirectMap = new Map()
for (const l of fs.readFileSync('public/_redirects', 'utf-8').split(/\r?\n/)) {
  const t = l.trim()
  if (!t || t.startsWith('#')) continue
  const [s, d] = t.split(/\s+/)
  if (s && d) redirectMap.set(s.replace(/\/$/, '') || '/', d)
}
const broken = new Map()
for (const p of pages) {
  for (const m of p.html.matchAll(/href="(\/[^"#?]*)"/g)) {
    let href = m[1].replace(/\/$/, '') || '/'
    if (href.startsWith('/_next') || href.startsWith('/images')) continue
    if (/\.(xml|txt|ico|png|webp|json|webmanifest)$/i.test(href)) continue
    if (known.has(href) || redirectMap.has(href)) continue
    if (!broken.has(href)) broken.set(href, new Set())
    broken.get(href).add(p.url)
  }
}
if (broken.size === 0) console.log('  ✅ Nenhum link interno aponta para página inexistente.')
else {
  console.log(`  ⚠️  ${broken.size} destinos inexistentes:`)
  ;[...broken.entries()].slice(0, 10).forEach(([h, from]) => console.log(`    ${h}  (em ${from.size} página[s])`))
}

// ═══ 4. PROFUNDIDADE DE CLIQUE ═══
console.log('\n\n╔══ 4. PROFUNDIDADE DE CLIQUE A PARTIR DA HOME ══╗\n')
const linksFrom = new Map()
for (const p of pages) {
  const set = new Set()
  for (const m of p.html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const h = m[1].replace(/\/$/, '') || '/'
    if (known.has(h)) set.add(h)
  }
  linksFrom.set(p.url, set)
}
const depth = new Map([['/', 0]])
let frontier = ['/']
while (frontier.length) {
  const next = []
  for (const u of frontier) {
    for (const t of linksFrom.get(u) || []) {
      if (!depth.has(t)) {
        depth.set(t, depth.get(u) + 1)
        next.push(t)
      }
    }
  }
  frontier = next
}
const byDepth = new Map()
for (const u of known) {
  const d = depth.has(u) ? depth.get(u) : Infinity
  byDepth.set(d, (byDepth.get(d) || 0) + 1)
}
;[...byDepth.entries()].sort((a, b) => a[0] - b[0]).forEach(([d, n]) => {
  const label = d === Infinity ? 'inalcançável' : `${d} clique(s)`
  console.log(`    ${String(n).padStart(4)} páginas a ${label}`)
})
const unreachable = [...known].filter((u) => !depth.has(u))
if (unreachable.length) {
  console.log(`\n  ⚠️  Inalcançáveis a partir da home:`)
  unreachable.slice(0, 10).forEach((u) => console.log(`    ${u}`))
}

// ═══ 5. PÁGINAS FORA DO SITEMAP ═══
console.log('\n\n╔══ 5. COBERTURA DO SITEMAP ══╗\n')
const sm = fs.readFileSync(path.join(OUT, 'sitemap.xml'), 'utf-8')
const smUrls = new Set(
  [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    m[1].replace('https://seusiteadvogados.com.br', '').replace(/\/$/, '') || '/'
  )
)
const indexable = [...known].filter((u) => u !== '/404')
const notInSitemap = indexable.filter((u) => !smUrls.has(u))
const inSitemapNotBuilt = [...smUrls].filter((u) => !known.has(u))
console.log(`  Páginas geradas:        ${indexable.length}`)
console.log(`  URLs no sitemap:        ${smUrls.size}`)
console.log(`  Geradas fora do sitemap: ${notInSitemap.length}`)
notInSitemap.slice(0, 10).forEach((u) => console.log(`    ${u}`))
console.log(`  No sitemap sem página:  ${inSitemapNotBuilt.length}`)
inSitemapNotBuilt.slice(0, 10).forEach((u) => console.log(`    ${u}`))

// ═══ 6. BREADCRUMBS ═══
console.log('\n\n╔══ 6. BREADCRUMBS ══╗\n')
const withBc = pages.filter((p) => /"@type":"BreadcrumbList"/.test(p.html))
const blogPages = pages.filter((p) => p.url.startsWith('/blog/'))
const cityPages = pages.filter((p) => p.url.startsWith('/site-para-advogados/'))
const blogBc = blogPages.filter((p) => /"@type":"BreadcrumbList"/.test(p.html)).length
const cityBc = cityPages.filter((p) => /"@type":"BreadcrumbList"/.test(p.html)).length
console.log(`  Total com BreadcrumbList: ${withBc.length}/${pages.length}`)
console.log(`  Artigos de blog:          ${blogBc}/${blogPages.length}`)
console.log(`  Páginas de cidade:        ${cityBc}/${cityPages.length}`)
const noBc = pages.filter((p) => !/"@type":"BreadcrumbList"/.test(p.html) && p.url !== '/' && p.url !== '/404')
if (noBc.length) {
  console.log(`  Sem breadcrumb (${noBc.length}):`)
  noBc.slice(0, 10).forEach((p) => console.log(`    ${p.url}`))
}

// ═══ 7. TEXT-TO-HTML RATIO ═══
console.log('\n\n╔══ 7. RAZÃO TEXTO / HTML ══╗\n')
const ratios = pages.map((p) => ({
  url: p.url,
  ratio: (strip(p.html).length / p.html.length) * 100,
  words: strip(p.html).split(/\s+/).length,
}))
const avgRatio = ratios.reduce((s, r) => s + r.ratio, 0) / ratios.length
console.log(`  Razão média: ${avgRatio.toFixed(1)}%  (referência: > 10% é confortável)`)
const lowRatio = ratios.filter((r) => r.ratio < 8).sort((a, b) => a.ratio - b.ratio)
console.log(`  Páginas abaixo de 8%: ${lowRatio.length}`)
lowRatio.slice(0, 8).forEach((r) => console.log(`    ${r.ratio.toFixed(1)}%  ${String(r.words).padStart(5)}w  ${r.url}`))

// ═══ 8. CANIBALIZAÇÃO ENTRE ARTIGOS ═══
console.log('\n\n╔══ 8. RISCO DE CANIBALIZAÇÃO ENTRE ARTIGOS ══╗\n')
const titles = pages
  .filter((p) => p.url.startsWith('/blog/'))
  .map((p) => ({
    url: p.url,
    title: ((p.html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '').replace(/\s*\|.*$/, ''),
  }))
const tokenize = (s) =>
  new Set(
    s.toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 3 && !['para','como','sobre','mais','seus','suas','pelo','pela','que','uma','dos','das'].includes(w))
  )
const pairs = []
for (let i = 0; i < titles.length; i++) {
  for (let j = i + 1; j < titles.length; j++) {
    const a = tokenize(titles[i].title)
    const b = tokenize(titles[j].title)
    const inter = [...a].filter((w) => b.has(w))
    const jac = inter.length / new Set([...a, ...b]).size
    if (jac >= 0.4) pairs.push({ a: titles[i], b: titles[j], jac, shared: inter })
  }
}
pairs.sort((x, y) => y.jac - x.jac)
console.log(`  Pares de artigos com títulos ≥40% sobrepostos: ${pairs.length}`)
pairs.slice(0, 10).forEach((p) => {
  console.log(`\n    ${(p.jac * 100).toFixed(0)}% [${p.shared.join(', ')}]`)
  console.log(`      ${p.a.url}`)
  console.log(`      ${p.b.url}`)
})
if (!pairs.length) console.log('    ✅ Nenhuma sobreposição relevante de tema entre artigos.')
