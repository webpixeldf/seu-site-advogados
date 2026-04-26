#!/usr/bin/env node
/**
 * Geração diária automática de artigos para o blog.
 *
 * Fluxo:
 *  1. Lê topics.json e used-topics.json. Pega o próximo tema não usado.
 *  2. Chama DeepSeek para gerar artigo HTML (1200-1800 palavras).
 *  3. Pega anchor inédito de anchor-pool.json (excluindo anchor-history.json).
 *  4. Insere link <a href="/" title="..."> no parágrafo certo (natural).
 *  5. Busca imagem na Unsplash relacionada ao tema.
 *  6. Baixa imagem para public/images/blog/{slug}.jpg.
 *  7. Cria src/app/(frontend)/data/articles/{slug}.tsx (registro JSX).
 *  8. Atualiza src/app/(frontend)/data/articles/index.tsx (adiciona import).
 *  9. Atualiza src/app/(frontend)/data/blogPosts.ts (insere no início).
 * 10. Atualiza arquivos de controle (anchor-history, used-topics, published-times).
 * 11. Gera horário de publicação único (hh:mm:ss diferente de qualquer outro já usado).
 *
 * Variáveis de ambiente esperadas:
 *  - DEEPSEEK_API_KEY
 *  - UNSPLASH_ACCESS_KEY
 *  - DRY_RUN=1 (opcional) — gera tudo sem commitar/escrever arquivos no disco
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')

const DEEPSEEK_KEY = process.env.DEEPSEEK_API_KEY
const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY
const DRY_RUN = process.env.DRY_RUN === '1'

if (!DEEPSEEK_KEY) {
  console.error('❌ DEEPSEEK_API_KEY não encontrada')
  process.exit(1)
}
if (!UNSPLASH_KEY) {
  console.error('❌ UNSPLASH_ACCESS_KEY não encontrada')
  process.exit(1)
}

// ---------- helpers de I/O ----------
const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf-8'))
const writeJson = (p, obj) => fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n')

// Normaliza string para comparação (remove acentos, case, pontuação)
function normalizeStr(s) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const TOPICS_PATH = path.join(ROOT, 'scripts/data/topics.json')
const USED_TOPICS_PATH = path.join(ROOT, 'scripts/data/used-topics.json')
const ANCHOR_POOL_PATH = path.join(ROOT, 'scripts/data/anchor-pool.json')
const ANCHOR_HISTORY_PATH = path.join(ROOT, 'scripts/data/anchor-history.json')
const PUBLISHED_TIMES_PATH = path.join(ROOT, 'scripts/data/published-times.log')

// ---------- 0a. Gera novos temas via DeepSeek se necessário ----------
async function generateNewTopics(existing, used, count = 15) {
  const allKnown = [...new Set([...existing, ...used])]
  const recent = allKnown.slice(-50) // últimos 50 como contexto

  const prompt = `Você está criando pautas para um blog de marketing jurídico voltado para advogados brasileiros que querem captar clientes online.

Lista de tópicos JÁ existentes (NÃO repita, NÃO crie variações):
${recent.map((t, i) => `${i + 1}. ${t}`).join('\n')}

Gere ${count} NOVOS tópicos de artigos seguindo estas regras:

REGRAS RÍGIDAS:
- NÃO repita nenhum tópico da lista acima
- NÃO crie variações triviais (ex: "Como fazer X" e "X em 5 passos" são duplicatas)
- Cada tópico deve abordar ângulo, ferramenta, área do direito, plataforma ou problema DIFERENTE dos da lista
- Tópicos práticos com valor real para advogado brasileiro (cita OAB, situações reais, ferramentas específicas)
- Foque em: marketing digital, captação de clientes, redes sociais, SEO, branding, ferramentas, gestão, áreas específicas do direito (trabalhista, família, tributário, criminal, etc), tendências (IA, digital), produtividade

FORMATO:
- Apenas o título de cada artigo, um por linha
- SEM numeração, SEM bullets, SEM aspas
- Cada linha começa com letra maiúscula (estilo de título)
- Tamanho ideal: 50-80 caracteres por título

Exemplo do formato esperado:
Como advogados criminalistas podem usar Twitter sem violar a OAB
LGPD para escritórios pequenos: implantação em 30 dias
Direito do consumidor digital: o nicho que cresceu 200%

Responda apenas com os ${count} títulos, nada mais.`

  const res = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${DEEPSEEK_KEY}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: 'Você cria pautas originais para blog jurídico brasileiro. Responda apenas com os títulos solicitados, um por linha.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.95,
      max_tokens: 1500,
    }),
  })
  if (!res.ok) {
    throw new Error(`DeepSeek (topics) erro ${res.status}: ${await res.text()}`)
  }
  const data = await res.json()
  const text = data.choices[0].message.content

  const candidates = text
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && l.length > 10)
    .map((l) => l.replace(/^\d+[.)]\s*/, '').replace(/^[-*•]\s*/, '').replace(/^["']|["']$/g, '').trim())
    .filter((l) => l.length >= 20 && l.length <= 130)

  const knownNorm = new Set(allKnown.map(normalizeStr))
  const uniques = []
  for (const c of candidates) {
    const n = normalizeStr(c)
    if (!knownNorm.has(n) && !uniques.some((u) => normalizeStr(u) === n)) {
      uniques.push(c)
      knownNorm.add(n)
    }
  }
  return uniques
}

let allTopics = readJson(TOPICS_PATH)
const usedTopics = readJson(USED_TOPICS_PATH)
let remaining = allTopics.filter((t) => !usedTopics.includes(t))

// Se restam <= 5 temas, gera mais via DeepSeek
if (remaining.length <= 5) {
  console.log(`🪫 Restam apenas ${remaining.length} temas. Gerando 15 novos via DeepSeek...`)
  const newTopics = await generateNewTopics(allTopics, usedTopics, 15)
  if (newTopics.length === 0) {
    console.error('❌ DeepSeek não retornou temas válidos.')
    process.exit(1)
  }
  console.log(`📥 ${newTopics.length} novos temas adicionados:`)
  newTopics.forEach((t) => console.log(`   • ${t}`))
  allTopics = [...allTopics, ...newTopics]
  if (!DRY_RUN) writeJson(TOPICS_PATH, allTopics)
  remaining = allTopics.filter((t) => !usedTopics.includes(t))
}

const topic = remaining[0]
console.log(`📝 Tema escolhido: ${topic}`)

// ---------- 0b. Gera novos anchors se necessário ----------
async function generateNewAnchors(existing, used, count = 15) {
  const allKnown = [...new Set([...existing, ...used])]

  const prompt = `Crie ${count} variações de "anchor text" (texto âncora de link) para um link interno apontando para a home de um site de criação de site para advogados.

Variações JÁ usadas (NÃO repita):
${allKnown.slice(-40).map((t, i) => `${i + 1}. ${t}`).join('\n')}

REGRAS:
- Cada anchor deve conter naturalmente termos relacionados a "criação de site para advogados" (admite plural/singular)
- Pode incluir adjetivos antes/depois (profissional, moderno, especializado, exclusivo, sob medida, etc.)
- Pode usar sinônimos: "site jurídico", "presença digital para advogados", "site de advocacia", etc.
- Tudo em minúsculas (anchors são geralmente lowercase)
- Tamanho 4-12 palavras
- Variações naturais que pareçam orgânicas em um texto

FORMATO:
- Apenas o anchor, um por linha
- SEM numeração, SEM aspas, SEM hífen no início

Responda apenas com os ${count} anchors.`

  const res = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${DEEPSEEK_KEY}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: 'Você cria anchor texts para SEO em português. Responda apenas com os anchors solicitados, um por linha.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.9,
      max_tokens: 1000,
    }),
  })
  if (!res.ok) {
    throw new Error(`DeepSeek (anchors) erro ${res.status}: ${await res.text()}`)
  }
  const data = await res.json()
  const text = data.choices[0].message.content

  const candidates = text
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => l.replace(/^\d+[.)]\s*/, '').replace(/^[-*•]\s*/, '').replace(/^["']|["']$/g, '').toLowerCase().trim())
    .filter((l) => l.length >= 10 && l.length <= 80)

  const knownNorm = new Set(allKnown.map(normalizeStr))
  const uniques = []
  for (const c of candidates) {
    const n = normalizeStr(c)
    if (!knownNorm.has(n) && !uniques.some((u) => normalizeStr(u) === n)) {
      uniques.push(c)
      knownNorm.add(n)
    }
  }
  return uniques
}

let anchorPool = readJson(ANCHOR_POOL_PATH)
const anchorHistory = readJson(ANCHOR_HISTORY_PATH)
let remainingAnchors = anchorPool.filter((a) => !anchorHistory.includes(a))

if (remainingAnchors.length <= 5) {
  console.log(`🪫 Restam apenas ${remainingAnchors.length} anchors. Gerando 15 novos via DeepSeek...`)
  const newAnchors = await generateNewAnchors(anchorPool, anchorHistory, 15)
  if (newAnchors.length === 0) {
    console.error('❌ DeepSeek não retornou anchors válidos.')
    process.exit(1)
  }
  console.log(`📥 ${newAnchors.length} novos anchors adicionados`)
  anchorPool = [...anchorPool, ...newAnchors]
  if (!DRY_RUN) writeJson(ANCHOR_POOL_PATH, anchorPool)
  remainingAnchors = anchorPool.filter((a) => !anchorHistory.includes(a))
}

const anchor = remainingAnchors[Math.floor(Math.random() * remainingAnchors.length)]
console.log(`🔗 Anchor: "${anchor}"`)

// ---------- 3. Gerar slug ----------
function slugify(s) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
}
const slug = slugify(topic)
console.log(`📌 Slug: ${slug}`)

