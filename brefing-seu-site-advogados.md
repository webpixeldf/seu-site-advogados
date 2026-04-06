# Briefing Tecnico: Seu Site Advogados

## Sobre o Projeto

Site premium para captacao de clientes advogados - seusiteadvogados.com.br
Empresa especializada em criacao de sites para advogados e escritorios de advocacia.
O site vende servicos de desenvolvimento web para profissionais do direito.

Site atual: https://seusiteadvogados.com.br/
Localhost: http://localhost/seusiteadvogados
Tecnologia atual: WordPress com Elementor + SmartMag
Hospedagem futura: Hostinger

---

## Paleta de Cores

```css
/* Cores do Projeto */
--cor-verde: #83b440;
--cor-verde-claro: #84e04a;
--cor-escuro: #162a2a;
--cor-laranja: #de7322;
--cor-cinza-claro: #eaecec;
--cor-dourado: #b58c61;
--cor-marrom: #593e2e;
--cor-laranja-escuro: #ba5918;
--cor-mostarda: #e99f45;

/* CSS HEX */
--verde: #83b440;
--verde-claro: #84e04a;
--escuro: #162a2a;
--laranja: #de7322;
--cinza-claro: #eaecec;
--dourado: #b58c61;
--marrom: #593e2e;
--laranja-escuro: #ba5918;
--mostarda: #e99f45;

/* SCSS HEX */
$verde: #83b440;
$verde-claro: #84e04a;
$escuro: #162a2a;
$laranja: #de7322;
$cinza-claro: #eaecec;
$dourado: #b58c61;
$marrom: #593e2e;
$laranja-escuro: #ba5918;
$mostarda: #e99f45;

/* SCSS RGB */
$verde: rgba(131,180,64,1);
$verde-claro: rgba(132,224,74,1);
$escuro: rgba(22,42,42,1);
$laranja: rgba(222,115,34,1);
$cinza-claro: rgba(234,236,236,1);
$dourado: rgba(181,140,97,1);
$marrom: rgba(89,62,46,1);
$laranja-escuro: rgba(186,89,24,1);
$mostarda: rgba(233,159,69,1);
```

### Uso das Cores
- **Fundo principal:** #ffffff (branco) e #eaecec (cinza claro para secoes alternadas)
- **Fundo escuro (header/hero/footer):** #162a2a (verde escuro elegante)
- **Textos principais:** #162a2a (escuro)
- **Textos secundarios:** #593e2e (marrom)
- **Botoes CTA primarios:** #de7322 (laranja) com hover #ba5918 (laranja escuro)
- **Destaques e acentos:** #b58c61 (dourado) - transmite sofisticacao juridica
- **Links e elementos interativos:** #83b440 (verde)
- **Badges e tags:** #e99f45 (mostarda)
- **WhatsApp flutuante:** #83b440 (verde)

---

## Tipografia

- **Fonte principal:** Lexend (Google Fonts)
- **Titulos:** Lexend 700 (Bold) e 600 (SemiBold)
- **Corpo de texto:** Lexend 400 (Regular)
- **Botoes e CTAs:** Lexend 600 (SemiBold)
- **Import:** `https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&display=swap`

---

## PASSO 1: Preparar Ambiente

