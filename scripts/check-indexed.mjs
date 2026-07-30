import fs from 'node:fs'

/**
 * Lê a aba "Páginas" do export do Search Console e classifica os artigos:
 * uma URL com impressões > 0 necessariamente está indexada — o Google só
 * exibe na busca aquilo que está no índice.
 */

const DIR = 'perf-tmp'
const ss = fs.readFileSync(`${DIR}/xl/sharedStrings.xml`, 'utf-8')
const shared = [...ss.matchAll(/<si\b[^>]*>([\s\S]*?)<\/si>/g)].map((m) =>
  [...m[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)]
    .map((x) => x[1])
    .join('')
    .replace(/&amp;/g, '&')
)

const wb = fs.readFileSync(`${DIR}/xl/workbook.xml`, 'utf-8')
const names = [...wb.matchAll(/<sheet\b[^>]*name="([^"]+)"/g)].map((m) => m[1])
const idx = names.findIndex((n) => /p[áa]gina/i.test(n))
if (idx === -1) {
  console.log('Abas:', names.join(', '))
  process.exit(1)
}

const sheet = fs.readFileSync(`${DIR}/xl/worksheets/sheet${idx + 1}.xml`, 'utf-8')
const rows = [...sheet.matchAll(/<row\b[^>]*>([\s\S]*?)<\/row>/g)].map((r) =>
  [...r[1].matchAll(/<c\b([^>]*)>([\s\S]*?)<\/c>/g)].map((c) => {
    const v = (c[2].match(/<v>([\s\S]*?)<\/v>/) || [])[1]
    if (v === undefined) return ''
    return /t="s"/.test(c[1]) ? shared[parseInt(v)] : v
  })
)

const data = rows
  .slice(1)
  .filter((r) => r[0] && r[0].startsWith('http'))
  .map((r) => ({
    url: r[0].replace('https://seusiteadvogados.com.br', ''),
    clicks: parseFloat(r[1]) || 0,
    imp: parseFloat(r[2]) || 0,
    pos: parseFloat(r[4]) || 0,
  }))

const artigos = data.filter((d) => d.url.startsWith('/blog/'))
const comImp = artigos.filter((a) => a.imp > 0)
const comCliques = artigos.filter((a) => a.clicks > 0)

console.log('═══ ARTIGOS NO SEARCH CONSOLE (10/mai – 07/jun) ═══\n')
console.log(`  Artigos que apareceram na busca: ${artigos.length}`)
console.log(`    com impressões (= indexados):  ${comImp.length}`)
console.log(`    com cliques:                   ${comCliques.length}`)
console.log(`  Impressões somadas:              ${artigos.reduce((s, a) => s + a.imp, 0).toLocaleString('pt-BR')}`)
console.log(`  Cliques somados:                 ${artigos.reduce((s, a) => s + a.clicks, 0)}`)

console.log('\n  Top 15 artigos por impressão:')
comImp
  .sort((a, b) => b.imp - a.imp)
  .slice(0, 15)
  .forEach((a) =>
    console.log(
      `    ${String(a.imp).padStart(5)} imp  ${String(a.clicks).padStart(3)} cliques  pos ${String(a.pos.toFixed(1)).padStart(5)}  ${a.url}`
    )
  )

// posição média dos indexados
const avgPos = comImp.reduce((s, a) => s + a.pos, 0) / comImp.length
console.log(`\n  Posição média dos artigos indexados: ${avgPos.toFixed(1)}`)

const top10 = comImp.filter((a) => a.pos <= 10).length
const top20 = comImp.filter((a) => a.pos > 10 && a.pos <= 20).length
const além = comImp.filter((a) => a.pos > 20).length
console.log(`    Top 10:      ${top10}`)
console.log(`    Posição 11-20: ${top20}`)
console.log(`    Além da 20:  ${além}`)