// ---------- 4. Verificar se já existe (proteção) ----------
const articlePath = path.join(ROOT, `src/app/(frontend)/data/articles/${slug}.tsx`)
if (fs.existsSync(articlePath)) {
  console.error(`❌ Artigo ${slug}.tsx já existe. Saindo.`)
  process.exit(1)
}

// ---------- 5. Gerar conteúdo via DeepSeek ----------
const targetWords = 1200 + Math.floor(Math.random() * 600) // 1200-1800
console.log(`🤖 Gerando ${targetWords} palavras via DeepSeek...`)

const systemPrompt = `Você é um redator brasileiro experiente em marketing jurídico.
Escreve em português do Brasil de forma natural, fluida, conversacional e humana.
Usa exemplos do dia-a-dia da advocacia brasileira (OAB, TJ estaduais, audiências, escritórios reais).
Evita absolutamente:
- Linguagem robótica ou formal demais
- Repetição de estruturas ("É importante notar que...", "Vale ressaltar...", "Em primeiro lugar...")
- Listas excessivas (use parágrafos corridos com algumas listas pontuais)
- Conclusões com "Em resumo" ou "Conclusão:"
- Palavras como "explore", "navegue", "descubra", "embarque"

Use:
- Parágrafos de tamanhos variados (alguns curtos com 1-2 linhas, outros longos)
- Perguntas retóricas pontuais
- Contrações naturais ("pra" no lugar de "para" às vezes)
- Exemplos concretos com números, nomes de cidades, situações reais
- Tom misto: didático que ensina + CTAs sutis (sem ser comercial agressivo)`

