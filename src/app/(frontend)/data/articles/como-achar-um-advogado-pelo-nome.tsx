import { registerArticle } from './registry'

registerArticle('como-achar-um-advogado-pelo-nome', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      Existem diversas situações em que alguém precisa encontrar um advogado específico pelo nome: verificar se um profissional realmente possui registro na OAB, localizar um advogado indicado por alguém, conferir a situação cadastral de quem já foi contratado ou encontrar formas de contato de um profissional. Felizmente, existem ferramentas gratuitas e acessíveis que tornam essa busca simples e rápida.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Pesquisa pelo Cadastro Nacional dos Advogados (CNA)</h2>

    <p className="text-gray-700 leading-relaxed">
      O Cadastro Nacional dos Advogados é a ferramenta oficial da OAB para consulta de profissionais inscritos. Mantido pelo Conselho Federal da OAB, o CNA reúne informações de todos os advogados registrados no Brasil, independentemente do estado de inscrição.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Como usar o CNA</h3>

    <p className="text-gray-700 leading-relaxed">
      O acesso é feito pelo endereço cna.oab.org.br. A pesquisa pode ser realizada de duas formas:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Por nome:</strong> digite o nome completo ou parcial do advogado. O sistema retorna uma lista de profissionais que correspondem à busca, com nome, seccional e número de inscrição.</li>
      <li><strong className="text-[#162a2a]">Por número de inscrição:</strong> se você já tem o número da OAB do advogado, pode pesquisar diretamente. Selecione a seccional (estado) e insira o número.</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      O resultado mostra as seguintes informações:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Nome completo do advogado.</li>
      <li>Número de inscrição na OAB.</li>
      <li>Seccional (estado) de inscrição.</li>
      <li>Tipo de inscrição (advogado, estagiário, suplementar).</li>
      <li>Situação cadastral (regular, suspenso, cancelado, licenciado).</li>
    </ul>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">O que cada situação cadastral significa</h3>

    <p className="text-gray-700 leading-relaxed">
      A situação cadastral é a informação mais importante da consulta. Veja o que cada status indica:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Regular:</strong> o advogado está com inscrição ativa e pode exercer a profissão normalmente.</li>
      <li><strong className="text-[#162a2a]">Suspenso:</strong> o advogado está temporariamente impedido de exercer a advocacia. A suspensão pode ser por inadimplência com a OAB ou por sanção disciplinar.</li>
      <li><strong className="text-[#162a2a]">Cancelado:</strong> a inscrição foi definitivamente cancelada. O profissional não pode exercer a advocacia.</li>
      <li><strong className="text-[#162a2a]">Licenciado:</strong> o advogado solicitou licença voluntária, geralmente por ter assumido cargo incompatível com a advocacia (como cargo público).</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Se a situação cadastral não for "regular", o advogado não pode atuar em processos judiciais ou prestar serviços advocatícios. Contratar um profissional nessa situação pode resultar em nulidade de atos processuais e prejuízo ao cliente.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Sites das seccionais da OAB</h2>

    <p className="text-gray-700 leading-relaxed">
      Além do CNA federal, cada seccional da OAB mantém seu próprio sistema de consulta, que pode oferecer informações adicionais. Alguns sites estaduais permitem pesquisar por cidade, área de atuação ou especialidade, facilitando a busca quando você não tem o nome completo do advogado.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Os endereços seguem o padrão oab[sigla do estado].org.br — por exemplo, oabsp.org.br para São Paulo, oabrj.org.br para Rio de Janeiro e oabmg.org.br para Minas Gerais. A seção de consulta ao quadro de advogados geralmente está disponível na página inicial.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Pesquisa no Google</h2>

    <p className="text-gray-700 leading-relaxed">
      O Google é uma ferramenta complementar poderosa para encontrar informações sobre um advogado. Uma busca pelo nome completo do profissional pode revelar:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Site profissional:</strong> muitos advogados mantêm um <a href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors">site para advogados e escritórios</a> com informações sobre áreas de atuação, formação e contato.</li>
      <li><strong className="text-[#162a2a]">Perfil no Google Meu Negócio:</strong> com endereço, telefone, horário de funcionamento e avaliações de clientes.</li>
      <li><strong className="text-[#162a2a]">Perfis em redes sociais:</strong> LinkedIn, Instagram e outras plataformas onde o advogado mantém presença profissional.</li>
      <li><strong className="text-[#162a2a]">Artigos e publicações:</strong> textos, entrevistas e participações em eventos que demonstram a atuação do profissional.</li>
      <li><strong className="text-[#162a2a]">Menções em processos públicos:</strong> em alguns tribunais, é possível encontrar o nome do advogado associado a processos por meio de buscas públicas.</li>
    </ul>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Dicas para uma busca eficiente no Google</h3>

    <p className="text-gray-700 leading-relaxed">
      Para resultados mais precisos, use aspas ao pesquisar o nome completo: "João Silva Santos advogado". Adicione a cidade ou o estado para refinar: "João Silva Santos advogado São Paulo". Se souber o número da OAB, pesquise "OAB/SP 123456" para encontrar menções ao profissional em decisões judiciais e publicações.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">LinkedIn</h2>

    <p className="text-gray-700 leading-relaxed">
      O LinkedIn é uma das melhores fontes para verificar a trajetória profissional de um advogado. O perfil geralmente contém formação acadêmica, experiências profissionais, publicações e recomendações de colegas e clientes.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Para pesquisar, basta digitar o nome do advogado na barra de busca do LinkedIn e filtrar por "Pessoas". Os resultados mostram foto, título profissional, localização e conexões em comum — informações que ajudam a confirmar se é a pessoa certa.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Consulta em tribunais</h2>

    <p className="text-gray-700 leading-relaxed">
      Os sites dos tribunais brasileiros permitem consultas processuais que podem revelar a atuação de um advogado específico. Nos sistemas do TJ (Tribunal de Justiça), TRT (Tribunal Regional do Trabalho) e TRF (Tribunal Regional Federal), é possível pesquisar processos pelo nome do advogado ou pelo número da OAB.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Essa consulta é útil para verificar se o advogado realmente tem experiência prática na área em que diz atuar. Ao encontrar processos em que ele participou, é possível verificar o tipo de caso, o tribunal e, em alguns casos, o resultado.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Os principais sistemas de consulta processual são:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">e-SAJ:</strong> utilizado pelos Tribunais de Justiça de vários estados, incluindo São Paulo.</li>
      <li><strong className="text-[#162a2a]">PJe:</strong> sistema unificado adotado por diversos tribunais em todo o país.</li>
      <li><strong className="text-[#162a2a]">JusBrasil:</strong> plataforma privada que agrega informações de processos de diferentes tribunais e permite busca por nome de advogado.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Plataformas de avaliação</h2>

    <p className="text-gray-700 leading-relaxed">
      Além do Google Meu Negócio, existem plataformas específicas onde advogados são avaliados por clientes. O JusBrasil, por exemplo, permite que usuários avaliem profissionais com quem tiveram experiência. Essas avaliações — embora devam ser lidas com senso crítico — oferecem uma perspectiva sobre a experiência real de clientes anteriores.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Quando o advogado não é encontrado</h2>

    <p className="text-gray-700 leading-relaxed">
      Se a busca no CNA da OAB não retorna resultados para o nome informado, existem algumas possibilidades:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Erro na grafia do nome:</strong> tente variações do nome ou busque apenas pelo sobrenome.</li>
      <li><strong className="text-[#162a2a]">Inscrição em outra seccional:</strong> o advogado pode estar inscrito em um estado diferente do que você supõe. Faça a busca sem filtrar por estado.</li>
      <li><strong className="text-[#162a2a]">Nome de solteira/casada:</strong> o advogado pode ter alterado o nome após casamento ou divórcio.</li>
      <li><strong className="text-[#162a2a]">A pessoa não é advogado:</strong> se nenhuma busca retorna resultado, considere seriamente a possibilidade de que a pessoa não possui inscrição na OAB e não pode exercer a advocacia.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Verificação como proteção</h2>

    <p className="text-gray-700 leading-relaxed">
      Pesquisar um advogado pelo nome antes de contratá-lo não é desconfiança — é prudência. Golpes envolvendo falsos advogados existem e podem causar prejuízos financeiros e processuais graves. A verificação no CNA da OAB leva menos de um minuto e garante que o profissional está habilitado para exercer a profissão.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Além da verificação básica, a pesquisa complementar no Google, LinkedIn e tribunais oferece uma visão mais completa sobre a trajetória, reputação e experiência do advogado. Essas informações ajudam a tomar uma decisão mais segura e informada na hora de confiar a alguém questões que impactam diretamente a sua vida.
    </p>
  </>
))
