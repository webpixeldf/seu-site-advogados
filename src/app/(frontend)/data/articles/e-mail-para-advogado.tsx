import { registerArticle } from './registry'

registerArticle('e-mail-para-advogado', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      O e-mail profissional é um dos primeiros pontos de contato entre o advogado e o cliente. Usar um endereço como joaosilva@gmail.com em cartões de visita e petições passa uma impressão bem diferente de joao@silvaadvocacia.com.br. A configuração de um e-mail com domínio próprio é simples, acessível e faz diferença real na percepção de profissionalismo.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Por que usar um e-mail com domínio próprio</h2>

    <p className="text-gray-700 leading-relaxed">
      O domínio do e-mail é a parte que vem depois do @. Quando você usa @gmail.com ou @hotmail.com, está usando o domínio de outra empresa. Quando usa @seuescritorio.com.br, está usando o seu próprio. Isso comunica ao cliente que o escritório é estruturado e que investe na sua imagem profissional.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Além da imagem, existem vantagens práticas. E-mails com domínio próprio têm menor chance de cair em spam. Permitem criar endereços diferentes para cada função — contato@, financeiro@, drajuliana@ — organizando a comunicação do escritório. E caso um advogado saia da equipe, o e-mail permanece vinculado ao escritório, não à pessoa.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Passo a passo: como configurar seu e-mail profissional</h2>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">1. Registre seu domínio</h3>

    <p className="text-gray-700 leading-relaxed">
      Se o escritório já tem um site, o domínio já está registrado. Caso contrário, registre um domínio em sites como Registro.br (para domínios .com.br, custa cerca de R$ 40 por ano) ou em registradores internacionais como Namecheap e Cloudflare (para domínios .com). Escolha um nome curto, fácil de soletrar e que represente o escritório.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">2. Escolha o provedor de e-mail</h3>

    <p className="text-gray-700 leading-relaxed">
      As opções mais usadas são:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Google Workspace:</strong> a partir de R$ 33/mês por usuário. Usa a interface do Gmail, que a maioria já conhece. Inclui Google Drive, Agenda e Meet.</li>
      <li><strong className="text-[#162a2a]">Microsoft 365:</strong> a partir de R$ 32/mês por usuário. Usa o Outlook e inclui Word, Excel e Teams. Boa opção para quem já trabalha com ferramentas Microsoft.</li>
      <li><strong className="text-[#162a2a]">Zoho Mail:</strong> tem plano gratuito para até 5 usuários com domínio próprio. Interface funcional, embora menos conhecida.</li>
      <li><strong className="text-[#162a2a]">E-mail da hospedagem:</strong> a maioria dos planos de hospedagem de sites inclui contas de e-mail. Funciona, mas costuma ter menos espaço e recursos que os serviços dedicados.</li>
    </ul>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">3. Configure os registros DNS</h3>

    <p className="text-gray-700 leading-relaxed">
      Depois de escolher o provedor, você precisará configurar os registros DNS do seu domínio. Parece técnico, mas os provedores fornecem instruções detalhadas. Basicamente, você vai acessar o painel do seu registrador de domínio e adicionar registros MX (que direcionam os e-mails para o provedor correto) e registros de verificação (SPF, DKIM e DMARC) que autenticam seus e-mails e evitam que caiam em spam.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Se isso parecer complicado, qualquer profissional de TI resolve em menos de uma hora. Muitos provedores de hospedagem também oferecem suporte para essa configuração.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">4. Crie as contas de e-mail</h3>

    <p className="text-gray-700 leading-relaxed">
      Com o provedor configurado, crie os endereços que o escritório vai usar. Algumas sugestões de formato:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">nome@escritorio.com.br</strong> — para cada advogado individualmente.</li>
      <li><strong className="text-[#162a2a]">contato@escritorio.com.br</strong> — para atendimento geral.</li>
      <li><strong className="text-[#162a2a]">financeiro@escritorio.com.br</strong> — para cobranças e pagamentos.</li>
      <li><strong className="text-[#162a2a]">drajuliana@escritorio.com.br</strong> — formato mais pessoal, comum em escritórios menores.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Assinatura de e-mail profissional</h2>

    <p className="text-gray-700 leading-relaxed">
      A assinatura é o rodapé que aparece em todos os seus e-mails. Uma boa assinatura de advogado deve conter: nome completo, número da OAB, nome do escritório, telefone, endereço do site e, opcionalmente, links para redes sociais profissionais. Evite incluir frases motivacionais, imagens muito pesadas ou excesso de informações.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Um exemplo funcional:
    </p>

    <p className="text-gray-700 leading-relaxed">
      <strong className="text-[#162a2a]">Juliana Mendes</strong><br />
      Advogada — OAB/SP 123.456<br />
      Mendes Advocacia<br />
      (11) 99999-0000 | contato@mendesadvocacia.com.br<br />
      www.mendesadvocacia.com.br
    </p>

    <p className="text-gray-700 leading-relaxed">
      Ferramentas como o gerador de assinaturas do HubSpot ou o WiseStamp permitem criar assinaturas formatadas em HTML gratuitamente. Basta preencher os campos, copiar o código e colar nas configurações do seu provedor de e-mail.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Boas práticas no uso diário do e-mail</h2>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Tempo de resposta</h3>

    <p className="text-gray-700 leading-relaxed">
      Clientes esperam respostas rápidas. O ideal é responder e-mails em até 24 horas úteis. Se a demanda exigir mais tempo para análise, envie uma confirmação de recebimento informando o prazo para retorno. Algo como: "Recebi sua mensagem e retorno com a análise até sexta-feira." Isso reduz a ansiedade do cliente e demonstra organização.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Organização da caixa de entrada</h3>

    <p className="text-gray-700 leading-relaxed">
      Use marcadores ou pastas para separar e-mails por cliente, processo ou assunto. No Gmail, os marcadores com cores funcionam bem. No Outlook, as pastas e categorias cumprem a mesma função. Outra técnica útil é a "caixa de entrada zero": processar cada e-mail que chega — responder, delegar, arquivar ou agendar — em vez de deixar acumular.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Confidencialidade e sigilo</h3>

    <p className="text-gray-700 leading-relaxed">
      E-mails com conteúdo sigiloso devem ser tratados com cuidado. Verifique duas vezes o destinatário antes de enviar. Use a funcionalidade de e-mail confidencial do Gmail (que impede encaminhamento e define data de expiração) quando necessário. Para documentos sensíveis, considere usar links protegidos por senha em vez de anexos diretos.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Erros comuns que advogados cometem com e-mail</h2>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Usar e-mail pessoal para assuntos profissionais:</strong> mistura vida pessoal e trabalho, dificulta a organização e passa impressão de amadorismo.</li>
      <li><strong className="text-[#162a2a]">Não configurar SPF e DKIM:</strong> sem esses registros, seus e-mails têm mais chance de cair no spam do destinatário.</li>
      <li><strong className="text-[#162a2a]">Enviar anexos pesados sem compactar:</strong> PDFs de processos podem ser enormes. Use ferramentas de compressão ou compartilhe via Google Drive ou OneDrive.</li>
      <li><strong className="text-[#162a2a]">Escrever assuntos vagos:</strong> "Processo" ou "Urgente" não ajudam. Prefira "Petição inicial — Processo nº 1234 — Silva vs. Souza".</li>
      <li><strong className="text-[#162a2a]">Responder a todos desnecessariamente:</strong> avalie se todos os destinatários realmente precisam receber sua resposta.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Segurança do e-mail profissional</h2>

    <p className="text-gray-700 leading-relaxed">
      Advogados lidam com dados sensíveis diariamente. Proteger o e-mail é obrigatório, não opcional. Ative a autenticação em dois fatores (2FA) em todas as contas — tanto no Google Workspace quanto no Microsoft 365, essa opção está disponível nas configurações de segurança. Use senhas fortes e únicas, preferencialmente gerenciadas por um gerenciador de senhas como Bitwarden ou 1Password.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Fique atento a tentativas de phishing. E-mails falsos que imitam tribunais, bancos ou clientes são comuns. Antes de clicar em qualquer link ou abrir anexos inesperados, verifique o endereço real do remetente e, em caso de dúvida, confirme por outro canal.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Quanto custa manter um e-mail profissional</h2>

    <p className="text-gray-700 leading-relaxed">
      Para um advogado autônomo, o custo mensal fica entre R$ 0 (Zoho Mail gratuito) e R$ 33 (Google Workspace). Para um escritório com cinco advogados, o Google Workspace sairia por cerca de R$ 165/mês. Considerando que o domínio custa R$ 40/ano e que a configuração é feita uma única vez, o investimento é baixo comparado ao ganho em profissionalismo e organização.
    </p>

    <p className="text-gray-700 leading-relaxed">
      O e-mail profissional não é luxo — é infraestrutura básica. Assim como um escritório precisa de um endereço físico confiável, precisa de um endereço digital que transmita credibilidade. A configuração é rápida, o custo é acessível e o impacto na imagem do escritório é imediato.
    </p>
  </>
))
