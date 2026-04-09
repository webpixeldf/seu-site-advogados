import { registerArticle } from './registry'

registerArticle('como-instalar-as-tags-do-google-no-seu-site-de-advocacia', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      Instalar corretamente o Google Analytics e o Google Tag Manager no site do escritório de advocacia é fundamental para tomar decisões baseadas em dados. Sem essas ferramentas, você não sabe quantas pessoas visitam seu site, de onde elas vêm, quais páginas acessam ou se suas campanhas de marketing estão gerando resultados. Neste artigo, vamos cobrir a instalação completa dessas ferramentas, a configuração de rastreamento de conversões e os cuidados com a LGPD.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Por que rastrear dados do site</h2>
    <p className="text-gray-700 leading-relaxed">
      Imagine investir R$ 3.000 por mês em Google Ads sem saber quantos contatos esse investimento gera. Ou publicar artigos no blog sem saber se alguém os lê. Ferramentas de rastreamento eliminam o achismo e permitem que você entenda exatamente o que funciona e o que precisa ser ajustado.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Os dados que essas ferramentas fornecem incluem:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Número de visitantes diários, semanais e mensais</li>
      <li>De onde vêm os visitantes — Google, redes sociais, links diretos ou campanhas pagas</li>
      <li>Quais páginas são mais acessadas e quanto tempo as pessoas passam nelas</li>
      <li>Quantos visitantes entram em contato via formulário, WhatsApp ou telefone</li>
      <li>Taxa de rejeição — quantas pessoas saem do site sem interagir</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Google Analytics 4: configuração completa</h2>
    <p className="text-gray-700 leading-relaxed">
      O Google Analytics 4 (GA4) é a versão atual da ferramenta de análise de dados do Google. Ele substituiu o Universal Analytics e trouxe um modelo de dados baseado em eventos, que é mais flexível e poderoso.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Passo 1: Criar a conta e a propriedade</h3>
    <p className="text-gray-700 leading-relaxed">
      Acesse analytics.google.com e faça login com sua conta Google. Clique em "Começar a medir" e siga o processo de configuração:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Dê um nome à conta — geralmente o nome do escritório</li>
      <li>Crie uma propriedade com o nome do site</li>
      <li>Selecione o fuso horário "Brasil" e a moeda "Real brasileiro"</li>
      <li>Preencha as informações sobre o negócio (categoria, tamanho)</li>
      <li>Selecione "Web" como plataforma e insira a URL do site</li>
    </ul>
    <p className="text-gray-700 leading-relaxed">
      Ao final, o GA4 vai gerar um ID de medição no formato G-XXXXXXXXXX. Esse é o identificador que será instalado no seu site.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Passo 2: Instalar o código no site</h3>
    <p className="text-gray-700 leading-relaxed">
      Existem duas formas de instalar o GA4 no site: diretamente no código ou via Google Tag Manager. A instalação via Tag Manager é recomendada porque centraliza todas as tags em um único lugar e facilita futuras modificações sem mexer no código do site.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Para instalação direta, copie o snippet de código fornecido pelo GA4 e cole-o no &lt;head&gt; de todas as páginas do site. Em plataformas como WordPress, isso pode ser feito via plugin ou editando o arquivo header.php do tema.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Google Tag Manager: o gerenciador central de tags</h2>
    <p className="text-gray-700 leading-relaxed">
      O Google Tag Manager (GTM) é uma ferramenta gratuita que permite gerenciar todos os códigos de rastreamento do site sem precisar de um desenvolvedor para cada alteração. Com o GTM instalado, você pode adicionar, editar e remover tags do Google Analytics, Google Ads, Meta Pixel e outras ferramentas diretamente pelo painel.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Criando a conta do GTM</h3>
    <p className="text-gray-700 leading-relaxed">
      Acesse tagmanager.google.com e crie uma nova conta. Preencha o nome da conta (nome do escritório) e crie um contêiner do tipo "Web". O GTM vai gerar dois snippets de código: um para ser inserido no &lt;head&gt; e outro para ser inserido logo após a abertura do &lt;body&gt; de todas as páginas.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Instalando o GTM no site</h3>
    <p className="text-gray-700 leading-relaxed">
      Os dois snippets de código do GTM devem ser inseridos em todas as páginas do site. A maioria das plataformas oferece um local específico para isso:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">WordPress:</strong> use um plugin como "Insert Headers and Footers" ou "GTM4WP" para inserir os códigos sem editar o tema</li>
      <li><strong className="text-[#162a2a]">Next.js:</strong> adicione os snippets no componente de layout principal ou use a biblioteca @next/third-parties</li>
      <li><strong className="text-[#162a2a]">Sites estáticos:</strong> insira diretamente no HTML de cada página ou no template base</li>
    </ul>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Conectando o GA4 ao GTM</h3>
    <p className="text-gray-700 leading-relaxed">
      Com o GTM instalado, o próximo passo é criar uma tag para o Google Analytics 4 dentro do GTM:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>No painel do GTM, clique em "Tags" e depois em "Nova"</li>
      <li>Selecione o tipo de tag "Google Analytics: configuração do GA4"</li>
      <li>Insira o ID de medição do GA4 (G-XXXXXXXXXX)</li>
      <li>No acionador, selecione "All Pages" para que a tag dispare em todas as páginas</li>
      <li>Salve a tag e publique o contêiner</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Configurando o rastreamento de conversões</h2>
    <p className="text-gray-700 leading-relaxed">
      Rastrear visitas é útil, mas o que realmente importa são as conversões — ações que indicam que um visitante se transformou em um potencial cliente. Para um site de advocacia, as conversões mais relevantes são:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Envio de formulário de contato</strong></li>
      <li><strong className="text-[#162a2a]">Clique no botão de WhatsApp</strong></li>
      <li><strong className="text-[#162a2a]">Clique no número de telefone</strong></li>
      <li><strong className="text-[#162a2a]">Visualização da página de agradecimento</strong> (após envio de formulário)</li>
    </ul>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Rastreando cliques no WhatsApp</h3>
    <p className="text-gray-700 leading-relaxed">
      Para rastrear cliques no botão de WhatsApp via GTM, crie um acionador do tipo "Clique — Apenas links" e configure-o para disparar quando a URL do link contiver "wa.me" ou "api.whatsapp.com". Em seguida, crie uma tag de evento do GA4 com o nome "whatsapp_click" e associe-a a esse acionador.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Rastreando envios de formulário</h3>
    <p className="text-gray-700 leading-relaxed">
      Se o formulário redireciona para uma página de agradecimento, crie um acionador de "Visualização de página" que dispara apenas na URL da página de agradecimento. Se o formulário não redireciona, utilize um acionador de "Envio de formulário" configurado para o formulário específico da página.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Marcando eventos como conversões no GA4</h3>
    <p className="text-gray-700 leading-relaxed">
      Após configurar os eventos no GTM, acesse o GA4 e vá em Administrador &gt; Eventos. Localize os eventos criados (whatsapp_click, form_submit etc.) e marque-os como conversões. Isso permite que esses eventos sejam usados como metas em relatórios e integrados com o Google Ads para otimização de campanhas.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Eventos personalizados úteis para advogados</h2>
    <p className="text-gray-700 leading-relaxed">
      Além das conversões principais, existem eventos que fornecem informações valiosas sobre o comportamento dos visitantes:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Scroll depth:</strong> rastreia até onde o visitante rolou a página — útil para saber se os artigos do blog estão sendo lidos por completo</li>
      <li><strong className="text-[#162a2a]">Tempo na página:</strong> o GA4 já rastreia o tempo de engajamento, mas você pode criar eventos para marcos específicos como 30 segundos ou 2 minutos</li>
      <li><strong className="text-[#162a2a]">Clique em áreas de atuação:</strong> rastrear quais áreas do escritório recebem mais interesse</li>
      <li><strong className="text-[#162a2a]">Download de materiais:</strong> se você oferece e-books ou guias, rastreie os downloads</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">LGPD e privacidade: o que você precisa fazer</h2>
    <p className="text-gray-700 leading-relaxed">
      A Lei Geral de Proteção de Dados (LGPD) exige que sites informem aos visitantes sobre a coleta de dados e obtenham consentimento antes de ativar ferramentas de rastreamento. Para um escritório de advocacia, cumprir a LGPD não é apenas uma obrigação legal — é uma questão de credibilidade profissional.
    </p>
    <p className="text-gray-700 leading-relaxed">
      As ações obrigatórias são:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Banner de cookies:</strong> exiba um aviso claro informando que o site utiliza cookies e ferramentas de rastreamento. Ofereça as opções de aceitar, recusar ou personalizar</li>
      <li><strong className="text-[#162a2a]">Política de privacidade:</strong> tenha uma página detalhando quais dados são coletados, como são usados e como o visitante pode solicitar a exclusão</li>
      <li><strong className="text-[#162a2a]">Consentimento antes do rastreamento:</strong> as tags do Analytics e do Tag Manager só devem disparar após o visitante aceitar os cookies. Isso pode ser configurado no GTM usando acionadores condicionais baseados no consentimento</li>
      <li><strong className="text-[#162a2a]">Modo de consentimento do Google:</strong> configure o Google Consent Mode, que permite ao GA4 coletar dados agregados e anonimizados mesmo antes do consentimento, sem usar cookies</li>
    </ul>
    <p className="text-gray-700 leading-relaxed">
      Existem plataformas de gerenciamento de consentimento (CMPs) como CookieYes, Cookiebot e LGPD Framework que simplificam essa implementação e se integram diretamente ao GTM.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Verificando se tudo está funcionando</h2>
    <p className="text-gray-700 leading-relaxed">
      Após instalar todas as tags, é essencial verificar se tudo está funcionando corretamente antes de considerar o trabalho concluído:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Modo de visualização do GTM:</strong> clique em "Visualizar" no painel do GTM para ativar o modo de depuração. Navegue pelo site e verifique se as tags estão disparando corretamente</li>
      <li><strong className="text-[#162a2a]">Relatório em tempo real do GA4:</strong> acesse o GA4 e vá em Relatórios &gt; Tempo real para confirmar que as visitas estão sendo registradas</li>
      <li><strong className="text-[#162a2a]">Google Tag Assistant:</strong> instale a extensão Tag Assistant do Chrome para verificar se as tags estão presentes e sem erros nas páginas</li>
      <li><strong className="text-[#162a2a]">Teste de conversões:</strong> envie um formulário de teste, clique no WhatsApp e no telefone para verificar se os eventos de conversão são registrados</li>
    </ul>
    <p className="text-gray-700 leading-relaxed">
      Dedique tempo a essa verificação. Dados incorretos são piores que nenhum dado, porque levam a decisões erradas. Com tudo configurado e validado em um <a href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors">site para escritório jurídico</a>, você terá a infraestrutura de dados necessária para medir e otimizar qualquer estratégia de marketing digital do escritório.
    </p>
  </>
))
