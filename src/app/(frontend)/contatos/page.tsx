import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Solicite um orçamento para criação de site para advogados. WhatsApp (61) 99278-4283 ou visite nosso escritório em Brasília.',
  alternates: { canonical: '/contatos' },
  other: { 'page-type': 'contact' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Seu Site Advogados',
    title: 'Contato | Seu Site Advogados',
    description: 'Solicite um orçamento para criação de site para advogados. WhatsApp (61) 99278-4283.',
    url: '/contatos',
    images: [{ url: '/images/site-para-advogado.jpg', width: 800, height: 800, alt: 'Seu Site Advogados' }],
  },
}

const contactCards = [
  {
    icon: MessageCircle,
    iconColor: 'text-[#25D366]',
    iconBg: 'bg-[#25D366]/10',
    title: 'WhatsApp',
    content: '(61) 99278-4283',
    href: 'https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20um%20or%C3%A7amento.',
    sub: 'Atendimento ágil em horário comercial',
  },
  {
    icon: Mail,
    iconColor: 'text-[#b58c61]',
    iconBg: 'bg-[#b58c61]/10',
    title: 'E-mail',
    content: 'webpixelbr@gmail.com',
    href: 'mailto:webpixelbr@gmail.com',
    sub: 'Retorno garantido em até 24 horas',
  },
  {
    icon: MapPin,
    iconColor: 'text-[#de7322]',
    iconBg: 'bg-[#de7322]/10',
    title: 'Endereço',
    content: 'SHIS Quadra 06, Complexo Brasil 21',
    sub: 'Asa Sul, Brasília - DF | Atendimento presencial',
  },
  {
    icon: Clock,
    iconColor: 'text-[#162a2a]',
    iconBg: 'bg-[#162a2a]/10',
    title: 'Horário',
    content: 'Segunda a Sexta: 9h às 18h',
    sub: 'Fora do horário, envie mensagem pelo WhatsApp',
  },
]

