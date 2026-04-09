import path from 'path'

interface PayloadArticle {
  titulo: string
  slug: string
  resumo: string
  imagemUrl: string
  publishedAt: string
  conteudoHtml: string
}

export async function getPayloadArticles(): Promise<PayloadArticle[]> {
  try {
    const Database = (await import('better-sqlite3')).default
    const dbPath = path.resolve(process.cwd(), 'database.db')
    const db = new Database(dbPath, { readonly: true })

    const rows = db.prepare(`
      SELECT titulo, slug, resumo, conteudo, published_at, seo_meta_description
      FROM blog
      WHERE status = 'publicado'
      ORDER BY published_at DESC
      LIMIT 100
    `).all() as any[]

    db.close()

    return rows.map((row) => ({
      titulo: row.titulo || '',
      slug: row.slug || '',
      resumo: row.resumo || row.seo_meta_description || '',
      imagemUrl: `/images/blog/${row.slug}.webp`,
      publishedAt: row.published_at || new Date().toISOString(),
      conteudoHtml: row.conteudo || '',
    }))
  } catch (e) {
    console.error('Erro ao ler artigos do banco:', e)
    return []
  }
}

export async function getPayloadArticleBySlug(slug: string): Promise<PayloadArticle | null> {
  try {
    const Database = (await import('better-sqlite3')).default
    const dbPath = path.resolve(process.cwd(), 'database.db')
    const db = new Database(dbPath, { readonly: true })

    const row = db.prepare(`
      SELECT titulo, slug, resumo, conteudo, published_at, seo_meta_description
      FROM blog
      WHERE slug = ? AND status = 'publicado'
      LIMIT 1
    `).get(slug) as any

    db.close()

    if (!row) return null

    return {
      titulo: row.titulo || '',
      slug: row.slug || '',
      resumo: row.resumo || row.seo_meta_description || '',
      imagemUrl: `/images/blog/${row.slug}.webp`,
      publishedAt: row.published_at || new Date().toISOString(),
      conteudoHtml: row.conteudo || '',
    }
  } catch (e) {
    console.error('Erro ao ler artigo do banco:', e)
    return null
  }
}
