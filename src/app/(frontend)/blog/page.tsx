import { Metadata } from 'next'
import Link from 'next/link'
import BlogSearch from '../components/BlogSearch'
import Breadcrumbs from '../components/Breadcrumbs'
import { Phone } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'
import { getPayloadArticles } from '../data/payloadArticles'

export const metadata: Metadata = {
  title: 'Blog Jurídico | Seu Site Advogados',
  description: 'Artigos e estratégias de marketing digital para advogados. SEO jurídico, redes sociais e captação de clientes para escritórios.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Seu Site Advogados',
    title: 'Blog Jurídico | Seu Site Advogados',
    description: 'Artigos e estratégias de marketing digital para advogados. SEO jurídico, redes sociais e captação de clientes.',
    url: '/blog',
    images: [{ url: '/images/site-para-advogado.jpg', width: 1200, height: 630, alt: 'Seu Site Advogados' }],
  },
}

export default async function BlogPage() {
  const payloadArticles = await getPayloadArticles()
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#162a2a] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#b58c61] rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#de7322] rounded-full blur-[128px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog' },
            ]}
          />
          <div className="text-center mt-8">
            <span className="inline-block font-lexend text-[#b58c61] text-sm font-semibold tracking-widest uppercase mb-4">
              Conhecimento Jurídico Digital
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend mb-6">
              Blog <span className="text-[#b58c61]">Jurídico</span>
            </h1>
            <p className="text-gray-400 font-lexend text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Dicas práticas de marketing digital, SEO e presença online pensadas
              especialmente para advogados e escritórios de advocacia.
            </p>
            <div className="mt-8 w-20 h-1 bg-gradient-to-r from-[#b58c61] to-[#de7322] mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend">
              Todos os <span className="text-[#b58c61]">Artigos</span>
            </h2>
            <p className="text-gray-500 font-lexend mt-3">
              {blogPosts.length + payloadArticles.length} artigos pra você aplicar no seu escritório hoje
            </p>
          </div>

          <BlogSearch posts={[...payloadArticles, ...blogPosts]} />

          {/* Internal link to homepage */}
          <div className="mt-16 text-center p-8 bg-white rounded-2xl border border-gray-200">
            <p className="text-gray-700 font-lexend leading-relaxed max-w-2xl mx-auto">
              Quer colocar essas estratégias em prática com um site profissional? Somos especialistas em{' '}
              <Link href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors" title="Criação de site para advogados">
                criação de sites para advogados
              </Link>{' '}
              com SEO otimizado, design exclusivo e foco total em conversão de clientes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#162a2a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b58c61] rounded-full blur-[200px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-lexend mb-6">
            Quer um site que <span className="text-[#b58c61]">traga clientes</span> para
            seu escritório?
          </h2>
          <p className="text-gray-400 font-lexend text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Chama no WhatsApp, conta o que você precisa e a gente monta uma proposta
            sob medida pro seu escritório.
          </p>
          <a
            href="https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#de7322] hover:bg-[#c5641d] text-white font-lexend font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#de7322]/30"
          >
            <Phone size={20} />
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