### Requisitos
- Node.js v20.9+ (https://nodejs.org - versao LTS)
- Git (https://git-scm.com)
- VS Code ou Kiro

### Criar o projeto
```bash
npx create-payload-app@latest seu-site-advogados
```

Quando perguntar:
- Template: `website`
- Database: `sqlite` (banco de dados local - SQLite)

```bash
cd seu-site-advogados
npm install
```

### Configurar banco de dados
No arquivo `.env`:
```
DATABASE_URI=file:./database.db
PAYLOAD_SECRET=gerar-uma-chave-secreta-longa-aqui
```

IMPORTANTE: Usar SQLite como banco de dados local. Posteriormente sera migrado para hospedagem na Hostinger.

---

## PASSO 2: Collections (Tipos de Conteudo)

Criar cada collection como arquivo TypeScript em `src/collections/`.

### Collection: Paginas (src/collections/Paginas.ts)

Paginas estaticas do site (Home, Quem Somos, Contato, etc.)

Campos:
- titulo (text, required) - Titulo da pagina
- slug (text, required, unique) - URL amigavel
- conteudo (richText, required) - Corpo da pagina
- imagemDestaque (upload, relationTo: media) - Imagem de capa
- status (select: rascunho/publicado, default: rascunho)
- seo (group):
  - metaTitle (text, maxLength 70)
  - metaDescription (textarea, maxLength 160)
  - canonicalURL (text)

Labels: singular "Pagina", plural "Paginas"
Admin: useAsTitle: 'titulo', defaultColumns: ['titulo', 'slug', 'status']

### Collection: Servicos (src/collections/Servicos.ts)

Servicos oferecidos pela empresa (criacao de sites, SEO, etc.)

Campos:
- titulo (text, required) - Nome do servico
- slug (text, required, unique)
- descricaoCurta (text, required) - Resumo para cards
- descricaoCompleta (richText) - Descricao detalhada
- icone (text) - Nome do icone (Lucide React)
- imagem (upload, relationTo: media)
- ordem (number, default: 0)
- ativo (checkbox, default: true)

Labels: singular "Servico", plural "Servicos"
Admin: useAsTitle: 'titulo', defaultColumns: ['titulo', 'ordem', 'ativo']

### Collection: Portfolio (src/collections/Portfolio.ts)

Cases de sucesso / sites desenvolvidos para advogados.

Campos:
- nomeCliente (text, required) - Ex: "Ferreira & Mourao Advogados"
- slug (text, required, unique)
- descricao (textarea) - Breve descricao do projeto
- urlSite (text, required) - Link do site desenvolvido
- imagem (upload, relationTo: media) - Screenshot do site
- depoimento (textarea) - Depoimento do cliente (se houver)
- destaque (checkbox, default: false) - Se aparece na home
- ordem (number, default: 0)
- ativo (checkbox, default: true)

Labels: singular "Portfolio", plural "Portfolios"
Admin: useAsTitle: 'nomeCliente', defaultColumns: ['nomeCliente', 'urlSite', 'destaque', 'ativo']

Portfolio existente:
- Ferreira & Mourao Advogados -> https://ferreiramourao.com/
- Guilherme Bonfim Advocacia -> https://guilhermebonfim.com/
- Bernardes Oshiro Advogados -> https://www.bernardesoshiro.com.br/
- Marcio Bernardino Advocacia -> https://www.marciobernardinoadvogados.com.br/

### Collection: Blog (src/collections/Blog.ts)

Artigos do blog sobre marketing juridico, SEO, etc.

Campos:
- titulo (text, required)
- slug (text, required, unique)
- resumo (textarea, maxLength 160) - Resumo para SEO e listagem
- conteudo (richText, required) - Corpo do artigo
- imagemDestaque (upload, relationTo: media)
- categoria (relationship, relationTo: categoriasBlog)
- autor (relationship, relationTo: users)
- tags (array com campo "tag": text)
- status (select: rascunho/publicado, default: rascunho)
- publishedAt (date) - Data de publicacao
- destaque (checkbox, default: false)
- seo (group):
  - metaTitle (text, maxLength 70)
  - metaDescription (textarea, maxLength 160)
  - canonicalURL (text)

Labels: singular "Artigo", plural "Artigos"
Admin: useAsTitle: 'titulo', defaultColumns: ['titulo', 'categoria', 'status', 'publishedAt']

Artigos existentes para migrar:
1. Hospedagem de Site para Advogados: Como Escolher a Melhor Opcao para o Seu Escritorio
2. Notion para Advogados: A Solucao Completa para Organizar seu Escritorio
3. Como Utilizar E-mail Marketing para Advogados: Estrategias e Dicas Eficazes
4. A Importancia de um Video Institucional para Escritorio de Advocacia
5. Criar conteudo para o YouTube da resultados na advocacia?
6. Como Aparecer no Google Como Advogado?
7. Como Ser Advogado do Google?
8. Como Monetizar um Canal de Advocacia no YouTube
9. Como Montar um Escritorio de Advocacia Digital
10. Trello para Advogados: Uma Ferramenta Para Organizar Seu Escritorio
11. Como Gerenciar sua Advocacia com o Trello
12. Como o Google Agenda para Advogados Pode Revolucionar a Gestao
13. Como Criar Assistentes Juridicos com Inteligencia Artificial
14. Cartao digital para advogado: modernizacao profissional
15. Como escrever um artigo cientifico no direito
16. Diferenca entre landing page e site institucional para advogados
17. Qual a melhor cor para advogado
18. Posts para advogados: guia completo para presenca digital
19. Landing page para advogado: guia completo de conversao
20. Nome para escritorio de advocacia: Gere o seu aqui!
21. Cores para escritorio de advocacia: guia completo
22. E-mail para advogado: guia completo de comunicacao profissional
23. Sites para captar clientes para advocacia: estrategias digitais
24. Numeros de advogados: panorama completo da advocacia no Brasil

### Collection: CategoriasBlog (src/collections/CategoriasBlog.ts)

Campos:
- nome (text, required)
- slug (text, required, unique)
- descricao (textarea)
- ordem (number, default: 0)

Labels: singular "Categoria", plural "Categorias"

### Collection: FAQ (src/collections/FAQ.ts)

Perguntas frequentes.

Campos:
- pergunta (text, required)
- resposta (richText, required)
- ordem (number, default: 0)
- ativo (checkbox, default: true)
- categoria (text) - Agrupamento opcional

Labels: singular "FAQ", plural "FAQs"
Admin: useAsTitle: 'pergunta', defaultColumns: ['pergunta', 'ordem', 'ativo']

FAQs existentes:

**Q1:** Quanto custa um site para advogados e o que esta incluso no servico?
**A1:** O investimento para um site juridico profissional comeca a partir de 3x de R$ 285,00, com um pacote completo que inclui: Design exclusivo e responsivo para a area juridica, Hospedagem de alta performance, Dominio personalizado (.adv.br ou .com.br), E-mail corporativo profissional, Certificado de seguranca SSL, Integracao com WhatsApp e redes sociais, Otimizacao SEO para o mercado juridico, Suporte tecnico especializado. Nao ha custos ocultos.

**Q2:** Como um site profissional pode aumentar a captacao de clientes para meu escritorio de advocacia?
**A2:** Um site juridico estrategico multiplica suas oportunidades de negocio: Presenca 24/7 (escritorio disponivel fora do horario), Credibilidade instantanea (78% dos clientes pesquisam online antes de contratar), Captacao qualificada, Demonstracao de expertise, Posicionamento local, Facilitacao de contato.

**Q3:** Quais elementos sao indispensaveis em um site juridico para estar em conformidade com as normas da OAB?
**A3:** Sites alinhados com o Codigo de Etica e Disciplina da OAB e com o Provimento 94/2000: Informacoes sobre areas de atuacao sem promessas de resultados, Apresentacao discreta e sobria, Numero de inscricao na OAB claramente visivel, Ausencia de termos como "consulta gratis" ou precificacao ostensiva, Politica de privacidade em conformidade com a LGPD, Conteudo informativo sem captacao indevida, Design profissional.

**Q4:** O que e SEO juridico e como ele ajuda meu escritorio a se destacar nas buscas online?
**A4:** SEO juridico (Search Engine Optimization) inclui: Palavras-chave estrategicas, Conteudo juridico relevante, Otimizacao tecnica, SEO local, Link building etico, Monitoramento de resultados.

**Q5:** Qual o prazo para desenvolvimento de um site para advogados e como funciona o processo?
**A5:** Media de 15 a 30 dias, seguindo: Briefing inicial, Planejamento estrategico, Design personalizado, Desenvolvimento, Otimizacao SEO, Revisao e ajustes, Treinamento, Lancamento. Apos lancamento, 30 dias de ajustes gratuitos.

**Q6:** Como integrar meu site juridico com outras ferramentas de marketing digital para maximizar resultados?
**A6:** Integracoes incluem: Google Meu Negocio, E-mail marketing (RD Station, Mailchimp, ActiveCampaign), Redes sociais (Instagram, LinkedIn, YouTube), WhatsApp Business, CRM juridico (Astrea, Projuris, Advbox), Google Analytics, Agendamento online.

### Collection: Depoimentos (src/collections/Depoimentos.ts)

Depoimentos de clientes satisfeitos.

Campos:
- nomeCliente (text, required)
- cargo (text) - Ex: "Advogado Trabalhista"
- escritorio (text) - Nome do escritorio
- depoimento (textarea, required)
- foto (upload, relationTo: media)
- avaliacao (number, min: 1, max: 5, default: 5)
- destaque (checkbox, default: false)
- ativo (checkbox, default: true)

Labels: singular "Depoimento", plural "Depoimentos"

### Collection: Cidades (src/collections/Cidades.ts)

Landing pages por cidade para SEO local.

Campos:
- nome (text, required) - Ex: "Sao Paulo"
- slug (text, required, unique)
- estado (text) - Ex: "SP"
- titulo (text) - H1 da landing page
- descricao (richText) - Conteudo da pagina
- metaTitle (text)
- metaDescription (textarea)
- ativo (checkbox, default: true)

Labels: singular "Cidade", plural "Cidades"

Cidades existentes:
Alto Alegre, Belem do Para, Belo Horizonte, Blumenau, Boa Vista, Campinas, Campo Grande, Caracarai, Cascavel, Caxias do Sul, Curitiba, Florianopolis, Fortaleza, Goiania, Guarulhos, Itajai, Joao Pessoa, Joinville, Londrina, Maceio, Manaus, Maringa, Mogi das Cruzes, Porto Alegre, Portugal, Recife, Ribeirao Preto, Rorainopolis, Salvador, Santa Catarina, Sao Jose dos Campos, Sao Luis, Sao Paulo, Uberlandia, Rio de Janeiro, Araraquara

### Collection: Media (src/collections/Media.ts)

Collection padrao de uploads.
- Aceitar: imagens (jpg, png, webp, gif), PDFs
- Gerar thumbnails automaticamente
- Alt text obrigatorio para SEO
- Formatos otimizados em .webp

### Collection: Users (src/collections/Users.ts)

Usuarios administradores do painel.

---

## PASSO 3: Globals (Configuracoes Globais)

### Global: Header (src/globals/Header.ts)

Campos:
- logo (upload, relationTo: media) - Logo "Seu Site Advogados"
- logoWhite (upload, relationTo: media) - Logo versao branca
- menuItems (array):
  - label (text, required)
  - url (text, required)
  - submenu (array): label (text), url (text)
- ctaButton (group):
  - label (text) - "Solicite um orcamento"
  - url (text) - Link WhatsApp

Menu atual do site:
- Site para advogados -> /
- Portfolio -> /portfolio
- Quem somos -> /quem-somos
- Blog -> /blog
- FAQ -> /faq
- Contatos -> /contatos
- Cidades (submenu com todas as cidades)

### Global: Footer (src/globals/Footer.ts)

Campos:
- logo (upload, relationTo: media) - Logo versao branca
- descricao (textarea)
- menuPrincipal (array): label (text), url (text)
- redesSociais (group):
  - facebook (text)
  - instagram (text)
  - linkedin (text)
  - youtube (text)
- contato (group):
  - telefone (text): "(61) 99278-4283"
  - whatsapp (text): "(61) 99278-4283"
  - email (email): "webpixelbr@gmail.com"
  - endereco (textarea): "SHIS, Quadra 06, Complexo Brasil 21 - Asa Sul, Brasilia - DF, 70316-000"
  - googleMapsLink (text): "https://maps.app.goo.gl/M94VKFhYA82yiMBdA"
- copyright (text): "Seu Site Advogados. Todos os direitos reservados."

### Global: SiteSettings (src/globals/SiteSettings.ts)

Campos:
- nomeDoSite (text): "Seu Site Advogados"
- tagline (text): "Especialistas em criacao de site para advogados"
- descricao (textarea): "Especialistas em criacao de site para advogados. Transforme sua experiencia juridica em uma presenca digital que atrai e converte clientes."
- whatsappNumero (text): "5561992784283"
- whatsappMensagem (text): "Ola! Vim do site seusiteadvogados.com.br e gostaria de um orcamento."
- whatsappLink (text): "https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20um%20or%C3%A7amento."
- contato (group):
  - telefone (text): "(61) 99278-4283"
  - email (email): "webpixelbr@gmail.com"
  - emailExemplo (text): "seu.nome@escritorio.com.br"
  - endereco (textarea): "SHIS, Quadra 06, Complexo Brasil 21 - Asa Sul, Brasilia - DF, 70316-000"
  - googleMapsLink (text): "https://maps.app.goo.gl/M94VKFhYA82yiMBdA"
- preco (group):
  - valor (text): "3x de R$ 285,00"
  - descricao (text): "A partir de"

---

## PASSO 4: Registrar no payload.config.ts

```typescript
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Paginas } from './collections/Paginas'
import { Servicos } from './collections/Servicos'
import { Portfolio } from './collections/Portfolio'
import { Blog } from './collections/Blog'
import { CategoriasBlog } from './collections/CategoriasBlog'
import { FAQ } from './collections/FAQ'
import { Depoimentos } from './collections/Depoimentos'
import { Cidades } from './collections/Cidades'

// Globals
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import { SiteSettings } from './globals/SiteSettings'

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' | Seu Site Advogados',
    },
  },
  collections: [Users, Media, Paginas, Servicos, Portfolio, Blog, CategoriasBlog, FAQ, Depoimentos, Cidades],
  globals: [Header, Footer, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./database.db',
    },
  }),
})
```

---

## PASSO 5: Frontend (Paginas)

O frontend fica em `src/app/(frontend)/`. Usar Next.js App Router + Tailwind CSS.

### Design System / Estilo Visual

Estilo inspirado na imagem de referencia: layout premium para escritorio de advocacia com tom escuro elegante, detalhes dourados, e visual que transmite confianca e autoridade juridica.

```css
/* Cores do Layout Premium */
--cor-fundo: #ffffff;
--cor-fundo-escuro: #162a2a;
--cor-fundo-secao: #eaecec;
--cor-texto-principal: #162a2a;
--cor-texto-secundario: #593e2e;
--cor-texto-claro: #ffffff;
--cor-cta-primario: #de7322;
--cor-cta-hover: #ba5918;
--cor-dourado: #b58c61;
--cor-verde: #83b440;
--cor-mostarda: #e99f45;
--cor-borda: #e0e0e0;
```

Caracteristicas visuais:
- Layout premium, escuro com detalhes dourados
- Secoes alternando entre fundo escuro (#162a2a) e branco
- Cards com bordas douradas sutis (#b58c61)
- Botoes CTA em laranja (#de7322) - alta visibilidade para conversao
- Tipografia Lexend em todos os elementos
- Icones com Lucide React
- Animacoes sutis no scroll (fade-in, slide-up)
- Imagens com overlay escuro e texto sobre elas
- Responsivo mobile-first
- Botao flutuante WhatsApp sempre visivel
- Micro-interacoes nos hovers (scale, color transitions)

### Pagina Home (src/app/(frontend)/page.tsx)

Titulo: "Site para Advogados e Escritorio de Advocacia Personalizado"
Meta Description: "Especialistas em criacao de site para advogados. Transforme sua experiencia juridica em uma presenca digital que atrai e converte clientes."

Secoes na ordem:

1. **HEADER FIXO:**
   - Logo "Seu Site Advogados" (esquerda)
   - Menu de navegacao central
   - Botao CTA "Solicite um orcamento" (direita, laranja #de7322)
   - Fundo escuro #162a2a com transparencia no scroll

2. **HERO SECTION (full-screen):**
   - Fundo escuro #162a2a com imagem de fundo (escritorio juridico) e overlay
   - Badge: "Seu Consultor Digital"
   - H1: "Site para Advogados: Destaque sua historia juridica no mundo digital"
   - Texto: "Somos especialistas em criacao de sites para advogados e SEO avancado, oferecendo o mesmo cuidado que voce dedica aos seus casos."
   - Texto: "Do primeiro processo ate a consolidacao da sua marca, conte com uma presenca online solida."
   - Preco: "A partir de 3x de R$ 285,00"
   - Botao CTA: "Solicite um orcamento gratis" (laranja #de7322, link WhatsApp)
   - Elemento decorativo dourado (#b58c61)

3. **SECAO "Desenvolvimento de sites para advogados" (fundo branco):**
   - Imagem lado esquerdo (advogado trabalhando)
   - H2: "Desenvolvimento de sites para advogados"
   - Texto: "No cenario atual, seu site juridico e tao essencial quanto o escritorio fisico."
   - Texto: "Uma presenca online solida abre portas enquanto voce se dedica aos seus casos."
   - Subtitulo: "Por que investir?"
   - Lista com icones:
     - Reputacao e Credibilidade: seus potenciais clientes podem conhecer suas especialidades e conquistas antes mesmo do primeiro contato.
     - Maior Alcance: amplie suas fronteiras e atenda pessoas que procuram exatamente o seu tipo de servico.
     - Autoridade no Mercado: destaque-se da concorrencia e transmita profissionalismo no ambiente digital.
   - Botao: "Converse com um especialista agora" (link WhatsApp)
   - Contadores animados: +10K sites, +12 anos, +11K clientes, +20K projetos

4. **SECAO "Nossos Diferenciais" (fundo #162a2a):**
   - H2: "Nossos diferenciais"
   - 3 cards com bordas douradas:
     - Expertise web: "Nossa equipe e formada por profissionais que conhecem profundamente o universo juridico e sabem como traduzir sua atuacao em solucoes digitais eficientes."
     - Pacote sem preocupacoes: "Hospedagem, e-mail profissional e suporte continuo em um unico servico, permitindo que voce foque nos seus casos, enquanto cuidamos de toda a parte tecnica."
     - Atracao de clientes: "Criamos sites otimizados para gerar conversoes e aproximar seu escritorio das pessoas que precisam de seus servicos."

5. **SECAO "Advocacia Digital" (fundo branco):**
   - H2: "Advocacia digital: onde sua competencia encontra seus clientes"
   - Imagem lado direito
   - Texto: "Hoje, ao surgir qualquer duvida ou problema legal, o primeiro passo e uma busca online."
   - Texto: "Estar presente na internet nao e apenas tendencia, mas uma forma de construir confianca e credibilidade junto ao seu publico."
   - Subtitulo: "Vantagens de uma presenca digital estrategica:"
   - Lista com icones checkmark:
     - Acesso rapido a informacoes sobre seus servicos e areas de atuacao.
     - Confianca instantanea ao apresentar um site profissional e atualizado.
     - Conexao direta com potenciais clientes que precisam exatamente do que voce oferece.
   - Botao: "Quero fazer um site" (link WhatsApp)

6. **SECAO "Tecnologias e Facilidades" (fundo #eaecec):**
   - H2: "Tecnologias e facilidades em seu site"
   - Grid 3x3 de cards com icones:
     - Design responsivo: "Seu site se adapta perfeitamente a qualquer dispositivo."
     - Chat WhatsApp: "Conecte-se diretamente com potenciais clientes via WhatsApp e redes sociais."
     - Localizacao Estrategica: "Seu escritorio facilmente localizado no Google Maps."
     - Reputacao digital: "Exiba avaliacoes reais de clientes satisfeitos no Google."
     - E-mail corporativo: "Comunicacao profissional com endereco personalizado (seu.nome@escritorio.com.br)."
     - Protecao garantida: "Certificado SSL ativo, garantindo a seguranca dos dados."
     - Blog juridico: "Compartilhe sua expertise atraves de conteudo relevante."
     - Captura de leads: "Formulario profissional que direciona consultas diretamente para seu e-mail."
     - Hospedagem premium: "Infraestrutura robusta e confiavel. Velocidade e estabilidade 24h."

7. **SECAO "Portfolio" (fundo branco):**
   - H2: "Conheca nosso portfolio juridico"
   - Subtitulo: "Cases de sucesso que transformaram a presenca digital de advogados como voce."
   - Grid 2x2 de cards com imagem, nome do escritorio e link externo:
     - Ferreira & Mourao Advogados -> https://ferreiramourao.com/
     - Guilherme Bonfim Advocacia -> https://guilhermebonfim.com/
     - Bernardes Oshiro Advogados -> https://www.bernardesoshiro.com.br/
     - Marcio Bernardino Advocacia -> https://www.marciobernardinoadvogados.com.br/
   - Botao: "Ver portfolio completo" -> /portfolio

8. **SECAO "Por Que Todo Advogado Precisa" (fundo #162a2a):**
   - H2: "Por que todo advogado precisa de um site"
   - 4 cards com icones (fundo semi-transparente):
     - Visibilidade e credibilidade: "Um site opera como uma vitrine digital 24h, destacando sua trajetoria e especializacoes."
     - Facilidade de contato: "Formularios e chats integrados agilizam o atendimento."
     - Demonstracao de especializacao: "Mostre seus diferenciais de forma clara e profissional."
     - Vantagem competitiva: "Em um mercado cada vez mais digital, estar online e fundamental para se destacar."

9. **SECAO "Depoimentos" (fundo branco):**
   - H2: "O que nossos clientes dizem"
   - Carousel de depoimentos com foto, nome, cargo e texto
   - Estrelas de avaliacao douradas (#b58c61)

10. **SECAO "Formulario de Orcamento" (fundo #eaecec):**
    - H2: "Solicite seu orcamento"
    - Layout: formulario lado esquerdo, imagem/info lado direito
    - Campos: Nome, E-mail, Telefone com DDD, Assunto
    - Checkboxes (Qual o tipo site desejado?): Site institucional, Landing page, Blog, Outro
    - Textarea: Mensagem
    - Botao: "Enviar" (laranja #de7322)
    - Info lateral: telefone, email, endereco com mapa

11. **SECAO "Presenca Online" (fundo #162a2a):**
    - H2: "Presenca online: o diferencial para sua advocacia"
    - Subtitulo: "Marketing juridico estrategico: atraia clientes qualificados e destaque-se como referencia na sua area."
    - 3 cards:
      - Design Profissional: "Transmita seriedade e modernidade."
      - Conteudo Relevante: "Publique artigos, analises de casos e atualizacoes legais."
      - Navegacao Intuitiva: "Facilite o acesso as informacoes, gerando confianca imediata."

12. **SECAO "Blog" (fundo branco):**
    - H2: "Nossos artigos e atualizacoes"
    - Grid com 3 artigos mais recentes
    - Cards com imagem, titulo, data, resumo
    - Botao: "Ver todos os artigos" -> /blog

13. **SECAO "FAQ" (fundo #eaecec):**
    - H2: "Perguntas frequentes"
    - Accordion com as 6 perguntas/respostas listadas acima
    - Design clean com animacao de abertura

14. **SECAO "CTA Final" (fundo #162a2a com pattern decorativo):**
    - H2: "Pronto para transformar sua presenca digital?"
    - Texto: "Entre em contato agora e receba um orcamento personalizado."
    - Botao grande: "Fale conosco pelo WhatsApp" (verde #83b440)

15. **FOOTER:**
    - Fundo: #162a2a
    - Logo versao branca
    - Colunas: Paginas, Servicos, Contato, Localizacao
    - WhatsApp: (61) 99278-4283
    - E-mail: webpixelbr@gmail.com
    - Endereco: SHIS, Quadra 06, Complexo Brasil 21 - Asa Sul, Brasilia - DF, 70316-000
    - Links redes sociais
    - Copyright: "Seu Site Advogados. Todos os direitos reservados."
    - Google Maps embed

16. **BOTAO FLUTUANTE WHATSAPP:**
    - Fixo no canto inferior direito
    - Icone WhatsApp com pulse animation
    - Cor: #25D366
    - Link: https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20um%20or%C3%A7amento.

### Pagina Quem Somos (src/app/(frontend)/quem-somos/page.tsx)

Titulo: "Quem somos - Conheca mais sobre nos!"
Meta Description: "Conheca nosso escritorio: profissionais experientes e dedicados, oferecendo solucoes digitais personalizadas com etica e excelencia."

Conteudo:
- Imagem de destaque (quem-somos-1.webp)
- H1: "Quem Somos"
- Textos:
  - "Bem-vindos ao nosso universo digital, onde transformamos a presenca online de profissionais do direito em algo extraordinario."
  - "Ha anos dedicamos nossa expertise ao desenvolvimento de websites exclusivos para advogados e escritorios juridicos."
  - "Nao somos apenas mais uma empresa de tecnologia - somos parceiros comprometidos com o seu sucesso profissional."
  - "Desenvolvemos solucoes intuitivas que permitem que voce gerencie seu site com autonomia, sem complicacoes tecnicas."
  - "O que nos diferencia? Nossa equipe multidisciplinar."
  - "Contamos com profissionais apaixonados por inovacao, que entendem as particularidades do seu segmento."
  - "Oferecemos nao apenas um produto, mas uma consultoria completa para sua presenca digital."
  - "Acreditamos que tecnologia de ponta nao precisa ser complexa ou cara."
  - "Por isso, desenvolvemos planos acessiveis que cabem no seu orcamento, sem abrir mao da qualidade que voce merece."
  - "Nossa maior satisfacao? Ver seu escritorio crescer e conquistar mais clientes atraves de um site profissional e elegante."
  - "Ja ajudamos muitos profissionais do direito a construirem uma presenca digital solida e impactante."
  - "Estamos prontos para iniciar essa jornada com voce. Que tal darmos o primeiro passo juntos?"
- CTA: "Transforme sua presenca digital. Evolua conosco."
- Botao: "Quero fazer um site" (link WhatsApp)

### Pagina Portfolio (src/app/(frontend)/portfolio/page.tsx)

Titulo: "Confira nosso portfolio para advogados"
Meta Description: "Portfolio juridico com casos de sucesso. Conheca nossa experiencia em criar sites que convertem para advogados e escritorios."

- H1: "Portfolio juridico"
- Grid de cases com imagem, nome do escritorio e link
- Botao CTA: "Quero fazer um site" (link WhatsApp)

### Pagina Blog (src/app/(frontend)/blog/page.tsx)

Titulo: "Blog - Confira nossos conteudos juridicos"
Meta Description: "Descubra conteudos juridicos atualizados em nosso blog. Artigos especializados sobre Direito, analises e tendencias do mundo juridico."

- H1: "Blog"
- Grid de artigos com imagem, titulo, data, resumo, autor
- Paginacao
- Sidebar com categorias e busca

### Pagina Artigo Individual (src/app/(frontend)/blog/[slug]/page.tsx)

- Imagem de destaque
- H1: Titulo do artigo
- Data, autor
- Conteudo completo (richText)
- Tags
- Artigos relacionados
- CTA: "Precisa de um site? Fale conosco" (link WhatsApp)
- Botoes de compartilhamento (WhatsApp, Facebook, LinkedIn)

### Pagina FAQ (src/app/(frontend)/faq/page.tsx)

Titulo: "FAQ - Perguntas Frequentes"
Meta Description: "Encontre respostas para as perguntas mais frequentes sobre nossos servicos. Esclareca suas duvidas com profissionais especializados."

- H1: "Perguntas Frequentes"
- Accordion com perguntas e respostas
- Artigos do blog relacionados a FAQ
- CTA: "Ainda tem duvidas? Fale conosco" (link WhatsApp)

### Pagina Contatos (src/app/(frontend)/contatos/page.tsx)

Titulo: "Contatos - Fale Conosco"
Meta Description: "Entre em contato com nossa equipe especializada em sites juridicos. Atendimento personalizado para transformar sua presenca digital."

- H1: "Contatos"
- Layout: formulario lado esquerdo, informacoes lado direito
- Informacoes de contato:
  - WhatsApp: (61) 99278-4283
  - E-mail: webpixelbr@gmail.com
  - Endereco: SHIS, Quadra 06, Complexo Brasil 21 - Asa Sul, Brasilia - DF, 70316-000
- Google Maps embed
- Formulario: Nome, E-mail, Telefone, Assunto, Tipo de site, Mensagem
- Botao: "Enviar"

### Pagina Cidade (src/app/(frontend)/site-para-advogados/[slug]/page.tsx)

Landing pages de SEO local para cada cidade.

- H1: "Site para Advogados em [Cidade]"
- Conteudo personalizado por cidade
- Secao de servicos
- Portfolio
- FAQ
- CTA: "Solicite um orcamento" (link WhatsApp)

---

## PASSO 6: Componentes Reutilizaveis

Criar em `src/app/(frontend)/components/`:

- Header.tsx - Navegacao fixa com logo, menu, botao CTA, menu mobile hamburger
- Footer.tsx - Rodape com logo, menus, contato, mapa, redes sociais
- HeroSection.tsx - Hero full-screen com overlay, titulo, CTA
- SectionTitle.tsx - Titulo de secao com subtitulo e decoracao
- ServiceCard.tsx - Card de servico/diferencial com icone, titulo, descricao
- PortfolioCard.tsx - Card de portfolio com imagem, nome, link externo
- BlogCard.tsx - Card de artigo com imagem, titulo, data, resumo
- TestimonialCard.tsx - Card de depoimento com foto, nome, estrelas, texto
- FAQAccordion.tsx - Accordion de perguntas frequentes
- ContactForm.tsx - Formulario de contato/orcamento
- WhatsAppFloat.tsx - Botao flutuante do WhatsApp com pulse animation
- WhatsAppButton.tsx - Botao inline do WhatsApp para CTAs
- CounterSection.tsx - Contadores animados (sites, anos, clientes, projetos)
- TechGrid.tsx - Grid de tecnologias/facilidades com icones
- CTASection.tsx - Secao de chamada para acao
- Pagination.tsx - Componente de paginacao
- ShareButtons.tsx - Botoes de compartilhamento social
- GoogleMap.tsx - Embed do Google Maps

---

## PASSO 7: SEO e Performance

### SEO obrigatorio em todas as paginas:
- Meta title e description unicos
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags
- Schema markup (LocalBusiness, WebSite, FAQPage, BlogPosting)
- Sitemap XML automatico
- Canonical URLs
- Breadcrumbs
- Robots.txt otimizado
- Dados estruturados para FAQ (schema.org/FAQPage)
- Dados estruturados para artigos (schema.org/BlogPosting)

### Performance:
- Imagens otimizadas com next/image (todas ja em .webp)
- ISR (Incremental Static Regeneration) para paginas de conteudo
- Lazy loading de imagens abaixo do fold
- Core Web Vitals otimizados
- Font display swap para Lexend
- Minificacao de CSS/JS
- Cache otimizado

---

## PASSO 8: Rodar o Projeto

```bash
npm run dev
```

Acessar:
- Site: http://localhost:3000
- Admin: http://localhost:3000/admin

Criar usuario admin na primeira vez.

---

## Imagens do Site Atual (copiar do WordPress)

### Logos
- seu-site-advogados.webp (logo principal)
- seu-site-advogados-branco.webp (logo branca para fundos escuros)

### Paginas
- desenvolvimento-de-site-para-advogado.webp
- quem-somos-1.webp
- site-para-advogados.webp (OG image)

### Portfolio
- site-para-escritorio-de-advocacia-ferreira-e-mourao.webp
- site-para-advogado-iniciante-guilherme-bonfim-advocacia.webp
- site-para-advogado-autonomo-bernardes-oshiro-advogados-e-associados.webp
- criacao-de-site-para-advogado-e-escritorio-de-advocacia-marcio-bernardino-advocacia.webp
- ferreira-e-mourao.webp
- guilherme-bonfim-advocacia.webp
- bernardes-oshiro-advogados-e-associados.webp
- marcio-bernardino-advocacia.webp

Caminho no WordPress: wp-content/uploads/

---

## Informacoes da Empresa

- Nome: Seu Site Advogados
- Site: seusiteadvogados.com.br
- Segmento: Desenvolvimento de sites para advogados
- Localizacao: Brasilia - DF
- Endereco: SHIS, Quadra 06, Complexo Brasil 21 - Asa Sul, Brasilia - DF, 70316-000
- WhatsApp: (61) 99278-4283
- Link WhatsApp: https://wa.me/5561992784283?text=Ol%C3%A1%21%20Vim%20do%20site%20seusiteadvogados.com.br%20e%20gostaria%20de%20um%20or%C3%A7amento.
- E-mail: webpixelbr@gmail.com
- Google Maps: https://maps.app.goo.gl/M94VKFhYA82yiMBdA
- Preco: A partir de 3x de R$ 285,00
- Prazo: 15 a 30 dias

---

## Observacoes Importantes

1. O site e para CAPTAR CLIENTES ADVOGADOS - cada pagina deve ter CTAs claros para WhatsApp
2. Layout premium com tom escuro (#162a2a) e detalhes dourados (#b58c61) - transmitir sofisticacao
3. Fonte Lexend (Google Fonts) em todo o site
4. Banco de dados local SQLite (sem MongoDB) - futura hospedagem na Hostinger
5. Todas as imagens ja otimizadas em .webp - copiar do WordPress localhost
6. Botao flutuante de WhatsApp OBRIGATORIO em todas as paginas
7. Formulario de orcamento e ponto de conversao principal
8. SEO local com landing pages por cidade e muito importante para o negocio
9. Site responsivo, priorizar mobile
10. Animacoes sutis para engajamento (scroll animations, hover effects)
11. Conformidade com normas da OAB em todo conteudo
12. NUNCA usar travessao (--) no conteudo textual
13. Manter velocidade de carregamento como prioridade (Core Web Vitals)
