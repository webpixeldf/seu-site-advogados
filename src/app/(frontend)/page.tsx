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
  title: { absolute: 'Criação de Site para Advogado — Presença Digital que Traz Clientes | Seu Site Advogados' },
  description: 'Somos especialistas em sites jurídicos desde 2019. Design profissional, SEO técnico e estrutura de conversão para advogados e escritórios que querem ser encontrados no Google.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Seu Site Advogados',
    title: 'Criação de Site para Advogado — Presença Digital que Traz Clientes',
    description: 'Sites jurídicos criados por quem entende de advocacia. Design exclusivo, SEO, blog integrado e páginas de cidade. Portfólio com mais de 50 projetos entregues.',
    url: '/',
    images: [{ url: '/images/site-para-advogado.jpg', width: 1200, height: 630, alt: 'Site profissional para escritório de advocacia — Seu Site Advogados' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@seusiteadvogados',
    creator: '@seusiteadvogados',
    title: 'Criação de Site para Advogado — Presença Digital que Traz Clientes',
    description: 'Sites jurídicos profissionais com SEO técnico. A partir de 3x de R$ 260,00. Portfólio com mais de 50 projetos.',
    images: ['/images/site-para-advogado.jpg'],
  },
}

const WHATSAPP_URL =
  'https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20um%20or%C3%A7amento.'

