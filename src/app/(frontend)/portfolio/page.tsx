import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Phone, Layout, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Conheça os sites para advogados e escritórios que desenvolvemos. Cases de sucesso com design profissional, SEO e alta conversão.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Seu Site Advogados',
    title: 'Portfólio | Seu Site Advogados',
    description: 'Conheça os sites para advogados e escritórios que desenvolvemos. Cases de sucesso com design profissional e SEO.',
    url: '/portfolio',
    images: [{ url: '/images/site-para-advogado.jpg', width: 1200, height: 630, alt: 'Seu Site Advogados' }],
  },
}

const onepageItems = [
  {
    nome: 'Angelina Roberta Advocacia',
    imageSrc: '/images/angelina-roberta-advocacia.webp',
    url: 'https://angelinaroberta.adv.br/',
    descricao: 'Página profissional com identidade visual exclusiva, textos persuasivos e chamadas para ação que geram contatos qualificados.',
  },
  {
    nome: 'Bernardes Oshiro Advogados',
    imageSrc: '/images/bernardes-oshiro.webp',
    url: 'https://bernardesoshiro.com.br/',
    descricao: 'Site responsivo para escritório associado, com apresentação institucional sólida e posicionamento digital que transmite autoridade.',
  },
  {
    nome: 'Da Costa Advocacia',
    imageSrc: '/images/da-costa.webp',
    url: 'https://dc.adv.br/',
    descricao: 'Site para advogados com layout objetivo, navegação intuitiva e estrutura pensada para transformar visitantes em consultas agendadas.',
  },
  {
    nome: 'Erycson Medeiros Advocacia',
    imageSrc: '/images/erycson-medeiros-advocacia.webp',
    url: 'https://erycsonmedeirosadvocacia.com/',
    descricao: 'Landing page estratégica com foco em captação de clientes, design moderno e integração direta com WhatsApp para contato imediato.',
  },
  {
    nome: 'Santos Miranda Advocacia',
    imageSrc: '/images/santos-miranda-advocacia-imobiliaria.webp',
    url: 'https://www.santosmiranda.adv.br/',
    descricao: 'Site jurídico especializado em direito imobiliário, com apresentação clara das áreas de atuação e formulário de captação otimizado.',
  },
  {
    nome: 'Seguins Advocacia',
    imageSrc: '/images/seguins-advocacia.webp',
    url: 'https://seguinsadvocacia.adv.br/',
    descricao: 'Criação de site jurídico com destaque para as especialidades do escritório, integração com WhatsApp e formulário estratégico de captação.',
  },
]

const multipaginasItems = [
  {
    nome: 'Alexandre Vitorino Advogados',
    imageSrc: '/images/alexandre-vitorino-advogados.webp',
    url: 'https://avadvogados.com.br/',
    descricao: 'Site multipáginas robusto com arquitetura SEO avançada, blog jurídico integrado e estrutura completa para posicionamento de autoridade no mercado.',
  },
  {
    nome: 'Belém Duarte Almeida Advogados',
    imageSrc: '/images/belem-duarte-almeida.webp',
    url: 'https://belemduartealmeida.com.br/',
    descricao: 'Site institucional de alto padrão com design premium, páginas segmentadas por área de atuação e presença digital que reflete a excelência do escritório.',
  },
  {
    nome: 'Ferreira & Mourão Advogados',
    imageSrc: '/images/ferreira-e-mourao-advogados.webp',
    url: 'https://ferreiramourao.com/',
    descricao: 'Site completo para escritório de advocacia com blog otimizado para SEO, páginas de áreas de atuação e funil de captação de clientes.',
  },
  {
    nome: 'Guilherme Bonfim Advocacia',
    imageSrc: '/images/guilherme-bonfim-advocacia.webp',
    url: 'https://guilhermebonfim.com/',
    descricao: 'Site para advogado com seções dedicadas a cada serviço, depoimentos de clientes e estrutura pensada para gerar confiança e autoridade.',
  },
]

