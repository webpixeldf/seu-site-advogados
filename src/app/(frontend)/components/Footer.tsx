import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'

export default function Footer() {
  const pageLinks = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contatos', href: '/contatos' },
  ]

  const services = [
    'Site Institucional',
    'Landing Page',
    'Blog Jurídico',
    'SEO para Advogados',
    'E-mail Corporativo',
    'Hospedagem Premium',
  ]

  return (
    <footer className="bg-[#162a2a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/seu-site-advogados-branco.webp"
                alt="Seu Site Advogados"
                width={180}
                height={50}
                className="h-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm font-lexend leading-relaxed">
              Criamos sites jurídicos que aparecem no Google e trazem clientes
              de verdade. Simples assim.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/criacaodesiteparaadvogados"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#b58c61] flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <span className="text-white font-lexend font-semibold text-lg mb-4 block">
              Páginas
            </span>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#b58c61] transition-colors text-sm font-lexend"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className="text-white font-lexend font-semibold text-lg mb-4 block">
              Serviços
            </span>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm font-lexend">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-white font-lexend font-semibold text-lg mb-4 block">
              Contato
            </span>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="text-[#b58c61] mt-0.5 shrink-0"
                />
                <div>
                  <a
                    href="https://wa.me/5561992784283"
                    className="text-gray-400 hover:text-[#b58c61] text-sm font-lexend transition-colors"
                  >
                    (61) 99278-4283
                  </a>
                  <p className="text-gray-500 text-xs font-lexend">WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="text-[#b58c61] mt-0.5 shrink-0"
                />
                <a
                  href="mailto:webpixelbr@gmail.com"
                  className="text-gray-400 hover:text-[#b58c61] text-sm font-lexend transition-colors"
                >
                  webpixelbr@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#b58c61] mt-0.5 shrink-0"
                />
                <span className="text-gray-400 text-sm font-lexend">
                  SHIS, Quadra 06, Complexo Brasil 21 - Asa Sul, Brasília - DF
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-lexend">
            &copy; {new Date().getFullYear()} Seu Site Advogados. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/politica-de-privacidade"
              className="text-gray-500 hover:text-gray-400 text-sm font-lexend transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/contatos"
              className="text-gray-500 hover:text-gray-400 text-sm font-lexend transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
