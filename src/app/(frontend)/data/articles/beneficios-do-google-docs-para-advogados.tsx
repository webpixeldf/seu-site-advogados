import { registerArticle } from './registry'

registerArticle('beneficios-do-google-docs-para-advogados', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      A rotina de um advogado gira em torno de documentos. Petições, contratos, pareceres, procurações, notificações — tudo passa pela redação, revisão e compartilhamento de textos. O Google Docs é uma ferramenta gratuita que resolve boa parte dos problemas que advogados enfrentam diariamente com documentos: versões perdidas, dificuldade de colaboração, arquivos que não abrem e a dependência de um único computador. Este artigo explora como o Google Docs se aplica à prática jurídica, com foco nos recursos que realmente fazem diferença.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Colaboração em tempo real: o maior diferencial</h2>

    <p className="text-gray-700 leading-relaxed">
      O recurso que torna o Google Docs particularmente útil para escritórios de advocacia é a edição simultânea. Dois ou mais advogados podem trabalhar no mesmo documento ao mesmo tempo, cada um vendo as alterações do outro em tempo real. Cada pessoa é identificada por um cursor colorido com seu nome, o que elimina qualquer confusão sobre quem está editando o quê.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Na prática jurídica, isso muda a dinâmica de revisão de peças. Em vez do fluxo tradicional — um advogado redige, salva, envia por e-mail, o outro abre, revisa, salva com outro nome e devolve — os dois trabalham no mesmo arquivo. O advogado sênior pode revisar a petição enquanto o júnior ainda está redigindo os pedidos. O resultado é um processo mais ágil, sem múltiplas versões e sem risco de perda de alterações.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Para escritórios que trabalham com clientes corporativos, a colaboração em tempo real também facilita a revisão conjunta de contratos. O advogado e o cliente podem estar no mesmo documento, discutindo e ajustando cláusulas simultaneamente, seja em uma reunião presencial ou por videoconferência.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Modo de sugestão: revisão profissional</h2>

    <p className="text-gray-700 leading-relaxed">
      O modo de sugestão é um recurso essencial para a revisão de documentos jurídicos. Quando ativado, todas as alterações feitas no texto aparecem como sugestões — adições em verde e exclusões riscadas em vermelho — em vez de modificar o texto diretamente. O autor original pode aceitar ou rejeitar cada sugestão individualmente.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Para ativar o modo de sugestão, clique no ícone de lápis no canto superior direito do documento e selecione "Sugestão". A partir desse momento, toda edição será registrada como proposta de alteração.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Esse recurso é particularmente valioso em três situações na advocacia:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Revisão de petições por sócios</strong> — o sócio sugere alterações na peça do associado sem destruir o trabalho original, mantendo transparência sobre o que foi modificado</li>
      <li><strong className="text-[#162a2a]">Negociação de contratos</strong> — cada parte sugere alterações em cláusulas, criando um registro claro de todas as modificações propostas durante a negociação</li>
      <li><strong className="text-[#162a2a]">Revisão por clientes</strong> — o cliente revisa um parecer ou contrato e sugere ajustes sem alterar o documento original</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      O recurso de comentários complementa o modo de sugestão. Em vez de alterar o texto, o revisor pode selecionar um trecho e adicionar um comentário explicando sua observação. Comentários são úteis para pedir esclarecimentos, apontar inconsistências ou sugerir abordagens alternativas sem tocar no texto.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Histórico de versões: segurança contra perdas</h2>

    <p className="text-gray-700 leading-relaxed">
      Todo advogado já perdeu horas de trabalho por um arquivo corrompido, um salvamento acidental ou uma edição que não deveria ter sido feita. O Google Docs elimina esse risco com o histórico de versões automático.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Cada alteração feita no documento é salva automaticamente e registrada em uma linha do tempo. Para acessar o histórico, clique em "Arquivo" e depois em "Histórico de versões" ou use o atalho Ctrl+Alt+Shift+H. Você verá todas as versões do documento, organizadas por data e hora, com destaque para as alterações feitas em cada uma.
    </p>

    <p className="text-gray-700 leading-relaxed">
      As versões são coloridas por autor, o que permite identificar quem fez cada alteração. Você pode restaurar qualquer versão anterior com um clique, e a versão atual não é perdida — ela permanece no histórico. Também é possível nomear versões importantes, como "Versão final para protocolo" ou "Antes da revisão do sócio", para facilitar a localização posterior.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Para escritórios que trabalham com compliance e auditoria, o histórico de versões serve como registro de quem alterou o quê e quando, o que pode ser relevante em situações de responsabilidade sobre o conteúdo do documento.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Permissões de compartilhamento: controle de acesso</h2>

    <p className="text-gray-700 leading-relaxed">
      O compartilhamento de documentos no Google Docs oferece três níveis de permissão que se adaptam bem às necessidades de um escritório de advocacia:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Visualizador</strong> — a pessoa pode ler o documento, mas não editar nem comentar. Útil para enviar versões finais a clientes que não precisam fazer alterações.</li>
      <li><strong className="text-[#162a2a]">Comentarista</strong> — a pessoa pode ler e adicionar comentários, mas não editar o texto. Ideal para clientes que precisam dar feedback sem modificar o documento.</li>
      <li><strong className="text-[#162a2a]">Editor</strong> — a pessoa pode editar livremente o documento. Reservado para membros da equipe que trabalham diretamente na redação.</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Para compartilhar um documento, clique no botão "Compartilhar" no canto superior direito, insira o e-mail do destinatário e selecione o nível de permissão. Você também pode gerar um link de compartilhamento com permissões pré-definidas, útil para enviar documentos a múltiplas pessoas sem adicionar cada e-mail individualmente.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Uma prática importante para escritórios é manter o compartilhamento restrito por padrão. Em vez de gerar links abertos que qualquer pessoa com o link pode acessar, prefira compartilhar com e-mails específicos. Isso protege informações sigilosas de clientes e está alinhado com as obrigações de sigilo profissional.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Templates: padronização do escritório</h2>

    <p className="text-gray-700 leading-relaxed">
      O Google Docs permite criar e salvar modelos de documentos que toda a equipe pode utilizar. Para escritórios de advocacia, manter templates atualizados garante que todos os documentos sigam o mesmo padrão de formatação e qualidade.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Documentos que se beneficiam de templates padronizados:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Petições iniciais</strong> — com cabeçalho do escritório, formatação conforme as normas do tribunal e estrutura padrão de qualificação, fatos, fundamentos e pedidos</li>
      <li><strong className="text-[#162a2a]">Contratos de honorários</strong> — com cláusulas padrão que são adaptadas a cada cliente</li>
      <li><strong className="text-[#162a2a]">Procurações</strong> — modelos para diferentes tipos de representação</li>
      <li><strong className="text-[#162a2a]">Pareceres jurídicos</strong> — com estrutura de consulta, análise e conclusão</li>
      <li><strong className="text-[#162a2a]">Notificações extrajudiciais</strong> — com formato e linguagem apropriados</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Para criar um template, basta redigir o documento-modelo no Google Docs e salvá-lo em uma pasta compartilhada chamada "Modelos" ou "Templates". Quando alguém precisar de um novo documento, faz uma cópia do modelo e preenche com os dados do caso. A cópia mantém toda a formatação do original, e o template permanece intacto para uso futuro.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Acesso offline: trabalhando sem internet</h2>

    <p className="text-gray-700 leading-relaxed">
      Uma preocupação comum sobre ferramentas na nuvem é a dependência de internet. O Google Docs resolve isso com o modo offline. Quando ativado, os documentos ficam disponíveis para leitura e edição mesmo sem conexão. As alterações são sincronizadas automaticamente quando a internet é restabelecida.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Para ativar o acesso offline, abra o Google Drive no navegador Chrome, clique no ícone de engrenagem, vá em "Configurações" e marque a opção "Offline". Você também precisa instalar a extensão Google Docs Offline no Chrome. Após a ativação, os documentos recentes ficam disponíveis automaticamente.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Para advogados que viajam, frequentam fóruns em locais com internet instável ou simplesmente querem a segurança de poder trabalhar em qualquer situação, o modo offline é essencial. Você pode redigir uma petição inteira em um avião ou revisar um contrato em um tribunal sem WiFi, com a certeza de que nada será perdido.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Integração com outras ferramentas</h2>

    <p className="text-gray-700 leading-relaxed">
      O Google Docs se integra naturalmente com o ecossistema Google. Documentos são salvos automaticamente no Google Drive. Você pode inserir links para eventos do Google Agenda, mencionar pessoas por e-mail diretamente no documento e anexar arquivos do Drive.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Recursos de integração úteis para advogados:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Digitação por voz</strong> — ativada pelo menu "Ferramentas", permite ditar textos longos, útil para transcrever anotações de reuniões ou audiências</li>
      <li><strong className="text-[#162a2a]">Complementos (add-ons)</strong> — extensões que adicionam funcionalidades como assinatura digital, formatação avançada e exportação em diferentes formatos</li>
      <li><strong className="text-[#162a2a]">Exportação flexível</strong> — documentos podem ser baixados em .docx, .pdf, .odt e outros formatos, garantindo compatibilidade com sistemas judiciais que exigem formatos específicos</li>
      <li><strong className="text-[#162a2a]">Pesquisa integrada</strong> — o atalho Ctrl+Alt+Shift+I abre uma barra de pesquisa lateral que permite buscar informações na internet sem sair do documento</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Limitações e quando usar outro editor</h2>

    <p className="text-gray-700 leading-relaxed">
      O Google Docs não é perfeito para todos os cenários da advocacia. Documentos com formatação muito complexa — como tabelas extensas, índices automáticos sofisticados ou macros — podem não funcionar tão bem quanto no Microsoft Word. A numeração de páginas e os cabeçalhos, embora funcionais, oferecem menos opções de personalização.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Para petições que serão protocoladas em sistemas que exigem formatação específica (margens, fontes, espaçamento), o Google Docs atende na maioria dos casos, mas vale verificar se o documento exportado em .docx mantém a formatação esperada. Em casos críticos, a revisão final no Word pode ser necessária.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Para documentos que precisam de assinatura digital com certificado ICP-Brasil, o Google Docs não oferece suporte nativo. Você precisará exportar o documento em PDF e usar um software de assinatura digital separado.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Adoção no escritório: como começar</h2>

    <p className="text-gray-700 leading-relaxed">
      A transição para o Google Docs não precisa ser abrupta. O caminho mais natural é começar usando a ferramenta para documentos internos — atas de reunião, rascunhos de peças, comunicações internas — e manter o Word para documentos finais que serão protocolados. À medida que a equipe ganhar familiaridade, o Google Docs pode assumir uma parcela maior do fluxo de trabalho.
    </p>

    <p className="text-gray-700 leading-relaxed">
      O ponto de partida é criar uma conta Google profissional para o escritório (ou usar o Google Workspace para contas com domínio próprio), organizar a estrutura de pastas no Drive e migrar os templates existentes. Com essa base, a colaboração fluida e o acesso universal aos documentos se tornam realidade rapidamente, sem custo e sem complexidade técnica.
    </p>
  </>
))
