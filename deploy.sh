#!/bin/bash
# ============================================
# Deploy Script - Seu Site Advogados
# VPS: KingHost com HestiaCP
# ============================================

set -e

APP_DIR="/opt/seu-site-advogados"
APP_USER="seusiteadvogados"
DOMAIN="seusiteadvogados.com.br"
PORT=3000

echo "============================================"
echo "  Deploy - Seu Site Advogados"
echo "============================================"

# 1. Instalar Node.js 20 LTS (se nao tiver)
echo ""
echo "[1/8] Verificando Node.js..."
if ! command -v node &> /dev/null || [[ $(node -v | cut -d. -f1 | tr -d 'v') -lt 20 ]]; then
    echo "  Instalando Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
fi
echo "  Node.js: $(node -v)"
echo "  npm: $(npm -v)"

# 2. Instalar PM2 (se nao tiver)
echo ""
echo "[2/8] Verificando PM2..."
if ! command -v pm2 &> /dev/null; then
    echo "  Instalando PM2..."
    npm install -g pm2
fi
echo "  PM2: $(pm2 -v)"

# 3. Criar diretorio da aplicacao
echo ""
echo "[3/8] Configurando diretório..."
mkdir -p $APP_DIR
cd $APP_DIR

# 4. Criar arquivo .env
echo ""
echo "[4/8] Configurando variáveis de ambiente..."
if [ ! -f .env ]; then
    PAYLOAD_SECRET=$(openssl rand -hex 32)
    cat > .env << EOF
PAYLOAD_SECRET=$PAYLOAD_SECRET
DATABASE_URI=file:./database.db
NEXT_PUBLIC_SITE_URL=https://$DOMAIN
NODE_ENV=production
EOF
    echo "  .env criado com PAYLOAD_SECRET gerado automaticamente"
else
    echo "  .env já existe, mantendo configuração atual"
fi

# 5. Instalar dependencias
echo ""
echo "[5/8] Instalando dependências..."
npm install --production --legacy-peer-deps 2>&1 | tail -3

# 6. Build de producao
echo ""
echo "[6/8] Gerando build de produção..."
npm run build 2>&1 | tail -5

# 7. Iniciar com PM2
echo ""
echo "[7/8] Iniciando aplicação com PM2..."
pm2 delete seu-site-advogados 2>/dev/null || true
pm2 start npm --name "seu-site-advogados" -- start
pm2 save
pm2 startup 2>/dev/null || true

# 8. Verificar se está rodando
echo ""
echo "[8/8] Verificando..."
sleep 5
if curl -s -o /dev/null -w "%{http_code}" http://localhost:$PORT | grep -q "200"; then
    echo "  ✅ Site rodando na porta $PORT!"
else
    echo "  ⚠️  Site pode estar iniciando... Aguarde 30 segundos e teste:"
    echo "     curl http://localhost:$PORT"
fi

echo ""
echo "============================================"
echo "  Deploy concluído!"
echo ""
echo "  Próximos passos:"
echo "  1. Configure o domínio no HestiaCP"
echo "  2. Adicione o proxy reverso Nginx"
echo "  3. Ative o SSL com Let's Encrypt"
echo ""
echo "  Comandos úteis:"
echo "    pm2 status          - ver status"
echo "    pm2 logs            - ver logs"
echo "    pm2 restart all     - reiniciar"
echo "============================================"
