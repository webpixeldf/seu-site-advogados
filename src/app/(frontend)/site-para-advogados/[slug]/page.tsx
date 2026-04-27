import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, Monitor, MessageSquare, MapPin, Shield, Star, Mail, Lock, BookOpen, UserPlus, Server, ArrowRight } from 'lucide-react'
import FAQAccordion from '../../components/FAQAccordion'
import ContactForm from '../../components/ContactForm'
import Breadcrumbs from '../../components/Breadcrumbs'

const WHATSAPP_URL =
  'https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20um%20or%C3%A7amento.'

const cidades: Record<string, { nome: string; estado: string; imagem: string }> = {
  'alto-alegre': { nome: 'Alto Alegre', estado: 'RR', imagem: 'Criacao-de-site-para-advogados-em-Alto-Alegre.webp' },
  'araraquara': { nome: 'Araraquara', estado: 'SP', imagem: 'Criacao-de-site-para-advogados-em-Araraquara.webp' },
  'belem-do-para': { nome: 'Belém do Pará', estado: 'PA', imagem: 'criacao-de-site-para-advogados-em-belem-do-para.webp' },
  'belo-horizonte': { nome: 'Belo Horizonte', estado: 'MG', imagem: 'criacao-de-site-para-advogados-em-belo-horizonte.webp' },
  'blumenau': { nome: 'Blumenau', estado: 'SC', imagem: 'criacao-de-site-para-advogados-em-Blumenau.webp' },
  'boa-vista': { nome: 'Boa Vista', estado: 'RR', imagem: 'Criacao-de-site-para-advogados-em-Boa-Vista.webp' },
  'campinas': { nome: 'Campinas', estado: 'SP', imagem: 'criacao-de-site-para-advogados-em-campinas.webp' },
  'campo-grande': { nome: 'Campo Grande', estado: 'MS', imagem: 'Criacao-de-site-para-advogados-em-Campo-Grande.webp' },
  'caracarai': { nome: 'Caracaraí', estado: 'RR', imagem: 'Criacao-de-site-para-advogados-em-Caracarai.webp' },
  'cascavel': { nome: 'Cascavel', estado: 'PR', imagem: 'criacao-de-site-para-advogados-em-cascavel.webp' },
  'caxias-do-sul': { nome: 'Caxias do Sul', estado: 'RS', imagem: 'criacao-de-site-para-advogados-em-caxias-do-sul.webp' },
  'chapeco': { nome: 'Chapecó', estado: 'SC', imagem: 'Criacao-de-site-para-advogados-em-Chapeco.webp' },
  'curitiba': { nome: 'Curitiba', estado: 'PR', imagem: 'criacao-de-site-para-advogados-em-curitiba.webp' },
  'florianopolis': { nome: 'Florianópolis', estado: 'SC', imagem: 'criacao-de-site-para-advogados-em-florianopolis.webp' },
  'fortaleza': { nome: 'Fortaleza', estado: 'CE', imagem: 'Criacao-de-site-para-advogados-em-Fortaleza.webp' },
  'goiania': { nome: 'Goiânia', estado: 'GO', imagem: 'criacao-de-site-para-advogados-em-goiania.webp' },
  'guarulhos': { nome: 'Guarulhos', estado: 'SP', imagem: 'Criacao-de-site-para-advogados-em-Guarulhos.webp' },
  'itajai': { nome: 'Itajaí', estado: 'SC', imagem: 'Criacao-de-site-para-advogados-em-Itajai.webp' },
  'joao-pessoa': { nome: 'João Pessoa', estado: 'PB', imagem: 'criacao-de-site-para-advogados-em-joao-pessoa.webp' },
  'joinville': { nome: 'Joinville', estado: 'SC', imagem: 'Criacao-de-site-para-advogados-em-Joinville.webp' },
  'londrina': { nome: 'Londrina', estado: 'PR', imagem: 'criacao-de-site-para-advogados-em-londrina.webp' },
  'maceio': { nome: 'Maceió', estado: 'AL', imagem: 'Criacao-de-site-para-advogados-em-Maceio.webp' },
  'manaus': { nome: 'Manaus', estado: 'AM', imagem: 'criacao-de-site-para-advogados-em-Manaus.webp' },
  'maringa': { nome: 'Maringá', estado: 'PR', imagem: 'criacao-de-site-para-advogados-em-maringa.webp' },
  'mogi-das-cruzes': { nome: 'Mogi das Cruzes', estado: 'SP', imagem: 'Criacao-de-site-para-advogados-em-Mogi-das-Cruzes.webp' },
  'porto-alegre': { nome: 'Porto Alegre', estado: 'RS', imagem: 'Criacao-de-site-para-advogados-em-Porto-Alegre.webp' },
  'portugal': { nome: 'Portugal', estado: 'PT', imagem: 'criacao-de-site-para-advogados-em-portugal.webp' },
  'recife': { nome: 'Recife', estado: 'PE', imagem: 'criacao-de-site-para-advogados-em-recife.webp' },
  'ribeirao-preto': { nome: 'Ribeirão Preto', estado: 'SP', imagem: 'Criacao-de-site-para-advogados-em-Ribeirao-Preto.webp' },
  'rio-de-janeiro': { nome: 'Rio de Janeiro', estado: 'RJ', imagem: 'criacao-de-site-para-advogados-no-rio-de-janeiro.webp' },
  'rorainopolis': { nome: 'Rorainópolis', estado: 'RR', imagem: 'Criacao-de-site-para-advogados-em-Rorainopolis.webp' },
  'salvador': { nome: 'Salvador', estado: 'BA', imagem: 'criacao-de-site-para-advogados-em-Salvador.webp' },
  'santa-catarina': { nome: 'Santa Catarina', estado: 'SC', imagem: 'Criacao-de-site-para-advogados-em-Santa-Catarina.webp' },
  'sao-jose-dos-campos': { nome: 'São José dos Campos', estado: 'SP', imagem: 'Criacao-de-site-para-advogados-em-Sao-Jose-dos-Campos.webp' },
  'sao-luis': { nome: 'São Luís', estado: 'MA', imagem: 'Criacao-de-site-para-advogados-em-Sao-Luis.webp' },
  'sao-paulo': { nome: 'São Paulo', estado: 'SP', imagem: 'criacao-de-site-para-advogados-em-sao-paulo.webp' },
  'uberlandia': { nome: 'Uberlândia', estado: 'MG', imagem: 'site-para-advogados-em-uberlandia.webp' },
}