const userPrompt = `Escreva um artigo de blog completo sobre o tema:
"${topic}"

Especificações:
- Aproximadamente ${targetWords} palavras (NÃO conte, apenas escreva extenso)
- Inclua o anchor "${anchor}" como link <a href="/" title="${anchor.charAt(0).toUpperCase() + anchor.slice(1)}">${anchor}</a> EXATAMENTE UMA VEZ no meio do texto, em um parágrafo onde fizer sentido natural (não no fim, não em forma de CTA óbvio)
- Use APENAS estas tags HTML: <p>, <h2>, <h3>, <ul>, <ol>, <li>, <strong>, <em>, <a>, <blockquote>
- NÃO inclua o título principal H1 (já vem na página)
- NÃO use markdown (sem asterisco, sem hífen no início de linha)
- Estrutura recomendada:
  * 1 parágrafo de introdução envolvente (sem dizer "neste artigo vamos...")
  * 4-6 H2 cobrindo subtópicos
  * Alguns H3 quando o subtópico merece divisão
  * 1-2 listas com bullets quando agregar valor
  * Parágrafo final que naturalmente convida à reflexão (sem CTA agressivo)

IMPORTANTE: o resultado deve ser APENAS o HTML do conteúdo, começando com <p> e terminando com </p> ou </h2>. Sem explicações, sem markdown wrapper, sem comentários. Apenas o HTML puro.`

async function callDeepSeek() {
  const res = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${DEEPSEEK_KEY}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.85,
      max_tokens: 4000,
    }),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`DeepSeek erro ${res.status}: ${err}`)
  }
  const data = await res.json()
  return data.choices[0].message.content
}

