import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#162a2a] flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <p className="text-[#b58c61] font-lexend font-bold text-8xl md:text-9xl mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white font-lexend mb-4">
          Página não encontrada
        </h1>
        <p className="text-gray-400 font-lexend leading-relaxed mb-8">
          A página que você procura não existe ou foi movida.
          Mas não se preocupe — você pode voltar para a página inicial
          ou explorar nosso conteúdo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#de7322] hover:bg-[#ba5918] text-white px-8 py-3.5 rounded-lg font-lexend font-semibold text-sm transition-all duration-300 hover:scale-105"
          >
            Voltar para a página inicial
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#b58c61] text-white hover:text-[#b58c61] px-8 py-3.5 rounded-lg font-lexend font-semibold text-sm transition-all duration-300"
          >
            Ver nosso blog
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link href="/portfolio" className="text-gray-500 hover:text-[#b58c61] font-lexend text-sm transition-colors">
            Portfólio
          </Link>
          <Link href="/quem-somos" className="text-gray-500 hover:text-[#b58c61] font-lexend text-sm transition-colors">
            Quem Somos
          </Link>
          <Link href="/faq" className="text-gray-500 hover:text-[#b58c61] font-lexend text-sm transition-colors">
            FAQ
          </Link>
          <Link href="/contatos" className="text-gray-500 hover:text-[#b58c61] font-lexend text-sm transition-colors">
            Contato
          </Link>
        </div>
      </div>
    </div>
  )
}
