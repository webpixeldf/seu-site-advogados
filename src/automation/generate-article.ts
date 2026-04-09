import { DEEPSEEK_API_KEY, PEXELS_API_KEY, SITE_URL, HOMEPAGE_ANCHORS, ARTICLE_TOPICS } from './config'
import * as fs from 'fs'
import * as path from 'path'
import * as crypto from 'crypto'

const DB_PATH = path.resolve(process.cwd(), 'database.db')
const IMAGES_DIR = path.resolve(process.cwd(), 'public', 'images', 'blog')

// ============================================
// 1. DEEPSEEK: Gerar artigo original
// ============================================

async function generateArticle(): Promise<{
  titulo: string
  slug: string
  resumo: string
  conteudo: string
  tags: string[]
  keyword: string
}> {
  // Escolher tema aleatório
  const topic = ARTICLE_TOPICS[Math.floor(Math.random() * ARTICLE_TOPICS.length)]

  // Escolher anchor text aleatório para linkagem interna
  const anchor = HOMEPAGE_ANCHORS[Math.floor(Math.random() * HOMEPAGE_ANCHORS.length)]

  const prompt = `Você é um redator especializado em marketing digital para advogados no Brasil.
Escreva um artigo ORIGINAL e COMPLETO sobre: "${topic}"

REGRAS OBRIGATÓRIAS:
1. O artigo deve ter entre 1.200 e 2.000 palavras
2. Use linguagem natural em português brasileiro, como se um profissional de marketing estivesse explicando para um advogado
3. NÃO use frases genéricas como "no cenário atual", "é fundamental", "é essencial"
4. NÃO comece parágrafos com "Descubra", "Aprenda", "Saiba", "Entenda"
5. Use exemplos práticos e específicos para advogados
6. Mencione áreas de atuação reais (trabalhista, previdenciário, tributário, família, criminal, etc.)
7. Inclua dados concretos quando possível
8. O texto deve seguir as diretrizes da OAB sobre publicidade advocatícia

ESTRUTURA OBRIGATÓRIA:
- Título (máximo 60 caracteres, com a keyword principal)
- Meta description (máximo 155 caracteres, sem começar com "Descubra/Aprenda/Saiba")
- 4 a 6 subtítulos H2
- Parágrafos curtos (máximo 4 linhas)
- Pelo menos 1 lista com bullets
- 1 link interno natural para ${SITE_URL} com o texto âncora "${anchor}"
- 3 tags relevantes (uma palavra cada)

FORMATO DE RESPOSTA (JSON):
{
  "titulo": "Título do artigo aqui",
  "slug": "titulo-do-artigo-aqui",
  "resumo": "Meta description aqui com no máximo 155 caracteres",
  "tags": ["tag1", "tag2", "tag3"],
  "keyword": "palavra chave principal",
  "conteudo": "<h2>Primeiro subtítulo</h2><p>Parágrafo...</p><h2>Segundo subtítulo</h2><p>Parágrafo...</p>..."
}

IMPORTANTE sobre o conteúdo HTML:
- Use apenas tags: <h2>, <h3>, <p>, <ul>, <li>, <strong>, <a>
- O link interno deve ser: <a href="${SITE_URL}">${anchor}</a>
- NÃO use <h1> (o template já tem)
- NÃO inclua imagens no HTML (a imagem é adicionada separadamente)
- Escreva conteúdo 100% original, NÃO copie de nenhuma fonte`

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
      temperature: 0.8,
      max_tokens: 4000,
    }),
  })

  if (!response.ok) {
    throw new Error(`DeepSeek API error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  const content = data.choices[0].message.content.trim()

  // Limpar possível markdown wrapping
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
// 2. PEXELS: Baixar imagem relacionada
// ============================================

async function downloadImage(keyword: string, slug: string): Promise<string> {
  // Criar diretório se não existir
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true })
  }

  // Buscar imagem no Pexels
  const searchQuery = encodeURIComponent(keyword + ' lawyer office professional')
  const response = await fetch(`https://api.pexels.com/v1/search?query=${searchQuery}&per_page=5&orientation=landscape`, {
    headers: { Authorization: PEXELS_API_KEY },
  })

  if (!response.ok) {
    throw new Error(`Pexels API error: ${response.status}`)
  }

  const data = await response.json()

  if (!data.photos || data.photos.length === 0) {
    // Fallback: buscar por "lawyer" genérico
    const fallback = await fetch(`https://api.pexels.com/v1/search?query=lawyer+office&per_page=3&orientation=landscape`, {
      headers: { Authorization: PEXELS_API_KEY },
    })
    const fallbackData = await fallback.json()
    if (!fallbackData.photos?.length) {
      throw new Error('Nenhuma imagem encontrada no Pexels')
    }
    data.photos = fallbackData.photos
  }

  // Escolher foto aleatória dos resultados
  const photo = data.photos[Math.floor(Math.random() * data.photos.length)]
  const imageUrl = photo.src.landscape // 1200x628 aprox

  // Baixar imagem
  const imgResponse = await fetch(imageUrl)
  const imgBuffer = Buffer.from(await imgResponse.arrayBuffer())

  // Converter para WebP 1200x630 usando sharp
  const sharp = (await import('sharp')).default
  const filename = `${slug}.webp`
  const filepath = path.join(IMAGES_DIR, filename)

  await sharp(imgBuffer)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .webp({ quality: 80, effort: 6 })
    .toFile(filepath)

  const sizeKB = Math.round(fs.statSync(filepath).size / 1024)
  console.log(`  Imagem: ${filename} (${sizeKB}KB)`)

  return `/images/blog/${filename}`
}

