#!/usr/bin/env node
/**
 * Baixa um snapshot do site que está no ar (seusiteadvogados.com.br).
 * Usa o sitemap.xml como fonte das URLs.
 *
 * Salva em snapshot-live/ preservando a estrutura de pastas:
 *   /                       -> snapshot-live/index.html
 *   /blog                   -> snapshot-live/blog.html
 *   /blog/algum-artigo      -> snapshot-live/blog/algum-artigo.html
 *
 * Também salva robots.txt, sitemap.xml e um relatório JSON com status HTTP
 * e tamanho de cada página (útil pra auditoria).
 */

import fs from 'node:fs'
import path from 'node:path'

const BASE = 'https://seusiteadvogados.com.br'
const OUT = path.resolve(import.meta.dirname, '..', 'snapshot-live')
const CONCURRENCY = 6

// ---------- 1. Buscar sitemap ----------
console.log('📥 Buscando sitemap.xml...')
const sitemapRes = await fetch(`${BASE}/sitemap.xml`)
if (!sitemapRes.ok) {
  console.error(`❌ Sitemap retornou ${sitemapRes.status}`)
  process.exit(1)
}
const sitemapXml = await sitemapRes.text()
const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
console.log(`   ${urls.length} URLs encontradas\n`)

// ---------- 2. Preparar pasta ----------
if (fs.existsSync(OUT)) fs.rmSync(OUT, { recursive: true })
fs.mkdirSync(OUT, { recursive: true })

// ---------- 3. Mapear URL -> caminho local ----------
function localPathFor(url) {
  const u = new URL(url)
  let p = u.pathname.replace(/\/+$/, '') // remove trailing slash
  if (p === '' || p === '/') return path.join(OUT, 'index.html')
  return path.join(OUT, `${p.slice(1)}.html`)
}

// ---------- 4. Download com concorrência limitada ----------
const report = []
let done = 0

async function download(url) {
  const dest = localPathFor(url)
  try {
    const res = await fetch(url, { redirect: 'follow' })
    const html = await res.text()
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.writeFileSync(dest, html)
    report.push({
      url,
      status: res.status,
      finalUrl: res.url,
      bytes: Buffer.byteLength(html),
      file: path.relative(OUT, dest).replace(/\\/g, '/'),
    })
    if (res.status !== 200) console.log(`   ⚠️  ${res.status} ${url}`)
  } catch (err) {
    report.push({ url, status: 'ERROR', error: String(err) })
    console.log(`   ❌ ERRO ${url}: ${err.message}`)
  }
  done++
  if (done % 20 === 0) console.log(`   ...${done}/${urls.length}`)
}

console.log('⬇️  Baixando páginas...')
const queue = [...urls]
const workers = Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) {
    const url = queue.shift()
    if (url) await download(url)
  }
})
await Promise.all(workers)

// ---------- 5. Arquivos extras ----------
console.log('\n📄 Baixando arquivos auxiliares...')
for (const file of ['robots.txt', 'sitemap.xml', 'llms.txt']) {
  try {
    const res = await fetch(`${BASE}/${file}`)
    if (res.ok) {
      fs.writeFileSync(path.join(OUT, file), await res.text())
      console.log(`   ✅ ${file}`)
    } else {
      console.log(`   ⚠️  ${file} → ${res.status}`)
    }
  } catch {
    console.log(`   ❌ ${file} falhou`)
  }
}

// ---------- 6. Relatório ----------
report.sort((a, b) => a.url.localeCompare(b.url))
fs.writeFileSync(path.join(OUT, '_report.json'), JSON.stringify(report, null, 2))

const ok = report.filter((r) => r.status === 200).length
const notOk = report.filter((r) => r.status !== 200)
const totalBytes = report.reduce((s, r) => s + (r.bytes || 0), 0)

console.log('\n=== RESUMO ===')
console.log(`Total de URLs:  ${report.length}`)
console.log(`Status 200:     ${ok}`)
console.log(`Outros status:  ${notOk.length}`)
console.log(`Tamanho total:  ${(totalBytes / 1024 / 1024).toFixed(2)} MB`)
console.log(`Salvo em:       snapshot-live/`)
if (notOk.length) {
  console.log('\nURLs com problema:')
  notOk.forEach((r) => console.log(`  ${r.status} ${r.url}`))
}
