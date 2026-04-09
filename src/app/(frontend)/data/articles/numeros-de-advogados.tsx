import { registerArticle } from './registry'

registerArticle('numeros-de-advogados', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      O Brasil tem mais advogados do que a maioria dos países do mundo — e esse número continua crescendo. Entender o panorama quantitativo da advocacia brasileira ajuda profissionais a tomar decisões estratégicas sobre carreira, especialização e posicionamento de mercado. Aqui estão os números que todo advogado deveria conhecer.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Quantos advogados existem no Brasil</h2>

    <p className="text-gray-700 leading-relaxed">
      Segundo os dados mais recentes da OAB, o Brasil ultrapassou a marca de <strong className="text-[#162a2a]">1,3 milhão de advogados</strong> com inscrição ativa. Esse número coloca o país entre os que mais têm advogados per capita no mundo, com aproximadamente um advogado para cada 160 habitantes.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Para colocar em perspectiva: os Estados Unidos, com uma população 50% maior que a brasileira, têm cerca de 1,3 milhão de advogados. A Alemanha, quarta maior economia do mundo, tem aproximadamente 170 mil. O Japão, com 125 milhões de habitantes, tem cerca de 45 mil. O Brasil concentra uma parcela desproporcional de profissionais do direito em relação à sua população.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Distribuição por estado</h2>

    <p className="text-gray-700 leading-relaxed">
      A distribuição de advogados pelo território brasileiro é extremamente desigual. São Paulo lidera com folga, concentrando mais de 300 mil inscritos ativos — quase um quarto do total nacional. Rio de Janeiro vem em segundo, com cerca de 180 mil, seguido por Minas Gerais, com aproximadamente 130 mil.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Na outra ponta, estados como Roraima, Amapá e Acre têm menos de 5 mil advogados cada. Isso cria duas realidades muito diferentes: nos grandes centros, a competição é acirrada e a saturação do mercado é um problema real. No interior e em estados menores, ainda há carência de profissionais em diversas áreas.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Crescimento ao longo dos anos</h2>

    <p className="text-gray-700 leading-relaxed">
      O número de advogados no Brasil cresceu de forma acelerada nas últimas duas décadas. Em 2000, havia cerca de 400 mil advogados inscritos na OAB. Em 2010, esse número já havia dobrado para 800 mil. Em 2020, ultrapassou 1,2 milhão. O crescimento é impulsionado principalmente pela expansão das faculdades de direito — o Brasil tem mais de 1.800 cursos de direito autorizados pelo MEC, mais do que todo o restante do mundo somado.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Esse crescimento, porém, não acompanha a demanda do mercado. O resultado é uma competição cada vez mais intensa, especialmente nas áreas tradicionais como cível e trabalhista nos grandes centros urbanos.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">O Exame da OAB como filtro</h2>

    <p className="text-gray-700 leading-relaxed">
      O Exame de Ordem funciona como o principal filtro de entrada na profissão. Historicamente, a taxa de aprovação gira entre 15% e 25% por edição. Isso significa que, a cada aplicação, milhares de bacharéis ficam de fora. Ainda assim, o volume de aprovados continua alimentando o crescimento da categoria.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Nos últimos anos, foram realizados cerca de três exames por ano, com aproximadamente 100 a 150 mil inscritos em cada edição. Mesmo com taxas de aprovação relativamente baixas, o fluxo de novos advogados permanece significativo — estimado entre 50 e 80 mil novos inscritos por ano.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Perfil demográfico da advocacia brasileira</h2>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Gênero</h3>

    <p className="text-gray-700 leading-relaxed">
      As mulheres já são maioria nas faculdades de direito e vêm aumentando sua participação na advocacia. Dados recentes indicam que aproximadamente 49% dos advogados com inscrição ativa são mulheres — uma paridade que era inimaginável há 30 anos. Nas faixas etárias mais jovens (até 35 anos), as mulheres já são maioria. A questão que permanece é a representatividade em posições de liderança: sócias de grandes escritórios e desembargadoras ainda são proporcionalmente poucas.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Faixa etária</h3>

    <p className="text-gray-700 leading-relaxed">
      A advocacia brasileira é jovem. A maioria dos inscritos tem entre 25 e 40 anos. Isso reflete o boom de faculdades de direito a partir dos anos 2000 e a expansão do acesso ao ensino superior. Essa concentração em faixas etárias mais jovens intensifica a competição inicial, pois muitos profissionais entram no mercado ao mesmo tempo.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Áreas de atuação mais comuns</h2>

    <p className="text-gray-700 leading-relaxed">
      As áreas tradicionais continuam concentrando a maioria dos profissionais:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Direito civil:</strong> a área mais ampla, incluindo contratos, responsabilidade civil, família e sucessões.</li>
      <li><strong className="text-[#162a2a]">Direito trabalhista:</strong> historicamente uma das mais procuradas, embora a reforma trabalhista de 2017 tenha reduzido o volume de ações.</li>
      <li><strong className="text-[#162a2a]">Direito do consumidor:</strong> impulsionado pelo crescimento do comércio eletrônico e das relações de consumo.</li>
      <li><strong className="text-[#162a2a]">Direito penal:</strong> área com demanda constante, especialmente na advocacia criminal autônoma.</li>
      <li><strong className="text-[#162a2a]">Direito tributário:</strong> uma das áreas com melhor remuneração média, especialmente no consultivo empresarial.</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Áreas em crescimento incluem direito digital (LGPD, crimes cibernéticos), direito ambiental (ESG e compliance), direito da saúde e direito esportivo. Profissionais que se especializam em nichos menos saturados tendem a encontrar menos competição e melhores oportunidades de posicionamento.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Remuneração: o que os números mostram</h2>

    <p className="text-gray-700 leading-relaxed">
      A remuneração na advocacia varia enormemente. Pesquisas salariais indicam que o piso salarial sugerido pelas seccionais da OAB gira em torno de R$ 4.000 a R$ 5.500 para advogados empregados em início de carreira, variando por estado. Na prática, muitos advogados autônomos nos primeiros anos ganham abaixo disso.
    </p>

    <p className="text-gray-700 leading-relaxed">
      No outro extremo, sócios de grandes escritórios e advogados especializados em áreas como M&A, arbitragem e tributário empresarial podem ter rendimentos mensais de seis dígitos. A mediana, porém, está muito mais próxima do piso do que do topo. Dados do IBGE indicam que a renda mediana de advogados no Brasil fica em torno de R$ 5.000 a R$ 7.000 mensais.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">O que esses números significam para sua carreira</h2>

    <p className="text-gray-700 leading-relaxed">
      Os dados apontam para conclusões práticas. Primeiro: a generalidade não é mais viável nos grandes centros. Com mais de um milhão de advogados, ser "advogado de tudo" significa competir com todos. A especialização é o caminho para se diferenciar e construir autoridade.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Segundo: a presença digital deixou de ser opcional. Em um mercado com tanta oferta, o advogado que não é encontrado na internet simplesmente não existe para uma parcela crescente de potenciais clientes. Um <a href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors">site para advogado iniciante</a>, perfil em redes sociais e produção de conteúdo são ferramentas de sobrevivência.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Terceiro: há oportunidades fora do eixo tradicional. Enquanto São Paulo e Rio de Janeiro estão saturados em áreas como cível e trabalhista, cidades de médio porte e estados do Norte e Centro-Oeste ainda têm lacunas importantes. Advogados dispostos a olhar para esses mercados podem encontrar espaço que simplesmente não existe mais nas capitais.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Os números do mercado jurídico brasileiro não são animadores à primeira vista, mas contam apenas parte da história. O mercado é grande, mas também é diverso. As oportunidades existem — estão nos nichos, nas novas tecnologias, nos mercados menos explorados e na capacidade de cada profissional de se posicionar de forma estratégica.
    </p>
  </>
))
