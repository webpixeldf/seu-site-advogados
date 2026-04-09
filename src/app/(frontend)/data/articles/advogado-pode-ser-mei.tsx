import { registerArticle } from './registry'

registerArticle('advogado-pode-ser-mei', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      Essa é uma das perguntas mais frequentes entre advogados que estão começando a carreira ou que atuam de forma autônoma e buscam uma forma simplificada de formalização. A resposta direta é: não, advogado não pode ser MEI. Mas existem alternativas viáveis que oferecem benefícios semelhantes. Neste artigo, explicamos o motivo da restrição e quais caminhos o advogado tem para se formalizar.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Por que advogado não pode ser MEI</h2>

    <p className="text-gray-700 leading-relaxed">
      O MEI (Microempreendedor Individual) foi criado pela Lei Complementar 128/2008 para formalizar trabalhadores informais e pequenos empreendedores. No entanto, a legislação exclui expressamente as profissões regulamentadas por conselhos de classe — e a advocacia é regulamentada pela OAB.
    </p>

    <p className="text-gray-700 leading-relaxed">
      A justificativa legal é que profissões regulamentadas possuem regime próprio de exercício e tributação, incompatível com o modelo simplificado do MEI. O Estatuto da Advocacia (Lei 8.906/1994) estabelece regras específicas sobre o exercício da profissão, incluindo a natureza da atividade, que é considerada intelectual e pessoal — características que a Lei Complementar não contempla no regime do MEI.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Além da advocacia, outras profissões regulamentadas como medicina, engenharia, contabilidade, psicologia e odontologia também são impedidas de se enquadrar como MEI.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">As alternativas disponíveis para advogados</h2>

    <p className="text-gray-700 leading-relaxed">
      O fato de não poder ser MEI não significa que o advogado não tenha opções de formalização. Existem três caminhos principais, cada um com suas vantagens e desvantagens.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">1. Sociedade Unipessoal de Advocacia</h3>

    <p className="text-gray-700 leading-relaxed">
      A Sociedade Unipessoal de Advocacia foi instituída pela Lei 13.247/2016 e é, para muitos advogados, a melhor alternativa ao MEI. Ela permite que um único advogado constitua uma pessoa jurídica, sem a necessidade de sócio.
    </p>

    <p className="text-gray-700 leading-relaxed">
      As principais vantagens são:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Tributação sobre o ISS com alíquota fixa:</strong> em muitos municípios, a sociedade de advocacia paga ISS em valor fixo por profissional, em vez de percentual sobre o faturamento. Dependendo da receita, isso gera economia significativa.</li>
      <li><strong className="text-[#162a2a]">Opção pelo Simples Nacional:</strong> a sociedade unipessoal pode aderir ao Simples Nacional, com alíquotas iniciais a partir de 4,5% sobre o faturamento (Anexo IV).</li>
      <li><strong className="text-[#162a2a]">Separação patrimonial:</strong> como pessoa jurídica, o patrimônio pessoal do advogado fica mais protegido em relação às obrigações da sociedade.</li>
      <li><strong className="text-[#162a2a]">Emissão de nota fiscal:</strong> facilita a contratação por empresas que exigem nota fiscal de prestadores de serviço.</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      O registro da sociedade unipessoal é feito na OAB — e não na Junta Comercial, como ocorre com empresas comuns. Isso é uma particularidade importante da advocacia.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">2. Sociedade de Advocacia (com sócios)</h3>

    <p className="text-gray-700 leading-relaxed">
      A sociedade de advocacia tradicional exige pelo menos dois sócios, ambos advogados. É a opção natural para profissionais que desejam se associar para compartilhar custos, clientes e especialidades complementares.
    </p>

    <p className="text-gray-700 leading-relaxed">
      As vantagens tributárias são semelhantes às da sociedade unipessoal, com a possibilidade adicional de diluir custos fixos entre os sócios. A desvantagem é a necessidade de alinhamento entre os sócios em questões como divisão de receitas, gestão do escritório e estratégia de crescimento.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">3. Atuação como autônomo</h3>

    <p className="text-gray-700 leading-relaxed">
      O advogado pode atuar como profissional autônomo, sem constituir pessoa jurídica. Nesse caso, recebe honorários como pessoa física e recolhe impostos de acordo com a tabela progressiva do Imposto de Renda, que pode chegar a 27,5%.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Além do IR, o autônomo deve contribuir para o INSS como contribuinte individual (20% sobre o rendimento, limitado ao teto previdenciário) e pode estar sujeito ao ISS do município.
    </p>

    <p className="text-gray-700 leading-relaxed">
      A atuação como autônomo é mais simples administrativamente — não exige contabilidade formal nem registro de empresa —, mas a carga tributária tende a ser significativamente maior do que nas opções de pessoa jurídica, especialmente para quem fatura acima de R$ 5.000 mensais.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Comparativo tributário na prática</h2>

    <p className="text-gray-700 leading-relaxed">
      Para ilustrar a diferença, considere um advogado com faturamento mensal de R$ 10.000:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Como autônomo (pessoa física):</strong> pode pagar até 27,5% de IR sobre o rendimento, mais INSS de 20% até o teto, mais ISS. A carga total pode ultrapassar 30% do faturamento.</li>
      <li><strong className="text-[#162a2a]">Como sociedade unipessoal no Simples Nacional:</strong> a alíquota inicial no Anexo IV é de 4,5% sobre o faturamento bruto, podendo chegar a 33% nas faixas mais altas. Para faturamentos até R$ 180.000 anuais (R$ 15.000/mês), a alíquota efetiva fica em torno de 4,5% a 9%.</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Esses números são aproximados e variam conforme o município, as deduções aplicáveis e o enquadramento específico. A consulta a um contador especializado em profissionais liberais é indispensável para definir a melhor estratégia tributária.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Passo a passo para abrir uma Sociedade Unipessoal</h2>

    <p className="text-gray-700 leading-relaxed">
      O processo de constituição de uma Sociedade Unipessoal de Advocacia segue estas etapas:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Elaboração do ato constitutivo:</strong> documento que define o objeto social, endereço, responsabilidades e regras de funcionamento da sociedade.</li>
      <li><strong className="text-[#162a2a]">Registro na OAB:</strong> o ato constitutivo deve ser registrado na seccional da OAB do estado onde o advogado atuará.</li>
      <li><strong className="text-[#162a2a]">Inscrição no CNPJ:</strong> realizada na Receita Federal após o registro na OAB.</li>
      <li><strong className="text-[#162a2a]">Inscrição municipal:</strong> necessária para emissão de notas fiscais de serviço e recolhimento do ISS.</li>
      <li><strong className="text-[#162a2a]">Opção pelo Simples Nacional:</strong> se desejado, deve ser feita no portal do Simples Nacional dentro do prazo legal.</li>
      <li><strong className="text-[#162a2a]">Abertura de conta bancária PJ:</strong> para separar as finanças pessoais das profissionais.</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      O prazo total para conclusão varia entre duas e seis semanas, dependendo da seccional da OAB e da prefeitura do município.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Obrigações contábeis e fiscais</h2>

    <p className="text-gray-700 leading-relaxed">
      Ao constituir pessoa jurídica, o advogado assume obrigações contábeis regulares. É necessário manter escrituração contábil, entregar declarações fiscais periódicas e emitir notas fiscais para cada serviço prestado.
    </p>

    <p className="text-gray-700 leading-relaxed">
      A contratação de um contador é praticamente obrigatória. O custo mensal de contabilidade para uma sociedade unipessoal de advocacia varia entre R$ 200 e R$ 600, dependendo da complexidade e do volume de operações. Esse custo é facilmente compensado pela economia tributária que a formalização como PJ proporciona.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Quando vale a pena constituir PJ</h2>

    <p className="text-gray-700 leading-relaxed">
      De forma geral, constituir uma sociedade unipessoal passa a ser vantajoso quando o advogado fatura de forma regular acima de R$ 4.000 a R$ 5.000 mensais. Abaixo disso, os custos de manutenção da PJ (contabilidade, taxas e anuidades) podem não compensar a economia tributária.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Para advogados em início de carreira com faturamento irregular, começar como autônomo e migrar para PJ quando a receita se estabilizar é uma estratégia pragmática. O importante é fazer a transição no momento certo para não pagar mais impostos do que o necessário.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Embora o MEI não seja uma opção para advogados, a Sociedade Unipessoal de Advocacia oferece uma alternativa robusta, com vantagens tributárias significativas e um processo de constituição relativamente simples. Com o apoio de um contador competente e um <a href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors">site para advogado autônomo</a>, o profissional pode estruturar sua operação de forma financeiramente eficiente e com presença digital desde o início da carreira.
    </p>
  </>
))
