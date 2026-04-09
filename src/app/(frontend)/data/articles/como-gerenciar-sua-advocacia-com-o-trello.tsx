import { registerArticle } from './registry'

registerArticle('como-gerenciar-sua-advocacia-com-o-trello', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      Gerenciar prazos, acompanhar processos e organizar tarefas são desafios diários de qualquer advogado. Softwares jurídicos especializados existem, mas muitos são caros e complexos demais para escritórios menores ou advogados autônomos. O Trello é uma alternativa gratuita, visual e flexível que pode resolver boa parte desses problemas. Este tutorial mostra como configurá-lo para a rotina jurídica.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">O que é o Trello e por que funciona para advogados</h2>

    <p className="text-gray-700 leading-relaxed">
      O Trello é uma ferramenta de gerenciamento de projetos baseada em quadros (boards), listas e cartões. Pense nele como um mural digital onde você organiza tarefas visualmente, movendo cartões entre colunas conforme o andamento. A interface é intuitiva — se você sabe usar post-its, sabe usar o Trello.
    </p>

    <p className="text-gray-700 leading-relaxed">
      O plano gratuito do Trello permite criar até 10 quadros, com listas e cartões ilimitados. Para a maioria dos advogados autônomos e escritórios pequenos, o plano gratuito é suficiente. Os planos pagos (a partir de US$ 5/mês) adicionam recursos como automações avançadas e integrações, mas não são necessários para começar.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Configurando seu primeiro quadro: Gestão de Processos</h2>

    <p className="text-gray-700 leading-relaxed">
      O quadro mais útil para advogados é o de gestão de processos. Crie um quadro chamado "Processos" e configure as seguintes listas (colunas):
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Consultoria inicial:</strong> processos em fase de análise, antes de decidir se o caso será aceito.</li>
      <li><strong className="text-[#162a2a]">Documentação pendente:</strong> casos aceitos que aguardam documentos do cliente para dar andamento.</li>
      <li><strong className="text-[#162a2a]">Petição em elaboração:</strong> processos cuja petição inicial ou contestação está sendo redigida.</li>
      <li><strong className="text-[#162a2a]">Aguardando decisão judicial:</strong> processos protocolados que aguardam manifestação do juízo.</li>
      <li><strong className="text-[#162a2a]">Audiência agendada:</strong> processos com audiência marcada, para fácil visualização.</li>
      <li><strong className="text-[#162a2a]">Recurso:</strong> processos em fase recursal.</li>
      <li><strong className="text-[#162a2a]">Encerrado:</strong> processos concluídos, mantidos para referência.</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Cada processo vira um cartão. O cartão pode conter o nome do cliente, o número do processo, a vara, o tipo de ação e qualquer informação relevante. Conforme o processo avança, você arrasta o cartão de uma lista para outra.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Usando cartões de forma eficiente</h2>

    <p className="text-gray-700 leading-relaxed">
      Cada cartão do Trello é mais do que um post-it digital. Dentro dele, você pode adicionar:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Descrição:</strong> resumo do caso, tese principal e estratégia adotada.</li>
      <li><strong className="text-[#162a2a]">Checklists:</strong> lista de tarefas do processo. "Reunir documentos", "Protocolar petição", "Preparar para audiência" — cada item pode ser marcado conforme é concluído.</li>
      <li><strong className="text-[#162a2a]">Datas de vencimento:</strong> prazos processuais com alertas. O Trello envia notificações antes do vencimento, funcionando como um lembrete automático.</li>
      <li><strong className="text-[#162a2a]">Anexos:</strong> documentos do processo podem ser anexados ao cartão. PDFs de petições, decisões, procurações — tudo organizado em um só lugar.</li>
      <li><strong className="text-[#162a2a]">Etiquetas coloridas:</strong> use cores para classificar os processos. Vermelho para urgente, amarelo para atenção, verde para em dia, azul para consultivo. A visualização por cores permite identificar prioridades com um olhar.</li>
      <li><strong className="text-[#162a2a]">Comentários:</strong> registre anotações e atualizações diretamente no cartão. Se trabalha com outros advogados, os comentários servem como registro de comunicação interna sobre o caso.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Segundo quadro: Tarefas administrativas</h2>

    <p className="text-gray-700 leading-relaxed">
      Além dos processos, o escritório tem demandas administrativas que também precisam de organização. Crie um segundo quadro chamado "Administrativo" com listas como:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">A fazer:</strong> tarefas que precisam ser realizadas.</li>
      <li><strong className="text-[#162a2a]">Em andamento:</strong> tarefas em execução.</li>
      <li><strong className="text-[#162a2a]">Aguardando terceiros:</strong> tarefas que dependem de resposta de outra pessoa.</li>
      <li><strong className="text-[#162a2a]">Concluído:</strong> tarefas finalizadas na semana.</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Nesse quadro entram tarefas como responder e-mails de clientes, renovar certificado digital, pagar guias judiciais, agendar reuniões e qualquer outra atividade que não seja diretamente processual mas que precisa de acompanhamento.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Terceiro quadro: Produção de conteúdo</h2>

    <p className="text-gray-700 leading-relaxed">
      Se você produz conteúdo para redes sociais ou para o blog de um <a href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors">site profissional para advogado</a>, um quadro dedicado ajuda a manter a consistência. Configure listas como "Ideias", "Rascunho", "Em revisão", "Agendado" e "Publicado". Cada post ou artigo vira um cartão com prazo de publicação, texto do conteúdo e imagens anexadas.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Automações com o Butler</h2>

    <p className="text-gray-700 leading-relaxed">
      O Trello inclui um recurso de automação chamado Butler, disponível inclusive no plano gratuito (com limites de uso). Com ele, você pode criar regras automáticas que economizam tempo:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Quando um cartão é movido para "Audiência agendada", adicionar automaticamente um checklist de preparação para audiência.</li>
      <li>Quando a data de vencimento de um cartão está a dois dias de expirar, mover automaticamente para o topo da lista.</li>
      <li>Quando um cartão é movido para "Encerrado", adicionar automaticamente a data de conclusão e remover membros atribuídos.</li>
      <li>Todo dia às 8h, enviar um resumo dos cartões com prazos vencendo na semana.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Integrações úteis</h2>

    <p className="text-gray-700 leading-relaxed">
      O Trello se integra com diversas ferramentas que advogados já usam:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Google Calendar:</strong> sincronize datas de vencimento dos cartões com seu calendário. Prazos processuais aparecem automaticamente na agenda.</li>
      <li><strong className="text-[#162a2a]">Google Drive:</strong> vincule pastas do Drive a cartões específicos para acesso rápido aos documentos do processo.</li>
      <li><strong className="text-[#162a2a]">Slack ou Microsoft Teams:</strong> receba notificações de movimentações nos quadros diretamente no chat da equipe.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Dicas para manter o Trello funcionando</h2>

    <p className="text-gray-700 leading-relaxed">
      A ferramenta só funciona se for usada de forma consistente. Algumas dicas práticas:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Revise diariamente:</strong> reserve cinco minutos no início do dia para revisar o quadro, verificar prazos e organizar prioridades.</li>
      <li><strong className="text-[#162a2a]">Atualize em tempo real:</strong> quando receber uma decisão judicial ou concluir uma tarefa, atualize o cartão imediatamente. Deixar para depois gera acúmulo.</li>
      <li><strong className="text-[#162a2a]">Arquive cartões concluídos:</strong> cartões de processos encerrados devem ser arquivados (não excluídos) para manter o quadro limpo mas preservar o histórico.</li>
      <li><strong className="text-[#162a2a]">Use o app no celular:</strong> o aplicativo mobile do Trello permite consultar e atualizar cartões de qualquer lugar — no fórum, na audiência ou em deslocamento.</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      O Trello não substitui um software jurídico completo, mas resolve a necessidade de organização visual e controle de prazos que a maioria dos advogados enfrenta diariamente. Para quem trabalha sozinho ou em equipes pequenas, é uma solução prática, gratuita e que pode ser configurada em menos de uma hora.
    </p>
  </>
))
