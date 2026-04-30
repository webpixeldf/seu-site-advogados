import { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import FAQAccordion from '../components/FAQAccordion'
import { Phone, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dúvidas Frequentes',
  description: 'Respostas sobre domínio .adv.br, hospedagem, conformidade com a OAB, blog jurídico e outros detalhes técnicos do seu projeto.',
  alternates: { canonical: '/faq' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Seu Site Advogados',
    title: 'Dúvidas Frequentes | Seu Site Advogados',
    description: 'Respostas sobre domínio .adv.br, hospedagem, conformidade com a OAB, blog jurídico, relatórios de acesso e outros detalhes técnicos.',
    url: '/faq',
    images: [{ url: '/images/site-para-advogado.jpg', width: 1200, height: 630, alt: 'Seu Site Advogados' }],
  },
}

const faqItems = [
  {
    pergunta: 'Como funciona o registro do domínio .adv.br e ele fica no meu nome?',
    resposta:
      'Sim, o domínio fica registrado diretamente no seu nome (ou no nome do escritório). Nós cuidamos de todo o processo de registro junto ao Registro.br, mas a titularidade é sua. Isso significa que, mesmo que você mude de fornecedor no futuro, o endereço continua sendo seu. O domínio .adv.br passa mais confiança para quem visita porque é exclusivo de advogados e escritórios de advocacia. Se você já tem um domínio registrado, também conseguimos aproveitá-lo sem problema.',
  },
  {
    pergunta: 'Como configurar e-mail profissional com domínio .adv.br para advogado?',
    resposta:
      'O e-mail profissional para advogado é configurado com o domínio .adv.br, no formato contato@seuescritorio.adv.br, o que passa muito mais credibilidade do que usar Gmail ou Hotmail em cartões e petições. Dependendo do plano, utilizamos provedores como Zoho Mail ou Google Workspace. O acesso funciona pelo navegador ou por aplicativos como Outlook e Gmail no celular. Se precisar de mais de uma caixa de entrada (por exemplo, uma para cada sócio), também é possível configurar sem problema.',
  },
  {
    pergunta: 'Site de advogado precisa seguir quais regras da OAB e da LGPD?',
    resposta:
      'Sim, todo site de advogado precisa seguir o Provimento 205/2021, o Código de Ética da OAB e a LGPD. Na prática, isso significa não colocar promessas de resultado, não expor valores de honorários de forma ostensiva e manter o tom informativo que a Ordem exige. Também é obrigatório incluir a política de privacidade e os avisos de cookies exigidos pela LGPD. Nos nossos projetos, todo o conteúdo já sai em conformidade com essas normas, e orientamos sobre o que pode ou não ser publicado.',
  },
  {
    pergunta: 'Como atualizar textos e fotos de um site de advocacia depois de pronto?',
    resposta:
      'A forma mais prática é ter um painel administrativo simples onde você mesmo edita textos, troca fotos e publica novos conteúdos sem precisar de conhecimento técnico. Outra opção são os planos de manutenção, que incluem atualizações mensais feitas pela equipe. Muitos advogados misturam as duas opções: fazem ajustes simples por conta própria e pedem ajuda profissional para mudanças maiores.',
  },
  {
    pergunta: 'Vale a pena advogado ter blog jurídico no site?',
    resposta:
      'Vale muito. Um blog com artigos bem escritos ajuda seu escritório a aparecer em mais buscas no Google e mostra que você domina os assuntos da sua área. Pessoas que chegam pelo blog já vêm com uma percepção de autoridade sobre o seu trabalho, o que facilita a conversão. Nós podemos tanto estruturar o blog e deixar pronto para você escrever quanto produzir os artigos por completo, sempre respeitando as regras da OAB. Recomendamos começar com pelo menos dois textos por mês sobre temas que seus clientes costumam perguntar.',
  },
  {
    pergunta: 'Como saber quantas pessoas acessam um site de advogado e de onde vêm?',
    resposta:
      'Com o Google Analytics e o Google Search Console, você acompanha visitas, páginas mais acessadas, tempo de navegação e a origem do tráfego (Google, Instagram, WhatsApp). São ferramentas gratuitas que instalamos em todos os projetos. Nos planos com manutenção, enviamos um relatório mensal resumido para que você acompanhe a evolução sem precisar abrir painéis técnicos.',
  },
  {
    pergunta: 'Qual a melhor hospedagem para site de advogado e o que fazer se sair do ar?',
    resposta:
      'A melhor hospedagem para site de advogado é uma com uptime acima de 99,9%, certificado SSL, backups automáticos e proteção contra ataques. Utilizamos servidores de alta performance com essa infraestrutura, a mesma de grandes portais. Se acontecer qualquer instabilidade, nossa equipe recebe um alerta e age antes mesmo de você perceber. Na prática, o tempo fora do ar é quase zero, então pode ficar tranquilo quanto à velocidade e segurança.',
  },
  {
    pergunta: 'Empresa de site para advogado cobra fidelidade ou multa para cancelar?',
    resposta:
      'Não, boas empresas de site para advogado não cobram fidelidade nem multa de cancelamento. No nosso caso, a criação do projeto tem um pagamento único (ou parcelado) e a manutenção e hospedagem são cobradas mensalmente, mas você pode cancelar quando quiser. Se decidir sair, entregamos todos os arquivos, acessos e o domínio continua no seu nome. A maioria dos nossos clientes está conosco há mais de dois anos justamente porque ficam pela qualidade, não por contrato.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.pergunta,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.resposta,
    },
  })),
}

export default function FAQPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section className="relative bg-[#162a2a] py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#b58c61]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#de7322]/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-[#b58c61] font-lexend text-sm font-semibold tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend mb-6">
            Dúvidas <span className="text-[#b58c61]">Frequentes</span>
          </h1>
          <p className="text-gray-400 font-lexend text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Respostas diretas sobre domínio, hospedagem, conformidade com a OAB e tudo mais que você precisa saber.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-[#eaecec]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Sidebar with image and info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/perguntas-frequentes.webp"
                  alt="Advogado tirando dúvidas sobre seu projeto digital"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#162a2a]/80 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-white font-lexend font-bold text-lg leading-snug">
                      Tudo o que você precisa saber sobre o seu projeto, sem rodeios.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#de7322]/10 rounded-lg flex items-center justify-center">
                    <HelpCircle size={20} className="text-[#de7322]" />
                  </div>
                  <h2 className="font-bold text-[#162a2a] font-lexend text-base">Não encontrou sua dúvida?</h2>
                </div>
                <p className="text-gray-600 font-lexend text-sm mb-4 leading-relaxed">
                  Fale com a nossa equipe pelo WhatsApp e tire qualquer dúvida sobre o seu projeto.
                </p>
                <a
                  href="https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#de7322] hover:text-[#c5631b] font-lexend font-semibold text-sm transition-colors"
                >
                  <Phone size={16} />
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="lg:col-span-2">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-custom">
          <div className="bg-[#162a2a] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#b58c61]/10 rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#de7322]/10 rounded-full -translate-x-1/3 translate-y-1/3" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-lexend mb-4">
                Ainda tem <span className="text-[#b58c61]">dúvidas</span>?
              </h2>
              <p className="text-gray-400 font-lexend text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Converse com a nossa equipe e tire todas as suas dúvidas sem compromisso.
              </p>
              <a
                href="https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone size={18} />
                Fale conosco
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
