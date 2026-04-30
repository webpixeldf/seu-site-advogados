import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quem Somos',
  description: 'Conheça o Seu Site Advogados: equipe especializada em criação de sites para advogados e escritórios de advocacia.',
  alternates: { canonical: '/quem-somos' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Seu Site Advogados',
    title: 'Quem Somos | Seu Site Advogados',
    description: 'Equipe especializada em criação de sites para advogados e escritórios de advocacia.',
    url: '/quem-somos',
    images: [{ url: '/images/site-para-advogado.jpg', width: 1200, height: 630, alt: 'Seu Site Advogados' }],
  },
}

const diferenciais = [
  'Layout exclusivo e estratégico, criado especificamente para o mercado jurídico',
  'Equipe especializada que domina as particularidades da advocacia digital',
  'Planos acessíveis que respeitam a realidade financeira de qualquer escritório',
  'Suporte humanizado via WhatsApp com respostas rápidas quando você mais precisa',
  'Total conformidade com o Código de Ética e as normas de publicidade da OAB',
  'SEO jurídico avançado para posicionar seu site para advogados no topo do Google',
]

export default function QuemSomos() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src="/images/bg-quem-somos.webp"
          alt="Quem somos - Seu Site Advogados"
          fill
          className="object-cover"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-[#162a2a]/90" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#b58c61]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#de7322]/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-[#b58c61] font-lexend text-sm font-semibold tracking-widest uppercase mb-4">
            Sobre Nós
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend mb-6">
            Seu Site Advogados — <span className="text-[#b58c61]">Quem Está Por Trás do Projeto</span>
          </h1>
          <p className="text-gray-300 font-lexend text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Somos a agência de marketing jurídico que transforma escritórios de advocacia em referência digital. Criação de site para advogados é a nossa especialidade — e o seu crescimento, a nossa missão.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/advogados-quem-somos.webp"
                  alt="Equipe Seu Site Advogados"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                  quality={85}
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#b58c61]/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#de7322]/10 rounded-2xl -z-10" />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <span className="inline-block text-[#de7322] font-lexend text-sm font-semibold tracking-widest uppercase">
                Nossa História
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#162a2a] font-lexend leading-tight">
                A agência por trás do seu próximo{' '}
                <span className="text-[#b58c61]">site jurídico</span>
              </h2>
              <p className="text-gray-700 font-lexend leading-relaxed">
                Nascemos com um propósito claro: criar sites para advogados que realmente geram resultados. Não queríamos ser mais uma empresa genérica de tecnologia — queríamos nos tornar a referência em criação de site para advogados no Brasil.
              </p>
              <p className="text-gray-700 font-lexend leading-relaxed">
                Desde então, já desenvolvemos dezenas de sites jurídicos para advogados autônomos e escritórios de advocacia em todo o país. <Link href="/portfolio" className="text-[#de7322] hover:text-[#b58c61] underline underline-offset-2 transition-colors duration-300">Veja nosso portfólio</Link> e confira os resultados. Conhecemos a fundo o mercado jurídico, dominamos as diretrizes da OAB sobre publicidade e sabemos exatamente quais termos os seus futuros clientes digitam no Google quando precisam de um advogado.
              </p>
              <p className="text-gray-700 font-lexend leading-relaxed">
                Nosso trabalho vai muito além da estética. Cada site para advogados que entregamos é projetado para atrair, convencer e converter visitantes em contatos reais. Do primeiro rascunho ao suporte contínuo, cuidamos de cada detalhe para que você foque no que faz de melhor: advogar.
              </p>
            </div>
          </div>

          {/* Diferenciador section */}
          <div className="bg-[#eaecec] rounded-3xl p-10 md:p-14 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-[#de7322] font-lexend text-sm font-semibold tracking-widest uppercase mb-3">
                  Nosso Diferencial
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#162a2a] font-lexend mb-6 leading-tight">
                  Por que advogados nos <span className="text-[#b58c61]">escolhem</span>?
                </h2>
                <p className="text-gray-700 font-lexend leading-relaxed mb-4">
                  Diferente de outras agências, não entregamos o site e desaparecemos. Atuamos como uma verdadeira agência de marketing jurídico ao seu lado: acompanhamos seus resultados, oferecemos suporte ágil e orientamos estratégias para que seu investimento retorne em forma de novos clientes.
                </p>
                <p className="text-gray-700 font-lexend leading-relaxed">
                  E o melhor de tudo: ter um site jurídico profissional cabe no orçamento do seu escritório. Nossos planos começam a partir de 3x de R$ 260,00, já com hospedagem, e-mail profissional e suporte humanizado inclusos.
                </p>
              </div>
              <div className="space-y-4">
                {diferenciais.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <CheckCircle size={22} className="text-[#de7322] shrink-0 mt-0.5" />
                    <span className="text-[#162a2a] font-lexend font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission text */}
          <div className="max-w-3xl mx-auto mt-20 text-center space-y-6">
            <p className="text-gray-700 font-lexend leading-relaxed text-lg">
              <strong className="text-[#162a2a]">O que nos motiva?</strong> Saber que cada site para advogados que entregamos se torna uma máquina de captação de clientes. Ver escritórios que antes viviam apenas de indicações passando a receber contatos semanais pelo Google — esse é o resultado que nos faz acordar todos os dias prontos para trabalhar.
            </p>
            <p className="text-gray-700 font-lexend leading-relaxed text-lg">
              Se você chegou até aqui, já demonstrou que leva a sério a presença digital do seu escritório. O próximo passo é simples: <Link href="/contatos" className="text-[#de7322] hover:text-[#b58c61] underline underline-offset-2 transition-colors duration-300">entre em contato com nossa equipe</Link> e descubra como podemos transformar o seu site jurídico em uma fonte constante de novos clientes. Aproveite também para <Link href="/blog" className="text-[#de7322] hover:text-[#b58c61] underline underline-offset-2 transition-colors duration-300">conferir nosso blog</Link> com dicas práticas sobre marketing jurídico.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#162a2a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#b58c61]/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend mb-4">
            Pronto para ter o{' '}
            <span className="text-[#b58c61]">site que seu escritório merece?</span>
          </h2>
          <p className="text-gray-400 font-lexend text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Fale agora com nossa equipe pelo WhatsApp, conte sobre o seu escritório e receba uma proposta personalizada de criação de site para advogados — sem compromisso.
          </p>
          <a
            href="https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Phone size={18} />
            Quero fazer meu site
          </a>
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
