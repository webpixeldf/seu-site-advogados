import { registerArticle } from './registry'

registerArticle('notebooklm-inteligencia-artificial-para-advogados', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      O NotebookLM é uma ferramenta de inteligência artificial desenvolvida pelo Google que permite interagir com documentos de forma conversacional. Em vez de ler centenas de páginas de legislação, jurisprudência ou doutrina, você faz upload dos documentos e conversa com eles — fazendo perguntas, pedindo resumos e cruzando informações. Para advogados, isso representa uma mudança significativa na forma de fazer pesquisa jurídica.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">O que é o NotebookLM</h2>

    <p className="text-gray-700 leading-relaxed">
      O NotebookLM (anteriormente chamado de Project Tailwind) é um assistente de pesquisa baseado na tecnologia Gemini do Google. Diferente de chatbots genéricos como o ChatGPT, o NotebookLM trabalha exclusivamente com os documentos que você fornece. Isso significa que as respostas são baseadas nas suas fontes, não em informações gerais da internet, reduzindo significativamente o risco de "alucinações" — respostas inventadas que parecem plausíveis.
    </p>

    <p className="text-gray-700 leading-relaxed">
      A ferramenta é gratuita e acessível pelo navegador em notebooklm.google.com. Basta ter uma conta Google para começar a usar.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Aplicações práticas para advogados</h2>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Pesquisa jurisprudencial</h3>

    <p className="text-gray-700 leading-relaxed">
      Imagine que você precisa analisar 30 acórdãos do STJ sobre responsabilidade civil de plataformas digitais. No método tradicional, seria necessário ler cada um, anotar os argumentos relevantes e cruzar os entendimentos. Com o NotebookLM, você faz upload dos PDFs dos acórdãos e pergunta: "Qual é o entendimento majoritário sobre a responsabilidade das plataformas?" ou "Quais acórdãos divergem da posição majoritária e por quê?". A ferramenta analisa todos os documentos e responde com referências específicas a cada fonte.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Análise de contratos</h3>

    <p className="text-gray-700 leading-relaxed">
      Faça upload de um contrato extenso e pergunte: "Quais são as obrigações do contratante?", "Existe cláusula de rescisão antecipada?", "Quais são as penalidades previstas?" ou "Compare as obrigações das partes". O NotebookLM identifica e organiza as informações relevantes, economizando o tempo de leitura integral de contratos com dezenas de cláusulas.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Estudo de legislação</h3>

    <p className="text-gray-700 leading-relaxed">
      Carregue o texto de uma lei e suas regulamentações. Pergunte sobre artigos específicos, peça comparações entre dispositivos ou solicite um resumo dos pontos mais relevantes para determinada situação. Para leis extensas como o Código Civil ou a CLT, esse recurso transforma a consulta legislativa em uma conversa produtiva.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Preparação para audiências e sustentações orais</h3>

    <p className="text-gray-700 leading-relaxed">
      Carregue as peças do processo — petição inicial, contestação, decisões interlocutórias e documentos — e peça ao NotebookLM para resumir os pontos principais de cada parte, identificar contradições nos argumentos da parte contrária ou listar as provas mais relevantes. Essa visão consolidada ajuda na preparação para audiências e sustentações.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Pesquisa doutrinária</h3>

    <p className="text-gray-700 leading-relaxed">
      Faça upload de capítulos de livros e artigos acadêmicos sobre o tema que está pesquisando. Pergunte "Quais são as principais correntes doutrinárias sobre este tema?", "Onde os autores concordam e onde divergem?" ou "Quais argumentos sustentam a posição X?". A ferramenta cruza as fontes e apresenta uma síntese organizada.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Como usar o NotebookLM: tutorial passo a passo</h2>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Passo 1:</strong> acesse notebooklm.google.com e faça login com sua conta Google.</li>
      <li><strong className="text-[#162a2a]">Passo 2:</strong> clique em "Novo notebook" para criar um novo projeto de pesquisa.</li>
      <li><strong className="text-[#162a2a]">Passo 3:</strong> adicione suas fontes. Você pode fazer upload de PDFs, documentos do Google Docs, textos copiados, links de sites e até vídeos do YouTube. O limite é de até 50 fontes por notebook, com até 500 mil palavras cada.</li>
      <li><strong className="text-[#162a2a]">Passo 4:</strong> aguarde o processamento. A ferramenta analisa todos os documentos e gera automaticamente um guia do conteúdo.</li>
      <li><strong className="text-[#162a2a]">Passo 5:</strong> faça perguntas na caixa de chat. Seja específico: em vez de "o que dizem os documentos?", pergunte "qual é o prazo prescricional mencionado no acórdão X?".</li>
      <li><strong className="text-[#162a2a]">Passo 6:</strong> verifique as citações. Cada resposta inclui referências às fontes originais, permitindo que você confira a informação diretamente no documento.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Limitações e cuidados</h2>

    <p className="text-gray-700 leading-relaxed">
      O NotebookLM é uma ferramenta poderosa, mas não substitui o raciocínio jurídico do advogado. Alguns cuidados importantes:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Sempre confira as fontes:</strong> embora o NotebookLM cite os documentos originais, é responsabilidade do advogado verificar se a informação está correta e contextualizada. Use a ferramenta para acelerar a pesquisa, mas valide os resultados manualmente.</li>
      <li><strong className="text-[#162a2a]">A qualidade depende das fontes:</strong> a ferramenta só trabalha com os documentos que você fornece. Se as fontes forem incompletas ou desatualizadas, as respostas serão igualmente limitadas.</li>
      <li><strong className="text-[#162a2a]">Não substitui a leitura integral em casos complexos:</strong> para questões de alta complexidade ou alto risco, a leitura integral dos documentos continua sendo necessária. O NotebookLM serve como primeira triagem, não como análise definitiva.</li>
      <li><strong className="text-[#162a2a]">Atenção ao sigilo profissional:</strong> ao fazer upload de documentos com informações de clientes, considere as implicações de privacidade. O Google afirma que os dados do NotebookLM não são usados para treinar modelos, mas avalie sua política de sigilo antes de carregar documentos confidenciais.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">NotebookLM vs. ChatGPT para pesquisa jurídica</h2>

    <p className="text-gray-700 leading-relaxed">
      A principal diferença é a fonte das respostas. O ChatGPT responde com base no conhecimento geral adquirido durante o treinamento, o que inclui riscos de informações desatualizadas ou inventadas. O NotebookLM responde exclusivamente com base nos documentos que você forneceu, citando a fonte de cada informação.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Para pesquisa jurídica, onde a precisão da fonte é fundamental, o NotebookLM oferece uma vantagem clara. Para brainstorming, geração de ideias ou perguntas genéricas sobre o direito, ferramentas como o ChatGPT podem complementar. O ideal é usar cada ferramenta para o que ela faz melhor.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Recursos avançados</h2>

    <p className="text-gray-700 leading-relaxed">
      O NotebookLM oferece recursos além do chat. A função de <strong className="text-[#162a2a]">notas</strong> permite salvar trechos importantes das respostas para referência futura. O <strong className="text-[#162a2a]">guia automático</strong> gera um resumo de todos os documentos carregados, identificando temas centrais e perguntas sugeridas. E o recurso de <strong className="text-[#162a2a]">áudio</strong> transforma seus documentos em uma conversa em formato de podcast, útil para absorver conteúdo enquanto se desloca.
    </p>

    <p className="text-gray-700 leading-relaxed">
      A inteligência artificial está transformando a pesquisa jurídica, e o NotebookLM é uma das ferramentas mais acessíveis e seguras para advogados começarem a incorporar IA na rotina. O investimento de tempo para aprender a usar é mínimo, e o ganho em produtividade na pesquisa é significativo. A chave é tratar a ferramenta como assistente, não como substituto do julgamento profissional — assim como um <a href="/" className="text-[#de7322] hover:text-[#ba5918] font-semibold transition-colors">site para escritório de advocacia</a> complementa, mas não substitui, o trabalho de captação presencial.
    </p>
  </>
))
