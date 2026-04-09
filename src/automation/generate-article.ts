import { DEEPSEEK_API_KEY, PEXELS_API_KEY, SITE_URL, HOMEPAGE_ANCHORS } from './config'
import * as fs from 'fs'
import * as path from 'path'
import * as crypto from 'crypto'

const DB_PATH = path.resolve(process.cwd(), 'database.db')
const IMAGES_DIR = path.resolve(process.cwd(), 'public', 'images', 'blog')

// Fonte de artigos para inspiração (títulos são buscados e reescritos 100%)
const SOURCE_BLOG = 'https://siteparaadvogados.com.br/blog/'

// ============================================
// 1. BUSCAR TEMAS DO BLOG FONTE
// ============================================

async function fetchTopicsFromSource(): Promise<string[]> {
  try {
    const response = await fetch(SOURCE_BLOG, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ArticleBot/1.0)' },
    })
    const html = await response.text()

    // Extrair títulos dos artigos do blog fonte
    const titles: string[] = []
    const regex = /<h[2-4][^>]*>(.*?)<\/h[2-4]>/gi
    let match
    while ((match = regex.exec(html)) !== null) {
      const title = match[1].replace(/<[^>]*>/g, '').trim()
      if (title.length > 15 && title.length < 120) {
        titles.push(title)
      }
    }

    // Também extrair de links com texto
    const linkRegex = /<a[^>]*>(.*?)<\/a>/gi
    while ((match = linkRegex.exec(html)) !== null) {
      const text = match[1].replace(/<[^>]*>/g, '').trim()
      if (text.length > 20 && text.length < 100 && /advogado|advocacia|jurídico|site|escritório/i.test(text)) {
        titles.push(text)
      }
    }

    return [...new Set(titles)] // Remove duplicatas
  } catch (e) {
    console.log('  Não foi possível acessar o blog fonte, usando temas internos...')
    return []
  }
}

// ============================================
// 2. DEEPSEEK: Gerar artigo 100% original
// ============================================

async function generateArticle(topicFromSource?: string): Promise<{
  titulo: string
  slug: string
  resumo: string
  conteudo: string
  tags: string[]
  keyword: string
}> {
  // Escolher anchor text aleatório para linkagem interna
  const anchor = HOMEPAGE_ANCHORS[Math.floor(Math.random() * HOMEPAGE_ANCHORS.length)]

  const topic = topicFromSource || 'marketing digital para advogados e escritórios de advocacia'

  const prompt = `Você é um redator especializado em marketing digital para advogados no Brasil.

TEMA DE INSPIRAÇÃO (NÃO copie, reescreva com abordagem 100% diferente): "${topic}"

Escreva um artigo COMPLETAMENTE ORIGINAL sobre este tema. O artigo deve parecer escrito por um profissional de marketing que trabalha com advogados.

REGRAS DE ESCRITA:
1. Entre 1.200 e 1.800 palavras
2. Cada parágrafo deve ter entre 40 e 60 palavras — completo, com começo, meio e fim. NÃO escreva frases soltas de 1 linha. Cada parágrafo deve desenvolver uma ideia completa.
3. Linguagem natural, conversacional, como se um profissional experiente estivesse explicando para um advogado que quer crescer
4. PROIBIDO: "no cenário atual", "é fundamental", "é essencial", "nesse sentido", "diante disso", "vale ressaltar", "é importante destacar"
5. PROIBIDO começar parágrafos com: "Descubra", "Aprenda", "Saiba", "Entenda", "Conheça", "Além disso", "Portanto", "Dessa forma"
6. Use exemplos práticos e específicos (mencione áreas reais: trabalhista, previdenciário, tributário, família, criminal, imobiliário)
7. Respeite as diretrizes da OAB sobre publicidade advocatícia (Provimento 205/2021)
8. Inclua dados concretos e números quando possível
9. Cada seção H2 deve ter pelo menos 3 parágrafos substanciais

ESTRUTURA:
- 4 a 6 subtítulos H2
- Pelo menos 1 lista com bullets (3-5 itens)
- 1 link interno natural: <a href="${SITE_URL}">${anchor}</a> (insira dentro de um parágrafo, NÃO como bloco separado)
- Parágrafos com 40-60 palavras cada, desenvolvendo ideias completas

FORMATO JSON (responda APENAS o JSON, sem markdown):
{
  "titulo": "Título aqui (máx 60 chars)",
  "slug": "titulo-em-formato-url",
  "resumo": "Meta description aqui (máx 155 chars, sem começar com Descubra/Aprenda)",
  "tags": ["tag1", "tag2", "tag3"],
  "keyword": "palavra chave principal do artigo",
  "conteudo": "<h2>Subtítulo</h2><p>Parágrafo curto...</p><p>Outro parágrafo curto...</p><h2>Outro subtítulo</h2><p>Texto...</p>"
}`

  const response = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: 'Você é um redator SEO especializado em marketing jurídico. Responda APENAS em JSON válido, sem markdown, sem ```json, apenas o objeto JSON puro.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.85,
      max_tokens: 4000,
    }),
  })

  if (!response.ok) {
    throw new Error(`DeepSeek API error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  const content = data.choices[0].message.content.trim()
  const cleanJson = content.replace(/^```json?\s*/, '').replace(/\s*```$/, '').trim()

  try {
    const article = JSON.parse(cleanJson)
    return {
      titulo: article.titulo,
      slug: article.slug || slugify(article.titulo),
      resumo: article.resumo.substring(0, 155),
      conteudo: article.conteudo,
      tags: article.tags || [],
      keyword: article.keyword || topic,
    }
  } catch (e) {
    console.error('Erro ao parsear JSON do DeepSeek:', e)
    console.error('Resposta:', content.substring(0, 500))
    throw new Error('DeepSeek retornou JSON inválido')
  }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 80)
}

// ============================================
// 3. PEXELS: Baixar imagem relacionada
// ============================================

async function downloadImage(keyword: string, slug: string): Promise<string> {
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true })
  }

  const searchQuery = encodeURIComponent(keyword + ' lawyer office professional')
  const response = await fetch(`https://api.pexels.com/v1/search?query=${searchQuery}&per_page=5&orientation=landscape`, {
    headers: { Authorization: PEXELS_API_KEY },
  })

  if (!response.ok) throw new Error(`Pexels API error: ${response.status}`)

  const data = await response.json()

  if (!data.photos || data.photos.length === 0) {
    const fallback = await fetch(`https://api.pexels.com/v1/search?query=lawyer+office&per_page=3&orientation=landscape`, {
      headers: { Authorization: PEXELS_API_KEY },
    })
    const fallbackData = await fallback.json()
    if (!fallbackData.photos?.length) throw new Error('Nenhuma imagem encontrada')
    data.photos = fallbackData.photos
  }

  const photo = data.photos[Math.floor(Math.random() * data.photos.length)]
  const imageUrl = photo.src.landscape

  const imgResponse = await fetch(imageUrl)
  const imgBuffer = Buffer.from(await imgResponse.arrayBuffer())

  const sharp = (await import('sharp')).default
  const filename = `${slug}.webp`
  const filepath = path.join(IMAGES_DIR, filename)

  await sharp(imgBuffer)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .webp({ quality: 80, effort: 6 })
    .toFile(filepath)

  const sizeKB = Math.round(fs.statSync(filepath).size / 1024)
  console.log(`  Imagem: ${filename} (${sizeKB}KB)`)
  console.log(`  Alt: ${keyword}`)

  return `/images/blog/${filename}`
}