export async function generateStaticParams() {
  return Object.keys(cidades).map((slug) => ({ slug }))
}

const cidadeData: Record<string, { oab: string; advogados: string; tribunal: string; fato: string }> = {
  'sao-paulo': {
    oab: 'OAB-SP',
    advogados: '380 mil advogados inscritos — a maior seccional do país',
    tribunal: 'TJSP (Tribunal de Justiça do Estado de São Paulo)',
    fato: 'O TJSP é considerado o maior tribunal do mundo em volume de processos, com mais de 21 milhões de feitos em andamento.',
  },
  'rio-de-janeiro': {
    oab: 'OAB-RJ',
    advogados: 'Aproximadamente 150 mil advogados inscritos',
    tribunal: 'TJRJ (Tribunal de Justiça do Estado do Rio de Janeiro)',
    fato: 'O Rio de Janeiro tem a maior proporção de advogados por habitante do Sudeste: 1 para cada 116 habitantes.',
  },
  'belo-horizonte': {
    oab: 'OAB-MG',
    advogados: 'Cerca de 140 mil advogados inscritos',
    tribunal: 'TJMG (Tribunal de Justiça do Estado de Minas Gerais)',
    fato: 'Minas Gerais é o terceiro estado com mais advogados do país, e a maioria dos inscritos (51%) são mulheres.',
  },
  'curitiba': {
    oab: 'OAB-PR',
    advogados: 'Cerca de 93 mil advogados inscritos',
    tribunal: 'TJPR (Tribunal de Justiça do Estado do Paraná)',
    fato: 'O Paraná tem forte presença de jovens advogados e representa 6,2% do quadro total de profissionais do Brasil.',
  },
  'porto-alegre': {
    oab: 'OAB-RS',
    advogados: 'Aproximadamente 92 mil advogados inscritos',
    tribunal: 'TJRS (Tribunal de Justiça do Estado do Rio Grande do Sul)',
    fato: 'O Rio Grande do Sul tem a maior proporção de advogados por habitante da Região Sul: 1 para cada 123 habitantes.',
  },
  'salvador': {
    oab: 'OAB-BA',
    advogados: 'Cerca de 61 mil advogados ativos',
    tribunal: 'TJBA (Tribunal de Justiça do Estado da Bahia)',
    fato: 'A Bahia é a seccional com o maior número de advogados inscritos de toda a Região Nordeste.',
  },
  'fortaleza': {
    oab: 'OAB-CE',
    advogados: 'Cerca de 35 mil advogados inscritos',
    tribunal: 'TJCE (Tribunal de Justiça do Estado do Ceará)',
    fato: 'O Ceará tem 1 advogado para cada 266 habitantes — índice abaixo da média nacional.',
  },
  'recife': {
    oab: 'OAB-PE',
    advogados: 'Aproximadamente 39 mil advogados inscritos',
    tribunal: 'TJPE (Tribunal de Justiça do Estado de Pernambuco)',
    fato: '58% dos advogados de Pernambuco estão concentrados na capital Recife.',
  },
  'goiania': {
    oab: 'OAB-GO',
    advogados: 'Cerca de 48 mil advogados inscritos',
    tribunal: 'TJGO (Tribunal de Justiça do Estado de Goiás)',
    fato: 'Goiás tem 1 advogado a cada 150 habitantes — proporção acima da média nacional.',
  },
  'florianopolis': {
    oab: 'OAB-SC',
    advogados: 'Aproximadamente 47 mil advogados inscritos',
    tribunal: 'TJSC (Tribunal de Justiça do Estado de Santa Catarina)',
    fato: 'O TJSC é referência nacional pelo sistema processual eProc, e SC tem 1 advogado para cada 158 habitantes.',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cidade = cidades[slug]
  if (!cidade) {
    return { title: 'Cidade não encontrada' }
  }
  const local = cidadeData[slug]
  const descBase = local
    ? `${local.advogados} na ${local.oab}. Destaque seu escritório em ${cidade.nome} com um site profissional que gera contatos qualificados.`
    : `Site profissional para advogados em ${cidade.nome}. Design exclusivo, otimização para buscas e hospedagem inclusa. Solicite uma proposta.`

  return {
    title: `Site para Advogados em ${cidade.nome} — ${cidade.estado}`,
    description: descBase,
    alternates: { canonical: `/site-para-advogados/${slug}` },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      siteName: 'Seu Site Advogados',
      title: `Site para Advogados em ${cidade.nome} - ${cidade.estado}`,
      description: descBase,
      url: `/site-para-advogados/${slug}`,
      images: [{ url: `/images/${cidade.imagem}`, width: 1200, height: 630, alt: `Cidade de ${cidade.nome} - site para advogados` }],
    },
  }
}

