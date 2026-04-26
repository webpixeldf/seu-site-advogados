import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const IMAGES_DIR = './public/images'
const TEMP_DIR = './public/images/_downloads'

// Mapping: filename -> Pexels photo ID (curated from real searches)
const imageMap = {
  // SEO & Google
  'seo-para-advogados.webp': 7567606,
  'Como-Aparecer-no-Google-Como-Advogado.webp': 40185,
  'Como-Ser-Advogado-do-Google.webp': 1476321,
  'Como-Colocar-um-Site-de-Advocacia-no-Google.webp': 39284,
  'google-ads-para-advogados.webp': 265087,
  'Google-Meu-Negocio-Para-Advogados.webp': 35969,
  'Google-Agenda-para-Advogados.webp': 5239795,
  'Ferramentas-do-Google-para-Advogados.webp': 1438081,
  'Como-Instalar-as-Tags-do-Google-no-Seu-Site-de-Advocacia.webp': 546819,
  'Beneficios-do-Google-Docs-para-Advogados.webp': 7439129,

  // Marketing Digital
  'Marketing-para-advogados.webp': 6476808,
  'Marketing-Digital-para-Advogados-Iniciantes.webp': 6483582,
  'Marketing-juridico-digital.webp': 3183150,
  'E-mail-Marketing-para-Advogados.webp': 7112,
  'Trafego-pago-para-advogados.webp': 6801649,
  'Facebook-Ads-para-Advogados.webp': 267399,
  'Como-Criar-Campanha-no-Meta-Ads-para-Advogados.webp': 6953870,

  // Redes Sociais
  'LinkedIn-para-Advogados.webp': 15406295,
  'Instagram-para-Advogado-Previdenciario.webp': 174938,
  'Bio-para-Instagram-de-Advocacia.webp': 3850529,
  'Como-atrair-clientes-de-advocacia-pelo-Instagram.webp': 3584996,
  'Como-Prospectar-Clientes-na-Advocacia-pelo-Facebook.webp': 607812,
  'Posts-para-advogados.webp': 7480538,
  'Como-Criar-Post-para-Advogados-com-o-Canva.webp': 196644,
  '5-Melhores-Redes-Sociais-para-Advogados.webp': 4549408,
  '3-Coisas-que-os-Advogados-Nao-Podem-Fazer-nas-Redes-Sociais.webp': 6953868,
  'Advogado-pode-usar-o-Tik-Tok.webp': 4843112,

  // YouTube & Video
  'YouTube-para-Advogados.webp': 4988137,
  'Criar-conteudo-para-o-YouTube-da-resultados-na-advocacia.webp': 8360444,
  'Como-Monetizar-um-Canal-de-Advocacia-no-YouTube.webp': 5926383,
  'Como-Atrair-Clientes-para-Advogados-no-YouTube.webp': 2510428,
  'Como-Gravar-Videos-da-Advocacia-para-o-YouTube.webp': 66134,
  'Video-Institucional-para-Escritorio-de-Advocacia.webp': 3379943,

  // Sites & Landing Pages
  'criacao-de-site-para-advogados.webp': 1714202,
  'Como-criar-um-site-para-advogados.webp': 574069,
  'Landing-page-para-advogado.webp': 6372935,
  'Landing-Page-de-Alta-Conversao-para-Advogados.webp': 3861972,
  'Diferenca-entre-landing-page-e-site-institucional-para-advogados.webp': 1029757,
  'Pagina-de-Vendas-para-Advogados.webp': 7181184,
  'Para-o-advogado-e-melhor-ter-BLOG-ou-SITE.webp': 5485802,
  'Por-que-um-advogado-deve-ter-um-site-profissional.webp': 7606056,
  'A-Importancia-de-Ter-um-Site-Profissional-para-Advogados.webp': 3182812,
  'Hospedagem-de-Site-para-Advogados.webp': 4508751,
  'Sites-para-captar-clientes-para-advocacia.webp': 3184418,
  'dominio-adv.webp': 5483077,

  // WhatsApp
  'WhatsApp-Business-para-Advogados.webp': 6458062,
  'WhatsApp-para-Advogados.webp': 15940002,
  'Como-utilizar-listas-de-transmissao-whatsapp-e-telegram-na-advocacia.webp': 4492135,

  // Branding & Design
  'Identidade-visual-para-advogados.webp': 6476567,
  'Logomarca-para-advogados.webp': 16254610,
  'Como-Criar-um-Logo-para-Advogado-Gratis.webp': 6444,
  'Cores-para-escritorio-de-advocacia.webp': 1573825,
  'melhor-cor-para-advogado.webp': 1762851,
  'Nome-para-escritorio-de-advocacia.webp': 8933650,
  'Cartao-digital-para-advogado.webp': 4066294,

  // Ferramentas & Produtividade
  'Notion-para-Advogados.webp': 326513,
  'trello-para-advogados.webp': 6804077,
  'Como-Gerenciar-sua-Advocacia-com-o-Trello.webp': 7376,
  'Inteligencia-artificial-para-advogados.webp': 17483874,
  'Como-Criar-Assistentes-Juridicos-com-Inteligencia-Artificial.webp': 8386440,
  'NotebookLM-Inteligencia-Artificial-para-Advogados.webp': 7567443,

  // Advocacia & Escritorio
  'Advocacia-digital.webp': 5668789,
  'Como-Montar-um-Escritorio-de-Advocacia-Digital.webp': 1181406,
  'escritorio-de-advocacia-moderno.webp': 7534216,
  'E-mail-para-advogado.webp': 1591062,
  'Numeros-de-advogados.webp': 590022,
  'perfil-de-advogado.webp': 5668856,
  'Como-escrever-um-artigo-cientifico-no-direito.webp': 6549912,
  'Legal-design-e-visual-law.webp': 7841499,
  'Advogado-Pode-Anunciar-no-Google.webp': 4427611,
  'Captacao-de-clientes-na-advocacia.webp': 8111895,
}

