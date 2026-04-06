import { registerArticle } from './registry'

registerArticle('como-criar-um-site-para-advogados', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      Se você é advogado e ainda não tem um site profissional, está deixando clientes passarem direto por você todos os dias. A realidade é simples: quando alguém precisa de um advogado, a primeira coisa que faz é pesquisar no Google. Se você não aparece lá — ou aparece com um perfil genérico em diretório de terceiros — quem aparece é o seu concorrente.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Ter um site próprio não é questão de vaidade. É uma ferramenta de trabalho. É o lugar onde o potencial cliente vai entender o que você faz, como você trabalha e se sente confiança para entrar em contato. Este guia vai te levar do zero à publicação, cobrindo cada etapa com orientações práticas que funcionam na advocacia brasileira.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      1. Planejamento: antes de qualquer coisa, defina o básico
    </h2>

    <p className="text-gray-700 leading-relaxed">
      Pular o planejamento é o erro mais comum. Advogados abrem o computador, escolhem um template bonito e começam a montar o site sem saber direito o que querem. O resultado é um site genérico que não converte visitante em cliente.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Antes de pensar em design ou tecnologia, responda três perguntas:
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Qual é o objetivo principal do site?
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Parece óbvio, mas não é. O objetivo pode ser captar clientes novos pela internet, servir como cartão de visitas digital para indicações, posicionar você como autoridade em uma área específica ou uma combinação disso tudo. Cada objetivo muda a estrutura do site. Um advogado criminalista que quer captar clientes de urgência precisa de um site diferente de um tributarista que quer atrair empresas para consultoria mensal.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Quem é o seu público-alvo?
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Se você é advogado trabalhista que atende empregados, seu público é a pessoa física que acabou de ser demitida e está preocupada com seus direitos. A linguagem precisa ser acessível, direta e acolhedora. Se você atende empresas em direito societário, o tom muda completamente — o visitante é um empresário ou diretor jurídico que busca segurança e competência técnica.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Quais áreas de atuação você vai destacar?
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Resista à tentação de listar vinte áreas. Um site que diz que faz tudo acaba não convencendo ninguém. Escolha de três a cinco áreas principais. Se você é advogado tributarista e também atua em direito empresarial e planejamento sucessório, foque nisso. Deixe claro em quê você é realmente bom.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      2. Escolhendo o domínio: .adv.br, .com.br ou .com?
    </h2>

    <p className="text-gray-700 leading-relaxed">
      O domínio é o endereço do seu site na internet. Essa escolha importa mais do que parece, tanto para credibilidade quanto para SEO.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Domínio .adv.br
    </h3>

    <p className="text-gray-700 leading-relaxed">
      É o domínio exclusivo para advogados registrados na OAB. Para registrar, você precisa do número da sua inscrição. A vantagem é clara: transmite credibilidade imediata. Quando o visitante vê <strong className="text-[#162a2a]">.adv.br</strong>, sabe que está diante de um profissional habilitado. A desvantagem é que o nome pode ser mais difícil de lembrar, especialmente se o seu nome for longo. O registro é feito pelo Registro.br e exige validação junto à OAB.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Domínio .com.br
    </h3>

    <p className="text-gray-700 leading-relaxed">
      É o mais popular no Brasil e o mais fácil de lembrar. Funciona bem se o seu escritório tem nome fantasia ou se você quer um domínio mais curto. A desvantagem é que qualquer pessoa pode registrar, então não tem o selo implícito de credibilidade do .adv.br. Além disso, muitos nomes já estão ocupados.
    </p>

    <p className="text-gray-700 leading-relaxed">
      <strong className="text-[#162a2a]">Dica prática:</strong> se o seu foco é captar clientes pela internet e você quer um domínio fácil de lembrar, .com.br funciona bem. Se a credibilidade institucional é prioridade e o público já é mais qualificado (empresas, por exemplo), .adv.br pode ser a melhor escolha. Nada impede registrar os dois e redirecionar um para o outro.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      3. As páginas essenciais do site jurídico
    </h2>

    <p className="text-gray-700 leading-relaxed">
      Não precisa criar um site com trinta páginas. Um site jurídico eficiente tem cinco a sete páginas bem feitas. Veja quais são indispensáveis:
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Página inicial (Home)
    </h3>

    <p className="text-gray-700 leading-relaxed">
      É a vitrine do escritório. Nos primeiros cinco segundos, o visitante precisa entender três coisas: quem é você, o que você faz e como entrar em contato. Uma boa home tem um título claro, um subtítulo que explica sua proposta de valor, as áreas de atuação em destaque e um botão visível para contato (WhatsApp, formulário ou telefone).
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Sobre (Quem somos)
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Essa página é mais importante do que muitos pensam. O cliente não contrata só uma área de atuação — ele contrata uma pessoa. Conte sua trajetória, formação, especializações e o que te motiva na advocacia. Use uma foto profissional (não precisa ser de terno e gravata em estúdio, mas precisa passar seriedade). Se o escritório tem sócios ou equipe, apresente cada um brevemente.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Áreas de atuação
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Cada área merece uma página própria ou, no mínimo, uma seção bem detalhada. Não basta escrever &quot;Direito do Trabalho&quot; e um parágrafo genérico. Explique que tipo de caso você atende nessa área, para quem (empregado ou empregador), e como funciona o processo. Se você é advogado previdenciário, por exemplo, detalhe se atua com aposentadoria por tempo de contribuição, aposentadoria especial, BPC/LOAS, revisões — seja específico.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Contato
    </h3>

    <p className="text-gray-700 leading-relaxed">
      A página de contato precisa ser simples e funcional. Inclua: formulário de contato com poucos campos (nome, e-mail, telefone e mensagem), número de WhatsApp com link direto, endereço do escritório com mapa integrado (se atende presencialmente) e horário de atendimento. Evite esconder o telefone ou o WhatsApp atrás de formulários obrigatórios. O cliente que está com um problema jurídico quer falar com alguém, não preencher cadastro.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Blog
    </h3>

    <p className="text-gray-700 leading-relaxed">
      O blog não é opcional se você quer que o site apareça no Google. É através dos artigos do blog que você vai rankear para termos que seus potenciais clientes pesquisam. Um advogado de família pode escrever sobre &quot;como funciona a guarda compartilhada&quot;, &quot;quanto tempo demora um divórcio&quot; ou &quot;como calcular pensão alimentícia&quot;. Cada artigo é uma porta de entrada para o seu site.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      4. Design: o que funciona para sites de advocacia
    </h2>

    <p className="text-gray-700 leading-relaxed">
      Design de site jurídico não precisa ser complicado, mas precisa transmitir profissionalismo. Veja os pontos que fazem diferença:
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Cores
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Tons sóbrios funcionam melhor: azul-escuro, verde-escuro, dourado, cinza e branco são as combinações mais comuns em sites jurídicos — e por bom motivo. Transmitem seriedade e confiança. Evite cores muito vibrantes como vermelho, laranja ou rosa como cores principais. Isso não significa que o site precisa ser sem vida. Um toque de cor em botões e destaques dá personalidade sem comprometer a seriedade.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Tipografia
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Use no máximo duas fontes: uma para títulos e outra para texto corrido. Fontes serifadas (como Playfair Display ou Lora) passam tradição e elegância. Fontes sem serifa (como Inter, Lexend ou Open Sans) passam modernidade e limpeza. O tamanho da fonte do corpo do texto deve ser pelo menos 16px — menor que isso dificulta a leitura, especialmente no celular.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Layout
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Menos é mais. Sites jurídicos limpos, com bastante espaço em branco entre as seções, são mais agradáveis e profissionais do que sites carregados de informação. Use uma hierarquia visual clara: títulos grandes, subtítulos médios, texto normal. Cada seção deve ter um propósito. Se uma seção não ajuda o visitante a tomar uma decisão, ela provavelmente não precisa estar ali.
    </p>

    <p className="text-gray-700 leading-relaxed">
      <strong className="text-[#162a2a]">Sobre fotos:</strong> use imagens reais sempre que possível. Fotos do escritório, da equipe, do ambiente de trabalho criam conexão. Bancos de imagem com fotos genéricas de &quot;pessoa de terno apertando mão&quot; já são reconhecidas como artificiais pela maioria das pessoas.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      5. Conteúdo: o que escrever e como respeitar as regras da OAB
    </h2>

    <p className="text-gray-700 leading-relaxed">
      O conteúdo do site é o que vai convencer (ou afastar) o visitante. E na advocacia, ainda existe uma camada extra de cuidado: as normas de publicidade da OAB.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      O que escrever em cada página
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Na <strong className="text-[#162a2a]">home</strong>, seja direto. Nada de &quot;bem-vindo ao nosso site&quot;. Comece com o que o cliente quer ouvir: como você pode ajudar. Algo como &quot;Advocacia especializada em direito imobiliário para quem compra, vende ou aluga imóveis em São Paulo&quot; funciona muito melhor do que &quot;escritório de advocacia com excelência e tradição&quot;.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Na página <strong className="text-[#162a2a]">Sobre</strong>, conte sua história de forma humana. Por que escolheu a advocacia? Por que se especializou nessa área? Clientes se conectam com histórias, não com listas de certificados. Inclua as credenciais, claro, mas dentro de uma narrativa que faça sentido.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Nas <strong className="text-[#162a2a]">áreas de atuação</strong>, fale a língua do cliente. Se você atende consumidores, não escreva &quot;demandas consumeristas&quot;. Escreva &quot;problemas com compras, contratos e cobranças indevidas&quot;. O visitante do site não é advogado — ele é uma pessoa com um problema que precisa de solução.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Regras de publicidade da OAB que você precisa conhecer
    </h3>

    <p className="text-gray-700 leading-relaxed">
      O Provimento 205/2021 do CFOAB modernizou bastante as regras de publicidade para advogados, mas ainda existem limites importantes. Veja os pontos principais:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>
        <strong className="text-[#162a2a]">Pode:</strong> informar áreas de atuação, qualificações, títulos acadêmicos, endereço, telefone e e-mail. Pode publicar artigos informativos no blog. Pode ter presença em redes sociais com conteúdo educativo.
      </li>
      <li>
        <strong className="text-[#162a2a]">Não pode:</strong> prometer resultados (&quot;garantimos sua aposentadoria&quot;), fazer captação direta de clientes (abordar pessoas em hospitais, delegacias), divulgar valores de honorários no site, usar depoimentos de clientes como propaganda, nem fazer comparações com outros advogados.
      </li>
      <li>
        <strong className="text-[#162a2a]">Cuidado com:</strong> uso de termos como &quot;o melhor&quot;, &quot;líder&quot;, &quot;número 1&quot;. Além de soar arrogante, pode configurar infração ética. Evite também fotos em audiências ou dentro de fóruns.
      </li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Na dúvida, a regra de ouro é: informar pode, mercantilizar não pode. Seu site pode (e deve) mostrar competência. Só não pode transformar a advocacia em um balcão de vendas.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      6. Requisitos técnicos: hospedagem, SSL, velocidade e mobile
    </h2>

    <p className="text-gray-700 leading-relaxed">
      A parte técnica pode parecer intimidadora, mas o básico é bastante direto. Aqui está o que você precisa garantir:
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Hospedagem
    </h3>

    <p className="text-gray-700 leading-relaxed">
      A hospedagem é onde os arquivos do seu site ficam armazenados. Escolha um serviço que ofereça servidores no Brasil (ou pelo menos na América do Sul) para que o site carregue rápido para visitantes brasileiros. Planos básicos de hospedagem compartilhada funcionam bem para sites de advocacia que não recebem milhões de acessos por mês. O importante é que o serviço tenha boa reputação de uptime (tempo que o servidor fica online) e suporte técnico acessível.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Certificado SSL (HTTPS)
    </h3>

    <p className="text-gray-700 leading-relaxed">
      O SSL é o que faz aparecer o cadeado ao lado do endereço do site no navegador. Sem ele, o Google marca seu site como &quot;Não seguro&quot; — péssimo para a credibilidade de um advogado. A boa notícia é que a maioria dos serviços de hospedagem oferece SSL gratuito (via Let&apos;s Encrypt). Certifique-se de que está ativado e de que todas as páginas carregam em HTTPS.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Velocidade de carregamento
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Se o site demora mais de três segundos para carregar, uma parcela significativa dos visitantes simplesmente fecha a aba. Para manter o site rápido:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Comprima as imagens antes de subir (ferramentas como TinyPNG ou Squoosh fazem isso gratuitamente)</li>
      <li>Evite vídeos pesados na home — se quiser usar vídeo, incorpore do YouTube</li>
      <li>Minimize o uso de plugins e scripts desnecessários</li>
      <li>Use um serviço de CDN se possível (muitas hospedagens já incluem)</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Você pode testar a velocidade do seu site gratuitamente no Google PageSpeed Insights. Mire em uma pontuação acima de 70 no mobile.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Site responsivo (mobile)
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Mais da metade dos acessos a sites no Brasil vem de celulares. Se o seu site não funciona bem no celular, você está perdendo clientes. &quot;Funcionar bem&quot; significa: texto legível sem precisar dar zoom, botões grandes o suficiente para tocar com o dedo, formulários fáceis de preencher e menu de navegação adaptado. Teste o site no seu próprio celular e peça para colegas testarem nos deles também.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      7. SEO básico para implementar desde o primeiro dia
    </h2>

    <p className="text-gray-700 leading-relaxed">
      SEO (Search Engine Optimization) é o que faz o seu site aparecer nos resultados do Google quando alguém pesquisa por um advogado na sua área. Não precisa ser especialista em SEO, mas alguns fundamentos fazem uma diferença enorme:
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Pesquisa de palavras-chave
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Descubra o que seus potenciais clientes pesquisam no Google. Ferramentas como Google Keyword Planner, Ubersuggest ou até o próprio campo de busca do Google (veja as sugestões automáticas) ajudam. Se você é advogado de família em Belo Horizonte, termos como &quot;advogado de família BH&quot;, &quot;como pedir divórcio em BH&quot; ou &quot;pensão alimentícia como funciona&quot; são exemplos do que pesquisar.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Títulos e meta descriptions
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Cada página do site precisa ter um título (title tag) e uma descrição (meta description) únicos. O título aparece na aba do navegador e nos resultados do Google. A descrição aparece logo abaixo do título nos resultados de busca. Ambos devem conter a palavra-chave principal da página e ser escritos de forma que a pessoa queira clicar.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Conteúdo otimizado
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Em cada página, use a palavra-chave principal no título (H1), em pelo menos um subtítulo (H2), no primeiro parágrafo e ao longo do texto de forma natural. Não force a repetição — o Google é inteligente o suficiente para entender sinônimos e variações. O mais importante é que o conteúdo seja útil e responda à dúvida de quem pesquisou.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Google Meu Negócio
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Não é exatamente SEO do site, mas é indispensável. Cadastre seu escritório no Google Meu Negócio (hoje chamado de Perfil da Empresa no Google). Isso faz seu escritório aparecer no mapa e nos resultados locais quando alguém pesquisa &quot;advogado perto de mim&quot; ou &quot;advogado trabalhista em [cidade]&quot;. Preencha todas as informações, adicione fotos reais e incentive clientes satisfeitos a deixarem avaliações.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Links internos
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Conecte as páginas do seu site entre si. Se você tem um artigo no blog sobre &quot;como funciona o inventário extrajudicial&quot;, coloque um link para a sua página de área de atuação em direito sucessório. Isso ajuda o Google a entender a estrutura do site e mantém o visitante navegando por mais tempo.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      8. Depois da publicação: manutenção, atualizações e análise
    </h2>

    <p className="text-gray-700 leading-relaxed">
      Publicar o site é só o começo. Um site abandonado perde relevância no Google e passa uma impressão ruim para quem visita. Veja o que fazer depois do lançamento:
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Publique conteúdo regularmente
    </h3>

    <p className="text-gray-700 leading-relaxed">
      O blog precisa de novos artigos com frequência. Não precisa ser todo dia — um ou dois artigos por mês já fazem diferença. O importante é a consistência. Escolha um dia da semana ou do mês para publicar e mantenha esse ritmo. Cada novo artigo é uma nova oportunidade de aparecer no Google para um termo diferente.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Mantenha as informações atualizadas
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Mudou de endereço? Atualize o site. Mudou o número do WhatsApp? Atualize. Adicionou uma nova área de atuação? Crie a página. Parece trivial, mas é impressionante quantos sites de advocacia têm informações desatualizadas. Isso gera desconfiança e pode fazer você perder contatos que tentaram um número que não funciona mais.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Acompanhe os números
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Instale o Google Analytics e o Google Search Console no site desde o primeiro dia. São gratuitos e mostram informações valiosas:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Google Analytics:</strong> quantas pessoas visitam seu site, de onde vêm, quais páginas mais acessam e quanto tempo ficam</li>
      <li><strong className="text-[#162a2a]">Google Search Console:</strong> para quais termos seu site aparece no Google, em que posição e quantos cliques recebe</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Com esses dados, você descobre o que está funcionando e onde investir mais esforço. Se um artigo do blog está recebendo muitos acessos, talvez valha a pena criar conteúdos relacionados. Se uma página importante não está rankeando, pode precisar de mais conteúdo ou otimização.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">
      Segurança e backups
    </h3>

    <p className="text-gray-700 leading-relaxed">
      Mantenha a plataforma do site e todos os plugins atualizados. Atualizações corrigem falhas de segurança. Configure backups automáticos — pelo menos semanais. Se algo der errado (um plugin corrompido, um ataque ou um erro humano), você consegue restaurar o site rapidamente. A maioria das hospedagens oferece backup automático, mas verifique se está ativado.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      9. Erros comuns que advogados cometem ao criar um site
    </h2>

    <p className="text-gray-700 leading-relaxed">
      Antes de encerrar, vale listar os erros mais frequentes para que você não caia neles:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Linguagem excessivamente jurídica:</strong> seu site não é uma petição. O visitante é leigo. Escreva de forma que sua mãe entenderia.</li>
      <li><strong className="text-[#162a2a]">Não ter chamada para ação:</strong> cada página precisa dizer ao visitante o que fazer em seguida. &quot;Entre em contato pelo WhatsApp&quot;, &quot;Agende uma consulta&quot;, &quot;Leia mais sobre essa área&quot;. Sem isso, o visitante lê e sai.</li>
      <li><strong className="text-[#162a2a]">Site bonito mas lento:</strong> animações elaboradas e imagens em alta resolução não otimizadas deixam o site pesado. A beleza não compensa se o visitante não espera o carregamento.</li>
      <li><strong className="text-[#162a2a]">Ignorar o celular:</strong> testar o site apenas no computador é um erro. Abra no celular, navegue por todas as páginas e preencha o formulário de contato. Essa é a experiência da maioria dos seus visitantes.</li>
      <li><strong className="text-[#162a2a]">Copiar o site do concorrente:</strong> além de antiético, o Google penaliza conteúdo duplicado. Seu site precisa ter conteúdo original que reflita a sua prática, a sua experiência e o seu diferencial.</li>
      <li><strong className="text-[#162a2a]">Criar o site e esquecer:</strong> um site sem atualizações há dois anos transmite abandono. Mesmo pequenas atualizações — um novo artigo, uma foto atualizada — mantêm o site vivo.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">
      Conclusão
    </h2>

    <p className="text-gray-700 leading-relaxed">
      Criar um site para advogados não é um bicho de sete cabeças, mas exige atenção a detalhes que fazem diferença entre um site que gera clientes e um que só existe. O planejamento define a direção. O conteúdo certo atrai o público certo. A parte técnica garante que tudo funcione sem frustrações. E a manutenção contínua mantém o site relevante ao longo do tempo.
    </p>

    <p className="text-gray-700 leading-relaxed">
      O passo mais importante é o primeiro: decidir que você vai ter um site profissional e dedicar o tempo necessário para fazê-lo direito. Não precisa ser perfeito no lançamento — pode (e deve) melhorar com o tempo. Mas precisa existir, precisa estar acessível e precisa comunicar com clareza quem você é e como pode ajudar.
    </p>

    <p className="text-gray-700 leading-relaxed">
      A advocacia está cada vez mais digital. Os escritórios que entenderam isso cedo já estão colhendo os frutos. O melhor momento para criar o seu site era ontem. O segundo melhor momento é agora.
    </p>
  </>
))
