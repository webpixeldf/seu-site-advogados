import { registerArticle } from './registry'

registerArticle('trello-para-advogados', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      O Trello é uma das ferramentas de gestão de tarefas mais acessíveis do mercado, e sua interface visual baseada em quadros e cartões se adapta muito bem à rotina jurídica. Advogados que precisam acompanhar múltiplos casos simultaneamente encontram no Trello uma forma intuitiva de visualizar o andamento de cada processo sem perder tempo com sistemas complexos. Neste artigo, vamos montar passo a passo um sistema funcional de gestão de casos usando o Trello.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Por que o Trello funciona para escritórios de advocacia</h2>

    <p className="text-gray-700 leading-relaxed">
      O Trello utiliza o método kanban, onde tarefas são representadas como cartões que se movem entre colunas. Essa lógica visual se encaixa naturalmente no fluxo de trabalho jurídico, onde cada processo passa por fases definidas: entrada, análise, petição, audiência, sentença, recurso. Ao mover um cartão de uma coluna para outra, você tem uma visão clara e imediata do estado de cada caso.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Diferente de planilhas que exigem rolagem e filtros, o Trello mostra tudo em uma única tela. Em uma reunião de equipe, basta abrir o quadro para que todos entendam rapidamente quais casos estão ativos, quais aguardam providência e quais estão próximos de prazos críticos.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Configurando seu primeiro quadro jurídico</h2>

    <p className="text-gray-700 leading-relaxed">
      Após criar sua conta gratuita no Trello, o primeiro passo é criar um quadro. Nomeie-o de forma clara, como "Processos Ativos" ou "Gestão de Casos". Em seguida, crie as listas que representarão as etapas do seu fluxo de trabalho. Uma estrutura que funciona bem para contencioso cível:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Triagem</strong> — casos novos que ainda precisam de análise inicial</li>
      <li><strong className="text-[#162a2a]">Em análise</strong> — processos sendo estudados para definição de estratégia</li>
      <li><strong className="text-[#162a2a]">Aguardando documento do cliente</strong> — casos parados por pendência do cliente</li>
      <li><strong className="text-[#162a2a]">Petição em elaboração</strong> — peças sendo redigidas</li>
      <li><strong className="text-[#162a2a]">Protocolado / Aguardando</strong> — processos que aguardam movimentação do judiciário</li>
      <li><strong className="text-[#162a2a]">Audiência agendada</strong> — casos com data de audiência marcada</li>
      <li><strong className="text-[#162a2a]">Recurso</strong> — processos em fase recursal</li>
      <li><strong className="text-[#162a2a]">Arquivado</strong> — casos encerrados</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Adapte essas listas à sua área de atuação. Um escritório trabalhista pode ter colunas específicas para "Cálculos em andamento" ou "Acordo em negociação". O importante é que as listas reflitam a realidade do seu fluxo.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Estruturando os cartões para cada processo</h2>

    <p className="text-gray-700 leading-relaxed">
      Cada cartão no Trello representa um processo ou tarefa. Para manter a organização, padronize o nome dos cartões. Um formato eficiente é: <strong className="text-[#162a2a]">Número do Processo — Nome do Cliente — Assunto</strong>. Por exemplo: "0001234-56.2025.8.26.0100 — João Silva — Indenização por danos morais".
    </p>

    <p className="text-gray-700 leading-relaxed">
      Dentro de cada cartão, aproveite os recursos disponíveis:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Descrição</strong> — resuma o caso, a estratégia adotada e informações essenciais</li>
      <li><strong className="text-[#162a2a]">Checklists</strong> — liste as próximas providências (juntar documentos, protocolar peça, preparar testemunha)</li>
      <li><strong className="text-[#162a2a]">Data de entrega</strong> — defina o próximo prazo processual</li>
      <li><strong className="text-[#162a2a]">Anexos</strong> — adicione documentos relevantes diretamente ao cartão</li>
      <li><strong className="text-[#162a2a]">Comentários</strong> — registre atualizações e comunicações sobre o caso</li>
      <li><strong className="text-[#162a2a]">Membros</strong> — atribua o advogado responsável pelo processo</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Etiquetas: classificação rápida por área ou prioridade</h2>

    <p className="text-gray-700 leading-relaxed">
      As etiquetas coloridas do Trello são um recurso simples, mas extremamente útil. Defina um sistema de cores consistente para todo o quadro. Uma sugestão prática:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Vermelho</strong> — prazo urgente (menos de 3 dias)</li>
      <li><strong className="text-[#162a2a]">Amarelo</strong> — atenção necessária nesta semana</li>
      <li><strong className="text-[#162a2a]">Verde</strong> — em dia, sem urgência</li>
      <li><strong className="text-[#162a2a]">Azul</strong> — área cível</li>
      <li><strong className="text-[#162a2a]">Roxo</strong> — área trabalhista</li>
      <li><strong className="text-[#162a2a]">Laranja</strong> — área criminal</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Com as etiquetas ativas, basta olhar para o quadro e identificar imediatamente quais cartões precisam de atenção. Você também pode filtrar o quadro por etiqueta para visualizar apenas os casos urgentes ou apenas os de determinada área.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Automações com o Butler: menos trabalho manual</h2>

    <p className="text-gray-700 leading-relaxed">
      O Trello possui um recurso nativo de automação chamado Butler, disponível inclusive no plano gratuito com algumas limitações. Para advogados, as automações mais úteis são:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Quando um cartão é movido para "Audiência agendada"</strong>, adicionar automaticamente uma checklist com itens como "preparar sustentação oral", "revisar provas", "confirmar presença da testemunha"</li>
      <li><strong className="text-[#162a2a]">Quando a data de entrega está a 2 dias</strong>, mover o cartão para o topo da lista e adicionar a etiqueta vermelha</li>
      <li><strong className="text-[#162a2a]">Quando um cartão é movido para "Arquivado"</strong>, remover todos os membros e adicionar a data de encerramento</li>
      <li><strong className="text-[#162a2a]">Todo dia às 8h</strong>, enviar um resumo por e-mail com os cartões que vencem naquela semana</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Essas automações eliminam tarefas repetitivas e reduzem o risco de esquecimento. A configuração é feita por meio de regras simples em linguagem natural, sem necessidade de programação. Acesse o botão "Automação" no topo do quadro para começar.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Múltiplos quadros para diferentes necessidades</h2>

    <p className="text-gray-700 leading-relaxed">
      À medida que seu uso do Trello amadurece, faz sentido criar quadros separados para diferentes finalidades:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Quadro de Processos</strong> — gestão de casos ativos, como descrito acima</li>
      <li><strong className="text-[#162a2a]">Quadro Administrativo</strong> — tarefas do escritório como renovação de certificado digital, pagamento de anuidade da OAB, manutenção do <a href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors">site para advogado autônomo</a></li>
      <li><strong className="text-[#162a2a]">Quadro de Prospecção</strong> — acompanhamento de potenciais clientes e propostas enviadas</li>
      <li><strong className="text-[#162a2a]">Quadro de Conteúdo</strong> — planejamento de artigos, posts para redes sociais e materiais educativos</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Manter quadros separados evita a poluição visual e permite que cada membro da equipe acesse apenas o que é relevante para sua função.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Uso no celular: produtividade em movimento</h2>

    <p className="text-gray-700 leading-relaxed">
      O aplicativo móvel do Trello é um dos mais bem desenvolvidos entre as ferramentas de produtividade. Para advogados que passam boa parte do dia em fóruns, audiências e reuniões externas, o celular se torna a principal forma de interação com a ferramenta.
    </p>

    <p className="text-gray-700 leading-relaxed">
      No aplicativo, você pode realizar todas as operações essenciais: mover cartões entre listas, adicionar comentários, marcar itens de checklists, consultar prazos e até receber notificações push quando um prazo se aproxima. A sincronização é em tempo real, então qualquer alteração feita pelo celular aparece instantaneamente no computador de um colega.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Uma dica prática: ao sair de uma audiência, abra o Trello no celular e atualize imediatamente o cartão do processo com o resultado e as próximas providências. Isso leva menos de dois minutos e evita que informações importantes se percam até você voltar ao escritório.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Plano gratuito versus plano pago</h2>

    <p className="text-gray-700 leading-relaxed">
      O Trello gratuito oferece quadros ilimitados, cartões ilimitados, até 10 quadros por workspace e automações limitadas com o Butler. Para advogados solo e escritórios pequenos, o plano gratuito geralmente é suficiente.
    </p>

    <p className="text-gray-700 leading-relaxed">
      O plano Standard libera quadros ilimitados por workspace, checklists avançadas com datas de entrega por item, campos personalizados e mais automações. O plano Premium adiciona visualizações em calendário, linha do tempo e dashboard. Avalie a necessidade real antes de assinar — muitos escritórios funcionam bem no plano gratuito por meses antes de sentirem necessidade de recursos adicionais.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Boas práticas para manter o quadro útil</h2>

    <p className="text-gray-700 leading-relaxed">
      A maior armadilha do Trello é criar cartões e depois abandoná-los. Para evitar isso, estabeleça hábitos consistentes:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Revise o quadro toda manhã</strong> antes de começar o trabalho, identificando prioridades do dia</li>
      <li><strong className="text-[#162a2a]">Mova os cartões em tempo real</strong> conforme as etapas avançam, não deixe para atualizar depois</li>
      <li><strong className="text-[#162a2a]">Arquive cartões encerrados</strong> regularmente para manter o quadro limpo e focado nos casos ativos</li>
      <li><strong className="text-[#162a2a]">Defina um responsável</strong> para cada cartão, mesmo em escritórios pequenos — isso cria senso de responsabilidade</li>
      <li><strong className="text-[#162a2a]">Use comentários</strong> em vez de mensagens por WhatsApp para discutir casos, criando um histórico pesquisável</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      O Trello é uma ferramenta de baixa curva de aprendizado que pode transformar a organização de um escritório de advocacia em questão de dias. Não exige conhecimento técnico, funciona em qualquer dispositivo e oferece um plano gratuito robusto o suficiente para começar. O segredo está na disciplina de uso: um quadro bem mantido vale mais do que qualquer software sofisticado abandonado após a primeira semana.
    </p>
  </>
))