function getFaqCidade(cidadeNome: string, estado: string, local: typeof cidadeData[string] | undefined) {
  const oab = local?.oab || `OAB-${estado}`
  const tribunal = local?.tribunal || `TJ${estado}`
  return [
    {
      pergunta: `Vocês atendem advogados em ${cidadeNome} mesmo sendo de Brasília?`,
      resposta: `Sim. Nosso processo é 100% digital — do briefing à entrega, tudo acontece online. Atendemos escritórios em todo o Brasil com a mesma qualidade. Se preferir, podemos fazer reuniões por videochamada para alinhar cada detalhe do projeto.`,
    },
    {
      pergunta: `O site vai me posicionar bem nas buscas em ${cidadeNome}?`,
      resposta: `Trabalhamos a otimização técnica para que o Google identifique corretamente sua localização e áreas de atuação. Isso inclui estrutura de páginas por especialidade, dados de contato consistentes e orientação para cadastro no Google Meu Negócio, fortalecendo sua presença junto ao ${tribunal}.`,
    },
    {
      pergunta: `Qual a vantagem de ter um site próprio em vez de usar só redes sociais em ${cidadeNome}?`,
      resposta: `Redes sociais são importantes, mas você não controla o algoritmo nem a plataforma. Um site é seu — aparece nas buscas do Google quando alguém procura "advogado em ${cidadeNome}", transmite credibilidade e centraliza todas as informações do escritório em um lugar que você domina.`,
    },
    {
      pergunta: `O conteúdo segue as diretrizes da ${oab}?`,
      resposta: `Sim. Conhecemos as regras do Provimento 205/2021 sobre publicidade na advocacia. Todo texto é produzido para informar — sem linguagem mercantilista, sem promessas de resultado e sem captação ativa de clientes.`,
    },
  ]
}

