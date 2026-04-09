import { registerArticle } from './registry'

registerArticle('whatsapp-business-para-advogados', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      O WhatsApp Business é gratuito, leva menos de 15 minutos para configurar e pode transformar a forma como seu escritório de advocacia se comunica com clientes. Enquanto o WhatsApp comum mistura mensagens pessoais e profissionais, a versão Business oferece recursos específicos para organizar atendimentos, automatizar respostas e transmitir profissionalismo desde o primeiro contato. Veja como configurar e aproveitar cada recurso.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      Passo 1: Instalação e configuração inicial
    </h2>
    <p className="text-gray-700 leading-relaxed">
      Baixe o WhatsApp Business na Play Store ou App Store — é um aplicativo separado do WhatsApp convencional. Você pode usar o mesmo número do escritório ou um número novo. Se já usa o WhatsApp comum com um número comercial, o app oferece a opção de migrar suas conversas durante a instalação.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Após instalar, o aplicativo pedirá para verificar o número via SMS ou ligação. Feita a verificação, você acessa a tela de configuração do perfil comercial. É aqui que o trabalho estratégico começa.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      Passo 2: Perfil comercial completo
    </h2>
    <p className="text-gray-700 leading-relaxed">
      Acesse <strong className="text-[#162a2a]">Configurações &gt; Ferramentas comerciais &gt; Perfil comercial</strong> e preencha todos os campos disponíveis:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Nome da empresa:</strong> use o nome do escritório ou seu nome profissional completo (ex: "Oliveira Advocacia" ou "Dr. Rafael Oliveira — Advogado")</li>
      <li><strong className="text-[#162a2a]">Categoria:</strong> selecione "Serviço jurídico" ou "Escritório de advocacia"</li>
      <li><strong className="text-[#162a2a]">Descrição:</strong> escreva um texto curto informando áreas de atuação, cidade e número da OAB. Exemplo: "Escritório especializado em Direito Trabalhista e Previdenciário. Atendimento em Curitiba e região metropolitana. OAB/PR 54.321"</li>
      <li><strong className="text-[#162a2a]">Endereço:</strong> inclua o endereço do escritório para aparecer no mapa</li>
      <li><strong className="text-[#162a2a]">Horário de funcionamento:</strong> defina os dias e horários de atendimento</li>
      <li><strong className="text-[#162a2a]">E-mail e site:</strong> preencha ambos para oferecer canais alternativos de contato</li>
    </ul>
    <p className="text-gray-700 leading-relaxed">
      A foto do perfil deve ser profissional: a logo do escritório ou uma foto sua com fundo neutro e boa iluminação. Evite selfies, fotos em ambientes informais ou imagens com texto sobreposto.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      Passo 3: Mensagens automáticas que economizam tempo
    </h2>
    <p className="text-gray-700 leading-relaxed">
      O WhatsApp Business permite configurar três tipos de mensagens automáticas. Cada uma resolve um problema específico no atendimento jurídico.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Mensagem de saudação
    </h3>
    <p className="text-gray-700 leading-relaxed">
      Enviada automaticamente quando alguém entra em contato pela primeira vez ou após 14 dias sem interação. Configure em <strong className="text-[#162a2a]">Ferramentas comerciais &gt; Mensagem de saudação</strong>. Um exemplo eficiente:
    </p>
    <p className="text-gray-700 leading-relaxed">
      "Olá! Obrigado por entrar em contato com o escritório Oliveira Advocacia. Nosso horário de atendimento é de segunda a sexta, das 9h às 18h. Para agilizar seu atendimento, por favor informe: (1) seu nome completo, (2) o assunto da consulta e (3) a cidade onde reside. Um de nossos advogados retornará em breve."
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Mensagem de ausência
    </h3>
    <p className="text-gray-700 leading-relaxed">
      Ativada fora do horário comercial. Configure o horário de envio para coincidir com os períodos em que o escritório está fechado. Exemplo:
    </p>
    <p className="text-gray-700 leading-relaxed">
      "Nosso escritório está fechado no momento. Recebemos sua mensagem e retornaremos no próximo dia útil, a partir das 9h. Se o assunto for urgente, envie um e-mail para contato@oliveiraadvocacia.com.br com o título URGENTE."
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Respostas rápidas
    </h3>
    <p className="text-gray-700 leading-relaxed">
      Atalhos para mensagens que você envia com frequência. Ao digitar "/" no chat, aparecem as opções cadastradas. Crie respostas rápidas para situações recorrentes:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">/documentos:</strong> "Para dar andamento ao seu caso, precisamos dos seguintes documentos: RG, CPF, comprovante de residência e [documentos específicos]. Pode enviar foto legível de cada um."</li>
      <li><strong className="text-[#162a2a]">/consulta:</strong> "Nosso escritório realiza uma consulta inicial para analisar seu caso. O agendamento pode ser feito pelo link: [link do agendamento]. Qual o melhor horário para você?"</li>
      <li><strong className="text-[#162a2a]">/prazo:</strong> "Recebemos sua solicitação e estamos analisando. O prazo estimado para retorno é de [X] dias úteis. Qualquer novidade, entraremos em contato."</li>
      <li><strong className="text-[#162a2a]">/honorarios:</strong> "Os honorários são definidos após a análise do caso na consulta inicial, considerando a complexidade e o tempo estimado de tramitação. Podemos agendar uma consulta para apresentar uma proposta?"</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      Passo 4: Etiquetas para organizar atendimentos
    </h2>
    <p className="text-gray-700 leading-relaxed">
      As etiquetas são um dos recursos mais úteis do WhatsApp Business para escritórios de advocacia. Elas funcionam como categorias coloridas que você aplica às conversas para organizar o fluxo de atendimento.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Sugestão de sistema de etiquetas para escritórios:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Novo contato (verde):</strong> pessoa que acabou de entrar em contato e ainda não foi atendida</li>
      <li><strong className="text-[#162a2a]">Aguardando documentos (amarelo):</strong> cliente que precisa enviar documentação</li>
      <li><strong className="text-[#162a2a]">Em andamento (azul):</strong> caso já aceito e em tramitação</li>
      <li><strong className="text-[#162a2a]">Consulta agendada (roxo):</strong> consulta marcada, aguardando a data</li>
      <li><strong className="text-[#162a2a]">Finalizado (cinza):</strong> caso encerrado ou contato que não se converteu em cliente</li>
      <li><strong className="text-[#162a2a]">Urgente (vermelho):</strong> situações que exigem atenção imediata</li>
    </ul>
    <p className="text-gray-700 leading-relaxed">
      Para aplicar uma etiqueta, toque e segure a conversa, depois selecione o ícone de etiqueta. Você pode filtrar conversas por etiqueta na tela principal, o que facilita a gestão quando o volume de mensagens é alto.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      Passo 5: Catálogo de serviços
    </h2>
    <p className="text-gray-700 leading-relaxed">
      O recurso de catálogo permite listar os serviços do escritório de forma visual. Embora advogados não possam divulgar valores de honorários, o catálogo serve para apresentar as áreas de atuação de maneira organizada.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Crie um item no catálogo para cada área de atuação. Por exemplo: "Direito Trabalhista" com uma descrição explicando os tipos de caso que você atende nessa área. Adicione uma imagem representativa e, no campo de preço, use a opção de não exibir valor. O cliente pode acessar o catálogo direto no seu perfil e entender rapidamente se o escritório atende o que ele precisa.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      Dicas profissionais para o dia a dia
    </h2>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      WhatsApp Web e múltiplos dispositivos
    </h3>
    <p className="text-gray-700 leading-relaxed">
      Use o WhatsApp Web no computador do escritório para digitar respostas mais longas com agilidade. O recurso de múltiplos dispositivos permite que até quatro aparelhos estejam conectados simultaneamente — útil quando mais de uma pessoa no escritório precisa responder mensagens.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Separação entre pessoal e profissional
    </h3>
    <p className="text-gray-700 leading-relaxed">
      Se você usa o celular pessoal para o escritório, o ideal é ter dois chips: um para o WhatsApp pessoal e outro para o Business. Aparelhos com dual SIM resolvem isso sem a necessidade de carregar dois telefones. Essa separação protege sua privacidade e garante que mensagens de clientes não se percam entre conversas pessoais.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Backup e segurança
    </h3>
    <p className="text-gray-700 leading-relaxed">
      Ative o backup automático no Google Drive ou iCloud. Conversas com clientes podem conter informações relevantes para processos, e perder esse histórico é um risco desnecessário. Além disso, ative a verificação em duas etapas em <strong className="text-[#162a2a]">Configurações &gt; Conta &gt; Verificação em duas etapas</strong> para proteger o número contra clonagem.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Tempo de resposta
    </h3>
    <p className="text-gray-700 leading-relaxed">
      Pesquisas indicam que a chance de converter um contato em cliente cai drasticamente após a primeira hora sem resposta. Defina uma meta interna de responder novas mensagens em até 30 minutos durante o horário comercial. A mensagem de saudação automática ajuda a ganhar tempo, mas o retorno humano precisa ser rápido.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      Erros que prejudicam a imagem do escritório
    </h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Áudios longos demais:</strong> clientes muitas vezes não podem ouvir áudios de 3 minutos. Prefira mensagens escritas e objetivas</li>
      <li><strong className="text-[#162a2a]">Demora para responder:</strong> silêncio prolongado passa a impressão de desorganização</li>
      <li><strong className="text-[#162a2a]">Enviar mensagens fora do horário:</strong> respeite o horário que você mesmo definiu no perfil</li>
      <li><strong className="text-[#162a2a]">Não pedir autorização para adicionar em grupos:</strong> além de invasivo, pode violar a LGPD</li>
      <li><strong className="text-[#162a2a]">Foto de perfil inadequada:</strong> foto de viagem, com filtros ou em baixa resolução prejudica a credibilidade</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      Conclusão prática
    </h2>
    <p className="text-gray-700 leading-relaxed">
      Configurar o WhatsApp Business leva poucos minutos, e quando integrado a um bom trabalho de <a href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors">criar site para escritório de advocacia</a>, o impacto na organização e na imagem profissional do escritório é significativo. Com o perfil completo, mensagens automáticas configuradas, etiquetas organizadas e respostas rápidas cadastradas, você reduz o tempo gasto com tarefas repetitivas e oferece uma experiência de atendimento que diferencia seu escritório da concorrência. O investimento é zero — o retorno, considerável.
    </p>
  </>
))