// ============================================
// 4. SQLITE: Salvar no banco (colunas reais)
// ============================================

async function saveToDatabase(article: {
  titulo: string
  slug: string
  resumo: string
  conteudo: string
  imagemUrl: string
}) {
  const Database = (await import('better-sqlite3')).default
  const db = new Database(DB_PATH)

  // Verificar se slug já existe
  const existing = db.prepare('SELECT id FROM blog WHERE slug = ?').get(article.slug)
  if (existing) {
    console.log(`  Artigo "${article.slug}" já existe, pulando...`)
    db.close()
    return null
  }

  const id = Math.floor(Math.random() * 900000) + 100000
  const now = new Date().toISOString()

  // Colunas reais da tabela blog do Payload:
  // id, titulo, slug, resumo, conteudo, status, published_at, destaque,
  // seo_meta_title, seo_meta_description, updated_at, created_at
  const stmt = db.prepare(`
    INSERT INTO blog (id, titulo, slug, resumo, conteudo, status, published_at, destaque, seo_meta_title, seo_meta_description, updated_at, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  stmt.run(
    id,
    article.titulo,
    article.slug,
    article.resumo,
    article.conteudo, // HTML vai no campo conteudo (TEXT)
    'publicado',
    now,
    0,
    article.titulo,
    article.resumo,
    now,
    now
  )

  console.log(`  Salvo no banco: ID ${id}`)
  db.close()
  return { id }
}

// ============================================
// 5. EXECUÇÃO PRINCIPAL
// ============================================

async function main() {
  const startTime = Date.now()

  console.log('')
  console.log('================================================')
  console.log('  Geração Automática de Artigo')
  console.log(`  ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`)
  console.log('================================================')

  try {
    // 1. Buscar temas do blog fonte
    console.log('\n[0/3] Buscando temas de referência...')
    const sourceTopics = await fetchTopicsFromSource()
    const topic = sourceTopics.length > 0
      ? sourceTopics[Math.floor(Math.random() * sourceTopics.length)]
      : undefined
    if (topic) console.log(`  Tema de referência: ${topic}`)

    // 2. Gerar artigo via DeepSeek
    console.log('\n[1/3] Gerando artigo via DeepSeek...')
    const article = await generateArticle(topic)
    console.log(`  Título: ${article.titulo}`)
    console.log(`  Slug: ${article.slug}`)
    console.log(`  Tags: ${article.tags.join(', ')}`)

    // 3. Baixar imagem do Pexels
    console.log('\n[2/3] Baixando imagem do Pexels...')
    const imagemUrl = await downloadImage(article.keyword, article.slug)

    // 4. Salvar no banco
    console.log('\n[3/3] Salvando no banco de dados...')
    const doc = await saveToDatabase({
      titulo: article.titulo,
      slug: article.slug,
      resumo: article.resumo,
      conteudo: article.conteudo,
      imagemUrl,
    })

    const elapsed = Math.round((Date.now() - startTime) / 1000)

    if (doc) {
      console.log('\n================================================')
      console.log(`  ✅ Artigo publicado com sucesso!`)
      console.log(`  Título: ${article.titulo}`)
      console.log(`  URL: ${SITE_URL}/blog/${article.slug}`)
      console.log(`  Tempo: ${elapsed}s`)
      console.log('================================================\n')
    }
  } catch (error: any) {
    console.error('\n❌ Erro:', error.message)
    process.exit(1)
  }

  process.exit(0)
}

main()
