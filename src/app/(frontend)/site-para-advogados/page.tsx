import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cidades Atendidas , Seu Site Advogados em Todo o Brasil',
  description: 'Atendemos escritórios de advocacia em capitais e principais cidades do Brasil. Veja a lista completa de localidades e solicite uma proposta para a sua região.',
  alternates: { canonical: '/site-para-advogados' },
}

const cidades = [
  { slug: 'sao-paulo', nome: 'São Paulo', estado: 'SP' },
  { slug: 'rio-de-janeiro', nome: 'Rio de Janeiro', estado: 'RJ' },
  { slug: 'belo-horizonte', nome: 'Belo Horizonte', estado: 'MG' },
  { slug: 'curitiba', nome: 'Curitiba', estado: 'PR' },
  { slug: 'porto-alegre', nome: 'Porto Alegre', estado: 'RS' },
  { slug: 'salvador', nome: 'Salvador', estado: 'BA' },
  { slug: 'fortaleza', nome: 'Fortaleza', estado: 'CE' },
  { slug: 'recife', nome: 'Recife', estado: 'PE' },
]

export default function CidadesIndexPage() {
  return (
    <>
      <section className="bg-[#162a2a] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-lexend mb-4">
            Atendemos Advogados em Todo o Brasil
          </h1>
          <p className="text-[#b58c61] text-xl md:text-2xl font-lexend">
            {cidades.length} localidades atendidas
          </p>
        </div>
      </section>

      <section className="bg-[#f5f5f3] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12 space-y-4">
            <p className="text-gray-700 font-lexend text-lg leading-relaxed">
              A advocacia é uma profissão local por natureza. Quando alguém precisa de um
              advogado trabalhista em Curitiba ou de um especialista em direito de família no
              Recife, a busca no Google quase sempre inclui a cidade. É por isso que criamos
              páginas dedicadas às capitais onde nossos clientes mais atuam: cada uma traz
              informações sobre o mercado jurídico da região, a seccional da OAB local e o
              cenário de concorrência que o escritório enfrenta ali.
            </p>
            <p className="text-gray-700 font-lexend leading-relaxed">
              Na prática, o atendimento é o mesmo em qualquer lugar do Brasil , o processo é
              100% remoto, do briefing à publicação. A diferença está na estratégia: um site
              para um escritório em São Paulo, que disputa espaço com dezenas de milhares de
              advogados, precisa de uma abordagem de SEO diferente de um escritório em uma
              capital com mercado menos saturado. Levamos isso em conta na arquitetura das
              páginas, na escolha das palavras-chave e no conteúdo de cada projeto.
            </p>
            <p className="text-gray-700 font-lexend leading-relaxed">
              Selecione sua cidade abaixo para ver os detalhes da sua região:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {cidades.map((c) => (
              <Link
                key={c.slug}
                href={`/site-para-advogados/${c.slug}`}
                className="flex items-center gap-2 bg-white hover:bg-[#162a2a] hover:text-white text-[#162a2a] px-4 py-3 rounded-lg font-lexend text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <MapPin size={16} className="text-[#b58c61] group-hover:text-[#de7322] transition-colors flex-shrink-0" />
                <span className="truncate">{c.nome} , {c.estado}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend mb-6">
            Minha cidade não está na lista. Vocês atendem?
          </h2>
          <p className="text-gray-700 font-lexend leading-relaxed">
            Sim. As páginas acima cobrem as capitais com maior volume de buscas, mas
            atendemos advogados de qualquer cidade do país , do interior de São Paulo a
            Roraima, e até profissionais brasileiros atuando em Portugal. Como todo o
            trabalho é feito remotamente, com reuniões por videochamada e aprovações pelo
            WhatsApp, a localização do escritório nunca foi uma barreira.
          </p>
          <p className="text-gray-700 font-lexend leading-relaxed">
            Aliás, para escritórios de cidades menores há uma vantagem real: a concorrência
            no Google costuma ser baixa. Um site bem estruturado, com SEO local configurado e
            páginas por área de atuação, frequentemente chega à primeira página em poucas
            semanas , algo que nas grandes capitais exige um trabalho mais longo.
          </p>
          <p className="text-gray-700 font-lexend leading-relaxed">
            Se você quer entender como funciona a{' '}
            <Link href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors" title="Criação de site para advogado">
              criação de site para advogado
            </Link>{' '}
            para a sua região, chame no WhatsApp e conte em qual cidade você atua. A proposta
            já vai considerar o cenário local de buscas.
          </p>
        </div>
      </section>
    </>
  )
}