let html = await callDeepSeek()
html = html.trim()

// Remove eventual wrapper de markdown que o modelo possa colocar
if (html.startsWith('```html')) html = html.slice(7)
else if (html.startsWith('```')) html = html.slice(3)
if (html.endsWith('```')) html = html.slice(0, -3)
html = html.trim()

// Verifica se o anchor está presente
if (!html.includes(`>${anchor}</a>`)) {
  console.warn('⚠️ Anchor não detectado no HTML gerado. Inserindo manualmente em parágrafo aleatório...')
  // Insere no terceiro parágrafo (ou último)
  const pTags = [...html.matchAll(/<\/p>/g)]
  if (pTags.length >= 3) {
    const insertAt = pTags[2].index
    const linkHtml = ` Confira nosso serviço de <a href="/" title="${anchor.charAt(0).toUpperCase() + anchor.slice(1)}">${anchor}</a>.`
    html = html.slice(0, insertAt) + linkHtml + html.slice(insertAt)
  }
}

// Conta palavras visíveis (aprox)
const visibleText = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
const wordCount = visibleText.split(/\s+/).length
console.log(`✍️  Artigo gerado: ${wordCount} palavras`)

if (wordCount < 1100) {
  console.error(`❌ Artigo muito curto (${wordCount} palavras). Saindo sem commitar.`)
  process.exit(1)
}

// ---------- 6. Buscar imagem na Unsplash ----------
console.log('🖼️  Buscando imagem na Unsplash...')

// Termos de busca em inglês para melhor resultado na Unsplash
const searchTerms = ['lawyer office', 'law', 'legal', 'attorney', 'justice', 'courtroom', 'lawyer working']
const searchTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)]

async function findImage() {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchTerm)}&per_page=20&orientation=landscape&content_filter=high`
  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  })
  if (!res.ok) {
    throw new Error(`Unsplash erro ${res.status}`)
  }
  const data = await res.json()
  if (!data.results || data.results.length === 0) {
    throw new Error('Nenhuma imagem encontrada na Unsplash')
  }
  // Escolhe uma aleatória entre os 20 resultados
  return data.results[Math.floor(Math.random() * data.results.length)]
}

const photo = await findImage()
const photoUrl = photo.urls.regular // 1080px de largura
// Alt text em português usando o título do artigo (contém a palavra-chave principal)
const photoAlt = topic.slice(0, 200)
console.log(`📷 Imagem: ${photoUrl}`)

// ---------- 7. Baixar e converter para WebP ----------
const imagesDir = path.join(ROOT, 'public/images/blog')
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true })
const imageFile = path.join(imagesDir, `${slug}.webp`)
const imageUrlPath = `/images/blog/${slug}.webp`

if (!DRY_RUN) {
  const imgRes = await fetch(photoUrl)
  if (!imgRes.ok) throw new Error(`Falha ao baixar imagem: ${imgRes.status}`)
  const buf = Buffer.from(await imgRes.arrayBuffer())
  await sharp(buf).webp({ quality: 85 }).toFile(imageFile)
  const stat = fs.statSync(imageFile)
  console.log(`💾 Imagem WebP salva em ${imageFile} (${(stat.size / 1024).toFixed(1)} KB)`)

  // Trigger Unsplash download tracking (exigência da API gratuita)
  if (photo.links && photo.links.download_location) {
    fetch(photo.links.download_location, {
      headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
    }).catch(() => {})
  }
}

// ---------- 8. Extrair resumo do primeiro parágrafo ----------
function extractFirstParagraph(htmlStr) {
  const match = htmlStr.match(/<p[^>]*>([\s\S]*?)<\/p>/)
  if (!match) return ''
  return match[1].replace(/<[^>]+>/g, '').trim()
}
let resumo = extractFirstParagraph(html).slice(0, 200)
if (resumo.length === 200) {
  resumo = resumo.slice(0, 197).trim() + '...'
}

// ---------- 9. Remover o primeiro parágrafo do HTML (evita duplicar com AEO block) ----------
// O resumo já vai aparecer no AEO Answer Block (caixa cinza no topo da página).
html = html.replace(/^\s*<p[^>]*>[\s\S]*?<\/p>\s*/, '')

// ---------- 10. Inserir imagem no início (sem legenda) ----------
const heroImageHtml = `<p><img src="${imageUrlPath}" alt="${photoAlt.replace(/"/g, '&quot;')}" loading="lazy" /></p>\n\n`
html = heroImageHtml + html

