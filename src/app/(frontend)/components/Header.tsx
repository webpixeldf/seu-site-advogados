'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown, MapPin } from 'lucide-react'

const cidades = [
  { label: 'Alto Alegre', slug: 'alto-alegre' },
  { label: 'Araraquara', slug: 'araraquara' },
  { label: 'Belém do Pará', slug: 'belem-do-para' },
  { label: 'Belo Horizonte', slug: 'belo-horizonte' },
  { label: 'Blumenau', slug: 'blumenau' },
  { label: 'Boa Vista', slug: 'boa-vista' },
  { label: 'Campinas', slug: 'campinas' },
  { label: 'Campo Grande', slug: 'campo-grande' },
  { label: 'Caracaraí', slug: 'caracarai' },
  { label: 'Cascavel', slug: 'cascavel' },
  { label: 'Caxias do Sul', slug: 'caxias-do-sul' },
  { label: 'Chapecó', slug: 'chapeco' },
  { label: 'Curitiba', slug: 'curitiba' },
  { label: 'Florianópolis', slug: 'florianopolis' },
  { label: 'Fortaleza', slug: 'fortaleza' },
  { label: 'Goiânia', slug: 'goiania' },
  { label: 'Guarulhos', slug: 'guarulhos' },
  { label: 'Itajaí', slug: 'itajai' },
  { label: 'João Pessoa', slug: 'joao-pessoa' },
  { label: 'Joinville', slug: 'joinville' },
  { label: 'Londrina', slug: 'londrina' },
  { label: 'Maceió', slug: 'maceio' },
  { label: 'Manaus', slug: 'manaus' },
  { label: 'Maringá', slug: 'maringa' },
  { label: 'Mogi das Cruzes', slug: 'mogi-das-cruzes' },
  { label: 'Porto Alegre', slug: 'porto-alegre' },
  { label: 'Portugal', slug: 'portugal' },
  { label: 'Recife', slug: 'recife' },
  { label: 'Ribeirão Preto', slug: 'ribeirao-preto' },
  { label: 'Rio de Janeiro', slug: 'rio-de-janeiro' },
  { label: 'Rorainópolis', slug: 'rorainopolis' },
  { label: 'Salvador', slug: 'salvador' },
  { label: 'Santa Catarina', slug: 'santa-catarina' },
  { label: 'São José dos Campos', slug: 'sao-jose-dos-campos' },
  { label: 'São Luís', slug: 'sao-luis' },
  { label: 'São Paulo', slug: 'sao-paulo' },
  { label: 'Uberlândia', slug: 'uberlandia' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cidadesOpen, setCidadesOpen] = useState(false)
  const [cidadesMobileOpen, setCidadesMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCidadesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contato', href: '/contatos' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#162a2a]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#162a2a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/images/seu-site-advogados-logo.webp" alt="Seu Site Advogados" width={220} height={60} className="h-14 w-auto object-contain" priority />
          </Link>

          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#b58c61] transition-colors font-lexend text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Dropdown Cidades */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setCidadesOpen(!cidadesOpen)}
                className="flex items-center gap-1 text-gray-300 hover:text-[#b58c61] transition-colors font-lexend text-sm font-medium"
              >
                <MapPin size={14} />
                Cidades
                <ChevronDown size={14} className={`transition-transform ${cidadesOpen ? 'rotate-180' : ''}`} />
              </button>

              {cidadesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[600px] bg-[#162a2a] border border-[#b58c61]/20 rounded-xl shadow-2xl p-6 grid grid-cols-3 gap-1 max-h-[70vh] overflow-y-auto">
                  <div className="col-span-3 mb-3 pb-3 border-b border-white/10">
                    <p className="text-[#b58c61] font-lexend font-semibold text-sm">Site para advogados por cidade</p>
                  </div>
                  {cidades.map((cidade) => (
                    <Link
                      key={cidade.slug}
                      href={`/site-para-advogados/${cidade.slug}`}
                      onClick={() => setCidadesOpen(false)}
                      className="text-gray-400 hover:text-[#b58c61] hover:bg-white/5 transition-colors font-lexend text-xs py-1.5 px-2 rounded"
                    >
                      {cidade.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden xl:flex items-center gap-4">
            <a
              href="https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#de7322] hover:bg-[#ba5918] text-white px-5 py-2.5 rounded-lg font-lexend font-semibold text-sm transition-all duration-300 hover:scale-105"
            >
              <Phone size={16} />
              Solicite um orçamento
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-white p-2"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden pb-6 border-t border-white/10 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-[#b58c61] hover:bg-white/5 transition-colors font-lexend text-base px-4 py-2.5 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Cidades */}
              <button
                onClick={() => setCidadesMobileOpen(!cidadesMobileOpen)}
                className="flex items-center justify-between text-gray-300 hover:text-[#b58c61] hover:bg-white/5 transition-colors font-lexend text-base px-4 py-2.5 rounded-lg"
              >
                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  Cidades
                </span>
                <ChevronDown size={16} className={`transition-transform ${cidadesMobileOpen ? 'rotate-180' : ''}`} />
              </button>

              {cidadesMobileOpen && (
                <div className="pl-6 pr-2 grid grid-cols-2 gap-1 py-2">
                  {cidades.map((cidade) => (
                    <Link
                      key={cidade.slug}
                      href={`/site-para-advogados/${cidade.slug}`}
                      onClick={() => { setIsOpen(false); setCidadesMobileOpen(false) }}
                      className="text-gray-400 hover:text-[#b58c61] font-lexend text-sm py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
                    >
                      {cidade.label}
                    </Link>
                  ))}
                </div>
              )}

              <a
                href="https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20um%20or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#de7322] hover:bg-[#ba5918] text-white px-6 py-3 rounded-lg font-lexend font-semibold text-sm transition-all mx-4 mt-3"
              >
                <Phone size={16} />
                Solicite um orçamento
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
