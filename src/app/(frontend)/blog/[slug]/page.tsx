import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Share2, Phone, ArrowRight } from 'lucide-react'
import Breadcrumbs from '../../components/Breadcrumbs'
import { blogPosts, getRelatedPosts, getHomepageAnchor } from '../../data/blogPosts'
import { getArticleContent } from '../../data/articles'
import { getPayload } from 'payload'
import config from '@payload-config'

// Revalidar a cada 1 hora
export const revalidate = 3600

// Buscar artigo dinâmico do Payload CMS
async function getPayloadArticle(slug: string) {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'blog',
      where: {
        slug: { equals: slug },
        status: { equals: 'publicado' },
      },
      limit: 1,
    })
    return result.docs[0] || null
  } catch {
    return null
  }
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  const title = post
    ? post.titulo
    : slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

  // Canonical para homepage em artigos que competem pela mesma keyword
  const canonicalToHome = slug === 'criacao-de-site-para-advogados'

  return {
    title: title,
    description: post
      ? post.resumo
      : `Leia o artigo completo sobre ${title.toLowerCase()} no blog do Seu Site Advogados.`,
    alternates: { canonical: canonicalToHome ? '/' : `/blog/${slug}` },
    openGraph: {
      title,
      description: post?.resumo || `Artigo sobre ${title.toLowerCase()}`,
      url: `/blog/${slug}`,
      type: 'article',
      images: post ? [{ url: post.imagemUrl, alt: title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post?.resumo || `Artigo sobre ${title.toLowerCase()}`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  // Buscar artigo dinâmico do Payload se não existir nos estáticos
  const payloadArticle = !post ? await getPayloadArticle(slug) : null

  const title = post
    ? post.titulo
    : payloadArticle
      ? (payloadArticle as any).titulo
      : slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  const relatedPosts = getRelatedPosts(slug, 3)
  const postIndex = blogPosts.findIndex((p) => p.slug === slug)
  const anchor = getHomepageAnchor(postIndex >= 0 ? postIndex : 0)
  const articleContent = getArticleContent(slug)
  const payloadHtml = payloadArticle ? (payloadArticle as any).conteudo : null

  return (
    <>
      {/* Hero */}
      <section className="bg-[#162a2a] section-padding">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: title },
            ]}
          />
          <div className="mt-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#b58c61] hover:text-[#d4a876] font-lexend font-medium mb-8 transition-colors"
            >
              <ArrowLeft size={18} />
              Voltar ao blog
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-lexend mb-6 max-w-4xl">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400 font-lexend text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime={post ? post.publishedAt : '2025-12-10'}>Publicado em {post ? new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }) : '10 de dezembro de 2025'}</time>
            </div>
            <a href="/quem-somos" className="author text-gray-400 font-lexend text-sm hover:text-[#b58c61] transition-colors" rel="author">Por <span itemProp="author" itemScope itemType="https://schema.org/Organization"><span itemProp="name">Seu Site Advogados</span></span></a>
          </div>
        </div>
      </section>

      {post && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: title,
              description: post.resumo,
              image: `https://seusiteadvogados.com.br${post.imagemUrl}`,
              datePublished: post.publishedAt,
              dateModified: post.publishedAt,
              author: {
                '@type': 'Organization',
                name: 'Seu Site Advogados',
                url: 'https://seusiteadvogados.com.br',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://seusiteadvogados.com.br/images/seu-site-advogados-logo.webp',
                },
              },
              publisher: {
                '@type': 'Organization',
                name: 'Seu Site Advogados',
                url: 'https://seusiteadvogados.com.br',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://seusiteadvogados.com.br/images/seu-site-advogados-logo.webp',
                },
              },
            }),
          }}
        />
      )}

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Share buttons */}
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-200">
              <span className="text-sm font-lexend text-gray-500 flex items-center gap-2">
                <Share2 size={16} />
                Compartilhar:
              </span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://seusiteadvogados.com.br/blog/${slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-lexend text-[#162a2a] hover:text-[#b58c61] transition-colors font-medium"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=https://seusiteadvogados.com.br/blog/${slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-lexend text-[#162a2a] hover:text-[#b58c61] transition-colors font-medium"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://seusiteadvogados.com.br/blog/${slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-lexend text-[#162a2a] hover:text-[#b58c61] transition-colors font-medium"
              >
                LinkedIn
              </a>
              <a
                href={`https://wa.me/?text=https://seusiteadvogados.com.br/blog/${slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-lexend text-[#162a2a] hover:text-[#b58c61] transition-colors font-medium"
              >
                WhatsApp
              </a>
            </div>

            {/* AEO Answer Block - concise answer for AI extraction */}
            {post && (
              <div className="speakable-answer bg-[#f5f5f0] border-l-4 border-[#b58c61] px-6 py-4 mb-10 rounded-r-lg">
                <p className="text-gray-800 font-lexend text-base leading-relaxed font-medium">
                  {post.resumo}
                </p>
              </div>
            )}

            {/* Article body */}
            <article className="prose prose-lg max-w-none font-lexend">
              {articleContent || payloadHtml ? (
                payloadHtml ? (
                  <div dangerouslySetInnerHTML={{ __html: payloadHtml }} className="text-gray-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#162a2a] [&_h2]:font-lexend [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#162a2a] [&_h3]:font-lexend [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-[#de7322] [&_a]:font-semibold [&_a]:hover:text-[#ba5918] [&_strong]:text-[#162a2a]" />
                ) : (
                  articleContent
                )
              ) : (
                <>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Este artigo está sendo produzido pela nossa equipe de conteúdo e será publicado em breve.
                    Enquanto isso, confira nosso serviço de{' '}
                    <Link href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors" title={anchor.title}>
                      {anchor.text}
                    </Link>{' '}
                    ou explore outros artigos do nosso blog.
                  </p>
                </>
              )}
            </article>

            {/* Internal link to homepage */}
            <div className="mt-10 p-6 bg-[#f5f5f0] rounded-xl border border-gray-200">
              <p className="text-gray-700 font-lexend text-sm leading-relaxed">
                Precisa de um site profissional para seu escritório? Somos especialistas em{' '}
                <Link href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors" title="Site para Advogados - Criação profissional">
                  site para advogados
                </Link>{' '}
                com design exclusivo, SEO otimizado e foco em conversão. Confira nosso{' '}
                <Link href="/portfolio" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors" title="Portfólio de sites para advogados">
                  portfólio de sites jurídicos
                </Link>{' '}
                e veja os resultados que entregamos.
              </p>
            </div>

            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-[#162a2a] font-lexend mb-6">
                  Artigos relacionados
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group"
                    >
                      <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-3">
                        <Image
                          src={related.imagemUrl}
                          alt={related.titulo}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-sm font-bold text-[#162a2a] font-lexend group-hover:text-[#de7322] transition-colors leading-snug block">
                        {related.titulo}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to blog */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#de7322] hover:text-[#ba5918] font-lexend font-semibold transition-colors"
              >
                <ArrowLeft size={18} />
                Voltar ao blog
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#162a2a] hover:text-[#b58c61] font-lexend font-medium text-sm transition-colors"
                title="Conheça nossos serviços de criação de sites para advogados"
              >
                Conheça nossos serviços
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#eaecec]">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend mb-4">
            Gostou do conteúdo? Vamos <span className="text-[#b58c61]">conversar</span>!
          </h2>
          <p className="text-gray-600 font-lexend mb-8 max-w-xl mx-auto">
            Descubra como podemos criar um{' '}
            <Link href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors" title="Site profissional para escritório de advocacia">
              site profissional para seu escritório de advocacia
            </Link>.
          </p>
          <a
            href="https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Phone size={18} />
            Quero fazer um site
          </a>
        </div>
      </section>
    </>
  )
}