export default function ContatosPage() {
  return (
    <>
      {/* Hero */}
      <section id="contact" className="relative bg-[#162a2a] py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#b58c61]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#de7322]/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-[#b58c61] font-lexend text-sm font-semibold tracking-widest uppercase mb-4">
            Entre em Contato
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend mb-6">
            Contato — <span className="text-[#b58c61]">Solicite uma Proposta para Seu Escritório</span>
          </h1>
          <p className="text-gray-400 font-lexend text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Quer saber mais sobre a criação de site para advogados ou solicitar um orçamento personalizado? <Link href="/portfolio" className="text-[#b58c61] hover:text-[#de7322] underline underline-offset-2 transition-colors duration-300">Conheça nossos projetos</Link> e veja a qualidade do nosso trabalho. Estamos prontos para atender você pelo canal de sua preferência.
          </p>
        </div>
      </section>

      {/* About Our Service */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend mb-6">
            Por que escolher o <span className="text-[#b58c61]">Seu Site Advogados</span>?
          </h2>
          <div className="text-gray-600 font-lexend text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Trabalhamos com advogados e escritórios de advocacia em todo o Brasil. Seja para criar um site do zero, redesenhar um site existente ou adicionar funcionalidades como blog jurídico e captação de leads, nossa equipe está pronta para ajudar. Atendemos de forma 100% digital — do briefing à entrega, tudo acontece online, sem que você precise sair do escritório.
            </p>
            <p>
              Nosso processo é simples e transparente: você nos conta sobre sua área de atuação, seus objetivos e o perfil dos clientes que deseja alcançar. A partir disso, desenvolvemos um projeto personalizado com design profissional, otimização para mecanismos de busca (SEO) e estrutura pensada para converter visitantes em contatos reais. Cada detalhe é planejado para transmitir credibilidade e autoridade no meio jurídico.
            </p>
            <p>
              Além da criação do site, oferecemos suporte contínuo, manutenção técnica e consultoria em marketing digital para advogados. Se você busca resultados concretos e um parceiro de confiança para fortalecer a presença digital do seu escritório, entre em contato agora mesmo e descubra como podemos ajudar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-[#eaecec]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Form + decorative image */}
            <div className="lg:col-span-3 space-y-10">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mb-2">Solicite seu orçamento</h2>
                <p className="text-gray-600 font-lexend mb-8">
                  Conte-nos sobre o seu projeto e receba uma proposta detalhada em até 24 horas. Sem compromisso. Se preferir, <Link href="/quem-somos" className="text-[#de7322] hover:text-[#b58c61] underline underline-offset-2 transition-colors duration-300">saiba quem somos</Link> ou consulte nossas <Link href="/faq" className="text-[#de7322] hover:text-[#b58c61] underline underline-offset-2 transition-colors duration-300">perguntas frequentes</Link>.
                </p>
                <ContactForm />
              </div>

              {/* Decorative image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg hidden md:block">
                <Image
                  src="/images/contato-advogados.webp"
                  alt="Criação de site para advogados - Seu Site Advogados"
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#162a2a]/70 to-transparent flex items-center">
                  <div className="p-8">
                    <p className="text-white font-lexend text-xl font-bold max-w-xs leading-snug">
                      Coloque seu escritório de advocacia no mapa digital e seja encontrado por quem realmente precisa dos seus serviços jurídicos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mb-2">Informações de contato</h2>
                <p className="text-gray-600 font-lexend mb-8">
                  Prefere um atendimento mais direto? Escolha um dos nossos canais e fale com a equipe agora mesmo.
                </p>
              </div>

              {contactCards.map((card) => {
                const Icon = card.icon
                const inner = (
                  <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    <div
                      className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center shrink-0`}
                    >
                      <Icon size={24} className={card.iconColor} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#162a2a] font-lexend mb-1">{card.title}</h3>
                      <p
                        className={`font-lexend font-medium ${
                          card.href ? 'text-[#de7322]' : 'text-gray-700'
                        }`}
                      >
                        {card.content}
                      </p>
                      <p className="text-gray-500 font-lexend text-sm mt-1">{card.sub}</p>
                    </div>
                  </div>
                )

                if (card.href) {
                  return (
                    <a
                      key={card.title}
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      {inner}
                    </a>
                  )
                }

                return <div key={card.title}>{inner}</div>
              })}

              {/* Address */}
              <address className="not-italic text-gray-400 font-lexend text-sm">
                SHIS, Quadra 06, Complexo Brasil 21, Asa Sul, Brasília - DF<br />
                <a href="mailto:webpixelbr@gmail.com">webpixelbr@gmail.com</a><br />
                <a href="tel:+5561992784283">(61) 99278-4283</a>
              </address>

              {/* CTA WhatsApp */}
              <a
                href="https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20um%20or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center flex items-center gap-2 mt-4"
              >
                <MessageCircle size={18} />
                Chamar no WhatsApp
              </a>

              {/* Privacy policy link */}
              <p className="text-gray-500 font-lexend text-xs mt-4 text-center">
                Ao entrar em contato, você concorda com nossa{' '}
                <Link href="/politica-de-privacidade" className="text-[#b58c61] hover:text-[#de7322] underline underline-offset-2 transition-colors duration-300">
                  Política de Privacidade
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block text-[#de7322] font-lexend text-sm font-semibold tracking-widest uppercase mb-3">
              Localização
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend">
              Nosso Escritório em <span className="text-[#b58c61]">Brasília</span>
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5750780908773!2d-47.8872789!3d-15.7939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b3b1e3c7c1b%3A0x1234567890abcdef!2sComplexo%20Brasil%2021!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Seu Site Advogados - Complexo Brasil 21, Brasília DF"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Empresa - dados de identificação */}
      <section className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm font-lexend">
            Todos os Direitos Reservados &copy; {new Date().getFullYear()} Seu Site Advogados — CNPJ: 34.644.883/0001-94
          </p>
        </div>
      </section>
    </>
  )
}
