import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Criação de Site para Advogados em Todo o Brasil — Cidades Atendidas',
  description: 'Atendemos advogados e escritórios de advocacia em capitais e principais cidades do Brasil. Veja a lista completa de localidades onde criamos sites jurídicos.',
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