const servicos = [
  { icon: Monitor, titulo: 'Design responsivo', desc: 'Site que se adapta perfeitamente a qualquer dispositivo.' },
  { icon: MessageSquare, titulo: 'Chat WhatsApp', desc: 'Conecte-se com potenciais clientes com apenas um toque.' },
  { icon: MapPin, titulo: 'SEO local', desc: 'Posicionamento estratégico para sua cidade no Google.' },
  { icon: Star, titulo: 'Reputação digital', desc: 'Exiba avaliações reais de clientes satisfeitos.' },
  { icon: Mail, titulo: 'E-mail corporativo', desc: 'Endereço profissional seu.nome@escritorio.com.br.' },
  { icon: Lock, titulo: 'Proteção SSL', desc: 'Segurança dos dados com certificado SSL ativo.' },
  { icon: BookOpen, titulo: 'Blog jurídico', desc: 'Posicione-se como autoridade na sua área.' },
  { icon: UserPlus, titulo: 'Captura de leads', desc: 'Formulário que direciona consultas ao seu e-mail.' },
  { icon: Server, titulo: 'Hospedagem premium', desc: 'Velocidade e estabilidade 24 horas por dia.' },
]

export default async function CidadePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cidade = cidades[slug]

  if (!cidade) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#162a2a]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white font-lexend mb-4">Cidade não encontrada</h1>
          <Link href="/" className="text-[#b58c61] font-lexend hover:underline">Voltar para a home</Link>
        </div>
      </section>
    )
  }

  const cidadeKeys = Object.keys(cidades)
  const cidadeIndex = cidadeKeys.indexOf(slug)
  const localData = cidadeData[slug]
  const faqCidade = getFaqCidade(cidade.nome, cidade.estado, localData)

  const homepageAnchors = [
    { text: 'criação de site para advogados', title: 'Criação de site para advogados' },
    { text: 'landing page para advogados', title: 'Landing page profissional para advogados' },
    { text: 'site profissional para escritórios de advocacia', title: 'Site para escritórios de advocacia' },
    { text: 'site jurídico profissional', title: 'Site jurídico profissional' },
    { text: 'presença digital para advogados', title: 'Presença digital para advogados' },
    { text: 'desenvolvimento de site para advogados', title: 'Desenvolvimento de site para advogados' },
    { text: 'site otimizado para advogados', title: 'Site otimizado para advogados' },
    { text: 'Seu Site Advogados', title: 'Seu Site Advogados - Especialistas em sites jurídicos' },
  ]
  const anchor1 = homepageAnchors[cidadeIndex % homepageAnchors.length]

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#162a2a] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`/images/${cidade.imagem}`}
            alt={`Site para advogados em ${cidade.nome}`}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#162a2a] via-[#162a2a]/90 to-[#162a2a]/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Site para Advogados', href: '/' },
              { label: cidade.nome },
            ]}
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#b58c61]/40 rounded-full px-4 py-1.5 mb-6">
                <MapPin size={14} className="text-[#b58c61]" />
                <span className="text-[#b58c61] text-sm font-lexend">{cidade.nome} - {cidade.estado}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-lexend leading-tight mb-4">
                Site para Advogados em {cidade.nome}
              </h1>

              <p className="text-gray-300 text-lg font-lexend leading-relaxed mb-4">
                Criamos sites profissionais e otimizados para advogados e escritórios de advocacia em {cidade.nome}. Destaque-se no mercado jurídico local com uma presença digital que atrai e converte clientes.
              </p>

              <p className="text-gray-400 font-lexend leading-relaxed mb-8">
                Somos especialistas em desenvolvimento de sites jurídicos com SEO avançado, focados em posicionar seu escritório nas primeiras posições do Google em {cidade.nome}.
              </p>

              <div className="inline-flex items-center bg-[#b58c61] rounded-lg px-5 py-2.5 mb-8">
                <span className="text-white font-lexend font-bold">A partir de 3x de R$ 260,00</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#de7322] hover:bg-[#ba5918] text-white px-8 py-4 rounded-lg font-lexend font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Phone size={20} />
                  Solicite um orçamento
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={`/images/${cidade.imagem}`}
                  alt={`Criacao de site para advogados em ${cidade.nome}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que ter um site */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#162a2a] font-lexend mb-4">
              Por que advogados em {cidade.nome} precisam de um site
            </h2>
            <p className="text-gray-600 font-lexend max-w-2xl mx-auto">
              {localData
                ? `${localData.advogados} na ${localData.oab}. Com tanta concorrência, um site bem feito é o que diferencia o escritório que depende de indicações daquele que recebe contatos todos os dias pelo Google.`
                : `Com o mercado jurídico cada vez mais competitivo, um site profissional é o que diferencia o escritório que depende de indicações daquele que recebe contatos diretamente pelo Google.`
              }
              {' '}Conheça nosso serviço de{' '}
              <Link href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors" title={anchor1.title}>
                {anchor1.text}
              </Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { titulo: 'Visibilidade local', desc: `Aparecer nas primeiras posições do Google quando alguém busca por advogado em ${cidade.nome}. Mais de 78% dos clientes pesquisam online antes de contratar um advogado.` },
              { titulo: 'Credibilidade profissional', desc: 'Um site profissional transmite confiança e seriedade. Seus potenciais clientes podem conhecer suas especialidades e conquistas antes do primeiro contato.' },
              { titulo: 'Captação 24 horas', desc: 'Seu site funciona como um escritório virtual disponível 24/7, captando leads e consultas mesmo fora do horário comercial.' },
              { titulo: 'Vantagem competitiva', desc: `Destaque-se dos outros advogados em ${cidade.nome} com uma presença digital profissional e estratégica que gera autoridade no mercado.` },
            ].map((item) => (
              <div key={item.titulo} className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-[#b58c61]/30 hover:shadow-lg transition-all duration-300">
                <CheckCircle size={24} className="text-[#83b440] shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[#162a2a] font-lexend mb-2">{item.titulo}</h3>
                  <p className="text-gray-600 font-lexend text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicos */}
      <section className="py-20 bg-[#eaecec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#162a2a] font-lexend mb-4">
              O que está incluso no seu site
            </h2>
            <p className="text-gray-600 font-lexend max-w-2xl mx-auto">
              Pacote completo para advogados em {cidade.nome}, sem custos ocultos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((s) => (
              <div key={s.titulo} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-[#162a2a] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#b58c61] transition-colors">
                  <s.icon size={22} className="text-[#b58c61] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[#162a2a] font-lexend font-bold mb-2">{s.titulo}</h3>
                <p className="text-gray-600 font-lexend text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#162a2a] font-lexend mb-4">
              Sites que já criamos para advogados
            </h2>
            <p className="text-gray-600 font-lexend">Cases de sucesso que comprovam nossa expertise</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { nome: 'Da Costa Advocacia', img: 'da-costa.webp' },
              { nome: 'Seguins Advocacia', img: 'seguins-advocacia.webp' },
              { nome: 'Ferreira & Mourão', img: 'ferreira-e-mourao-advogados.webp' },
              { nome: 'Guilherme Bonfim', img: 'guilherme-bonfim-advocacia.webp' },
            ].map((p) => (
              <div key={p.nome} className="group">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                  <Image src={`/images/${p.img}`} alt={p.nome} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162a2a] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-lexend font-semibold text-sm">{p.nome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mercado juridico local */}
      {localData && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#162a2a] font-lexend mb-4">
                O mercado jurídico em {cidade.nome}
              </h2>
              <p className="text-gray-600 font-lexend max-w-2xl mx-auto">
                Dados que mostram por que se destacar online é cada vez mais importante para advogados na região.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#162a2a] rounded-xl p-6 text-center">
                <p className="text-[#b58c61] font-lexend font-bold text-3xl mb-2">{localData.oab}</p>
                <p className="text-gray-300 font-lexend text-sm">{localData.advogados}</p>
              </div>
              <div className="bg-[#162a2a] rounded-xl p-6 text-center">
                <p className="text-[#b58c61] font-lexend font-bold text-lg mb-2">{localData.tribunal}</p>
                <p className="text-gray-300 font-lexend text-sm">Tribunal responsável pela jurisdição estadual</p>
              </div>
              <div className="bg-[#162a2a] rounded-xl p-6">
                <p className="text-white font-lexend font-bold text-sm mb-2">Você sabia?</p>
                <p className="text-gray-300 font-lexend text-sm leading-relaxed">{localData.fato}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 bg-[#eaecec]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#162a2a] font-lexend mb-4">
              Perguntas frequentes
            </h2>
          </div>
          <FAQAccordion items={faqCidade} />
        </div>
      </section>

      {/* Formulario */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#162a2a] font-lexend mb-4">
                Solicite seu orçamento em {cidade.nome}
              </h2>
              <p className="text-gray-600 font-lexend mb-8">
                Preencha o formulário e receba uma proposta personalizada para o site do seu escritório de advocacia.
              </p>
              <ContactForm />
            </div>
            <div className="space-y-6">
              <div className="bg-[#162a2a] rounded-2xl p-8">
                <h3 className="text-white font-lexend font-bold text-xl mb-6">Fale conosco</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#b58c61]" />
                    <a href="tel:+5561992784283" className="text-gray-300 font-lexend hover:text-[#b58c61] transition-colors">(61) 99278-4283</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[#b58c61]" />
                    <a href="mailto:webpixelbr@gmail.com" className="text-gray-300 font-lexend hover:text-[#b58c61] transition-colors">webpixelbr@gmail.com</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#b58c61] mt-0.5" />
                    <span className="text-gray-300 font-lexend text-sm">SHIS, Quadra 06, Complexo Brasil 21 - Asa Sul, Brasília - DF</span>
                  </div>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#83b440] hover:bg-[#6f9a35] text-white px-6 py-3 rounded-lg font-lexend font-semibold transition-all duration-300 hover:scale-105"
                >
                  <MessageSquare size={18} />
                  WhatsApp
                </a>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={`/images/${cidade.imagem}`}
                  alt={`Site para advogados em ${cidade.nome}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-b from-[#162a2a] to-[#0d1b1b] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend mb-4">
            Pronto para se destacar em {cidade.nome}?
          </h2>
          <p className="text-gray-300 font-lexend text-lg mb-8">
            Entre em contato agora e receba um orçamento personalizado para o site do seu escritório.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#de7322] hover:bg-[#ba5918] text-white px-10 py-5 rounded-xl font-lexend font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <Phone size={22} />
            Solicite um orçamento grátis
          </a>
        </div>
      </section>
    </>
  )
}
