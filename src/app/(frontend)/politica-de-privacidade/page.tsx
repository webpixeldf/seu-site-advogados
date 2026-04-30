import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de Privacidade | Seu Site Advogados',
  description:
    'Politica de Privacidade do Seu Site Advogados. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.',
  alternates: { canonical: '/politica-de-privacidade' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Seu Site Advogados',
    title: 'Politica de Privacidade | Seu Site Advogados',
    description:
      'Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.',
    url: '/politica-de-privacidade',
    images: [{ url: '/images/site-para-advogado.jpg', width: 1200, height: 630, alt: 'Seu Site Advogados' }],
  },
}

export default function PoliticaDePrivacidade() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#162a2a]">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#b58c61]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#de7322]/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-[#b58c61] font-lexend text-sm font-semibold tracking-widest uppercase mb-4">
            Transparencia e Seguranca
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend mb-6">
            Politica de{' '}
            <span className="text-[#b58c61]">Privacidade</span>
          </h1>
          <p className="text-gray-300 font-lexend text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Saiba como o Seu Site Advogados coleta, utiliza e protege os seus
            dados pessoais em conformidade com a Lei Geral de Protecao de Dados
            (LGPD).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none font-lexend text-gray-700 space-y-12">
            {/* 1. Introducao */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend mb-4">
                1. Introducao
              </h2>
              <p className="leading-relaxed">
                O site <strong>seusiteadvogados.com.br</strong> e operado pelo{' '}
                <strong>Seu Site Advogados</strong>, empresa especializada em
                criacao de sites para advogados e escritorios de advocacia,
                localizada em Brasilia - DF. Esta Politica de Privacidade
                descreve como coletamos, utilizamos e protegemos as informacoes
                pessoais fornecidas por voce ao utilizar nosso site e nossos
                servicos.
              </p>
              <p className="leading-relaxed">
                Ao acessar ou utilizar nosso site, voce concorda com as praticas
                descritas nesta politica. Caso nao concorde, recomendamos que
                nao utilize o site.
              </p>
            </div>

            {/* 2. Dados coletados */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend mb-4">
                2. Dados Coletados
              </h2>
              <p className="leading-relaxed">
                Coletamos apenas os dados pessoais que voce fornece
                voluntariamente atraves do nosso formulario de contato:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Nome completo</strong> — para identificacao e
                  personalizacao do atendimento.
                </li>
                <li>
                  <strong>Endereco de e-mail</strong> — para envio de respostas
                  e comunicacoes relacionadas a sua solicitacao.
                </li>
                <li>
                  <strong>Numero de telefone</strong> — para contato direto,
                  quando necessario.
                </li>
                <li>
                  <strong>Mensagem</strong> — o conteudo que voce envia pelo
                  formulario.
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                Nao coletamos dados sensiveis, como informacoes financeiras,
                dados de saude ou documentos pessoais.
              </p>
            </div>

            {/* 3. Uso dos dados */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend mb-4">
                3. Como Utilizamos Seus Dados
              </h2>
              <p className="leading-relaxed">
                Os dados coletados sao utilizados exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  Responder a sua solicitacao de contato ou orcamento.
                </li>
                <li>
                  Entrar em contato com voce sobre os servicos solicitados.
                </li>
                <li>
                  Melhorar a qualidade do atendimento e dos nossos servicos.
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong>Nao vendemos, alugamos ou compartilhamos</strong> seus
                dados pessoais com terceiros para fins de marketing ou qualquer
                outra finalidade comercial.
              </p>
            </div>

            {/* 4. Armazenamento */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend mb-4">
                4. Armazenamento dos Dados
              </h2>
              <p className="leading-relaxed">
                Os dados enviados pelo formulario de contato sao armazenados em
                um banco de dados SQLite hospedado em servidor localizado no{' '}
                <strong>Brasil</strong>. Adotamos medidas tecnicas e
                organizacionais adequadas para proteger seus dados contra acesso
                nao autorizado, perda ou destruicao.
              </p>
              <p className="leading-relaxed">
                Os dados sao retidos apenas pelo periodo necessario para atender
                a finalidade para a qual foram coletados ou conforme exigido por
                lei.
              </p>
            </div>

            {/* 5. Cookies */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend mb-4">
                5. Cookies
              </h2>
              <p className="leading-relaxed">
                Nosso site utiliza apenas <strong>cookies essenciais</strong>{' '}
                necessarios para o funcionamento correto da pagina. Nao
                utilizamos cookies de rastreamento, analytics ou publicidade de
                terceiros.
              </p>
              <p className="leading-relaxed">
                Voce pode configurar seu navegador para bloquear cookies, mas
                isso pode afetar a funcionalidade do site.
              </p>
            </div>

            {/* 6. Servicos de terceiros */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend mb-4">
                6. Servicos de Terceiros
              </h2>
              <p className="leading-relaxed">
                Para garantir seguranca e desempenho, utilizamos os seguintes
                servicos de terceiros:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Cloudflare</strong> — servico de CDN e protecao contra
                  ataques DDoS. A Cloudflare pode coletar dados tecnicos
                  (endereco IP, tipo de navegador) para fins de seguranca.
                  Consulte a{' '}
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b58c61] underline hover:text-[#de7322] transition-colors"
                  >
                    Politica de Privacidade da Cloudflare
                  </a>
                  .
                </li>
                <li>
                  <strong>WhatsApp</strong> — utilizamos links diretos para o
                  WhatsApp para facilitar o contato. Ao clicar, voce sera
                  redirecionado para a plataforma do WhatsApp, sujeita a{' '}
                  <a
                    href="https://www.whatsapp.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b58c61] underline hover:text-[#de7322] transition-colors"
                  >
                    Politica de Privacidade do WhatsApp
                  </a>
                  .
                </li>
              </ul>
            </div>

            {/* 7. Direitos LGPD */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend mb-4">
                7. Seus Direitos (LGPD)
              </h2>
              <p className="leading-relaxed">
                Em conformidade com a Lei Geral de Protecao de Dados (Lei n.
                13.709/2018), voce tem os seguintes direitos sobre seus dados
                pessoais:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Acesso</strong> — solicitar quais dados pessoais seus
                  estao armazenados.
                </li>
                <li>
                  <strong>Correcao</strong> — solicitar a atualizacao de dados
                  incompletos ou incorretos.
                </li>
                <li>
                  <strong>Exclusao</strong> — solicitar a remocao dos seus dados
                  pessoais do nosso banco de dados.
                </li>
                <li>
                  <strong>Revogacao de consentimento</strong> — retirar o
                  consentimento dado anteriormente para o uso dos seus dados.
                </li>
                <li>
                  <strong>Portabilidade</strong> — solicitar a transferencia dos
                  seus dados para outro prestador de servico.
                </li>
                <li>
                  <strong>Informacao</strong> — saber com quais entidades seus
                  dados foram compartilhados.
                </li>
              </ul>
            </div>

            {/* 8. Contato */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend mb-4">
                8. Contato para Solicitacoes de Dados
              </h2>
              <p className="leading-relaxed">
                Para exercer qualquer um dos seus direitos ou esclarecer duvidas
                sobre esta Politica de Privacidade, entre em contato conosco:
              </p>
              <div className="mt-4 p-6 bg-[#162a2a]/5 rounded-2xl">
                <p className="leading-relaxed">
                  <strong>WhatsApp:</strong>{' '}
                  <a
                    href="https://wa.me/5561992784283"
                    className="text-[#b58c61] underline hover:text-[#de7322] transition-colors"
                  >
                    (61) 99278-4283
                  </a>
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Endereço:</strong> SHIS, Quadra 06, Complexo Brasil 21
                  - Asa Sul, Brasília - DF
                </p>
              </div>
              <p className="leading-relaxed mt-4">
                Responderemos a sua solicitacao no prazo de ate 15 dias uteis,
                conforme previsto na LGPD.
              </p>
            </div>

            {/* 9. Atualizacao */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#162a2a] font-lexend mb-4">
                9. Atualizacao desta Politica
              </h2>
              <p className="leading-relaxed">
                Esta Politica de Privacidade pode ser atualizada periodicamente
                para refletir mudancas em nossas praticas ou na legislacao
                vigente. Recomendamos que voce consulte esta pagina regularmente.
              </p>
              <p className="leading-relaxed mt-4 font-semibold text-[#162a2a]">
                Ultima atualizacao: 06 de abril de 2026.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
