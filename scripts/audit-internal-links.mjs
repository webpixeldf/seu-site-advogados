#!/usr/bin/env node
/**
 * Auditoria de linkagem interna com foco na homepage.
 *
 * A home é o alvo dos backlinks externos, então precisa ser o nó mais
 * reforçado da malha interna. Verifica:
 *  1. Quantos links internos cada página recebe (inlinks)
 *  2. Quantos links a home recebe e com quais anchors
 *  3. Páginas órfãs (zero inlinks vindos de conteúdo)
 *  4. Links internos apontando para URLs que redirecionam (perde PageRank)
 *  5. Cadeias de redirect no _redirects (hop duplo)
 */

import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const OUT = path.join(ROOT, 'out')

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full, acc)
    else if (e.name.endsWith('.html')) acc.push(full)
  }
  return acc
}
const strip = (h) => h.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim()

const files = walk(OUT)
const urlOf = (f) => {
  const rel = path.relative(OUT, f).replace(/\\/g, '/').replace(/\.html$/, '')
  return rel === 'index' ? '/' : '/' + rel
}
const allUrls = new Set(files.map(urlOf))

// nav/footer aparecem em todas as páginas → contamos separado
const NAV_FOOTER = new Set(['/', '/portfolio', '/quem-somos', '/blog', '/faq', '/contatos', '/politica-de-privacidade'])

const inlinks = new Map()   // url -> Set(origem)
const homeAnchors = new Map() // anchor -> count (só links de conteúdo)
let contentLinksToHome = 0

for (const f of files) {
  const html = fs.readFileSync(f, 'utf-8')
  const from = urlOf(f)

  // separa a região de conteúdo (fora de <header> e <footer>)
  const body = html
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')

  for (const m of body.matchAll(/<a[^>]+href="(\/[^"#?]*)"[^>]*>([\s\S]*?)<\/a>/gi)) {
    let href = m[1].replace(/\/$/, '') || '/'
    if (href.startsWith('/_next')) continue
    const anchor = strip(m[2])
    if (!inlinks.has(href)) inlinks.set(href, new Set())
    inlinks.get(href).add(from)
    if (href === '/') {
      contentLinksToHome++
      if (anchor && anchor.length < 90) homeAnchors.set(anchor, (homeAnchors.get(anchor) || 0) + 1)
    }
  }
}

console.log(`Analisando ${files.length} páginas geradas em out/\n`)

// ═══ 1. HOME ═══
console.log('═══ 1. LINKS INTERNOS PARA A HOMEPAGE ═══\n')
const homeFrom = inlinks.get('/') || new Set()
console.log(`  Páginas que linkam para / (fora de nav/footer): ${homeFrom.size}`)
console.log(`  Total de links de conteúdo para /:              ${contentLinksToHome}`)
console.log(`\n  Anchors usados (contexto de conteúdo):`)
const sorted = [...homeAnchors.entries()].sort((a, b) => b[1] - a[1])
console.log(`  ${sorted.length} anchors distintos\n`)
sorted.slice(0, 20).forEach(([t, n]) => console.log(`    ${String(n).padStart(3)}x  "${t}"`))
if (sorted.length > 20) console.log(`    ... e mais ${sorted.length - 20}`)

const genericAnchors = sorted.filter(([t]) => /^(home|clique aqui|saiba mais|aqui|leia mais|veja mais)$/i.test(t))
if (genericAnchors.length) {
  console.log(`\n  ⚠️  Anchors genéricos (não passam contexto):`)
  genericAnchors.forEach(([t, n]) => console.log(`    ${n}x "${t}"`))
}

// ═══ 2. PÁGINAS ÓRFÃS ═══
console.log('\n═══ 2. PÁGINAS ÓRFÃS (sem inlink de conteúdo) ═══\n')
const orphans = [...allUrls].filter((u) => {
  if (NAV_FOOTER.has(u)) return false
  const s = inlinks.get(u)
  return !s || s.size === 0
})
console.log(`  ${orphans.length} páginas sem nenhum link interno de conteúdo`)
orphans.slice(0, 20).forEach((u) => console.log(`    ${u}`))
if (orphans.length > 20) console.log(`    ... e mais ${orphans.length - 20}`)

// ═══ 3. LINKS PARA URLS QUE REDIRECIONAM ═══
console.log('\n═══ 3. LINKS INTERNOS APONTANDO PARA URL QUE REDIRECIONA ═══\n')
const redirectsRaw = fs.readFileSync(path.join(ROOT, 'public/_redirects'), 'utf-8')
const redirectMap = new Map()
for (const line of redirectsRaw.split(/\r?\n/)) {
  const t = line.trim()
  if (!t || t.startsWith('#')) continue
  const [src, dest] = t.split(/\s+/)
  if (src && dest) redirectMap.set(src.replace(/\/$/, '') || '/', dest)
}

const linkingToRedirect = []
for (const [target, sources] of inlinks) {
  if (redirectMap.has(target) && !allUrls.has(target)) {
    linkingToRedirect.push({ target, dest: redirectMap.get(target), count: sources.size })
  }
}
if (linkingToRedirect.length === 0) {
  console.log('  ✅ Nenhum link interno aponta para URL que redireciona.')
} else {
  console.log(`  ⚠️  ${linkingToRedirect.length} destinos internos passam por redirect:`)
  linkingToRedirect.forEach((r) => console.log(`    ${r.count} página(s) → ${r.target} → ${r.dest}`))
}

// ═══ 4. CADEIAS DE REDIRECT ═══
console.log('\n═══ 4. CADEIAS DE REDIRECT (hop duplo) ═══\n')
const chains = []
for (const [src, dest] of redirectMap) {
  const d = dest.replace(/\/$/, '') || '/'
  if (redirectMap.has(d) && d !== src) {
    chains.push(`${src} → ${d} → ${redirectMap.get(d)}`)
  }
}
if (chains.length === 0) {
  console.log('  ✅ Nenhuma cadeia de redirect detectada.')
} else {
  console.log(`  ⚠️  ${chains.length} cadeias (cada hop perde um pouco de PageRank):`)
  chains.slice(0, 15).forEach((c) => console.log(`    ${c}`))
  if (chains.length > 15) console.log(`    ... e mais ${chains.length - 15}`)
}

// ═══ 5. TOP PÁGINAS POR INLINKS ═══
console.log('\n═══ 5. PÁGINAS MAIS LINKADAS INTERNAMENTE ═══\n')
const ranked = [...inlinks.entries()]
  .filter(([u]) => allUrls.has(u))
  .map(([u, s]) => ({ url: u, n: s.size }))
  .sort((a, b) => b.n - a.n)
ranked.slice(0, 12).forEach((r) => {
  const mark = r.url === '/' ? ' ← HOME' : ''
  console.log(`    ${String(r.n).padStart(4)} inlinks  ${r.url}${mark}`)
})

const homeRank = ranked.findIndex((r) => r.url === '/') + 1
console.log(`\n  Posição da home no ranking de inlinks: ${homeRank}º de ${ranked.length}`)
