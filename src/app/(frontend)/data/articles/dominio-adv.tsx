import { registerArticle } from './registry'

registerArticle('dominio-adv', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      O domínio .adv.br é a extensão de internet exclusiva para advogados e escritórios de advocacia no Brasil. Diferente do .com.br, que qualquer pessoa ou empresa pode registrar, o .adv.br exige comprovação de registro ativo na Ordem dos Advogados do Brasil. Essa exclusividade faz do .adv.br uma ferramenta de credibilidade e identidade profissional no ambiente digital.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Neste artigo, vamos explicar em detalhes o que é o domínio .adv.br, como funciona o processo de registro, quais são os requisitos da OAB, como ele se compara ao .com.br e como configurar o DNS para colocar seu site no ar.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">O que é o domínio .adv.br</h2>

    <p className="text-gray-700 leading-relaxed">
      Domínio é o endereço que as pessoas digitam no navegador para acessar um site. Por exemplo: "escritoriosilva.adv.br". A extensão .adv.br é uma das categorias de domínio restrito gerenciadas pelo Registro.br — o órgão responsável pelo registro de domínios no Brasil, vinculado ao NIC.br.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Domínios restritos existem para diversas profissões e categorias: .med.br para médicos, .eng.br para engenheiros, .adv.br para advogados. A restrição garante que apenas profissionais habilitados possam usar a extensão, o que confere ao domínio uma camada adicional de legitimidade.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Na prática, quando um visitante vê um endereço terminado em .adv.br, ele sabe imediatamente que se trata de um advogado ou escritório de advocacia com registro ativo na OAB. Essa identificação instantânea é um diferencial que o .com.br não oferece.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Requisitos para registrar um domínio .adv.br</h2>

    <p className="text-gray-700 leading-relaxed">
      O registro de um domínio .adv.br tem requisitos específicos que precisam ser cumpridos. Diferente do .com.br, onde basta ter um CPF ou CNPJ, o .adv.br exige validação junto à OAB.
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Pessoa física (advogado):</strong> é necessário ter registro ativo na OAB. O número de inscrição será validado durante o processo de registro do domínio.</li>
      <li><strong className="text-[#162a2a]">Pessoa jurídica (escritório):</strong> sociedades de advogados registradas na OAB podem registrar domínios .adv.br usando o CNPJ e o número de registro da sociedade na seccional.</li>
      <li><strong className="text-[#162a2a]">Documentação:</strong> o Registro.br pode solicitar documentos complementares para validar a titularidade, como comprovante de inscrição na OAB.</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Advogados com inscrição suspensa, cancelada ou que estejam em situação irregular perante a OAB não conseguem completar o registro. A validação é feita eletronicamente junto aos cadastros da Ordem.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Como registrar o domínio no Registro.br</h2>

    <p className="text-gray-700 leading-relaxed">
      O processo de registro é feito diretamente no site do Registro.br (registro.br). Veja o passo a passo completo:
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Passo 1: Criar uma conta no Registro.br</h3>

    <p className="text-gray-700 leading-relaxed">
      Acesse o site do Registro.br e crie uma conta usando seu CPF (para pessoa física) ou CNPJ (para sociedade de advogados). Preencha os dados cadastrais completos, incluindo endereço, telefone e e-mail válidos. O e-mail será usado para confirmações e notificações sobre o domínio.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Passo 2: Verificar disponibilidade do domínio</h3>

    <p className="text-gray-700 leading-relaxed">
      Na página inicial do Registro.br, use a ferramenta de busca para verificar se o domínio desejado está disponível. Digite o nome que deseja — por exemplo, "escritoriosilva" — e selecione a extensão .adv.br. O sistema informará se o domínio está livre para registro ou se já foi registrado por outra pessoa.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Ao escolher o nome do domínio, opte por algo curto, fácil de digitar e de memorizar. Evite hífens, números e abreviações que possam gerar confusão. O nome do escritório ou do advogado principal costuma ser a melhor opção.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Passo 3: Iniciar o registro e validar a inscrição na OAB</h3>

    <p className="text-gray-700 leading-relaxed">
      Ao solicitar o registro de um domínio .adv.br, o sistema pedirá o número de inscrição na OAB e a seccional. Essa informação será verificada automaticamente. Se os dados estiverem corretos e a inscrição estiver ativa, o registro seguirá normalmente. Caso contrário, o sistema bloqueará a solicitação.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Passo 4: Realizar o pagamento</h3>

    <p className="text-gray-700 leading-relaxed">
      O registro de domínio .adv.br tem o mesmo custo de um domínio .com.br no Registro.br. O valor anual é de R$ 40,00 (valor de referência, sujeito a atualização). O pagamento pode ser feito por boleto bancário ou cartão de crédito. O domínio é registrado por um período mínimo de um ano, com renovação anual.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Passo 5: Configurar o DNS</h3>

    <p className="text-gray-700 leading-relaxed">
      Após o registro, é necessário configurar os servidores DNS para que o domínio aponte para o servidor onde o site está hospedado. Esse passo é técnico e será detalhado mais adiante neste artigo.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">.adv.br versus .com.br: qual escolher</h2>

    <p className="text-gray-700 leading-relaxed">
      Essa é uma das dúvidas mais comuns entre advogados que vão registrar um domínio. Ambas as extensões são válidas e funcionais, mas cada uma tem suas particularidades.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Argumentos a favor do .adv.br</h3>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Credibilidade profissional:</strong> a extensão identifica imediatamente que se trata de um advogado ou escritório com registro na OAB.</li>
      <li><strong className="text-[#162a2a]">Exclusividade:</strong> apenas advogados podem registrar, o que evita que terceiros usem nomes semelhantes em domínios genéricos.</li>
      <li><strong className="text-[#162a2a]">Alinhamento com a profissão:</strong> demonstra identidade e compromisso com a advocacia como profissão regulamentada.</li>
      <li><strong className="text-[#162a2a]">Diferenciação:</strong> em um mar de sites .com.br, o .adv.br se destaca visualmente e comunica profissionalismo.</li>
    </ul>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Argumentos a favor do .com.br</h3>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Familiaridade:</strong> o público em geral está mais acostumado com endereços .com.br. Algumas pessoas podem estranhar a extensão .adv.br ou não saber digitá-la corretamente.</li>
      <li><strong className="text-[#162a2a]">Flexibilidade:</strong> se o escritório eventualmente expandir para áreas além da advocacia pura — consultoria empresarial, por exemplo — o .com.br é mais versátil.</li>
      <li><strong className="text-[#162a2a]">Facilidade de registro:</strong> não exige validação na OAB, o que torna o processo mais rápido e simples.</li>
    </ul>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">A abordagem ideal</h3>

    <p className="text-gray-700 leading-relaxed">
      Muitos escritórios optam por registrar ambas as extensões. O .adv.br é usado como domínio principal do site, enquanto o .com.br é registrado como proteção de marca e redirecionado para o domínio principal. Assim, se alguém digitar "escritoriosilva.com.br", será automaticamente direcionado para "escritoriosilva.adv.br". Isso cobre todos os cenários e protege a identidade digital do escritório.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Configuração de DNS: como conectar o domínio ao site</h2>

    <p className="text-gray-700 leading-relaxed">
      Registrar o domínio é apenas o primeiro passo. Para que ele funcione e exiba seu site quando alguém digitar o endereço no navegador, é preciso configurar o DNS (Domain Name System). O DNS é o sistema que traduz o nome do domínio em um endereço IP — o número que identifica o servidor onde o site está hospedado.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Opção 1: Usar o DNS do Registro.br</h3>

    <p className="text-gray-700 leading-relaxed">
      O Registro.br oferece um serviço de DNS gratuito. No painel de controle do domínio, você pode configurar os registros DNS manualmente. Os registros mais comuns para apontar o domínio para um site são:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Registro A:</strong> aponta o domínio para um endereço IPv4. Exemplo: escritoriosilva.adv.br → 192.168.1.100.</li>
      <li><strong className="text-[#162a2a]">Registro CNAME:</strong> aponta um subdomínio para outro domínio. Usado frequentemente para apontar "www" para o domínio principal.</li>
      <li><strong className="text-[#162a2a]">Registro MX:</strong> configura o servidor de e-mail. Necessário se você quer usar e-mails com o domínio (contato@escritoriosilva.adv.br).</li>
    </ul>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Opção 2: Usar o DNS de terceiros</h3>

    <p className="text-gray-700 leading-relaxed">
      Serviços como Cloudflare, Google Cloud DNS ou o próprio provedor de hospedagem oferecem servidores DNS alternativos. Para usá-los, basta alterar os nameservers no painel do Registro.br, substituindo os servidores padrão pelos fornecidos pelo serviço escolhido. Essa opção é comum quando o site está hospedado em plataformas como Vercel, Netlify ou servidores cloud.
    </p>

    <p className="text-gray-700 leading-relaxed">
      A propagação do DNS — o tempo que leva para a configuração se espalhar por todos os servidores da internet — pode levar de algumas horas até 48 horas. Durante esse período, o site pode ficar intermitentemente acessível. Isso é normal e temporário.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">E-mail profissional com domínio .adv.br</h2>

    <p className="text-gray-700 leading-relaxed">
      Além do site, o domínio .adv.br permite criar endereços de e-mail profissionais como contato@escritoriosilva.adv.br ou joao@escritoriosilva.adv.br. Usar um e-mail com domínio próprio transmite muito mais profissionalismo do que endereços genéricos como gmail.com ou hotmail.com.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Para configurar o e-mail profissional, você pode usar serviços como Google Workspace, Microsoft 365 ou Zoho Mail. Cada um oferece planos com diferentes capacidades de armazenamento e funcionalidades. A configuração envolve adicionar registros MX e TXT no DNS do domínio, seguindo as instruções do provedor de e-mail escolhido.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Cuidados com a renovação e manutenção do domínio</h2>

    <p className="text-gray-700 leading-relaxed">
      Domínios precisam ser renovados anualmente. Se o pagamento não for efetuado até a data de vencimento, o domínio entra em período de expiração e, após um prazo, é liberado para registro por qualquer outra pessoa. Perder um domínio pode ser desastroso — alguém pode registrá-lo e você perde o endereço do seu site, os e-mails profissionais e todo o histórico de SEO associado.
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Ative a renovação automática:</strong> o Registro.br oferece a opção de renovação automática com cartão de crédito. Ative essa funcionalidade para evitar esquecimentos.</li>
      <li><strong className="text-[#162a2a]">Mantenha os dados de contato atualizados:</strong> e-mail e telefone no cadastro do Registro.br devem estar sempre atualizados para receber avisos de vencimento e notificações importantes.</li>
      <li><strong className="text-[#162a2a]">Registre por múltiplos anos:</strong> é possível pagar o registro por dois, três ou mais anos de uma vez, reduzindo o risco de perder o domínio por falta de renovação.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Considerações finais</h2>

    <p className="text-gray-700 leading-relaxed">
      O domínio .adv.br é mais do que um endereço na internet — é uma declaração de identidade profissional. Ele comunica imediatamente que o site pertence a um advogado ou escritório regularmente inscrito na OAB, o que reforça a credibilidade perante clientes e colegas de profissão.
    </p>

    <p className="text-gray-700 leading-relaxed">
      O processo de registro é simples e acessível. Com uma conta no Registro.br, inscrição ativa na OAB e R$ 40 por ano, qualquer advogado pode ter um domínio profissional funcionando em poucas horas. Combinado com um <a href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors">site para advogado</a> bem construído e um e-mail profissional, o .adv.br é o alicerce de uma presença digital séria e confiável na advocacia.
    </p>
  </>
))
