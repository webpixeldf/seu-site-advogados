#!/bin/bash
# ============================================
# Configurar cron job para 3 artigos por dia
# Horários: 8h, 13h, 18h (horário de Brasília)
# ============================================

# Definir timezone de Brasília
export TZ="America/Sao_Paulo"

# Remover cron jobs antigos do projeto
crontab -l 2>/dev/null | grep -v "generate-article" | crontab -

# Adicionar novos cron jobs (UTC-3 = Brasília)
# 8h BRT = 11h UTC
# 13h BRT = 16h UTC
# 18h BRT = 21h UTC
(crontab -l 2>/dev/null; echo "0 11 * * * /bin/bash /opt/seu-site-advogados/src/automation/run.sh") | crontab -
(crontab -l 2>/dev/null; echo "0 16 * * * /bin/bash /opt/seu-site-advogados/src/automation/run.sh") | crontab -
(crontab -l 2>/dev/null; echo "0 21 * * * /bin/bash /opt/seu-site-advogados/src/automation/run.sh") | crontab -

echo "Cron jobs configurados:"
crontab -l | grep "generate-article\|run.sh"

echo ""
echo "Horários (Brasília):"
echo "  08:00 - Artigo 1"
echo "  13:00 - Artigo 2"
echo "  18:00 - Artigo 3"
echo ""
echo "Logs em: /opt/seu-site-advogados/logs/"
