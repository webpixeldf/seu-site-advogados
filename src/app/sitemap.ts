import { MetadataRoute } from 'next'
import { blogPosts } from './(frontend)/data/blogPosts'

export const dynamic = 'force-static'

const BASE_URL = 'https://seusiteadvogados.com.br'

const cidades = [
  'alto-alegre', 'araraquara', 'belem-do-para', 'belo-horizonte', 'blumenau',
  'boa-vista', 'campinas', 'campo-grande', 'caracarai', 'cascavel',
  'caxias-do-sul', 'chapeco', 'curitiba', 'florianopolis', 'fortaleza',
  'goiania', 'guarulhos', 'itajai', 'joao-pessoa', 'joinville',
  'londrina', 'maceio', 'manaus', 'maringa', 'mogi-das-cruzes',
  'porto-alegre', 'portugal', 'recife', 'ribeirao-preto', 'rio-de-janeiro',
  'rorainopolis', 'salvador', 'santa-catarina', 'sao-jose-dos-campos',
  'sao-luis', 'sao-paulo', 'uberlandia',
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
