import fs from 'node:fs'
import path from 'node:path'

function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name)
    if (e.isDirectory()) walk(f, a)
    else if (e.name.endsWith('.html')) a.push(f)
  }
  return a
}
const attr = (t, n) => {
  const m = t.match(new RegExp(`${n}="([^"]*)"`, 'i'))
  return m ? m[1] : null
}
// O Google conta o texto decodificado, não a entidade HTML
const dec = (s) =>
  s.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&amp;/g, '&')

const issues = []
for (const f of walk('out')) {
  const rel = path.relative('out', f).split(path.sep).join('/')
  if (rel === '404.html') continue // noindex por design
  const h = fs.readFileSync(f, 'utf-8')

  const title = dec((h.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '')
  const dt = h.match(/<meta[^>]+name="description"[^>]*>/i)
  const desc = dec(dt ? attr(dt[0], 'content') || '' : '')
  const robots = [...h.matchAll(/<meta[^>]+name="robots"/gi)].length

  const p = []
  if (!title) p.push('sem title')
  if (title.length > 70) p.push(`title ${title.length}ch`)
  if (!desc) p.push('sem description')
  if (desc.length > 160) p.push(`desc ${desc.length}ch`)
  if (robots > 1) p.push(`${robots} meta robots`)
  if (!/property="og:url"/.test(h)) p.push('sem og:url')
  if (!/rel="canonical"/.test(h)) p.push('sem canonical')
  if (p.length) issues.push(`${rel} → ${p.join(', ')}`)
}

if (issues.length) {
  console.log(`${issues.length} páginas com pendência:`)
  issues.forEach((i) => console.log(`  ${i}`))
} else {
  console.log('✅ Zero pendências de meta tags (/404 excluído — é noindex por design)')
}
