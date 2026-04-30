import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import SectionTitle from './components/SectionTitle'
import ServiceCard from './components/ServiceCard'
import PortfolioCard from './components/PortfolioCard'
import CounterSection from './components/CounterSection'
import ContactForm from './components/ContactForm'
import FAQAccordion from './components/FAQAccordion'
import {
  Scale,
  Shield,
  Users,
  Globe,
  Monitor,
  MessageSquare,
  MapPin,
  Star,
  Mail,
  Lock,
  BookOpen,
  UserPlus,
  Server,
  CheckCircle,
  Trophy,
  Briefcase,
  TrendingUp,
  Phone,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: { absolute: 'Criação de Site para Advogado que Capta Clientes no Google' },
  description: 'Criação de site para advogado com design exclusivo, SEO técnico, WhatsApp, blog jurídico e estrutura para gerar contatos pelo Google.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Seu Site Advogados',
    title: 'Criação de Site para Advogado que Capta Clientes no Google',
    description: 'Criamos sites para advogados e escritórios de advocacia com design exclusivo, SEO otimizado e landing pages que captam clientes. Veja nosso portfólio.',
    url: '/',
    images: [{ url: '/images/site-para-advogado.jpg', width: 1200, height: 630, alt: 'Escritório de advocacia com site profissional' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@seusiteadvogados',
    creator: '@seusiteadvogados',
    title: 'Criação de Site para Advogados que Capta Clientes',
    description: 'Criação de site para advogado com design exclusivo, SEO e captação de clientes. A partir de 3x de R$ 260,00.',
    images: ['/images/site-para-advogado.jpg'],
  },
}

const WHATSAPP_URL =
  'https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20um%20or%C3%A7amento.'

const faqItems = [
  {
    pergunta: 'Quanto custa criar um site jurídico?',
    resposta:
      'O valor inicial é de 3x de R$ 260,00. Projetos mais completos, como sites multipáginas com blog integrado, variam conforme a necessidade do escritório. Fale conosco pelo WhatsApp para receber uma proposta personalizada.',
  },
  {
    pergunta: 'Em quanto tempo o site fica pronto?',
    resposta:
      'Um site para advogado no formato landing page pode ficar pronto em até 5 dias úteis. Sites mais completos levam de 7 a 15 dias. O prazo começa após o envio dos seus materiais.',
  },
  {
    pergunta: 'Um site jurídico realmente traz clientes?',
    resposta:
      'Sim. Um site otimizado permite que você apareça no Google quando alguém busca por um advogado na sua cidade ou área de atuação. Com a estrutura certa, se torna um canal constante de novos contatos.',
  },
  {
    pergunta: 'Preciso ter textos prontos?',
    resposta:
      'Não. Criamos o conteúdo do seu site de advocacia com foco em conversão e otimização para buscas, dentro das diretrizes da OAB.',
  },
  {
    pergunta: 'Funciona para advogado iniciante?',
    resposta:
      'Sim. Um site profissional é uma das formas mais rápidas de começar a captar clientes sem depender apenas de indicações, mesmo no início da carreira.',
  },
  {
    pergunta: 'Funciona para advogado autônomo?',
    resposta:
      'Sim. Ter um site próprio permite crescer de forma independente, apresentando suas especialidades e recebendo contatos diretamente pelo Google.',
  },
  {
    pergunta: 'Por que ter um site para advogado e não apenas redes sociais?',
    resposta:
      'Redes sociais são importantes, mas você não controla o algoritmo nem a plataforma. Um site próprio aparece no Google quando alguém busca por um advogado, centraliza todas as informações do escritório e transmite credibilidade de forma que nenhum perfil de rede social consegue.',
  },
  {
    pergunta: 'Qual a diferença entre site e landing page para advogados?',
    resposta:
      'A landing page é focada em conversão — ideal para campanhas de tráfego pago. Já o site para escritório de advocacia é mais completo, com múltiplas páginas, blog e conteúdo que trabalha o posicionamento orgânico a longo prazo.',
  },
]

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.pergunta,
    acceptedAnswer: { '@type': 'Answer', text: item.resposta },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Início',
      item: 'https://seusiteadvogados.com.br/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Criação de Site para Advogados',
      item: 'https://seusiteadvogados.com.br/',
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ========== SECTION 1: HERO ========== */}
      <section className="relative min-h-screen bg-[#162a2a] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/bg-hero-site-para-advogado.webp"
          alt="Criação de site profissional para advogados e escritórios de advocacia"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#162a2a] via-[#162a2a]/80 to-[#162a2a]/60" />

        {/* Decorative gold lines */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-transparent via-[#b58c61]/30 to-transparent" />
          <div className="absolute top-40 left-20 w-px h-60 bg-gradient-to-b from-transparent via-[#b58c61]/20 to-transparent" />
          <div className="absolute bottom-20 left-1/4 w-32 h-px bg-gradient-to-r from-[#b58c61]/30 to-transparent" />
          <div className="absolute top-1/3 right-0 w-1 h-80 bg-gradient-to-b from-transparent via-[#b58c61]/40 to-transparent" />
          <div className="absolute top-1/4 right-12 w-1 h-60 bg-gradient-to-b from-transparent via-[#b58c61]/20 to-transparent" />
          <div className="absolute bottom-1/4 right-6 w-1 h-40 bg-gradient-to-b from-transparent via-[#b58c61]/30 to-transparent" />
          <div className="absolute top-10 right-20 w-40 h-40 border border-[#b58c61]/10 rounded-full" />
          <div className="absolute bottom-32 right-32 w-64 h-64 border border-[#b58c61]/10 rounded-full" />
        </div>

        {/* Right side decorative gold border elements */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 pointer-events-none">
          <div className="absolute top-1/4 right-4 w-px h-32 bg-[#b58c61]/50" />
          <div className="absolute top-1/4 right-4 w-6 h-px bg-[#b58c61]/50" />
          <div className="absolute top-1/4 right-4 translate-y-32 w-6 h-px bg-[#b58c61]/50" />
          <div className="absolute bottom-1/4 right-8 w-px h-48 bg-[#b58c61]/30" />
          <div className="absolute bottom-1/4 right-8 w-8 h-px bg-[#b58c61]/30" />
          <div className="absolute bottom-1/4 right-8 translate-y-48 w-8 h-px bg-[#b58c61]/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#b58c61] rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#b58c61] animate-pulse" />
              <span className="text-[#b58c61] text-sm font-lexend font-medium">
                Especialistas em Sites Jurídicos e Escritórios de Advocacia
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend leading-tight mb-4">
              Criação de Site para Advogado
            </h1>
            {/* Paragraphs */}
            <p className="text-gray-300 text-lg md:text-xl font-lexend leading-relaxed mb-4">
              Site profissional para advogado autônomo, jovem advogado e escritório de advocacia que deseja atrair contatos pelo Google com mais segurança, autoridade e previsibilidade.
            </p>
            <p className="text-gray-300 text-lg md:text-xl font-lexend leading-relaxed mb-6">
              Criamos sites jurídicos sob medida, com design exclusivo, SEO técnico, páginas estratégicas e estrutura pensada para transformar visitas em contatos.
            </p>

            {/* Price */}
            <div className="mb-8">
              <span className="text-[#b58c61] font-lexend text-sm font-medium uppercase tracking-wider">A partir de</span>
              <span className="block text-white font-lexend mt-1">
                <span className="font-semibold text-xl md:text-2xl align-middle">3x </span>
                <span className="font-extrabold text-3xl md:text-4xl align-middle">R$ 260,00</span>
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#de7322] hover:bg-[#ba5918] text-white px-8 py-4 rounded-lg font-lexend font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#de7322]/30"
              >
                <Phone size={20} />
                Solicite um orçamento grátis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: DOR ========== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#162a2a] to-[#0d1b1b]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Scale size={64} className="text-[#b58c61] mx-auto mb-4" />
                    <p className="text-[#b58c61] font-lexend font-semibold text-lg">
                      Seu Site Advogados
                    </p>
                  </div>
                </div>
                <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-[#b58c61]/40 rounded-tl-xl" />
                <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-[#b58c61]/40 rounded-br-xl" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-[#b58c61]/20 -z-10" />
            </div>

            {/* Right: content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#162a2a] font-lexend mb-6">
                Seu escritório ainda depende só de indicação?
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <span className="block w-8 h-1 bg-[#b58c61] rounded-full" />
                <span className="block w-16 h-1 bg-[#b58c61] rounded-full" />
              </div>

              <p className="text-gray-600 font-lexend leading-relaxed mb-4">
                Muitos advogados vivem a mesma situação: fazem um bom trabalho, recebem indicações, mas não têm uma entrada constante de novos contatos.
              </p>
              <p className="text-gray-600 font-lexend leading-relaxed mb-4">
                O problema é simples. Indicação ajuda, mas não dá controle.
              </p>
              <p className="text-gray-600 font-lexend leading-relaxed mb-4">
                Um mês pode ser ótimo. O outro pode ficar parado.
              </p>
              <p className="text-gray-600 font-lexend leading-relaxed mb-8">
                Um <strong>site para advogado</strong> bem planejado cria um canal próprio de presença digital. Quando alguém pesquisa por um serviço jurídico no Google, seu escritório pode ser encontrado com clareza, autoridade e uma apresentação profissional.
              </p>

              <h3 className="text-xl font-bold text-[#162a2a] font-lexend mb-5">
                Mais que um cartão de visita online, um site jurídico ajuda a:
              </h3>

              <div className="space-y-4 mb-8">
                {[
                  'Apresentar suas áreas de atuação',
                  'Explicar como você pode ajudar',
                  'Transmitir confiança antes do primeiro contato',
                  'Facilitar o envio de mensagem pelo WhatsApp',
                  'Fortalecer sua imagem profissional',
                  'Gerar oportunidades fora da sua rede de indicações',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#b58c61]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-[#b58c61]" />
                    </div>
                    <p className="text-gray-600 font-lexend text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 font-lexend leading-relaxed mb-8">
                Quando uma pessoa procura um advogado, ela compara opções. Um site bem feito pode pesar bastante nessa escolha.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#de7322] hover:bg-[#ba5918] text-white px-8 py-3.5 rounded-lg font-lexend font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                <MessageSquare size={18} />
                Fale com um especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: BENEFÍCIOS ========== */}
      <section className="bg-[#eaecec] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Criação de site para advogado que gera confiança antes da consulta"
            subtitle="O cliente jurídico geralmente chega com dúvida, insegurança e pressa para entender o que pode ser feito."
          />

          <div className="max-w-3xl mx-auto mb-12 space-y-4">
            <p className="text-gray-600 font-lexend text-base md:text-lg leading-relaxed text-center">
              Um site profissional organiza essa primeira impressão.
            </p>
            <p className="text-gray-600 font-lexend text-base md:text-lg leading-relaxed text-center">
              Ele mostra quem você é, quais áreas atende, como funciona o contato e por que o cliente pode confiar no seu trabalho.
            </p>
            <p className="text-gray-600 font-lexend text-base md:text-lg leading-relaxed text-center">
              Na prática, melhora pontos importantes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <Trophy size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-[#162a2a] font-lexend font-bold text-lg mb-3">
                Mais autoridade no Google
              </h3>
              <p className="text-gray-600 font-lexend text-sm leading-relaxed">
                Com páginas bem estruturadas, seu escritório passa a ter mais chances de aparecer para pessoas que já estão pesquisando por temas ligados à sua atuação.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <Users size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-[#162a2a] font-lexend font-bold text-lg mb-3">
                Menos dependência de indicação
              </h3>
              <p className="text-gray-600 font-lexend text-sm leading-relaxed">
                Seu site cria um canal próprio de entrada de contatos. O cliente pode encontrar você mesmo sem conhecer alguém que indique seu nome.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-[#162a2a] font-lexend font-bold text-lg mb-3">
                Atendimento mais rápido
              </h3>
              <p className="text-gray-600 font-lexend text-sm leading-relaxed">
                Botões de WhatsApp, formulários e chamadas bem posicionadas reduzem o caminho entre a pesquisa e o contato.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-[#162a2a] font-lexend font-bold text-lg mb-3">
                Imagem mais profissional
              </h3>
              <p className="text-gray-600 font-lexend text-sm leading-relaxed">
                Um site antigo, lento ou genérico passa a impressão errada. Um site moderno reforça organização, cuidado e seriedade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: COUNTERS ========== */}
      <CounterSection />

      {/* ========== SECTION 5: DIFERENCIAIS ========== */}
      <section className="bg-[#162a2a] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Por que contratar uma agência especializada em sites para advogados?"
            subtitle="Site para advogado não deve ser tratado como um site comum. A advocacia tem regras próprias, linguagem específica e limites claros de publicidade profissional."
            light
          />

          <p className="text-gray-300 font-lexend text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
            Nossa criação de sites para advogados considera esses pontos desde o início do projeto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Scale size={28} />}
              title="Foco no mercado jurídico"
              description="Criamos páginas para advogados e escritórios, que permite construir uma comunicação mais adequada para cada área de atuação, sem exageros comerciais e sem promessas indevidas."
              variant="dark"
            />
            <ServiceCard
              icon={<TrendingUp size={28} />}
              title="SEO pensado para advocacia"
              description="Seu site é desenvolvido com estrutura técnica para ranqueamento, páginas por serviço, URLs otimizadas, conteúdo estratégico e base preparada para crescimento orgânico."
              variant="dark"
            />
            <ServiceCard
              icon={<Shield size={28} />}
              title="Projeto completo"
              description="Você não precisa lidar com vários fornecedores. Cuidamos de design, conteúdo, desenvolvimento, domínio, hospedagem, e-mail profissional, segurança e suporte."
              variant="dark"
            />
            <ServiceCard
              icon={<Users size={28} />}
              title="Estrutura voltada para contatos"
              description="O site é planejado para facilitar a decisão do visitante. Cada seção tem uma função: informar, gerar confiança e aproximar o possível cliente do primeiro contato."
              variant="dark"
            />
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: ENTREGA ========== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#162a2a] font-lexend mb-6">
                O que entregamos na criação de cada projeto
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <span className="block w-8 h-1 bg-[#b58c61] rounded-full" />
                <span className="block w-16 h-1 bg-[#b58c61] rounded-full" />
              </div>

              <p className="text-gray-600 font-lexend leading-relaxed mb-4">
                Cada projeto nasce do posicionamento do escritório, das áreas de atuação e do perfil de cliente que você deseja alcançar.
              </p>
              <p className="text-gray-600 font-lexend leading-relaxed mb-8">
                O objetivo não é apenas criar uma página bonita, mas principalmente construir uma presença digital profissional, rápida, segura e preparada para aparecer no Google.
              </p>

              <p className="text-gray-700 font-lexend font-semibold leading-relaxed mb-4">
                Seu projeto pode incluir:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Layout exclusivo',
                  'Versão responsiva para celular, tablet e desktop',
                  'Páginas por área de atuação',
                  'Textos otimizados para SEO',
                  'Blog jurídico',
                  'Integração com WhatsApp',
                  'Formulários de contato',
                  'E-mail profissional',
                  'Certificado SSL',
                  'Hospedagem de alta performance',
                  'Otimização de velocidade',
                  'SEO local',
                  'Estrutura técnica para Google',
                  'Dados estruturados',
                  'Adequação à comunicação permitida pela OAB',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#b58c61]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={12} className="text-[#b58c61]" />
                    </div>
                    <p className="text-gray-600 font-lexend text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#de7322] hover:bg-[#ba5918] text-white px-8 py-3.5 rounded-lg font-lexend font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                <Globe size={18} />
                Quero criar meu site jurídico
              </a>
            </div>

            {/* Right: decorative */}
            <div className="relative order-first lg:order-last">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#593e2e] via-[#162a2a] to-[#0d1b1b] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Globe size={64} className="text-[#b58c61] mx-auto mb-4" />
                    <p className="text-[#b58c61] font-lexend font-semibold text-lg">
                      Advocacia Digital
                    </p>
                    <p className="text-gray-400 font-lexend text-sm mt-2">
                      Conectando você aos seus clientes
                    </p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-[#b58c61]/40 rounded-tr-xl" />
                <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-[#b58c61]/40 rounded-bl-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border-2 border-[#b58c61]/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: RECURSOS ========== */}
      <section className="bg-[#eaecec] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Recursos inclusos no seu site para advogado"
            subtitle="Tudo que seu escritório precisa para começar com presença digital profissional, sem custos extras."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={<Monitor size={28} />} title="Design responsivo" description="Seu site funciona bem em qualquer tela. A navegação fica simples no celular, no tablet e no computador." />
            <ServiceCard icon={<MessageSquare size={28} />} title="WhatsApp integrado" description="O visitante encontra o botão de contato com facilidade e pode iniciar a conversa em poucos segundos." />
            <ServiceCard icon={<MapPin size={28} />} title="SEO local" description="A estrutura ajuda seu escritório a ganhar presença em buscas feitas por pessoas da sua cidade ou região." />
            <ServiceCard icon={<BookOpen size={28} />} title="Páginas por área de atuação" description="Cada serviço jurídico pode ter uma página própria, com conteúdo claro, objetivo e otimizado para pesquisa." />
            <ServiceCard icon={<UserPlus size={28} />} title="Blog jurídico" description="O blog permite publicar conteúdos educativos, fortalecer autoridade e atrair visitantes que procuram respostas no Google." />
            <ServiceCard icon={<Star size={28} />} title="Prova social" description="Depoimentos e avaliações podem ser inseridos com cuidado para reforçar a confiança e melhorar a percepção do visitante." />
            <ServiceCard icon={<Mail size={28} />} title="E-mail profissional" description="Seu escritório passa a usar um e-mail com domínio próprio, como contato@seuescritorio.com.br." />
            <ServiceCard icon={<Lock size={28} />} title="Segurança" description="Incluímos SSL, backup e recursos técnicos para proteger o site e oferecer navegação segura." />
            <ServiceCard icon={<Server size={28} />} title="Hospedagem profissional" description="Seu site fica em um ambiente estável, rápido e preparado para receber acessos sem prejudicar a experiência do usuário." />
          </div>
        </div>
      </section>

      {/* ========== SECTION SOB MEDIDA ========== */}
      <section className="bg-[#f5f5f3] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#162a2a] font-lexend mb-6 text-center">
            Sites para advogados criados sob medida
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="block w-8 h-1 bg-[#b58c61] rounded-full" />
            <span className="block w-16 h-1 bg-[#b58c61] rounded-full" />
          </div>

          <div className="space-y-4 mb-8 max-w-3xl mx-auto">
            <p className="text-gray-600 font-lexend leading-relaxed text-center">
              Cada advogado tem uma história, uma especialidade e um público diferente.
            </p>
            <p className="text-gray-600 font-lexend leading-relaxed text-center">
              Por isso, não trabalhamos com modelo pronto.
            </p>
            <p className="text-gray-700 font-lexend font-semibold leading-relaxed text-center">
              Criamos sites para:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-3xl mx-auto">
            {[
              'Advogados autônomos',
              'Jovens advogados',
              'Escritórios pequenos',
              'Bancas consolidadas',
              'Sociedades de advocacia',
              'Especialistas em áreas específicas',
              'Profissionais que querem fortalecer presença local',
              'Escritórios que desejam melhorar a geração de contatos pelo Google',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#b58c61]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle size={14} className="text-[#b58c61]" />
                </div>
                <p className="text-gray-700 font-lexend text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 font-lexend leading-relaxed text-center max-w-3xl mx-auto">
            O visual, os textos e a estrutura do site são pensados para refletir o seu posicionamento.
          </p>
        </div>
      </section>

      {/* ========== SECTION 8: PORTFOLIO ========== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Portfólio: sites para advogados que já criamos"
            subtitle="Cada projeto é único, criado para um advogado ou escritório específico."
          />

          {/* OnePage / Landing Pages */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-[#b58c61] font-lexend mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-[#b58c61]" />
              Sites OnePage (Landing Page)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <PortfolioCard nomeCliente="Angelina Roberta" imageSrc="/images/angelina-roberta-advocacia.webp" urlSite="https://angelinaroberta.adv.br/" descricao="Identidade visual exclusiva com CTAs de alta conversão." />
              <PortfolioCard nomeCliente="Bernardes Oshiro" imageSrc="/images/bernardes-oshiro.webp" urlSite="https://bernardesoshiro.com.br/" descricao="Apresentação institucional sólida e posicionamento digital." />
              <PortfolioCard nomeCliente="Da Costa Advocacia" imageSrc="/images/da-costa.webp" urlSite="https://dc.adv.br/" descricao="Layout objetivo e estrutura pensada para conversão." />
              <PortfolioCard nomeCliente="Erycson Medeiros" imageSrc="/images/erycson-medeiros-advocacia.webp" urlSite="https://erycsonmedeirosadvocacia.com/" descricao="Design moderno com foco em captação de clientes." />
              <PortfolioCard nomeCliente="Santos Miranda" imageSrc="/images/santos-miranda-advocacia-imobiliaria.webp" urlSite="https://www.santosmiranda.adv.br/" descricao="Especializado em direito imobiliário com captação otimizada." />
              <PortfolioCard nomeCliente="Seguins Advocacia" imageSrc="/images/seguins-advocacia.webp" urlSite="https://seguinsadvocacia.adv.br/" descricao="Destaque para especialidades e formulário estratégico." />
            </div>
          </div>

          {/* Multipáginas */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-[#b58c61] font-lexend mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-[#b58c61]" />
              Sites Multipáginas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <PortfolioCard nomeCliente="Alexandre Vitorino" imageSrc="/images/alexandre-vitorino-advogados.webp" urlSite="https://avadvogados.com.br/" descricao="Site robusto com SEO avançado e blog jurídico integrado." />
              <PortfolioCard nomeCliente="Belém Duarte Almeida" imageSrc="/images/belem-duarte-almeida.webp" urlSite="https://belemduartealmeida.com.br/" descricao="Site institucional premium com múltiplas áreas de atuação." />
              <PortfolioCard nomeCliente="Ferreira & Mourão" imageSrc="/images/ferreira-e-mourao-advogados.webp" urlSite="https://ferreiramourao.com/" descricao="Site completo com blog jurídico e captação de leads." />
              <PortfolioCard nomeCliente="Guilherme Bonfim" imageSrc="/images/guilherme-bonfim-advocacia.webp" urlSite="https://guilhermebonfim.com/" descricao="Seções dedicadas a cada serviço e depoimentos de clientes." />
            </div>
          </div>

        </div>
      </section>

      {/* ========== SECTION 9: PROCESSO ========== */}
      <section className="bg-[#162a2a] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Como funciona a criação do seu site jurídico"
            subtitle="Da primeira conversa até o site no ar — entenda cada etapa do nosso processo."
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#b58c61]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare size={32} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">1. Conversa inicial</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                Entendemos seu momento, suas áreas de atuação, sua cidade, seus objetivos e o tipo de cliente que deseja alcançar.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#b58c61]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Trophy size={32} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">2. Planejamento</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                Definimos a estrutura do site, páginas necessárias, chamadas de contato, estratégia de SEO e tom de comunicação.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#b58c61]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Briefcase size={32} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">3. Conteúdo e layout</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                Criamos os textos e o design do site. Tudo é apresentado para aprovação antes da publicação.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#b58c61]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">4. Desenvolvimento</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                Programamos o site com foco em velocidade, responsividade, segurança e SEO técnico.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#b58c61]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe size={32} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">5. Publicação</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                Colocamos o site no ar com domínio, hospedagem, e-mail profissional e suporte.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#b58c61]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">6. Ajustes e acompanhamento</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                Após a entrega, você conta com suporte para manter o site funcionando bem e atualizado.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#de7322] hover:bg-[#ba5918] text-white px-8 py-4 rounded-lg font-lexend font-bold text-sm transition-all duration-300 hover:scale-105"
            >
              <Phone size={18} />
              Solicite seu orçamento e tenha seu site pronto em poucos dias
            </a>
          </div>
        </div>
      </section>

      {/* ========== SECTION 10: FORMULARIO ========== */}
      <section id="contato" className="bg-[#eaecec] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Solicite orçamento para criação de site para advogado"
            subtitle="Seu escritório pode ter uma presença digital mais forte, profissional e preparada para atrair contatos qualificados pelo Google. Conte o que você precisa, vamos avaliar seu projeto e enviar uma proposta personalizada."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: form */}
            <ContactForm />

            {/* Right: contact info */}
            <div className="space-y-8">
              <div className="bg-[#162a2a] rounded-2xl p-8 md:p-10">
                <h3 className="text-white font-lexend font-bold text-2xl mb-6">
                  Informações de contato
                </h3>
                <p className="text-gray-400 font-lexend text-sm leading-relaxed mb-8">
                  Prefere um atendimento direto? Utilize qualquer um dos
                  canais abaixo.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#b58c61]/20 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-[#b58c61]" />
                    </div>
                    <div>
                      <p className="text-white font-lexend font-semibold text-sm">WhatsApp</p>
                      <a href="https://wa.me/5561992784283" className="text-gray-400 hover:text-[#b58c61] font-lexend text-sm transition-colors">(61) 99278-4283</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#b58c61]/20 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-[#b58c61]" />
                    </div>
                    <div>
                      <p className="text-white font-lexend font-semibold text-sm">Endereço</p>
                      <p className="text-gray-400 font-lexend text-sm">SHIS, Quadra 06, Complexo Brasil 21<br />Asa Sul, Brasília - DF</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#de7322] rounded-2xl p-8 text-center">
                <span className="text-white font-lexend font-bold text-xl mb-3 block">
                  Resposta rápida garantida
                </span>
                <p className="text-white/80 font-lexend text-sm mb-6">
                  Todas as solicitações são respondidas em até 24 horas úteis
                  com uma proposta detalhada e sem compromisso.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#de7322] hover:bg-gray-100 px-6 py-3 rounded-lg font-lexend font-bold text-sm transition-all duration-300 hover:scale-105"
                >
                  <MessageSquare size={18} />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 11: DEPOIMENTOS ========== */}
      <section className="bg-[#162a2a] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="O que nossos clientes valorizam"
            subtitle="Advogados e escritórios que contrataram nosso trabalho e compartilham a experiência."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <Monitor size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">Atendimento direto</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                &ldquo;Consegui acompanhar o projeto de perto. O briefing foi claro, os ajustes foram rápidos e o site ficou exatamente com a imagem que eu queria passar.&rdquo;
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">Contatos pelo Google</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                &ldquo;Depois que o site entrou no ar, comecei a receber mensagens de pessoas que pesquisaram minha área de atuação. Isso mudou minha dependência de indicação.&rdquo;
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <Star size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">Mais credibilidade</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                &ldquo;Vários clientes comentaram que acessaram o site antes da reunião. A percepção sobre o escritório melhorou muito.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 12: FAQ ========== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Perguntas frequentes sobre criação de sites para advogados"
            subtitle="Tire suas dúvidas antes de solicitar seu orçamento."
          />

          <FAQAccordion items={faqItems} />

        </div>
      </section>

      {/* ========== SECTION 13: ATENDIMENTO POR CIDADE ========== */}
      <section className="bg-[#f5f5f3] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Atendemos advogados em todo o Brasil"
            subtitle="Capitais e regiões metropolitanas com atendimento personalizado para escritórios de advocacia."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
            {[
              { slug: 'sao-paulo', anchor: 'São Paulo — SP' },
              { slug: 'rio-de-janeiro', anchor: 'Rio de Janeiro — RJ' },
              { slug: 'belo-horizonte', anchor: 'Belo Horizonte — MG' },
              { slug: 'curitiba', anchor: 'Criação de site em Curitiba' },
              { slug: 'porto-alegre', anchor: 'Advocacia em Porto Alegre' },
              { slug: 'salvador', anchor: 'Salvador — BA' },
              { slug: 'fortaleza', anchor: 'Escritórios em Fortaleza' },
              { slug: 'recife', anchor: 'Recife — PE' },
              { slug: 'goiania', anchor: 'Goiânia — GO' },
              { slug: 'florianopolis', anchor: 'Site jurídico em Florianópolis' },
              { slug: 'belem-do-para', anchor: 'Belém — PA' },
              { slug: 'manaus', anchor: 'Manaus — AM' },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/site-para-advogados/${c.slug}`}
                className="flex items-center gap-2 bg-white hover:bg-[#162a2a] hover:text-white text-[#162a2a] px-4 py-3 rounded-lg font-lexend text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <MapPin size={16} className="text-[#b58c61] group-hover:text-[#de7322] transition-colors flex-shrink-0" />
                <span className="truncate">{c.anchor}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/site-para-advogados"
              className="inline-flex items-center gap-2 text-[#162a2a] hover:text-[#de7322] font-lexend font-semibold transition-colors"
            >
              Ver todas as cidades atendidas
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SECTION ÉTICA ========== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#162a2a] font-lexend mb-8 text-center">
            Um site jurídico precisa vender sem ferir a ética
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="block w-8 h-1 bg-[#b58c61] rounded-full" />
            <span className="block w-16 h-1 bg-[#b58c61] rounded-full" />
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 font-lexend leading-relaxed">
              A comunicação na advocacia deve ser sóbria, informativa e compatível com as normas da OAB.
            </p>
            <p className="text-gray-600 font-lexend leading-relaxed">
              Nosso trabalho respeita esse limite.
            </p>
            <p className="text-gray-600 font-lexend leading-relaxed">
              Nada de promessas de resultado, linguagem sensacionalista ou abordagem agressiva.
            </p>
            <p className="text-gray-600 font-lexend leading-relaxed">
              O foco é construir uma presença profissional capaz de informar, gerar confiança e facilitar o contato de quem procura orientação jurídica.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SECTION 14: CTA FINAL ========== */}
      <section className="bg-gradient-to-b from-[#162a2a] to-[#0d1b1b] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-lexend mb-6">
            Pronto para ter um site jurídico que trabalha pelo seu escritório?
          </h2>
          <p className="text-gray-300 font-lexend text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
            Uma conversa rápida já ajuda a entender o melhor caminho para o seu projeto.
          </p>
          <p className="text-gray-300 font-lexend text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Se você quer sair da dependência exclusiva de indicações e construir uma presença digital mais sólida, seu site pode ser o ponto de partida.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#83b440] hover:bg-[#6f9a35] text-white px-10 py-5 rounded-xl font-lexend font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-[#83b440]/30"
          >
            <MessageSquare size={24} />
            Fale agora com um especialista
          </a>
        </div>
      </section>

    </>
  )
}