const faqItems = [
  {
    pergunta: 'Quanto custa um site para escritório de advocacia?',
    resposta:
      'Nossos projetos começam em 3 parcelas de R$ 260,00. Esse valor inclui design exclusivo, hospedagem no primeiro ano, e-mail profissional e suporte. Para sites maiores — com blog, múltiplas páginas de serviço e SEO local — o orçamento é ajustado conforme a complexidade. Enviamos uma proposta detalhada sem compromisso pelo WhatsApp.',
  },
  {
    pergunta: 'Qual o prazo de entrega?',
    resposta:
      'Uma landing page jurídica costuma ficar pronta em até 5 dias úteis após recebermos seus materiais. Sites institucionais completos, com blog e páginas por área de atuação, levam entre 7 e 15 dias. O cronograma exato é definido na conversa inicial, e mantemos você informado em cada etapa.',
  },
  {
    pergunta: 'O site realmente traz clientes ou é só um cartão de visita?',
    resposta:
      'Traz clientes — quando bem feito. A lógica é simples: mais de 78% das pessoas pesquisam no Google antes de contratar um serviço jurídico. Se seu escritório aparece entre os primeiros resultados com um site profissional, claro e bem organizado, a chance de receber contato é real. Vários clientes nossos relatam consultas que chegaram exclusivamente pelo site.',
  },
  {
    pergunta: 'Eu preciso escrever os textos do site?',
    resposta:
      'Não. Nossa equipe de conteúdo produz todos os textos — da página inicial às descrições de áreas de atuação — com foco em clareza, conversão e respeito às regras de publicidade da OAB. Você revisa e aprova antes da publicação.',
  },
  {
    pergunta: 'Sou advogado recém-formado. Um site serve para mim?',
    resposta:
      'Serve — e pode ser o diferencial que acelera sua entrada no mercado. Enquanto a maioria dos iniciantes depende apenas de indicações e redes sociais, um site próprio permite que pessoas te encontrem diretamente, conheçam suas áreas de interesse e entrem em contato sem intermédio de ninguém.',
  },
  {
    pergunta: 'Eu atendo sozinho. Vale a pena ter site?',
    resposta:
      'Sim. Na advocacia autônoma, cada minuto gasto explicando o básico é tempo que você deixa de advogar. Um site resolve isso: o potencial cliente chega na conversa já sabendo quem você é, o que faz e como funciona seu atendimento. Isso filtra contatos, reduz ruído e acelera a decisão de contratar.',
  },
  {
    pergunta: 'Site próprio ou só redes sociais — qual a diferença prática?',
    resposta:
      'No Instagram ou LinkedIn, você depende do algoritmo da plataforma para ser visto — e concorre com entretenimento. No Google, a pessoa já está procurando ativamente um advogado. Um site próprio interessa justamente a quem tem intenção de contratar. Além disso, é um ativo seu: você controla o conteúdo, o visual e a mensagem, sem risco de ter o perfil bloqueado ou a plataforma mudar as regras.',
  },
  {
    pergunta: 'Qual a diferença entre site institucional e landing page?',
    resposta:
      'A landing page tem foco único — geralmente um serviço, uma região ou uma campanha. É enxuta e feita para converter rápido. O site institucional é mais abrangente: comporta várias áreas de atuação, blog, página sobre o escritório, FAQ e uma estrutura pensada para crescer em tráfego orgânico ao longo do tempo. Muitos clientes começam com a landing e depois expandem para o site completo.',
  },
]

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Web Pixel - Studio Criativo',
  alternateName: 'Seu Site Advogados',
  url: 'https://seusiteadvogados.com.br',
  description: 'Criação de sites para advogados e escritórios de advocacia com design exclusivo e SEO técnico.',
  taxID: '34.644.883/0001-94',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'SHIS Quadra 06, Complexo Brasil 21',
    addressLocality: 'Brasília',
    addressRegion: 'DF',
    postalCode: '71620-015',
    addressCountry: 'BR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-61-99278-4283',
    contactType: 'sales',
    availableLanguage: 'Portuguese',
    areaServed: 'BR',
  },
  sameAs: [
    'https://www.instagram.com/criacaodesiteparaadvogados',
  ],
}

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
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
            <p className="text-gray-300 text-lg md:text-xl font-lexend leading-relaxed mb-6">
              Criação de site para advogado com design exclusivo e SEO técnico. Atendemos autônomos, jovens profissionais e bancas consolidadas que querem ser encontrados no Google com credibilidade e previsibilidade de contatos — mesmo fora do horário comercial.
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
                É uma história que ouvimos quase toda semana: o advogado entrega um trabalho excelente, recebe elogios de clientes anteriores, mas os contatos novos não aparecem com regularidade. Um mês cheio, outro quase parado. E não há como prever.
              </p>
              <p className="text-gray-600 font-lexend leading-relaxed mb-4">
                Indicação boca a boca sempre terá valor — ninguém discute isso. Mas depender exclusivamente dela é como navegar sem bússola: você não decide quando o próximo cliente vai ligar.
              </p>
              <p className="text-gray-600 font-lexend leading-relaxed mb-8">
                Um <strong>site para advogado</strong> bem estruturado muda essa dinâmica porque cria um canal ativo de presença digital — um lugar onde o potencial cliente te encontra, entende sua especialidade e decide entrar em contato, tudo no mesmo momento em que está pesquisando no Google.
              </p>

              <h3 className="text-xl font-bold text-[#162a2a] font-lexend mb-5">
                Na prática, o que um site jurídico bem feito entrega:
              </h3>

              <div className="space-y-4 mb-8">
                {[
                  'Organiza suas áreas de atuação de forma clara',
                  'Explica como você resolve o problema do cliente',
                  'Constrói confiança antes mesmo da primeira reunião',
                  'Facilita o contato direto via WhatsApp ou formulário',
                  'Reforça sua imagem profissional perante colegas e juízes',
                  'Gera oportunidades fora da sua rede pessoal de indicações',
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
                Quando alguém pesquisa por um advogado, está comparando — mesmo sem saber. Um site profissional, com informações bem organizadas e visual cuidado, pesa muito nessa comparação silenciosa.
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
            subtitle="O cliente jurídico chega com dúvida, certo receio e pressa para entender se o caso dele tem solução. A primeira impressão define se a conversa vai acontecer."
          />

          <div className="max-w-3xl mx-auto mb-12 space-y-4">
            <p className="text-gray-600 font-lexend text-base md:text-lg leading-relaxed text-center">
              Um site bem estruturado faz esse trabalho antes mesmo de você atender o telefone: mostra quem você é, organiza suas especialidades e antecipa as perguntas que todo cliente em potencial faz.
            </p>
            <p className="text-gray-600 font-lexend text-base md:text-lg leading-relaxed text-center">
              Na prática, o impacto aparece em quatro frentes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <Trophy size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-[#162a2a] font-lexend font-bold text-lg mb-3">
                Autoridade no Google
              </h3>
              <p className="text-gray-600 font-lexend text-sm leading-relaxed">
                Páginas estruturadas com SEO técnico e conteúdo relevante aumentam suas chances de aparecer quando alguém pesquisa por serviços jurídicos na sua região.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <Users size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-[#162a2a] font-lexend font-bold text-lg mb-3">
                Independência de indicações
              </h3>
              <p className="text-gray-600 font-lexend text-sm leading-relaxed">
                Seu site se torna um canal permanente de entrada de contatos. O cliente potencial te encontra pesquisando diretamente — sem precisar conhecer ninguém que indique seu nome.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-[#162a2a] font-lexend font-bold text-lg mb-3">
                Agilidade no contato
              </h3>
              <p className="text-gray-600 font-lexend text-sm leading-relaxed">
                Botões de WhatsApp posicionados estrategicamente e formulários diretos encurtam a distância entre o interesse inicial e a conversa de fato.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-[#162a2a] font-lexend font-bold text-lg mb-3">
                Imagem profissional sólida
              </h3>
              <p className="text-gray-600 font-lexend text-sm leading-relaxed">
                Um site lento, desatualizado ou mal diagramado passa a impressão errada. Um projeto moderno, limpo e rápido comunica organização e cuidado — exatamente o que o cliente busca.
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
              description="Trabalhamos exclusivamente com advocacia. Isso significa que entendemos as limitações do Código de Ética da OAB, a linguagem adequada para cada área e o tipo de comunicação que gera confiança sem apelar para promessas vazias."
              variant="dark"
            />
            <ServiceCard
              icon={<TrendingUp size={28} />}
              title="SEO aplicado desde o início"
              description="Otimização não é uma camada extra que colocamos depois. Ela está na arquitetura das páginas, na hierarquia de headings, nas URLs, nas meta tags e na velocidade de carregamento — tudo pensado para o Google entender e ranquear seu site."
              variant="dark"
            />
            <ServiceCard
              icon={<Shield size={28} />}
              title="Projeto completo, ponto único de contato"
              description="Você trata com uma equipe só. Cuidamos de design, conteúdo, programação, domínio, hospedagem, e-mail profissional, SSL e manutenção. Sem terceirizar etapas, sem você precisar coordenar fornecedores diferentes."
              variant="dark"
            />
            <ServiceCard
              icon={<Users size={28} />}
              title="Estrutura orientada a resultado"
              description="Cada seção do site existe por um motivo: informar, reduzir objeções, gerar confiança e aproximar o visitante da decisão de contato. Nada é decorativo — tudo trabalha para converter."
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
                Cada projeto parte de três pilares: o posicionamento do escritório, as áreas de atuação e o perfil de cliente que você quer alcançar. Não existe receita pronta — o que funciona para um tributarista não serve para um criminalista, e vice-versa.
              </p>
              <p className="text-gray-600 font-lexend leading-relaxed mb-8">
                Nosso objetivo vai além de entregar uma interface bonita. Construímos uma presença digital rápida, segura e preparada para performar nas buscas — o tipo de site que o Google entende e que o visitante confia.
              </p>

              <p className="text-gray-700 font-lexend font-semibold leading-relaxed mb-4">
                Dependendo do escopo, seu projeto inclui:
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
            <ServiceCard icon={<Monitor size={28} />} title="Design responsivo" description="Seu site se adapta automaticamente a qualquer tela — celular, tablet ou desktop — sem quebrar layout, esconder informações ou comprometer a navegação." />
            <ServiceCard icon={<MessageSquare size={28} />} title="WhatsApp integrado" description="O botão de WhatsApp aparece nos momentos certos da página, permitindo que o visitante inicie uma conversa em segundos, sem precisar copiar número nem sair do site." />
            <ServiceCard icon={<MapPin size={28} />} title="SEO local" description="Estruturamos o site para que o Google entenda sua cidade e região de atuação. Ideal para escritórios que atendem presencialmente ou querem dominar buscas locais." />
            <ServiceCard icon={<BookOpen size={28} />} title="Páginas por área de atuação" description="Cada especialidade do escritório ganha uma página própria com conteúdo específico, o que melhora o ranqueamento para buscas segmentadas e organiza melhor a navegação." />
            <ServiceCard icon={<UserPlus size={28} />} title="Blog jurídico" description="Publicar artigos com regularidade é uma das formas mais eficazes de ganhar autoridade no Google a médio prazo. O blog já vem pronto para receber conteúdo." />
            <ServiceCard icon={<Star size={28} />} title="Prova social" description="Inserimos depoimentos reais de clientes com nome e área de atuação, respeitando as regras da OAB. Um recurso simples que influencia diretamente a decisão de contato." />
            <ServiceCard icon={<Mail size={28} />} title="E-mail profissional" description="Seu escritório passa a usar endereços como contato@seunome.adv.br — algo que comunica profissionalismo antes mesmo da primeira mensagem." />
            <ServiceCard icon={<Lock size={28} />} title="Segurança" description="SSL ativo, backups regulares e monitoramento contínuo. Seu site fica protegido e seus visitantes navegam em ambiente seguro." />
            <ServiceCard icon={<Server size={28} />} title="Hospedagem de alta performance" description="Servidores rápidos, tempo de resposta baixo e estabilidade garantida. Um site lento afasta clientes; o seu não vai ter esse problema." />
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
              Um criminalista não se comunica como um tributarista. Um escritório boutique não compete da mesma forma que uma banca com 15 sócios. Por isso, não entregamos template.
            </p>
            <p className="text-gray-700 font-lexend font-semibold leading-relaxed text-center">
              Já desenvolvemos projetos para:
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
            O visual, a linguagem e a estrutura do site são pensados para traduzir o posicionamento do escritório — sem artificialidade, sem fórmulas prontas.
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
                Entendemos seu momento de carreira, áreas de atuação, cidade, diferencial competitivo e o perfil de cliente que você quer alcançar. Essa conversa define o rumo do projeto.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#b58c61]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Trophy size={32} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">2. Planejamento</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                Mapeamos as páginas necessárias, organizamos a hierarquia de informação, definimos os pontos de contato e traçamos a estratégia de SEO — palavra por palavra, seção por seção.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#b58c61]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Briefcase size={32} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">3. Conteúdo e layout</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                Produzimos os textos e criamos o design. Você recebe o material completo para revisão — layout, redação e fluxo de navegação — antes de qualquer linha de código.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#b58c61]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">4. Desenvolvimento</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                Programamos com foco em três pilares: velocidade de carregamento, adaptação a qualquer dispositivo e SEO técnico — meta tags, dados estruturados, sitemap e indexação.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#b58c61]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe size={32} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">5. Publicação</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                Colocamos no ar com domínio configurado, e-mail profissional ativo e SSL funcionando. Você recebe orientação sobre os próximos passos e acesso ao suporte.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#b58c61]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">6. Acompanhamento</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                Após a entrega, você conta com suporte para ajustes, atualizações e dúvidas. Mantemos o relacionamento ativo porque site parado perde posição — e a gente não deixa isso acontecer.
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
            title="Solicite um orçamento para o site do seu escritório"
            subtitle="Conte sobre sua atuação, sua cidade e o que você espera do projeto. Analisamos seu caso e retornamos com uma proposta personalizada, sem custo e sem compromisso."
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
            title="O que nossos clientes dizem"
            subtitle="Depoimentos reais de advogados e escritórios que confiaram no nosso trabalho."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <Monitor size={28} className="text-[#b58c61]" />
              </div>
              <p className="text-gray-300 font-lexend text-sm leading-relaxed mb-6">
                &ldquo;Acompanhei o projeto do início ao fim. O briefing foi direto, os ajustes saíram no mesmo dia e o resultado ficou exatamente com a identidade que eu imaginava para o escritório.&rdquo;
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-lexend font-semibold text-sm">Angelina Roberta</p>
                <a href="https://angelinaroberta.adv.br/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#b58c61] hover:text-[#de7322] font-lexend text-xs transition-colors">angelinaroberta.adv.br</a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={28} className="text-[#b58c61]" />
              </div>
              <p className="text-gray-300 font-lexend text-sm leading-relaxed mb-6">
                &ldquo;Depois que o site entrou no ar, comecei a receber mensagens de pessoas que me encontraram pesquisando minha especialidade no Google. Isso mudou minha dependência de indicação.&rdquo;
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-lexend font-semibold text-sm">Alexandre Vitorino</p>
                <a href="https://avadvogados.com.br/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#b58c61] hover:text-[#de7322] font-lexend text-xs transition-colors">avadvogados.com.br</a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <Star size={28} className="text-[#b58c61]" />
              </div>
              <p className="text-gray-300 font-lexend text-sm leading-relaxed mb-6">
                &ldquo;Percebi a diferença logo nas primeiras semanas. Clientes que acessaram o site antes da reunião já chegavam mais informados e confiantes. A percepção sobre o escritório subiu de nível.&rdquo;
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-lexend font-semibold text-sm">Guilherme Bonfim</p>
                <a href="https://guilhermebonfim.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#b58c61] hover:text-[#de7322] font-lexend text-xs transition-colors">guilhermebonfim.com</a>
              </div>
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
              { slug: 'curitiba', anchor: 'Curitiba — PR' },
              { slug: 'porto-alegre', anchor: 'Porto Alegre — RS' },
              { slug: 'salvador', anchor: 'Salvador — BA' },
              { slug: 'fortaleza', anchor: 'Fortaleza — CE' },
              { slug: 'recife', anchor: 'Recife — PE' },
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
            Comunicação jurídica que respeita as regras da profissão
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="block w-8 h-1 bg-[#b58c61] rounded-full" />
            <span className="block w-16 h-1 bg-[#b58c61] rounded-full" />
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 font-lexend leading-relaxed">
              A OAB define limites claros para publicidade na advocacia — e com razão. A profissão não combina com sensacionalismo, promessas de resultado ou abordagem mercantilista.
            </p>
            <p className="text-gray-600 font-lexend leading-relaxed">
              Nossa comunicação segue esse norte: informar sem exagerar, apresentar sem prometer, convencer sem pressionar.
            </p>
            <p className="text-gray-600 font-lexend leading-relaxed">
              Tanto o design quanto o conteúdo são pensados para construir uma presença digital sóbria, profissional e compatível com o Provimento 205/2021 do CFOAB. O objetivo é simples: fazer com que o cliente em potencial entenda como você pode ajudar — e se sinta seguro para dar o próximo passo.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SECTION 14: CTA FINAL ========== */}
      <section className="bg-gradient-to-b from-[#162a2a] to-[#0d1b1b] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-lexend mb-6">
            Seu escritório merece um site à altura do seu trabalho
          </h2>
          <p className="text-gray-300 font-lexend text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
            Uma conversa rápida já é suficiente para traçarmos um caminho claro para o seu projeto — sem compromisso, sem letra miúda.
          </p>
          <p className="text-gray-300 font-lexend text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Se você quer reduzir a dependência de indicações e construir uma presença digital que gere contatos de forma consistente, seu site é o ponto de partida certo.
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
