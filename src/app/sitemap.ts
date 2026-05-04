import { MetadataRoute } from 'next'
import { blogPosts } from './(frontend)/data/blogPosts'

export const dynamic = 'force-static'

const BASE_URL = 'https://seusiteadvogados.com.br'

const cidades = [
  'sao-paulo', 'rio-de-janeiro', 'belo-horizonte', 'curitiba',
  'porto-alegre', 'salvador', 'fortaleza', 'recife',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/quem-somos`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contatos`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/site-para-advogados`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/politica-de-privacidade`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const cidadePages: MetadataRoute.Sitemap = cidades.map((slug) => ({
    url: `${BASE_URL}/site-para-advogados/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...cidadePages, ...blogPages]
}
