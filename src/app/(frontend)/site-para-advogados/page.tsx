import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Criação de Site para Advogados em Todo o Brasil — Cidades Atendidas',
  description: 'Atendemos advogados e escritórios de advocacia em capitais e principais cidades do Brasil. Veja a lista completa de localidades onde criamos sites jurídicos.',
  alternates: { canonical: '/' },
}

const cidades = [
  { slug: 'alto-alegre', nome: 'Alto Alegre', estado: 'RR' },
  { slug: 'araraquara', nome: 'Araraquara', estado: 'SP' },
  { slug: 'belem-do-para', nome: 'Belém do Pará', estado: 'PA' },
  { slug: 'belo-horizonte', nome: 'Belo Horizonte', estado: 'MG' },
  { slug: 'blumenau', nome: 'Blumenau', estado: 'SC' },
  { slug: 'boa-vista', nome: 'Boa Vista', estado: 'RR' },
  { slug: 'campinas', nome: 'Campinas', estado: 'SP' },
  { slug: 'campo-grande', nome: 'Campo Grande', estado: 'MS' },
  { slug: 'caracarai', nome: 'Caracaraí', estado: 'RR' },
  { slug: 'cascavel', nome: 'Cascavel', estado: 'PR' },
  { slug: 'caxias-do-sul', nome: 'Caxias do Sul', estado: 'RS' },
  { slug: 'chapeco', nome: 'Chapecó', estado: 'SC' },
  { slug: 'curitiba', nome: 'Curitiba', estado: 'PR' },
  { slug: 'florianopolis', nome: 'Florianópolis', estado: 'SC' },
  { slug: 'fortaleza', nome: 'Fortaleza', estado: 'CE' },
  { slug: 'goiania', nome: 'Goiânia', estado: 'GO' },
  { slug: 'guarulhos', nome: 'Guarulhos', estado: 'SP' },
  { slug: 'itajai', nome: 'Itajaí', estado: 'SC' },
  { slug: 'joao-pessoa', nome: 'João Pessoa', estado: 'PB' },
  { slug: 'joinville', nome: 'Joinville', estado: 'SC' },
  { slug: 'londrina', nome: 'Londrina', estado: 'PR' },
  { slug: 'maceio', nome: 'Maceió', estado: 'AL' },
  { slug: 'manaus', nome: 'Manaus', estado: 'AM' },
  { slug: 'maringa', nome: 'Maringá', estado: 'PR' },
  { slug: 'mogi-das-cruzes', nome: 'Mogi das Cruzes', estado: 'SP' },
  { slug: 'porto-alegre', nome: 'Porto Alegre', estado: 'RS' },
  { slug: 'portugal', nome: 'Portugal', estado: 'PT' },
  { slug: 'recife', nome: 'Recife', estado: 'PE' },
  { slug: 'ribeirao-preto', nome: 'Ribeirão Preto', estado: 'SP' },
  { slug: 'rio-de-janeiro', nome: 'Rio de Janeiro', estado: 'RJ' },
  { slug: 'rorainopolis', nome: 'Rorainópolis', estado: 'RR' },
  { slug: 'salvador', nome: 'Salvador', estado: 'BA' },
  { slug: 'santa-catarina', nome: 'Santa Catarina', estado: 'SC' },
  { slug: 'sao-jose-dos-campos', nome: 'São José dos Campos', estado: 'SP' },
  { slug: 'sao-luis', nome: 'São Luís', estado: 'MA' },
  { slug: 'sao-paulo', nome: 'São Paulo', estado: 'SP' },
  { slug: 'uberlandia', nome: 'Uberlândia', estado: 'MG' },
]

export default function CidadesIndexPage() {
  return (
    <>
      <section className="bg-[#162a2a] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-lexend mb-4">
            Criação de Site para Advogados em Todo o Brasil
          </h1>
          <p className="text-[#b58c61] text-xl md:text-2xl font-lexend">
            {cidades.length} localidades atendidas
          </p>
        </div>
      </section>

      <section className="bg-[#f5f5f3] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 font-lexend text-lg leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            Atendemos escritórios de advocacia em todas as regiões do Brasil com projetos de criação de site para advogados sob medida. Selecione sua cidade ou região:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {cidades.map((c) => (
              <Link
                key={c.slug}
                href={`/site-para-advogados/${c.slug}`}
                className="flex items-center gap-2 bg-white hover:bg-[#162a2a] hover:text-white text-[#162a2a] px-4 py-3 rounded-lg font-lexend text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <MapPin size={16} className="text-[#b58c61] group-hover:text-[#de7322] transition-colors flex-shrink-0" />
                <span className="truncate">{c.nome} — {c.estado}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
