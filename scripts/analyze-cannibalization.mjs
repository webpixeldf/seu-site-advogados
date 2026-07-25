#!/usr/bin/env node
/**
 * Decide quais pares de artigos são canibalização REAL.
 *
 * Título parecido não basta: "Google Ads" e "Google Agenda" compartilham a
 * palavra "Google" mas são temas distintos. Canibalização real exige
 * sobreposição de INTENÇÃO DE BUSCA — o que se mede pelo conteúdo (H2/H3)
 * e pelos dados do Search Console.
 */

import fs from 'node:fs'
import path from 'node:path'

const OUT = 'out/blog'
const strip = (h) => h.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim()

const grupos = {
  'Google (4 artigos)': [
    'google-ads-para-advogados',
    'google-meu-negocio-para-advogados',
    'google-agenda-para-advogados',
    'ferramentas-do-google-para-advogados',
  ],
  'WhatsApp (2)': ['whatsapp-business-para-advogados', 'whatsapp-para-advogados'],
  'Marketing (2)': ['e-mail-marketing-para-advogados', 'marketing-para-advogados'],
  'Aparecer no Google (2)': ['como-aparecer-no-google-como-advogado', 'como-ser-advogado-do-google'],
  'Advocacia digital (2)': ['advocacia-digital', 'como-montar-um-escritorio-de-advocacia-digital'],
  'Advogado pode (3)': ['advogado-pode-ser-mei', 'advogado-pode-usar-o-tik-tok', 'advogado-pode-anunciar-no-google'],
}

// Search Console 10/mai – 07/jun (do xlsx já analisado)
const gsc = {
  'google-ads-para-advogados': { imp: 0, clicks: 0, pos: null },
  'google-meu-negocio-para-advogados': { imp: 0, clicks: 0, pos: null },
  'google-agenda-para-advogados': { imp: 33, clicks: 0, pos: 8.24 },
  'ferramentas-do-google-para-advogados': { imp: 0, clicks: 0, pos: null },
  'whatsapp-business-para-advogados': { imp: 0, clicks: 0, pos: null },
  'whatsapp-para-advogados': { imp: 0, clicks: 0, pos: null },
  'e-mail-marketing-para-advogados': { imp: 0, clicks: 0, pos: null },
  'marketing-para-advogados': { imp: 0, clicks: 0, pos: null },
  'como-aparecer-no-google-como-advogado': { imp: 7, clicks: 0, pos: null },
  'como-ser-advogado-do-google': { imp: 0, clicks: 0, pos: null },
  'advocacia-digital': { imp: 0, clicks: 0, pos: null },
  'como-montar-um-escritorio-de-advocacia-digital': { imp: 0, clicks: 0, pos: null },
  'advogado-pode-ser-mei': { imp: 13, clicks: 0, pos: 46.69 },
  'advogado-pode-usar-o-tik-tok': { imp: 14, clicks: 0, pos: 8.86 },
  'advogado-pode-anunciar-no-google': { imp: 15, clicks: 0, pos: 8.13 },
}

function read(slug) {
  const f = path.join(OUT, `${slug}.html`)
  if (!fs.existsSync(f)) return null
  const html = fs.readFileSync(f, 'utf-8')
  const title = ((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '').replace(/\s*\|.*$/, '')
  const h2 = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => strip(m[1]))
  const h3 = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map((m) => strip(m[1]))
  const text = strip(
    html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
  )
  return { slug, title, h2, h3, words: text.split(/\s+/).length, text: text.toLowerCase() }
}

const stop = new Set(['para','como','sobre','mais','seus','suas','pelo','pela','que','uma','com','dos','das','por','você','seu','sua','não','são','tem','ser','isso','esse','essa','pode','também','quando','fazer','todo','toda','cada','entre','muito','onde','isso'])
const tokens = (s) =>
  new Set(
    s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ').split(/\s+/)
      .filter((w) => w.length > 3 && !stop.has(w))
  )

// similaridade de conteúdo pelos headings (proxy da intenção de busca)
function headingSim(a, b) {
  const A = tokens([...a.h2, ...a.h3].join(' '))
  const B = tokens([...b.h2, ...b.h3].join(' '))
  const inter = [...A].filter((w) => B.has(w))
  return { jac: inter.length / new Set([...A, ...B]).size, shared: inter.slice(0, 8) }
}

for (const [nome, slugs] of Object.entries(grupos)) {
  console.log(`\n${'═'.repeat(70)}`)
  console.log(`GRUPO: ${nome}`)
  console.log('═'.repeat(70))

  const arts = slugs.map(read).filter(Boolean)

  console.log('\n  Dados por artigo:')
  for (const a of arts) {
    const g = gsc[a.slug] || { imp: 0, clicks: 0 }
    console.log(`\n    ${a.slug}`)
    console.log(`      título: "${a.title}"`)
    console.log(`      ${a.words} palavras | ${a.h2.length} H2 | GSC: ${g.imp} impressões, ${g.clicks} cliques${g.pos ? `, pos ${g.pos}` : ''}`)
    console.log(`      H2: ${a.h2.slice(0, 4).map((h) => h.slice(0, 45)).join(' / ')}`)
  }

  console.log('\n  Similaridade de conteúdo (headings):')
  for (let i = 0; i < arts.length; i++) {
    for (let j = i + 1; j < arts.length; j++) {
      const { jac, shared } = headingSim(arts[i], arts[j])
      const verdict = jac >= 0.35 ? '🔴 CANIBALIZA' : jac >= 0.2 ? '🟡 parcial' : '✅ temas distintos'
      console.log(`    ${(jac * 100).toFixed(0).padStart(3)}%  ${verdict}`)
      console.log(`          ${arts[i].slug}`)
      console.log(`          ${arts[j].slug}`)
      if (shared.length) console.log(`          termos comuns: ${shared.join(', ')}`)
    }
  }
}
