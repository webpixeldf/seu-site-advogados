#!/usr/bin/env node
/** Investigação profunda dos problemas encontrados na auditoria E-E-A-T. */

import fs from 'node:fs'
import path from 'node:path'

const SNAP = path.resolve(import.meta.dirname, '..', 'snapshot-live')
const ROOT = path.resolve(import.meta.dirname, '..')

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full, acc)
    else if (e.name.endsWith('.html')) acc.push(full)
  }
  return acc
}
const strip = (h) =>
  h.replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const pages = walk(SNAP).map((f) => {
  const html = fs.readFileSync(f, 'utf-8')
  const rel = path.relative(SNAP, f).replace(/\\/g, '/')
  return {
    url: '/' + rel.replace(/\.html$/, '').replace(/^index$/, ''),
    html,
    title: (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '',
  }
})

// ═══ A. PÁGINAS ÓRFÃS DE CONTEÚDO (fallback "artigo em produção") ═══
console.log('═══ A. ARTIGOS SEM CONTEÚDO REGISTRADO (fallback) ═══\n')
const fallbackMarker = 'está sendo produzido pela nossa equipe'
const broken = pages.filter((p) => strip(p.html).includes(fallbackMarker))
console.log(`  ${broken.length} artigos exibindo o texto de placeholder:\n`)
broken.forEach((p) => console.log(`    ${p.url}`))

// Confirma no código: quais slugs estão em blogPosts mas não têm .tsx
const blogPostsSrc = fs.readFileSync(path.join(ROOT, 'src/app/(frontend)/data/blogPosts.ts'), 'utf-8')
const slugsInList = [...blogPostsSrc.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
const articlesDir = path.join(ROOT, 'src/app/(frontend)/data/articles')
const existingTsx = new Set(
  fs.readdirSync(articlesDir).filter((f) => f.endsWith('.tsx')).map((f) => f.replace(/\.tsx$/, ''))
)
const missingTsx = slugsInList.filter((s) => !existingTsx.has(s))
console.log(`\n  Confirmação no código-fonte:`)
console.log(`    slugs em blogPosts.ts:        ${slugsInList.length}`)
console.log(`    arquivos .tsx de conteúdo:    ${existingTsx.size}`)
console.log(`    slugs SEM arquivo de conteúdo: ${missingTsx.length}`)
missingTsx.forEach((s) => console.log(`      ✗ ${s}`))

// Verifica se estão no sitemap
const sitemap = fs.readFileSync(path.join(SNAP, 'sitemap.xml'), 'utf-8')
const inSitemap = missingTsx.filter((s) => sitemap.includes(`/blog/${s}`))
console.log(`\n  Desses, ${inSitemap.length} estão no sitemap.xml (sendo enviados ao Google)`)

// ═══ B. DUPLICAÇÃO ENTRE PÁGINAS DE CIDADE ═══
console.log('\n═══ B. DUPLICAÇÃO ENTRE PÁGINAS DE CIDADE ═══\n')
const cities = pages.filter((p) => p.url.startsWith('/site-para-advogados/'))
const cityParas = cities.map((p) => ({
  url: p.url,
  paras: [...p.html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((m) => strip(m[1]))
    .filter((t) => t.split(/\s+/).length >= 5),
}))

// Parágrafo -> em quantas cidades aparece
const cityParaCount = new Map()
for (const c of cityParas) {
  for (const t of new Set(c.paras)) {
    const k = t.toLowerCase()
    cityParaCount.set(k, (cityParaCount.get(k) || 0) + 1)
  }
}
const sharedAll = [...cityParaCount.entries()].filter(([, n]) => n === cities.length)
const sharedWords = sharedAll.reduce((s, [t]) => s + t.split(/\s+/).length, 0)
const avgTotal = Math.round(
  cityParas.reduce((s, c) => s + c.paras.join(' ').split(/\s+/).length, 0) / cities.length
)
console.log(`  ${cities.length} páginas de cidade analisadas`)
console.log(`  Parágrafos idênticos em TODAS as cidades: ${sharedAll.length}`)
console.log(`  Palavras nesses parágrafos idênticos:     ${sharedWords}`)
console.log(`  Média de palavras por página de cidade:   ${avgTotal}`)
console.log(`  → ${((sharedWords / avgTotal) * 100).toFixed(0)}% do conteúdo é IDÊNTICO entre cidades\n`)
console.log('  Amostra do texto duplicado em todas:')
sharedAll.slice(0, 6).forEach(([t]) => console.log(`    • "${t.slice(0, 85)}..."`))

// ═══ C. LINKS EXTERNOS (E-E-A-T: citação de fontes) ═══
console.log('\n═══ C. LINKS EXTERNOS / CITAÇÃO DE FONTES ═══\n')
const blogs = pages.filter((p) => p.url.startsWith('/blog/'))
let totalExt = 0
const extDomains = new Map()
for (const p of blogs) {
  const ext = [...p.html.matchAll(/href="(https?:\/\/[^"]+)"/g)]
    .map((m) => m[1])
    .filter((u) => !/seusiteadvogados\.com\.br/.test(u))
  for (const u of ext) {
    try {
      const h = new URL(u).hostname.replace(/^www\./, '')
      extDomains.set(h, (extDomains.get(h) || 0) + 1)
      totalExt++
    } catch {}
  }
}
console.log(`  Total de links externos em ${blogs.length} artigos: ${totalExt}`)
console.log(`  Domínios linkados:`)
;[...extDomains.entries()].sort((a, b) => b[1] - a[1]).forEach(([d, n]) => console.log(`    ${String(n).padStart(4)}x ${d}`))
const authoritative = [...extDomains.keys()].filter((d) =>
  /oab|gov\.br|jus\.br|stf|stj|cnj|planalto|jusbrasil|conjur|migalhas/.test(d)
)
console.log(`\n  Domínios de autoridade jurídica citados: ${authoritative.length ? authoritative.join(', ') : 'NENHUM'}`)

// ═══ D. AUTORIA ═══
console.log('\n═══ D. AUTORIA DOS ARTIGOS ═══\n')
const authorPatterns = {
  'Article schema com author Organization': /"author"\s*:\s*\{\s*"@type"\s*:\s*"Organization"/,
  'Article schema com author Person': /"author"\s*:\s*\{\s*"@type"\s*:\s*"Person"/,
  'Byline visível "Por <nome>"': /Por\s*<[^>]*>?\s*<[^>]*>?\s*Seu Site Advogados/i,
}
for (const [label, re] of Object.entries(authorPatterns)) {
  const n = blogs.filter((p) => re.test(p.html)).length
  console.log(`  ${label.padEnd(42)} ${n}/${blogs.length}`)
}

// ═══ E. SITEMAP vs REALIDADE ═══
console.log('\n═══ E. COBERTURA DO SITEMAP ═══\n')
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  m[1].replace('https://seusiteadvogados.com.br', '') || '/'
)
const cityFiles = fs.existsSync(path.join(ROOT, 'src/app/(frontend)/site-para-advogados/[slug]/page.tsx'))
const citySrc = cityFiles
  ? fs.readFileSync(path.join(ROOT, 'src/app/(frontend)/site-para-advogados/[slug]/page.tsx'), 'utf-8')
  : ''
const allCitySlugs = [...citySrc.matchAll(/^\s*'([a-z-]+)':\s*\{\s*nome:/gm)].map((m) => m[1])
const citiesInSitemap = sitemapUrls.filter((u) => u.startsWith('/site-para-advogados/'))
console.log(`  Cidades geradas no build:  ${allCitySlugs.length}`)
console.log(`  Cidades no sitemap:        ${citiesInSitemap.length}`)
const orphanCities = allCitySlugs.filter((s) => !citiesInSitemap.includes(`/site-para-advogados/${s}`))
console.log(`  Cidades FORA do sitemap:   ${orphanCities.length}`)
if (orphanCities.length) console.log(`    ${orphanCities.join(', ')}`)