async function downloadAndProcess(filename, photoId) {
  const url = `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=1600`
  const tempFile = path.join(TEMP_DIR, `_dl_${photoId}.jpg`)
  const outputFile = path.join(IMAGES_DIR, filename)

  try {
    // Download
    const response = await fetch(url)
    if (!response.ok) {
      return { file: filename, status: 'error', error: `HTTP ${response.status}` }
    }
    const buffer = Buffer.from(await response.arrayBuffer())
    fs.writeFileSync(tempFile, buffer)

    // Resize to 1200x630 and convert to WebP
    const newPath = outputFile + '.new'
    await sharp(tempFile)
      .resize(1200, 630, { fit: 'cover', position: 'center' })
      .webp({ quality: 80, effort: 6 })
      .toFile(newPath)

    // Get output info
    const meta = await sharp(newPath).metadata()
    const size = fs.statSync(newPath).size

    // Clean temp
    try { fs.unlinkSync(tempFile) } catch {}

    return {
      file: filename,
      status: 'ok',
      width: meta.width,
      height: meta.height,
      sizeKB: Math.round(size / 1024),
    }
  } catch (err) {
    return { file: filename, status: 'error', error: err.message }
  }
}

async function main() {
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true })
  }

  const entries = Object.entries(imageMap)
  console.log(`Downloading ${entries.length} images from Pexels...\n`)

  const results = { ok: [], error: [] }

  // Process in batches of 5
  for (let i = 0; i < entries.length; i += 5) {
    const batch = entries.slice(i, i + 5)
    console.log(`Batch ${Math.floor(i/5)+1}/${Math.ceil(entries.length/5)}...`)

    const batchResults = await Promise.all(
      batch.map(([filename, id]) => downloadAndProcess(filename, id))
    )

    for (const r of batchResults) {
      if (r.status === 'ok') {
        results.ok.push(r)
        console.log(`  OK: ${r.file} (${r.sizeKB}KB)`)
      } else {
        results.error.push(r)
        console.log(`  FAIL: ${r.file} - ${r.error}`)
      }
    }

    // Delay between batches to avoid rate limiting
    if (i + 5 < entries.length) {
      await new Promise(r => setTimeout(r, 800))
    }
  }

  console.log(`\n=== DOWNLOAD RESULTS ===`)
  console.log(`Downloaded: ${results.ok.length}/${entries.length}`)
  console.log(`Errors: ${results.error.length}`)
  if (results.error.length) {
    console.log(`\nFailed:`)
    results.error.forEach(e => console.log(`  ${e.file}: ${e.error}`))
  }

  // Replace originals with .new files
  console.log(`\nReplacing originals...`)
  let replaced = 0
  for (const r of results.ok) {
    const original = path.join(IMAGES_DIR, r.file)
    const newFile = original + '.new'
    try {
      try { fs.unlinkSync(original) } catch {}
      fs.renameSync(newFile, original)
      replaced++
    } catch {
      try {
        fs.copyFileSync(newFile, original)
        try { fs.unlinkSync(newFile) } catch {}
        replaced++
      } catch (e2) {
        console.log(`  Could not replace ${r.file}`)
      }
    }
  }
  console.log(`Replaced: ${replaced}/${results.ok.length}`)

  // Cleanup
  try { fs.rmdirSync(TEMP_DIR) } catch {}
}

main().catch(console.error)
