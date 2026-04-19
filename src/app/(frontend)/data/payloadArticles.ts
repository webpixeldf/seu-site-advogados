export interface PayloadArticle {
  titulo: string
  slug: string
  resumo: string
  imagemUrl: string
  publishedAt: string
  conteudoHtml: string
}

export async function getPayloadArticles(): Promise<PayloadArticle[]> {
  return []
}

export async function getPayloadArticleBySlug(_slug: string): Promise<PayloadArticle | null> {
  return null
}