function PortfolioGrid({ items }: { items: typeof onepageItems }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={item.imageSrc}
              alt={`Portfólio - Site para ${item.nome}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#162a2a] via-[#162a2a]/80 to-[#162a2a]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4 p-5">
              <p className="text-gray-200 text-xs font-lexend text-center leading-relaxed line-clamp-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {item.descricao}
              </p>
              <span className="inline-flex items-center gap-2 bg-[#de7322] hover:bg-[#c5631b] text-white px-5 py-2.5 rounded-lg font-lexend font-semibold text-sm transition-all duration-300 translate-y-4 group-hover:translate-y-0 delay-100 shrink-0">
                <ExternalLink size={16} />
                Visitar site
              </span>
            </div>
          </div>
          <div className="p-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#162a2a] font-lexend group-hover:text-[#b58c61] transition-colors duration-300">
                {item.nome}
              </h3>
              <div className="w-10 h-0.5 bg-[#b58c61] mt-2 group-hover:w-20 transition-all duration-500" />
            </div>
            <ExternalLink size={18} className="text-gray-400 group-hover:text-[#de7322] transition-colors duration-300" />
          </div>
        </a>
      ))}
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#162a2a] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#162a2a] via-[#162a2a]/95 to-[#1a3535]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#b58c61]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#de7322]/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-[#b58c61] font-lexend text-sm font-semibold tracking-widest uppercase mb-4">
            Nossos Trabalhos
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend mb-6">
            Sites para Advogados — <span className="text-[#b58c61]">Nosso Portfólio</span>
          </h1>
          <p className="text-gray-400 font-lexend text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Conheça alguns dos sites que desenvolvemos para advogados e escritórios de advocacia em todo o Brasil. Cada projeto é personalizado para refletir a identidade e os objetivos do profissional jurídico. <Link href="/quem-somos" className="text-[#b58c61] hover:text-[#de7322] underline underline-offset-2 transition-colors duration-300">Saiba mais sobre nossa equipe</Link> e como trabalhamos.
          </p>
          <div className="flex justify-center gap-8 mt-10">
            <div className="text-center">
              <span className="text-3xl font-bold text-[#b58c61] font-lexend">10</span>
              <p className="text-gray-400 font-lexend text-sm mt-1">Projetos concluídos</p>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <span className="text-3xl font-bold text-[#b58c61] font-lexend">100%</span>
              <p className="text-gray-400 font-lexend text-sm mt-1">Aprovação dos clientes</p>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <span className="text-3xl font-bold text-[#b58c61] font-lexend">SEO</span>
              <p className="text-gray-400 font-lexend text-sm mt-1">Em todos os projetos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sites OnePage */}
      <section className="py-20 md:py-28 bg-[#eaecec]">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-[#162a2a] rounded-xl flex items-center justify-center">
              <Layout size={24} className="text-[#b58c61]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend">
                Sites OnePage <span className="text-[#b58c61]">(Landing Page)</span>
              </h2>
              <p className="text-gray-600 font-lexend text-sm mt-1">
                Soluções compactas e eficientes, com todas as informações reunidas em uma única página. Perfeitas para advogados que buscam presença digital imediata com foco em resultados.
              </p>
            </div>
          </div>
          <PortfolioGrid items={onepageItems} />
        </div>
      </section>

      {/* Sites Multipáginas */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-[#162a2a] rounded-xl flex items-center justify-center">
              <Layers size={24} className="text-[#b58c61]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend">
                Sites Multipáginas
              </h2>
              <p className="text-gray-600 font-lexend text-sm mt-1">
                Projetos completos com estrutura de múltiplas páginas, blog jurídico e SEO avançado. A escolha ideal para escritórios que desejam se posicionar como referência na área.
              </p>
            </div>
          </div>
          <PortfolioGrid items={multipaginasItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#162a2a]">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-[#1e3a3a] to-[#162a2a] border border-[#b58c61]/20 rounded-2xl p-10 md:p-14 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-lexend mb-4">
              Pronto para ter um site como esses?
            </h2>
            <p className="text-gray-400 font-lexend mb-8 leading-relaxed">
              Desenvolvemos o site ideal para o seu escritório de advocacia, com design profissional, otimização para o Google e foco total em atrair novos clientes. <Link href="/blog" className="text-[#b58c61] hover:text-[#de7322] underline underline-offset-2 transition-colors duration-300">Confira nosso blog</Link> para dicas sobre presença digital jurídica, ou <Link href="/contatos" className="text-[#b58c61] hover:text-[#de7322] underline underline-offset-2 transition-colors duration-300">solicite uma proposta personalizada</Link>.
            </p>
            <a
              href="https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#de7322] hover:bg-[#ba5918] text-white px-8 py-4 rounded-lg font-lexend font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#de7322]/30"
            >
              <Phone size={20} />
              Quero fazer meu site
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
