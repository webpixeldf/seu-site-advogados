import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

interface PortfolioCardProps {
  nomeCliente: string
  imageSrc: string
  urlSite: string
  descricao: string
}

export default function PortfolioCard({
  nomeCliente,
  imageSrc,
  urlSite,
  descricao,
}: PortfolioCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={'Site criado para ' + nomeCliente + ' - Portfólio Seu Site Advogados'}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={80}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#162a2a] via-[#162a2a]/80 to-[#162a2a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4 p-5">
          <p className="text-gray-200 text-xs font-lexend text-center leading-relaxed line-clamp-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {descricao}
          </p>
          <a
            href={urlSite}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-[#de7322] hover:bg-[#c5631b] text-white px-5 py-2.5 rounded-lg font-lexend font-semibold text-sm transition-all duration-300 hover:scale-105 translate-y-4 group-hover:translate-y-0 shrink-0"
          >
            <ExternalLink size={16} />
            Visitar site
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#162a2a] font-lexend group-hover:text-[#b58c61] transition-colors duration-300">
          {nomeCliente}
        </h3>
        <div className="w-10 h-0.5 bg-[#b58c61] mt-2 group-hover:w-16 transition-all duration-300" />
      </div>
    </div>
  )
}
