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
  description: 'Criação de site para advogado com design exclusivo, SEO para o Google, hospedagem e e-mail profissional. Capte mais clientes a partir de 3x de R$ 285.',
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
    images: [{ url: '/images/site-para-advogado.jpg', width: 800, height: 800, alt: 'Escritório de advocacia com site profissional' }],
  },
  twitter: {
    title: 'Criação de Site para Advogados que Capta Clientes',
    description: 'Criação de site para advogado com design exclusivo, SEO e captação de clientes. A partir de 3x de R$ 285,00.',
  },
}

const WHATSAPP_URL =
  'https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20um%20or%C3%A7amento.'

const faqItems = [
  {
    pergunta: 'Quanto custa criar um site jurídico?',
    resposta:
      'O valor inicial é de 3x de R$ 285,00. Projetos mais completos, como sites multipáginas com blog integrado, variam conforme a necessidade do escritório. Fale conosco pelo WhatsApp para receber uma proposta personalizada.',
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
            {/* Paragraph */}
            <p className="text-gray-300 text-lg md:text-xl font-lexend leading-relaxed mb-6">
              Especialistas em <strong>criação de site para advogado</strong> autônomo, iniciante ou escritório consolidado. Design exclusivo, SEO e projetos sob medida para gerar contatos 24 horas por dia.
            </p>

            {/* Price */}
            <div className="mb-8">
              <span className="text-[#b58c61] font-lexend text-sm font-medium uppercase tracking-wider">A partir de</span>
              <span className="block text-white font-lexend font-extrabold text-3xl md:text-4xl mt-1">
                3x de R$ 285,00
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
                Como um site para advogado resolve o problema das indicações
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <span className="block w-8 h-1 bg-[#b58c61] rounded-full" />
                <span className="block w-16 h-1 bg-[#b58c61] rounded-full" />
              </div>

              <p className="text-gray-600 font-lexend leading-relaxed mb-4">
                A maioria dos advogados que nos procura enfrenta o
                mesmo problema: depende exclusivamente de indicações.
              </p>
              <p className="text-gray-600 font-lexend leading-relaxed mb-4">
                O problema é que indicação não é previsível.
              </p>
              <p className="text-gray-600 font-lexend leading-relaxed mb-8">
                Um site de advocacia bem estruturado cria um canal constante
                de entrada de clientes — funcionando mesmo quando você está
                em audiência, ocupado ou fora do horário comercial.
              </p>

              <h3 className="text-xl font-bold text-[#162a2a] font-lexend mb-5">
                Mais do que um cartão de visita digital, um site para escritório de advocacia:
              </h3>

              <div className="space-y-4 mb-8">
                {[
                  'Apresenta suas áreas de atuação com clareza',
                  'Responde dúvidas antes do contato',
                  'Transmite confiança imediatamente',
                  'Facilita o primeiro contato',
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
                Quando alguém pesquisa por um advogado no Google, o seu site
                jurídico pode ser a diferença entre ganhar ou perder um cliente.
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
            title="Site para advogados: o que muda no seu escritório na prática"
            subtitle="Veja os resultados reais de quem investe em um site jurídico bem estruturado."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <Trophy size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-[#162a2a] font-lexend font-bold text-lg mb-3">
                Credibilidade antes do primeiro contato
              </h3>
              <p className="text-gray-600 font-lexend text-sm leading-relaxed">
                Um site profissional reduz a desconfiança e
                acelera a decisão do cliente. Ele conhece suas qualificações
                antes mesmo de ligar.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <Users size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-[#162a2a] font-lexend font-bold text-lg mb-3">
                Mais clientes além da indicação
              </h3>
              <p className="text-gray-600 font-lexend text-sm leading-relaxed">
                Com um site otimizado, você passa a aparecer
                para pessoas que já estão buscando exatamente a sua
                especialidade no Google.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-[#162a2a] font-lexend font-bold text-lg mb-3">
                Autoridade na sua área
              </h3>
              <p className="text-gray-600 font-lexend text-sm leading-relaxed">
                Um site jurídico com conteúdo estratégico posiciona você como
                referência. Quem pesquisa encontra você — não o concorrente.
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
            title="Por que escolher nosso serviço de criação de sites para advogados"
            subtitle="Trabalhamos exclusivamente com advogados e escritórios de advocacia. Isso faz diferença em cada detalhe."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Scale size={28} />}
              title="Foco total em advocacia"
              description="Trabalhamos exclusivamente com o mercado jurídico. Conhecemos as regras da OAB, o comportamento do cliente que busca um advogado e as melhores estratégias para captação."
              variant="dark"
            />
            <ServiceCard
              icon={<Shield size={28} />}
              title="Solução completa"
              description="Domínio, hospedagem, e-mail profissional, SSL e suporte contínuo — tudo no pacote. Você não precisa contratar nada separado."
              variant="dark"
            />
            <ServiceCard
              icon={<Users size={28} />}
              title="Estrutura para gerar contatos"
              description="Cada projeto é pensado para transformar visitas em consultas. WhatsApp integrado, formulários nos pontos certos e páginas organizadas por área de atuação."
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
                Criação de site para advogados: o que entregamos em cada projeto
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <span className="block w-8 h-1 bg-[#b58c61] rounded-full" />
                <span className="block w-16 h-1 bg-[#b58c61] rounded-full" />
              </div>

              <p className="text-gray-600 font-lexend leading-relaxed mb-4">
                Nosso trabalho entrega um projeto do zero, construído a partir do seu posicionamento e áreas de atuação.
              </p>
              <p className="text-gray-600 font-lexend leading-relaxed mb-8">
                Além do design, cuidamos da parte que o Google valoriza:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Velocidade de carregamento',
                  'SEO técnico completo',
                  'Estrutura de páginas por área de atuação',
                  'URLs otimizadas',
                  'Dados estruturados (schema markup)',
                  'Conformidade com o Provimento 205/2021 da OAB',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#b58c61]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-[#b58c61]" />
                    </div>
                    <p className="text-gray-600 font-lexend text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 font-lexend font-semibold leading-relaxed mb-8">
                Resultado: um site otimizado para Google e pensado para converter visitantes em clientes.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#de7322] hover:bg-[#ba5918] text-white px-8 py-3.5 rounded-lg font-lexend font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                <Globe size={18} />
                Quero fazer um site
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
            title="O que está incluso no seu site para advogado"
            subtitle="Todo site jurídico que criamos inclui estes recursos — sem custos extras e sem letras miúdas."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={<Monitor size={28} />} title="Design responsivo" description="Site mobile-first que se adapta a qualquer dispositivo. Navegação fluida em celular, tablet e desktop." />
            <ServiceCard icon={<MessageSquare size={28} />} title="Integração com WhatsApp" description="Botão de WhatsApp com mensagem pré-configurada. O cliente inicia a conversa com um toque." />
            <ServiceCard icon={<MapPin size={28} />} title="SEO local (Google Maps)" description="Otimização para buscas locais. Quando alguém pesquisar por advogado na sua cidade, seu escritório aparece." />
            <ServiceCard icon={<Star size={28} />} title="Prova social (avaliações)" description="Seção de depoimentos e avaliações para exibir a satisfação dos seus clientes e gerar confiança." />
            <ServiceCard icon={<Mail size={28} />} title="E-mail profissional" description="E-mail vinculado ao domínio do seu site (ex: contato@seuescritorio.com.br). Credibilidade em cada comunicação." />
            <ServiceCard icon={<Lock size={28} />} title="Segurança (SSL + backup)" description="Certificado SSL, firewall e backups automáticos. Seus dados e os dos seus clientes protegidos." />
            <ServiceCard icon={<BookOpen size={28} />} title="Blog jurídico" description="Publique artigos e conteúdos educativos para atrair tráfego orgânico e demonstrar expertise." />
            <ServiceCard icon={<UserPlus size={28} />} title="Captura de leads" description="Formulários e CTAs posicionados nos pontos estratégicos para maximizar a conversão de visitantes em contatos." />
            <ServiceCard icon={<Server size={28} />} title="Hospedagem premium" description="Servidores de alta performance com uptime de 99,9% e carregamento rápido. Seu site sempre no ar." />
          </div>
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
            title="Como funciona a criação de site para advogados"
            subtitle="Da primeira conversa até o site no ar — entenda cada etapa da nossa criação de sites para advogados."
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#b58c61]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Trophy size={32} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">1. Briefing</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                Entendemos seu escritório, suas áreas de atuação e o
                perfil dos clientes que você quer alcançar.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#b58c61]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Briefcase size={32} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">2. Design e conteúdo</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                Criamos o layout e produzimos os textos do seu site
                jurídico. Você aprova antes de seguir.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#b58c61]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">3. Desenvolvimento</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                Código limpo, velocidade otimizada e estrutura técnica
                preparada para SEO. Testamos em todos os dispositivos.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#b58c61]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe size={32} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">4. Publicação</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                Seu site no ar, com domínio, e-mail profissional
                e suporte contínuo.
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
            subtitle="Descreva suas necessidades e objetivos. Respondemos com uma proposta personalizada em até 24 horas."
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
                      <Mail size={20} className="text-[#b58c61]" />
                    </div>
                    <div>
                      <p className="text-white font-lexend font-semibold text-sm">E-mail</p>
                      <a href="mailto:webpixelbr@gmail.com" className="text-gray-400 hover:text-[#b58c61] font-lexend text-sm transition-colors">webpixelbr@gmail.com</a>
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
                &ldquo;Desde o briefing até a entrega, tive contato direto
                com quem estava fazendo o site. Sem intermediários, sem
                demora. Pedi ajustes pontuais e foram feitos no mesmo dia.&rdquo;
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">Resultado no primeiro mês</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                &ldquo;Na primeira semana com o site no ar, recebi dois
                contatos pelo formulário. No primeiro mês, fechei um caso
                que veio direto do Google.&rdquo;
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#b58c61]/20 rounded-xl flex items-center justify-center mb-6">
                <Star size={28} className="text-[#b58c61]" />
              </div>
              <h3 className="text-white font-lexend font-bold text-lg mb-3">Confiança que impressiona</h3>
              <p className="text-gray-400 font-lexend text-sm leading-relaxed">
                &ldquo;Clientes já chegam na reunião dizendo que viram meu
                site e ficaram impressionados. Mudou a percepção que as
                pessoas têm do meu escritório.&rdquo;
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

      {/* ========== SECTION 14: CTA FINAL ========== */}
      <section className="bg-gradient-to-b from-[#162a2a] to-[#0d1b1b] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-lexend mb-6">
            Pronto para ter um site para advogados que capta clientes no Google?
          </h2>
          <p className="text-gray-300 font-lexend text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Uma conversa rápida é tudo o que precisamos para entender seus
            objetivos. Sem compromisso, direto ao ponto.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#83b440] hover:bg-[#6f9a35] text-white px-10 py-5 rounded-xl font-lexend font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-[#83b440]/30"
          >
            <MessageSquare size={24} />
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </section>

    </>
  )
}