// ============================================
// 3. SQLITE: Salvar diretamente no banco
// ============================================

async function saveToDatabase(article: {
  titulo: string
  slug: string
  resumo: string
  conteudo: string
  tags: string[]
  imagemUrl: string
  keyword: string
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

  const id = crypto.randomUUID()
  const now = new Date().toISOString()

  const stmt = db.prepare(`
    INSERT INTO blog (id, titulo, slug, resumo, conteudo_html, imagem_url, status, published_at, destaque, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  try {
    stmt.run(id, article.titulo, article.slug, article.resumo, article.conteudo, article.imagemUrl, 'publicado', now, 0, now, now)
    console.log(`  Salvo no banco: ID ${id}`)
    db.close()
    return { id }
  } catch (e: any) {
    // Se a tabela não tem as colunas certas, tentar com nomes alternativos do Drizzle/Payload
    console.log('  Tentando formato alternativo de colunas...')
    try {
      const cols = db.prepare("PRAGMA table_info(blog)").all() as any[]
      const colNames = cols.map((c: any) => c.name)
      console.log('  Colunas:', colNames.join(', '))

      // Payload/Drizzle pode usar camelCase ou snake_case
      const insertSql = `INSERT INTO blog (id, titulo, slug, resumo, ${colNames.includes('conteudoHtml') ? 'conteudoHtml' : colNames.includes('conteudo_html') ? 'conteudo_html' : 'conteudo_html'}, ${colNames.includes('imagemUrl') ? 'imagemUrl' : colNames.includes('imagem_url') ? 'imagem_url' : 'imagem_url'}, status, ${colNames.includes('publishedAt') ? 'publishedAt' : colNames.includes('published_at') ? 'published_at' : 'published_at'}, destaque, ${colNames.includes('createdAt') ? 'createdAt' : colNames.includes('created_at') ? 'created_at' : 'created_at'}, ${colNames.includes('updatedAt') ? 'updatedAt' : colNames.includes('updated_at') ? 'updated_at' : 'updated_at'}) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

      db.prepare(insertSql).run(id, article.titulo, article.slug, article.resumo, article.conteudo, article.imagemUrl, 'publicado', now, 0, now, now)
      console.log(`  Salvo no banco (formato alt): ID ${id}`)
      db.close()
      return { id }
    } catch (e2: any) {
      console.error('  Erro ao salvar:', e2.message)
      db.close()
      throw e2
    }
  }
}

// ============================================
// 4. EXECUÇÃO PRINCIPAL
// ============================================

async function main() {
  const startTime = Date.now()

  console.log('')
  console.log('================================================')
  console.log('  Geração Automática de Artigo')
  console.log(`  ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`)
  console.log('================================================')

  try {
    // 1. Gerar artigo via DeepSeek
    console.log('\n[1/3] Gerando artigo via DeepSeek...')
    const article = await generateArticle()
    console.log(`  Título: ${article.titulo}`)
    console.log(`  Slug: ${article.slug}`)
    console.log(`  Tags: ${article.tags.join(', ')}`)

    // 2. Baixar imagem do Pexels
    console.log('\n[2/3] Baixando imagem do Pexels...')
    const imagemUrl = await downloadImage(article.keyword, article.slug)
    console.log(`  URL: ${imagemUrl}`)

    // 3. Salvar no banco
    console.log('\n[3/3] Salvando no banco de dados...')
    const doc = await saveToDatabase({
      ...article,
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
