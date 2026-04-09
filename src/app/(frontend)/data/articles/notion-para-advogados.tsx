import { registerArticle } from './registry'

registerArticle('notion-para-advogados', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      O Notion se tornou uma das ferramentas de produtividade mais populares do mundo, e não é por acaso. Para advogados que lidam diariamente com dezenas de processos, prazos apertados e informações de múltiplos clientes, ele oferece uma plataforma unificada que substitui planilhas, blocos de notas e até alguns softwares jurídicos. Neste artigo, vamos explorar como configurar o Notion do zero para um escritório de advocacia, com foco em organização real e resultados práticos.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">O que é o Notion e por que advogados estão adotando</h2>

    <p className="text-gray-700 leading-relaxed">
      O Notion é um aplicativo que combina notas, bancos de dados, kanban, calendários e wikis em um único espaço de trabalho. Diferente de ferramentas que fazem apenas uma coisa, ele permite criar sistemas completos e personalizados. Para a advocacia, isso significa ter processos, clientes, prazos, modelos de petições e anotações de reuniões em um só lugar, acessível pelo computador ou celular.
    </p>

    <p className="text-gray-700 leading-relaxed">
      A grande vantagem é a flexibilidade. Enquanto softwares jurídicos tradicionais impõem fluxos rígidos, o Notion permite que cada advogado ou escritório monte sua própria estrutura. Quem trabalha com contencioso tem necessidades diferentes de quem atua com consultoria, e o Notion se adapta a ambos.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Configuração inicial: primeiros passos</h2>

    <p className="text-gray-700 leading-relaxed">
      Ao criar sua conta no Notion, você encontrará uma página em branco. O ideal é começar com uma estrutura simples e ir expandindo conforme a necessidade. Crie uma página principal chamada "Escritório" ou "Jurídico" e, dentro dela, organize as seguintes subpáginas:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Processos</strong> — banco de dados com todos os casos ativos e arquivados</li>
      <li><strong className="text-[#162a2a]">Clientes</strong> — cadastro com dados de contato, documentos e histórico</li>
      <li><strong className="text-[#162a2a]">Prazos</strong> — visualização em calendário e lista de todas as datas relevantes</li>
      <li><strong className="text-[#162a2a]">Modelos</strong> — templates de petições, contratos e documentos recorrentes</li>
      <li><strong className="text-[#162a2a]">Reuniões</strong> — anotações organizadas por data e cliente</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Não tente criar tudo de uma vez. Comece pelo banco de dados de processos, que provavelmente é sua maior dor, e vá adicionando os demais módulos ao longo das semanas.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Banco de dados de processos: o coração do sistema</h2>

    <p className="text-gray-700 leading-relaxed">
      O banco de dados de processos é onde o Notion realmente brilha para advogados. Crie um banco de dados do tipo "Table" e adicione as seguintes propriedades:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Número do processo</strong> — tipo texto</li>
      <li><strong className="text-[#162a2a]">Cliente</strong> — tipo relação (vinculado ao banco de clientes)</li>
      <li><strong className="text-[#162a2a]">Vara/Tribunal</strong> — tipo select com as opções mais comuns</li>
      <li><strong className="text-[#162a2a]">Status</strong> — tipo select (em andamento, aguardando, arquivado, etc.)</li>
      <li><strong className="text-[#162a2a]">Próximo prazo</strong> — tipo data</li>
      <li><strong className="text-[#162a2a]">Área</strong> — tipo select (cível, trabalhista, criminal, tributário)</li>
      <li><strong className="text-[#162a2a]">Valor da causa</strong> — tipo número</li>
      <li><strong className="text-[#162a2a]">Responsável</strong> — tipo pessoa (útil em escritórios com mais de um advogado)</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Dentro de cada registro de processo, use o corpo da página para inserir anotações cronológicas, links para documentos e atualizações. Isso cria um histórico completo de cada caso, acessível com um clique.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Templates jurídicos que economizam tempo</h2>

    <p className="text-gray-700 leading-relaxed">
      O Notion permite criar templates dentro de bancos de dados. Quando você adiciona um novo processo, ele já vem com uma estrutura pré-definida. Monte templates para diferentes situações:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Novo processo contencioso</strong> — checklist com etapas (petição inicial, contestação, réplica, audiência, sentença), campos para dados da parte contrária e anotações sobre estratégia</li>
      <li><strong className="text-[#162a2a]">Nova consultoria</strong> — campos para escopo, prazo de entrega do parecer e documentos recebidos</li>
      <li><strong className="text-[#162a2a]">Novo cliente</strong> — formulário com dados pessoais, documentos necessários e checklist de onboarding</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Esses templates eliminam o retrabalho de montar a mesma estrutura toda vez e garantem que nenhuma informação importante seja esquecida no cadastro inicial.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Visualizações: tabela, kanban e calendário</h2>

    <p className="text-gray-700 leading-relaxed">
      Um mesmo banco de dados no Notion pode ser visualizado de diferentes formas. Para processos, as mais úteis são:
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Visualização em tabela</h3>

    <p className="text-gray-700 leading-relaxed">
      É a visualização padrão, semelhante a uma planilha. Útil para ter uma visão geral de todos os processos, filtrar por área ou status e ordenar por prazo. Você pode criar filtros salvos, como "Processos trabalhistas em andamento" ou "Casos com prazo esta semana".
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Visualização em kanban</h3>

    <p className="text-gray-700 leading-relaxed">
      Agrupa os processos por status em colunas. Basta arrastar um caso de "Aguardando audiência" para "Aguardando sentença" quando o status mudar. Essa visualização é excelente para reuniões de equipe, pois dá uma fotografia rápida do estado de cada caso.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Visualização em calendário</h3>

    <p className="text-gray-700 leading-relaxed">
      Mostra os processos organizados por data de próximo prazo. É a forma mais intuitiva de identificar semanas sobrecarregadas e planejar a distribuição de trabalho. Funciona especialmente bem quando combinada com a propriedade de data.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Integração com calendário e outras ferramentas</h2>

    <p className="text-gray-700 leading-relaxed">
      O Notion se integra com diversas ferramentas que advogados já utilizam. As integrações mais relevantes para a prática jurídica são:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Google Calendar</strong> — sincroniza prazos e audiências cadastrados no Notion diretamente com sua agenda, gerando lembretes automáticos no celular</li>
      <li><strong className="text-[#162a2a]">Google Drive</strong> — incorpore documentos e pastas do Drive dentro das páginas do Notion, mantendo tudo centralizado</li>
      <li><strong className="text-[#162a2a]">Zapier ou Make</strong> — crie automações como "quando um novo processo é cadastrado, enviar e-mail de boas-vindas ao cliente"</li>
      <li><strong className="text-[#162a2a]">Slack ou WhatsApp (via integrações)</strong> — receba notificações quando prazos estiverem próximos</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      A integração com o Google Calendar é particularmente importante, pois muitos advogados dependem dos lembretes do celular para não perder prazos. Configurar essa sincronização deve ser uma das primeiras ações após montar o banco de dados.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Plano gratuito versus plano pago: o que muda</h2>

    <p className="text-gray-700 leading-relaxed">
      O Notion oferece um plano gratuito que já atende bem advogados solo e pequenos escritórios. Veja o que cada plano oferece na prática:
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Plano gratuito</h3>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Páginas e blocos ilimitados para uso individual</li>
      <li>Upload de arquivos de até 5 MB por arquivo</li>
      <li>Compartilhamento com até 10 convidados</li>
      <li>Integrações básicas com outras ferramentas</li>
      <li>Histórico de versões de 7 dias</li>
    </ul>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Plano Plus</h3>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Upload de arquivos ilimitado</li>
      <li>Convidados ilimitados</li>
      <li>Histórico de versões de 30 dias</li>
      <li>Bancos de dados com automações mais avançadas</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Para a maioria dos advogados autônomos, o plano gratuito é suficiente para começar. A limitação de 5 MB por arquivo pode incomodar quem precisa anexar documentos pesados, mas a solução simples é manter os arquivos no Google Drive e apenas linkar no Notion. O plano pago se justifica quando o escritório cresce e precisa de colaboração mais intensa entre membros da equipe.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Dicas práticas para manter o sistema funcionando</h2>

    <p className="text-gray-700 leading-relaxed">
      Criar o sistema é a parte fácil. Mantê-lo atualizado é o verdadeiro desafio. Algumas práticas que ajudam:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Reserve 10 minutos no início do dia</strong> para atualizar status de processos e revisar prazos da semana</li>
      <li><strong className="text-[#162a2a]">Atualize imediatamente</strong> após cada movimentação processual, audiência ou reunião com cliente</li>
      <li><strong className="text-[#162a2a]">Use o Notion no celular</strong> para anotações rápidas durante audiências ou visitas a clientes</li>
      <li><strong className="text-[#162a2a]">Faça uma revisão semanal</strong> toda sexta-feira para garantir que nada ficou desatualizado</li>
      <li><strong className="text-[#162a2a]">Comece simples</strong> e resista à tentação de criar sistemas complexos antes de dominar o básico</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      O Notion não substitui um software jurídico completo com integração aos tribunais, mas funciona como um excelente complemento para organização interna. Muitos advogados usam o sistema do tribunal para acompanhamento processual e o Notion para gestão do dia a dia, estratégia e relacionamento com clientes — complementando essas ferramentas com um <a href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors">site profissional para advogado</a> que centraliza a comunicação com o público. O importante é encontrar o equilíbrio entre organização e praticidade, sem transformar a ferramenta em mais uma fonte de burocracia.
    </p>
  </>
))