// ---------- 10. Gerar horário hh:mm:ss único e dentro de 08-18 BRT ----------
function generatePublishTime(usedTimes) {
  // BRT = UTC-3. Mas vamos gerar em formato BRT pra mostrar.
  for (let attempt = 0; attempt < 1000; attempt++) {
    const hh = String(8 + Math.floor(Math.random() * 10)).padStart(2, '0') // 08..17
    const mm = String(Math.floor(Math.random() * 60)).padStart(2, '0')
    const ss = String(Math.floor(Math.random() * 60)).padStart(2, '0')
    const time = `${hh}:${mm}:${ss}`
    if (!usedTimes.has(time)) return time
  }
  throw new Error('Não foi possível gerar horário único')
}

const usedTimesArr = fs.existsSync(PUBLISHED_TIMES_PATH)
  ? fs.readFileSync(PUBLISHED_TIMES_PATH, 'utf-8').split('\n').filter(Boolean).map((l) => l.split(' ')[1])
  : []
const usedTimes = new Set(usedTimesArr)
const publishTime = generatePublishTime(usedTimes)
const today = new Date().toISOString().slice(0, 10)
const publishedAt = `${today}T${publishTime}-03:00`
console.log(`⏰ Horário de publicação: ${today} ${publishTime} BRT`)

// ---------- 11. Atualizar arquivos do projeto ----------
if (DRY_RUN) {
  console.log('\n--- DRY RUN: nenhum arquivo será modificado ---')
  console.log(`Slug: ${slug}`)
  console.log(`Resumo: ${resumo}`)
  console.log(`HTML preview (primeiros 500 chars):\n${html.slice(0, 500)}`)
  process.exit(0)
}

// 11.1 Cria o arquivo do artigo
const articleTsxContent = `import { registerHtmlArticle } from './_auto-helper'

registerHtmlArticle('${slug}', \`${html.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\`)
`
fs.writeFileSync(articlePath, articleTsxContent)
console.log(`✅ Artigo salvo em ${articlePath}`)

// 11.2 Adiciona import em index.tsx
const indexPath = path.join(ROOT, 'src/app/(frontend)/data/articles/index.tsx')
let indexContent = fs.readFileSync(indexPath, 'utf-8')
const importLine = `import './${slug}'`
if (!indexContent.includes(importLine)) {
  indexContent = indexContent.trimEnd() + `\n${importLine}\n`
  fs.writeFileSync(indexPath, indexContent)
  console.log(`✅ Import adicionado em index.tsx`)
}

// 11.3 Insere no início do array de blogPosts
const blogPostsPath = path.join(ROOT, 'src/app/(frontend)/data/blogPosts.ts')
let blogPostsContent = fs.readFileSync(blogPostsPath, 'utf-8')
const newEntry = `  {
    titulo: ${JSON.stringify(topic)},
    slug: ${JSON.stringify(slug)},
    resumo: ${JSON.stringify(resumo)},
    imagemUrl: ${JSON.stringify(imageUrlPath)},
    publishedAt: ${JSON.stringify(today)},
    tags: ['blog', 'auto'],
  },
`
const arrayStartMarker = 'export const blogPosts: BlogPost[] = ['
const insertIdx = blogPostsContent.indexOf(arrayStartMarker) + arrayStartMarker.length
blogPostsContent = blogPostsContent.slice(0, insertIdx) + '\n' + newEntry + blogPostsContent.slice(insertIdx)
fs.writeFileSync(blogPostsPath, blogPostsContent)
console.log(`✅ Entrada adicionada em blogPosts.ts`)

// 11.4 Atualiza arquivos de controle
usedTopics.push(topic)
writeJson(USED_TOPICS_PATH, usedTopics)
anchorHistory.push(anchor)
writeJson(ANCHOR_HISTORY_PATH, anchorHistory)
fs.appendFileSync(PUBLISHED_TIMES_PATH, `${today} ${publishTime} ${slug}\n`)
console.log(`✅ Arquivos de controle atualizados`)

console.log(`\n🎉 Artigo gerado com sucesso!`)
console.log(`URL: https://seusiteadvogados.com.br/blog/${slug}`)
