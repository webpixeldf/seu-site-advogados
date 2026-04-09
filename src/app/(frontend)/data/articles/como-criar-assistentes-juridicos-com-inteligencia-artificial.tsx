import { registerArticle } from './registry'

registerArticle('como-criar-assistentes-juridicos-com-inteligencia-artificial', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      A ideia de ter um assistente que entende de direito, responde perguntas sobre legislação e ajuda a redigir documentos parece futurista, mas já é possível com as ferramentas de inteligência artificial disponíveis. Advogados podem configurar modelos como o ChatGPT para funcionar como assistentes jurídicos personalizados, adaptados à sua área de atuação, ao estilo de redação do escritório e às necessidades específicas de cada caso. Este artigo mostra como fazer isso na prática, com instruções claras, exemplos de prompts e uma discussão honesta sobre limitações.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">O que é um assistente jurídico com IA</h2>

    <p className="text-gray-700 leading-relaxed">
      Um assistente jurídico com IA não é um software pronto que você instala. É uma configuração personalizada de um modelo de linguagem para que ele responda de forma útil e consistente às demandas do trabalho jurídico. Na prática, você define instruções permanentes que orientam o comportamento da IA em todas as interações.
    </p>

    <p className="text-gray-700 leading-relaxed">
      O ChatGPT, por exemplo, oferece o recurso de "Custom Instructions" (instruções personalizadas) e a criação de GPTs customizados. O Claude permite o uso de "System Prompts" em suas versões com API. Em ambos os casos, o princípio é o mesmo: você estabelece regras, contexto e preferências que moldam as respostas da IA.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Configurando instruções personalizadas no ChatGPT</h2>

    <p className="text-gray-700 leading-relaxed">
      O ChatGPT permite que você defina duas instruções permanentes: uma sobre quem você é e outra sobre como deseja que ele responda. Para configurar, acesse o menu no canto inferior esquerdo e clique em "Personalizar ChatGPT" ou "Custom Instructions".
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Primeiro campo: sobre você</h3>

    <p className="text-gray-700 leading-relaxed">
      Neste campo, informe seu contexto profissional. Quanto mais específico, melhores serão as respostas. Um exemplo funcional:
    </p>

    <p className="text-gray-700 leading-relaxed">
      "Sou advogado atuante na área trabalhista, com foco em reclamações trabalhistas e defesa de empregadores. Trabalho em São Paulo, atuo perante a Justiça do Trabalho (varas, TRTs e TST). Preciso de respostas fundamentadas na CLT, jurisprudência atualizada e súmulas do TST. Meu público é composto por empresas de médio porte."
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Segundo campo: como responder</h3>

    <p className="text-gray-700 leading-relaxed">
      Aqui você define o estilo e o formato das respostas. Exemplo:
    </p>

    <p className="text-gray-700 leading-relaxed">
      "Responda em português brasileiro formal, com linguagem técnica jurídica. Cite artigos de lei com a redação exata. Quando mencionar jurisprudência, indique o tribunal, o número do recurso e a data. Se não tiver certeza sobre uma informação, avise que preciso verificar. Não invente referências. Estruture respostas longas com tópicos e subtítulos."
    </p>

    <p className="text-gray-700 leading-relaxed">
      Com essas instruções configuradas, toda conversa nova com o ChatGPT já começa com o contexto do seu trabalho. Você não precisa repetir quem é ou como quer a resposta a cada nova pergunta.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Criando GPTs customizados</h2>

    <p className="text-gray-700 leading-relaxed">
      Para quem tem o ChatGPT Plus, a criação de GPTs customizados leva a personalização a outro nível. Você pode criar assistentes específicos para diferentes tarefas, cada um com suas próprias instruções e até documentos de referência.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Exemplos de GPTs úteis para um escritório de advocacia:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Assistente de petições</strong> — configurado com as regras de formatação do seu tribunal, estilo de argumentação preferido e modelos de peças do escritório</li>
      <li><strong className="text-[#162a2a]">Revisor de contratos</strong> — treinado para identificar cláusulas de risco, inconsistências e pontos que merecem negociação</li>
      <li><strong className="text-[#162a2a]">Pesquisador jurídico</strong> — configurado para buscar fundamentos legais, organizar argumentos e sugerir teses aplicáveis ao caso</li>
      <li><strong className="text-[#162a2a]">Assistente de atendimento</strong> — preparado para ajudar na triagem inicial de consultas, identificando a área do direito e os documentos necessários</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      Para criar um GPT, acesse "Explore GPTs" e clique em "Create". Na aba de configuração, defina o nome, a descrição, as instruções detalhadas e faça upload de documentos de referência — como modelos de petição, manuais internos ou tabelas de prazos. Esses documentos alimentam o contexto da IA e tornam as respostas mais alinhadas ao seu trabalho.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Prompts eficientes para trabalho jurídico</h2>

    <p className="text-gray-700 leading-relaxed">
      A qualidade do resultado depende da qualidade da instrução. Prompts vagos geram respostas genéricas. Prompts bem estruturados geram resultados úteis. A seguir, modelos de prompts que funcionam na prática jurídica.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Para redação de peças</h3>

    <p className="text-gray-700 leading-relaxed">
      "Redija uma contestação trabalhista com base nos seguintes fatos: [descreva os fatos]. A tese principal é [descreva a tese]. Fundamente com base na CLT e súmulas do TST. Use linguagem formal e estruture com preliminares, mérito e pedidos. O formato deve seguir as normas do TRT da 2ª Região."
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Para pesquisa jurídica</h3>

    <p className="text-gray-700 leading-relaxed">
      "Quais são os fundamentos legais para [descreva a situação]? Liste os artigos de lei aplicáveis, as súmulas relevantes e os principais argumentos utilizados em casos semelhantes. Separe os argumentos favoráveis e contrários à tese."
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Para revisão de documentos</h3>

    <p className="text-gray-700 leading-relaxed">
      "Analise o contrato a seguir e identifique: cláusulas que favorecem excessivamente uma das partes, ambiguidades na redação, prazos que merecem atenção, obrigações desproporcionais e riscos potenciais. Apresente os achados em formato de lista com recomendações de ajuste."
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Para resumos</h3>

    <p className="text-gray-700 leading-relaxed">
      "Resuma o acórdão a seguir em formato de ficha: tribunal, número do processo, relator, data do julgamento, tese discutida, fundamentação principal e resultado. Destaque os trechos mais relevantes para a tese de [descreva sua tese]."
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Templates de documentos com IA</h2>

    <p className="text-gray-700 leading-relaxed">
      Uma aplicação prática é usar a IA para criar templates de documentos que o escritório usa repetidamente. Em vez de manter modelos estáticos em Word, você pode ter prompts que geram documentos adaptados a cada situação.
    </p>

    <p className="text-gray-700 leading-relaxed">
      O fluxo funciona assim: você cria um prompt-base para cada tipo de documento — contrato de honorários, procuração, notificação extrajudicial, petição inicial padrão. Quando precisa de um novo documento, insere os dados específicos do caso no prompt e a IA gera o texto completo. Você revisa, ajusta e finaliza.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Para manter a consistência, salve os prompts-base em um documento do Google Docs ou no próprio GPT customizado. Assim, qualquer membro da equipe consegue gerar documentos com o mesmo padrão de qualidade.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Limitações que você precisa conhecer</h2>

    <p className="text-gray-700 leading-relaxed">
      Assistentes jurídicos com IA têm limitações sérias que precisam ser compreendidas antes de serem adotados no escritório:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Alucinações</strong> — a IA pode inventar artigos de lei, números de processo e citações doutrinárias que não existem. Toda referência precisa ser verificada manualmente.</li>
      <li><strong className="text-[#162a2a]">Desatualização</strong> — os modelos de linguagem têm uma data de corte no treinamento. Mudanças legislativas recentes podem não estar refletidas nas respostas.</li>
      <li><strong className="text-[#162a2a]">Falta de contexto processual</strong> — a IA não tem acesso aos autos do processo, às decisões anteriores ou ao histórico do caso. Ela trabalha apenas com o que você fornece no prompt.</li>
      <li><strong className="text-[#162a2a]">Ausência de julgamento estratégico</strong> — a IA não avalia se uma tese é viável no tribunal específico, se o juiz tem histórico de decidir de determinada forma ou se a estratégia processual faz sentido no contexto do caso.</li>
      <li><strong className="text-[#162a2a]">Limites de contexto</strong> — cada conversa tem um limite de texto que a IA consegue processar. Documentos muito longos podem precisar ser divididos em partes.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Questões éticas e de sigilo</h2>

    <p className="text-gray-700 leading-relaxed">
      O ponto mais sensível no uso de IA na advocacia é o sigilo profissional. Ao inserir informações de clientes em ferramentas como o ChatGPT, esses dados são processados por servidores externos. Na versão gratuita do ChatGPT, os dados podem ser utilizados para treinamento do modelo, o que representa um risco real de exposição de informações sigilosas.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Medidas práticas para proteger o sigilo:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Anonimize os dados</strong> — substitua nomes reais por fictícios, remova números de processo e dados pessoais antes de inserir na IA</li>
      <li><strong className="text-[#162a2a]">Use versões com privacidade</strong> — o ChatGPT Team e Enterprise não utilizam dados para treinamento. O Claude oferece garantias similares em seus planos pagos</li>
      <li><strong className="text-[#162a2a]">Desative o histórico</strong> — nas configurações do ChatGPT, é possível desativar o uso de conversas para treinamento</li>
      <li><strong className="text-[#162a2a]">Defina uma política interna</strong> — estabeleça regras claras sobre o que pode e o que não pode ser inserido em ferramentas de IA</li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      O Código de Ética da OAB impõe ao advogado o dever de sigilo sobre informações do cliente. Esse dever se estende ao uso de tecnologia. Usar ferramentas de IA sem precauções equivale a discutir detalhes de um caso em um local público — a responsabilidade recai sobre o advogado.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Como implementar no escritório</h2>

    <p className="text-gray-700 leading-relaxed">
      A implementação deve ser gradual. Comece com um advogado testando a ferramenta em tarefas de baixo risco — resumos internos, rascunhos iniciais e pesquisa preliminar. Documente os resultados, identifique os casos de uso mais produtivos e crie um guia interno de boas práticas.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Na segunda fase, expanda o uso para a equipe com treinamento sobre como escrever bons prompts, quais dados podem ser inseridos e como verificar os resultados. Crie um repositório compartilhado de prompts eficientes para que o conhecimento acumulado beneficie todo o escritório.
    </p>

    <p className="text-gray-700 leading-relaxed">
      A IA não transforma um escritório da noite para o dia. Mas advogados que investem tempo aprendendo a usar essas ferramentas corretamente e mantêm um <a href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors">site para advogado com SEO</a> bem estruturado conseguem reduzir o tempo gasto em tarefas repetitivas e dedicar mais energia ao que realmente exige expertise humana: estratégia, julgamento e relacionamento com o cliente.
    </p>
  </>
))
