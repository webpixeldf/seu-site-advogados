import { registerArticle } from './registry'

registerArticle('como-colocar-um-site-de-advocacia-no-google', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      Ter um site de advocacia no ar não significa que ele aparece no Google. Para que suas páginas sejam exibidas nos resultados de busca, é necessário que o Google as conheça, rastreie e indexe. Esse processo pode acontecer naturalmente ao longo de semanas, mas existe uma forma muito mais eficiente de garantir que isso ocorra rapidamente e sem erros. Neste artigo, vamos cobrir todo o passo a passo para indexar seu site de advocacia no Google.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Como funciona a indexação do Google</h2>
    <p className="text-gray-700 leading-relaxed">
      O Google utiliza robôs chamados crawlers (ou spiders) que navegam pela internet seguindo links entre páginas. Quando um crawler encontra uma página nova, ele a analisa e decide se ela deve ser adicionada ao índice do Google — a enorme base de dados de todas as páginas conhecidas.
    </p>
    <p className="text-gray-700 leading-relaxed">
      O processo funciona em três etapas:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Descoberta:</strong> o crawler encontra a URL da sua página, seja por um link externo, pelo sitemap ou por uma solicitação manual</li>
      <li><strong className="text-[#162a2a]">Rastreamento:</strong> o crawler visita a página e lê seu conteúdo, estrutura e links</li>
      <li><strong className="text-[#162a2a]">Indexação:</strong> se a página atende aos critérios de qualidade, ela é adicionada ao índice e passa a poder aparecer nos resultados de busca</li>
    </ul>
    <p className="text-gray-700 leading-relaxed">
      É importante entender que indexação e ranqueamento são coisas diferentes. Uma página indexada está no banco de dados do Google, mas isso não garante que ela aparecerá na primeira página para uma busca específica. O ranqueamento depende de fatores como relevância, autoridade e qualidade do conteúdo.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Configurando o Google Search Console</h2>
    <p className="text-gray-700 leading-relaxed">
      O Google Search Console é a ferramenta gratuita e oficial do Google para monitorar e gerenciar a presença do seu site nos resultados de busca. É o primeiro passo obrigatório para qualquer site que queira ser encontrado no Google.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Passo 1: Criar uma conta</h3>
    <p className="text-gray-700 leading-relaxed">
      Acesse search.google.com/search-console e faça login com uma conta Google. Se possível, use a mesma conta que gerencia o Google Meu Negócio e o Google Analytics do escritório para manter tudo integrado.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Passo 2: Adicionar a propriedade</h3>
    <p className="text-gray-700 leading-relaxed">
      O Search Console oferece dois tipos de propriedade:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Domínio:</strong> cobre todas as variações do seu domínio (com e sem www, http e https). Requer verificação por DNS</li>
      <li><strong className="text-[#162a2a]">Prefixo de URL:</strong> cobre apenas a versão específica que você informar. Permite múltiplos métodos de verificação</li>
    </ul>
    <p className="text-gray-700 leading-relaxed">
      A opção "Domínio" é mais completa e recomendada. Para verificá-la, você precisará adicionar um registro TXT no DNS do seu domínio. Se não souber como fazer isso, seu desenvolvedor ou o suporte da empresa de hospedagem pode ajudar.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Passo 3: Verificar a propriedade</h3>
    <p className="text-gray-700 leading-relaxed">
      Após adicionar o registro DNS, clique em "Verificar" no Search Console. A verificação pode levar de alguns minutos a algumas horas para ser processada. Uma vez verificada, você terá acesso completo aos dados de busca do seu site.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Criando e enviando o sitemap</h2>
    <p className="text-gray-700 leading-relaxed">
      O sitemap é um arquivo XML que lista todas as páginas do seu site que você deseja que o Google indexe. Ele funciona como um mapa que guia os crawlers, garantindo que nenhuma página importante seja esquecida.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Gerando o sitemap</h3>
    <p className="text-gray-700 leading-relaxed">
      A maioria das plataformas de criação de sites gera o sitemap automaticamente:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">WordPress:</strong> plugins como Yoast SEO ou Rank Math geram e atualizam o sitemap automaticamente</li>
      <li><strong className="text-[#162a2a]">Next.js / React:</strong> é necessário configurar a geração do sitemap via código ou bibliotecas específicas</li>
      <li><strong className="text-[#162a2a]">Wix / Squarespace:</strong> geram sitemap automaticamente sem necessidade de configuração</li>
    </ul>
    <p className="text-gray-700 leading-relaxed">
      O sitemap geralmente fica acessível em seusite.com.br/sitemap.xml. Verifique se ele existe acessando esse endereço no navegador. O arquivo deve listar todas as URLs do site em formato XML.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Enviando o sitemap no Search Console</h3>
    <p className="text-gray-700 leading-relaxed">
      No painel do Search Console, acesse o menu lateral e clique em "Sitemaps". Insira a URL do seu sitemap e clique em "Enviar". O Google vai processar o sitemap e mostrar quantas URLs foram descobertas. Acompanhe o status para garantir que não há erros.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Solicitando indexação de páginas específicas</h2>
    <p className="text-gray-700 leading-relaxed">
      Além do sitemap, você pode solicitar a indexação de páginas específicas manualmente. Isso é útil quando você publica uma nova página ou artigo e quer que ele apareça no Google o mais rápido possível.
    </p>
    <p className="text-gray-700 leading-relaxed">
      No Search Console, use a barra "Inspecionar URL" no topo da página. Cole a URL da página que deseja indexar e aguarde a análise. Se a página ainda não estiver no índice do Google, você verá a opção "Solicitar indexação". Clique nela e o Google priorizará o rastreamento dessa página.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Essa solicitação não garante indexação imediata, mas geralmente acelera o processo para poucos dias. Existe um limite diário de solicitações, então use esse recurso de forma estratégica para as páginas mais importantes.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Erros comuns que impedem a indexação</h2>
    <p className="text-gray-700 leading-relaxed">
      Se seu site não está aparecendo no Google mesmo após configurar o Search Console e enviar o sitemap, provavelmente existe um problema técnico. Os erros mais comuns são:
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Bloqueio pelo robots.txt</h3>
    <p className="text-gray-700 leading-relaxed">
      O arquivo robots.txt fica na raiz do seu site (seusite.com.br/robots.txt) e instrui os crawlers sobre quais páginas podem ou não rastrear. Se ele contém a instrução "Disallow: /", todo o site está bloqueado. Isso acontece frequentemente quando o site é migrado do ambiente de desenvolvimento para produção sem remover a restrição.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Tag noindex nas páginas</h3>
    <p className="text-gray-700 leading-relaxed">
      Uma meta tag noindex no código HTML da página instrui o Google a não indexá-la. Verifique se suas páginas não contêm a tag &lt;meta name="robots" content="noindex"&gt;. Esse erro é comum em sites WordPress onde a opção "Desencorajar mecanismos de busca" foi marcada nas configurações de leitura.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Conteúdo duplicado</h3>
    <p className="text-gray-700 leading-relaxed">
      Se o Google encontra conteúdo idêntico ou muito similar em múltiplas URLs do seu site, ele pode decidir não indexar nenhuma delas ou indexar apenas uma. Use URLs canônicas (tag canonical) para indicar qual versão de uma página é a principal.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Erros de servidor</h3>
    <p className="text-gray-700 leading-relaxed">
      Se o servidor retorna erros 500 (erro interno) ou se o site fica fora do ar com frequência, o Google reduz a frequência de rastreamento e pode remover páginas já indexadas. Garanta que sua hospedagem é estável e que o site está disponível 24 horas por dia.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Redirecionamentos incorretos</h3>
    <p className="text-gray-700 leading-relaxed">
      Cadeias de redirecionamento (uma URL redireciona para outra que redireciona para outra) confundem os crawlers. Se você mudou URLs, use redirecionamentos 301 diretos da URL antiga para a nova, sem intermediários.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Monitorando a indexação</h2>
    <p className="text-gray-700 leading-relaxed">
      Após configurar tudo, é essencial monitorar regularmente o status de indexação do seu site. O Search Console oferece ferramentas específicas para isso:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Relatório de cobertura do índice:</strong> mostra quantas páginas estão indexadas, quantas têm erros e quantas foram excluídas</li>
      <li><strong className="text-[#162a2a]">Relatório de sitemaps:</strong> indica o status do processamento do sitemap e quantas URLs foram descobertas</li>
      <li><strong className="text-[#162a2a]">Inspeção de URL:</strong> permite verificar o status individual de qualquer página</li>
      <li><strong className="text-[#162a2a]">Core Web Vitals:</strong> mostra se suas páginas atendem aos padrões de experiência do usuário do Google</li>
    </ul>
    <p className="text-gray-700 leading-relaxed">
      Estabeleça uma rotina de verificação semanal nos primeiros meses. Depois que o site estiver estabilizado, uma verificação quinzenal é suficiente. Preste atenção especial a quedas repentinas no número de páginas indexadas, pois isso pode indicar um problema técnico que precisa ser resolvido rapidamente.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Verificações adicionais para garantir a visibilidade</h2>
    <p className="text-gray-700 leading-relaxed">
      Além do Search Console, faça as seguintes verificações para garantir que seu site está corretamente configurado:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Pesquise "site:seudominio.com.br" no Google para ver todas as páginas indexadas</li>
      <li>Verifique se as versões www e sem www redirecionam para a mesma versão</li>
      <li>Confirme que o certificado SSL está instalado e funcionando corretamente</li>
      <li>Teste a velocidade do site no PageSpeed Insights e corrija problemas identificados</li>
      <li>Verifique se o site funciona corretamente em dispositivos móveis usando o teste de compatibilidade do Google</li>
    </ul>
    <p className="text-gray-700 leading-relaxed">
      A indexação é apenas o primeiro passo para aparecer no Google. Uma vez que suas páginas estejam no índice, o trabalho de otimização para melhorar o posicionamento nos resultados começa. Mas sem indexação, nenhuma estratégia de SEO tem efeito. Garanta que essa base esteja sólida antes de avançar para etapas mais complexas.
    </p>
  </>
))
