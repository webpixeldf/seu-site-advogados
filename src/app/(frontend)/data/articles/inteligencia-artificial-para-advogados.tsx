import { registerArticle } from './registry'

registerArticle('inteligencia-artificial-para-advogados', () => (
  <>
    <p className="text-gray-700 leading-relaxed">
      A inteligência artificial deixou de ser assunto de ficção científica e entrou na rotina de escritórios de advocacia em todo o Brasil. Ferramentas como o ChatGPT, sistemas de pesquisa jurídica com IA e plataformas de revisão de documentos estão mudando a forma como advogados trabalham. Mas entre o entusiasmo do mercado e a realidade prática, existe uma distância que vale a pena entender. Este artigo explora o que a IA pode fazer de concreto pela advocacia, quais ferramentas existem e onde estão os limites.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">O que é inteligência artificial no contexto jurídico</h2>

    <p className="text-gray-700 leading-relaxed">
      Inteligência artificial, no contexto que interessa aos advogados, refere-se a softwares capazes de processar grandes volumes de texto, identificar padrões e gerar respostas ou análises com base nesses dados. Não se trata de um robô advogado. Trata-se de ferramentas que automatizam tarefas repetitivas, aceleram pesquisas e ajudam na redação de documentos.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Os modelos de linguagem como o ChatGPT, Claude e Gemini são treinados com bilhões de textos, incluindo legislação, jurisprudência e doutrina. Eles conseguem gerar textos coerentes sobre temas jurídicos, mas não "entendem" o direito como um advogado. Essa distinção é fundamental para usar a tecnologia sem cair em armadilhas.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">ChatGPT e modelos de linguagem na redação jurídica</h2>

    <p className="text-gray-700 leading-relaxed">
      O uso mais comum de IA entre advogados hoje é na redação de peças e documentos. O ChatGPT e ferramentas similares podem gerar rascunhos de petições iniciais, contestações, contratos e pareceres a partir de instruções detalhadas. O resultado não é uma peça pronta para protocolar, mas um ponto de partida que economiza tempo.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Na prática, o processo funciona assim: o advogado fornece os fatos do caso, a tese jurídica e o tipo de peça desejada. A IA gera um texto com estrutura, argumentação e fundamentação. O advogado então revisa, corrige imprecisões, adiciona jurisprudência atualizada e adapta o tom ao tribunal específico.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Onde a IA ajuda na redação</h3>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Estruturação de peças</strong> — a IA organiza os argumentos em uma sequência lógica, o que é útil para advogados em início de carreira ou em áreas menos familiares</li>
      <li><strong className="text-[#162a2a]">Primeira versão de contratos</strong> — gerar minutas com cláusulas padrão para depois personalizar ao caso concreto</li>
      <li><strong className="text-[#162a2a]">Resumos de documentos longos</strong> — sintetizar acórdãos, laudos periciais ou contratos extensos em pontos principais</li>
      <li><strong className="text-[#162a2a]">Tradução jurídica</strong> — traduzir documentos com vocabulário técnico entre português e outros idiomas</li>
      <li><strong className="text-[#162a2a]">Reformulação de textos</strong> — reescrever parágrafos para maior clareza ou adaptar a linguagem ao público-alvo</li>
    </ul>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">Onde a IA falha na redação</h3>

    <p className="text-gray-700 leading-relaxed">
      Os modelos de linguagem têm uma tendência conhecida como "alucinação": eles inventam referências que não existem. Artigos de lei com numeração errada, jurisprudência fictícia com números de processo falsos e citações doutrinárias inexistentes são problemas reais. Em 2023, um advogado nos Estados Unidos foi sancionado por apresentar em juízo decisões judiciais completamente fabricadas pelo ChatGPT. Essa situação se repete com menor visibilidade em escritórios do mundo todo.
    </p>

    <p className="text-gray-700 leading-relaxed">
      A regra é clara: nunca protocole um documento gerado por IA sem verificação completa. Cada artigo de lei, cada decisão citada e cada dado fático precisa ser conferido pelo advogado. A IA é uma ferramenta de produção, não de validação.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Pesquisa jurídica com inteligência artificial</h2>

    <p className="text-gray-700 leading-relaxed">
      A pesquisa de jurisprudência e legislação é uma das áreas onde a IA oferece ganhos reais de produtividade. Plataformas como Jusbrasil, Vlex e outras ferramentas especializadas já utilizam IA para melhorar a busca e a análise de resultados.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Em vez de digitar palavras-chave e filtrar manualmente centenas de resultados, o advogado pode descrever a situação fática em linguagem natural e receber resultados organizados por relevância. Algumas plataformas identificam a tendência de decisão de determinado tribunal sobre um tema, calculam probabilidades de êxito e sugerem argumentos utilizados em casos semelhantes.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Ferramentas de pesquisa com IA também ajudam a mapear divergências jurisprudenciais entre tribunais, identificar mudanças de entendimento ao longo do tempo e encontrar precedentes vinculantes aplicáveis ao caso. Para advogados que trabalham com teses repetitivas, o ganho de tempo é significativo.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Revisão e análise de documentos</h2>

    <p className="text-gray-700 leading-relaxed">
      A revisão de contratos e documentos é uma tarefa que consome horas do dia de muitos advogados. Ferramentas de IA especializadas em análise documental conseguem ler contratos inteiros e identificar cláusulas de risco, inconsistências, prazos ocultos e desvios em relação a padrões do escritório.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Em operações de fusão e aquisição, por exemplo, a due diligence exige a análise de centenas ou milhares de documentos. Ferramentas de IA podem classificar esses documentos por tipo, extrair informações relevantes e sinalizar pontos que merecem atenção humana. O que levaria semanas pode ser reduzido a dias.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Para escritórios menores, a aplicação mais acessível é usar o ChatGPT ou Claude para revisar minutas de contrato. Você cola o texto do contrato e pede uma análise de riscos, pontos ambíguos ou cláusulas que favorecem excessivamente uma das partes. O resultado não substitui a análise do advogado, mas funciona como uma segunda opinião rápida.
    </p>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Considerações éticas e regulatórias</h2>

    <p className="text-gray-700 leading-relaxed">
      O uso de IA na advocacia levanta questões éticas que não podem ser ignoradas. A OAB ainda não editou regulamentação específica sobre o tema, mas os princípios do Código de Ética e Disciplina se aplicam integralmente. O advogado é responsável por tudo que assina e protocola, independentemente de ter usado IA na elaboração.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Questões específicas que merecem atenção:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong className="text-[#162a2a]">Sigilo profissional</strong> — ao inserir dados de clientes em ferramentas de IA como o ChatGPT, essas informações podem ser utilizadas para treinamento do modelo. Nunca insira dados pessoais, números de processo ou informações sigilosas em ferramentas sem garantia de privacidade.</li>
      <li><strong className="text-[#162a2a]">Responsabilidade profissional</strong> — erros em peças geradas por IA são responsabilidade do advogado. A revisão é obrigatória, não opcional.</li>
      <li><strong className="text-[#162a2a]">Transparência com o cliente</strong> — embora não haja obrigação legal de informar que usou IA, a transparência com o cliente sobre os métodos de trabalho fortalece a relação de confiança.</li>
      <li><strong className="text-[#162a2a]">Competência técnica</strong> — usar IA sem entender seus limites pode resultar em trabalho de baixa qualidade. O advogado precisa conhecer a ferramenta antes de aplicá-la em casos reais.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">O que é real e o que é exagero</h2>

    <p className="text-gray-700 leading-relaxed">
      O mercado de tecnologia jurídica está repleto de promessas grandiosas. É importante separar o que funciona do que ainda é marketing.
    </p>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">O que a IA já faz bem</h3>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Gerar rascunhos de documentos jurídicos que economizam tempo de redação</li>
      <li>Pesquisar jurisprudência e legislação com mais velocidade que métodos tradicionais</li>
      <li>Resumir documentos longos em pontos principais</li>
      <li>Classificar e organizar grandes volumes de documentos</li>
      <li>Auxiliar na revisão de contratos com identificação de cláusulas padrão</li>
    </ul>

    <h3 className="text-xl font-bold text-[#162a2a] font-lexend mt-8 mb-3">O que a IA ainda não faz</h3>

    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Substituir o julgamento profissional do advogado sobre estratégia processual</li>
      <li>Garantir a precisão de referências legais e jurisprudenciais sem verificação humana</li>
      <li>Compreender nuances emocionais e contextuais de uma negociação</li>
      <li>Atuar em audiências ou sustentar oralmente</li>
      <li>Entender o contexto político e social que influencia decisões judiciais</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#162a2a] font-lexend mt-10 mb-4">Como começar a usar IA no seu escritório</h2>

    <p className="text-gray-700 leading-relaxed">
      O caminho mais prático é começar pequeno. Crie uma conta no ChatGPT ou Claude e comece usando a ferramenta para tarefas de baixo risco: resumir um acórdão, gerar um rascunho de e-mail para cliente ou estruturar os tópicos de uma petição. À medida que ganhar confiança e entender os limites da ferramenta, amplie o uso para tarefas mais complexas.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Invista tempo aprendendo a escrever bons prompts. A qualidade do resultado da IA depende diretamente da qualidade da instrução que você fornece. Um prompt vago como "faça uma petição" gera um resultado genérico. Um prompt detalhado com fatos, tese, tribunal e estilo de argumentação gera um resultado muito mais útil.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Por fim, mantenha-se atualizado. A velocidade de evolução das ferramentas de IA é sem precedentes. O que não funciona bem hoje pode se tornar indispensável em seis meses. Advogados que acompanham essa evolução terão vantagem competitiva real nos próximos anos — não porque a IA substituirá o trabalho jurídico, mas porque tornará mais eficientes aqueles que souberem usá-la.
    </p>
  </>
))
