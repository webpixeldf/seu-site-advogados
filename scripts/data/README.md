# Geração automática de artigos

Sistema que publica 1 artigo no blog por dia em horário aleatório (08:00-18:00 BRT).

## Setup inicial (apenas uma vez)

### 1. Adicionar secrets no GitHub

Acesse: `github.com/webpixeldf/seu-site-advogados/settings/secrets/actions`

Clique em **"New repository secret"** e adicione 2 secrets:

| Nome | Valor |
|------|-------|
| `DEEPSEEK_API_KEY` | sua chave do DeepSeek |
| `UNSPLASH_ACCESS_KEY` | sua Access Key da Unsplash |

### 2. Confirmar permissões do GitHub Actions

Acesse: `github.com/webpixeldf/seu-site-advogados/settings/actions`

Em **"Workflow permissions"**:
- Selecione **"Read and write permissions"**
- Clique em "Save"

(Permite o bot fazer commit e push automaticamente.)

## Como funciona

- O cron roda a cada 30min entre 08:00 e 17:30 BRT.
- A cada execução, decide probabilisticamente se publica naquela janela.
- Probabilidade cresce com o passar do dia (10% às 8h, 95% às 17h).
- Após 17:30, força publicação para garantir 1 artigo/dia.
- Cada publicação tem horário `hh:mm:ss` único (controlado por `published-times.log`).

## Arquivos de controle

| Arquivo | Função |
|---------|--------|
| `topics.json` | Lista de temas a serem usados |
| `used-topics.json` | Temas já usados (não repete) |
| `anchor-pool.json` | Pool de variações de anchor text |
| `anchor-history.json` | Anchors já usados (não repete) |
| `published-times.log` | Horários hh:mm:ss já utilizados |

## Quando os temas acabarem

1. Adicione mais entradas em `topics.json`.
2. Faça commit + push.
3. Pronto, vai voltar a gerar.

Mesmo lógica para `anchor-pool.json` se as variações acabarem.

## Rodar manualmente

Em `github.com/webpixeldf/seu-site-advogados/actions`:

1. Selecione o workflow **"Geração diária de artigo"** na barra esquerda.
2. Clique em **"Run workflow"** (lado direito).
3. Marque `dry_run` como `true` se quiser apenas simular.
4. Clique em **"Run workflow"** verde.

## Localmente (apenas para testes)

```bash
DEEPSEEK_API_KEY=sk-... \
UNSPLASH_ACCESS_KEY=... \
DRY_RUN=1 \
node scripts/generate-article.mjs
```

`DRY_RUN=1` simula a execução sem escrever arquivos nem commitar.
