#!/bin/bash
# ============================================
# Gerador Automático de Artigos
# Roda 3x por dia: 8h, 13h, 18h (Brasília)
# ============================================

cd /opt/seu-site-advogados

# Log
LOG_DIR="/opt/seu-site-advogados/logs"
mkdir -p $LOG_DIR
LOG_FILE="$LOG_DIR/articles-$(date +%Y-%m-%d).log"

echo "" >> $LOG_FILE
echo "=== $(date '+%Y-%m-%d %H:%M:%S') ===" >> $LOG_FILE

# Rodar o gerador de artigos
npx tsx src/automation/generate-article.ts >> $LOG_FILE 2>&1

# Rebuild do site para incluir novo artigo
if [ $? -eq 0 ]; then
  echo "Rebuilding site..." >> $LOG_FILE
  npm run build >> $LOG_FILE 2>&1
  pm2 restart seu-site-advogados >> $LOG_FILE 2>&1
  echo "Deploy concluído!" >> $LOG_FILE
else
  echo "Erro na geração do artigo, build não executado." >> $LOG_FILE
fi

echo "=== FIM ===" >> $LOG_FILE
