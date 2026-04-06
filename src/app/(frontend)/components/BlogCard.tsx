import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

interface BlogCardProps {
  titulo: string
  slug: string
  resumo: string
  imagemUrl: string
  publishedAt: string
}

export default function BlogCard({
  titulo,
  slug,
  resumo,
  imagemUrl,
  publishedAt,
}: BlogCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imagemUrl}
          alt={'Artigo: ' + titulo}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#162a2a]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center gap-2 text-gray-400 mb-3">
          <Calendar size={14} />
          <time className="text-xs font-lexend" dateTime={publishedAt}>
            {formattedDate}
          </time>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#162a2a] font-lexend mb-3 line-clamp-2 group-hover:text-[#b58c61] transition-colors">
          <Link href={`/blog/${slug}`}>{titulo}</Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm font-lexend leading-relaxed line-clamp-3 mb-4">
          {resumo}
        </p>

        {/* Read more */}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-[#de7322] hover:text-[#ba5918] font-lexend font-semibold text-sm transition-colors group/link"
        >
          Ler mais
          <ArrowRight
            size={16}
            className="transition-transform group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </article>
  )
}
