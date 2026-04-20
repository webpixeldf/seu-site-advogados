'use client'

import { useState, useMemo } from 'react'
import { Search, X } from 'lucide-react'
import BlogCard from './BlogCard'

interface Post {
  titulo: string
  slug: string
  resumo: string
  imagemUrl: string
  publishedAt: string
}

interface BlogSearchProps {
  posts: Post[]
}

function normalize(s: string) {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    if (!q) return posts
    return posts.filter((p) => {
      const haystack = normalize(`${p.titulo} ${p.resumo}`)
      return haystack.includes(q)
    })
  }, [posts, query])

  return (
    <>
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar artigo por título ou palavra-chave..."
            aria-label="Buscar artigos"
            className="w-full bg-white border border-gray-200 rounded-full pl-14 pr-14 py-4 font-lexend text-base text-[#162a2a] placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b58c61] focus:border-transparent transition-all"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Limpar busca"
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#162a2a] transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>
        {query && (
          <p className="text-center text-sm text-gray-500 font-lexend mt-4">
            {filtered.length === 0
              ? 'Nenhum artigo encontrado'
              : `${filtered.length} ${filtered.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}`}
          </p>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 font-lexend text-lg">
            Tente buscar por outro termo ou remover os filtros.
          </p>
        </div>
      )}
    </>
  )
}
