import fs from 'node:fs'
import path from 'node:path'

const IMG_DIR = 'public/images'

/**
 * Uma imagem é considerada EM USO se o nome do arquivo aparecer em:
 *  - qualquer HTML gerado em out/  (fonte de verdade: é o que vai ao ar)
 *  - qualquer arquivo de código/dados em src/
 *  - arquivos de config em public/ (manifest, redirects, etc.)
 *  - sitemap.xml
 * A checagem contra out/ é a mais importante: pega referências dinâmicas
 * que um grep no código-fonte não encontraria.
 */

function walk(dir, filter, acc = []) {
  if (!fs.existsSync(dir)) return acc
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name)
    if (e.isDirectory()) walk(f, filter, acc)
    else if (filter(e.name)) acc.push(f)
  }
  return acc
}

const haystackFiles = [
  ...walk('out', (n) => /\.(html|json|xml|txt|webmanifest)$/i.test(n)),
  ...walk('src', (n) => /\.(tsx?|jsx?|json|md|css)$/i.test(n)),
  ...walk('public', (n) => /\.(json|xml|txt|webmanifest)$/i.test(n) || n === '_redirects' || n === '_headers'),
]
const haystack = haystackFiles.map((f) => fs.readFileSync(f, 'utf-8')).join('\n')
console.log(`Verificando contra ${haystackFiles.length} arquivos (out/ + src/ + config)\n`)

const images = walk(IMG_DIR, (n) => /\.(webp|jpe?g|png|avif|svg|ico|gif)$/i.test(n))

const used = []
const unused = []
for (const img of images) {
  const name = path.basename(img)
  const nameNoExt = name.replace(/\.[^.]+$/, '')
  // encodeURIComponent cobre o caso de next/image com ?url=%2Fimages%2F...
  const encoded = encodeURIComponent(name)
  if (haystack.includes(name) || haystack.includes(encoded) || haystack.includes(nameNoExt)) used.push(img)
  else unused.push(img)
}

const kb = (f) => fs.statSync(f).size / 1024
const totalUnused = unused.reduce((s, f) => s + kb(f), 0)
const totalUsed = used.reduce((s, f) => s + kb(f), 0)

console.log(`Imagens em ${IMG_DIR}: ${images.length}`)
console.log(`  Em uso:            ${used.length}  (${(totalUsed / 1024).toFixed(1)} MB)`)
console.log(`  NÃO referenciadas: ${unused.length}  (${(totalUnused / 1024).toFixed(1)} MB)`)

const byPrefix = { '_dl_ / _downloads': [], 'cidades removidas': [], outras: [] }
for (const f of unused) {
  const rel = path.relative(IMG_DIR, f).split(path.sep).join('/')
  if (/_dl_|_downloads/.test(rel)) byPrefix['_dl_ / _downloads'].push(rel)
  else if (/criacao-de-site-para-advogados-em-|cricao-de-site/i.test(rel)) byPrefix['cidades removidas'].push(rel)
  else byPrefix.outras.push(rel)
}
for (const [group, list] of Object.entries(byPrefix)) {
  if (!list.length) continue
  const size = list.reduce((s, r) => s + kb(path.join(IMG_DIR, r)), 0)
  console.log(`\n  [${group}] ${list.length} arquivos, ${(size / 1024).toFixed(1)} MB`)
  list.slice(0, 12).forEach((r) => console.log(`    ${r}`))
  if (list.length > 12) console.log(`    ... e mais ${list.length - 12}`)
}

fs.mkdirSync('scripts/data', { recursive: true })
fs.writeFileSync(
  'scripts/data/unused-images.json',
  JSON.stringify(unused.map((f) => path.relative('.', f).split(path.sep).join('/')), null, 2)
)
console.log(`\nLista salva em scripts/data/unused-images.json`)
