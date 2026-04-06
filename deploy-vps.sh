#!/bin/bash
# =============================================
#  DEPLOY COMPLETO - Seu Site Advogados
#  VPS Hostinger com HestiaCP
# =============================================
set -e

DOMAIN="seusiteadvogados.com.br"
APP_DIR="/opt/seu-site-advogados"
PORT=3000

echo ""
echo "================================================"
echo "  DEPLOY - Seu Site Advogados"
echo "  VPS Hostinger + HestiaCP"
echo "================================================"
echo ""

# ---- ETAPA 1: Node.js ----
echo "[1/7] Instalando Node.js 20..."
if ! command -v node &> /dev/null || [[ $(node -v | cut -d. -f1 | tr -d 'v') -lt 20 ]]; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
fi
echo "  OK: Node $(node -v) | npm $(npm -v)"

# ---- ETAPA 2: PM2 ----
echo ""
echo "[2/7] Instalando PM2..."
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
fi
echo "  OK: PM2 $(pm2 -v)"

# ---- ETAPA 3: Extrair projeto ----
echo ""
echo "[3/7] Extraindo projeto..."
cd /opt
if [ -f /root/seu-site-advogados-deploy.tar.gz ]; then
    tar -xzf /root/seu-site-advogados-deploy.tar.gz
    echo "  OK: Projeto extraído em $APP_DIR"
elif [ -d "$APP_DIR" ]; then
    echo "  OK: Projeto já existe em $APP_DIR"
else
    echo "  ERRO: Arquivo seu-site-advogados-deploy.tar.gz não encontrado em /root/"
    echo "  Envie o arquivo via FileZilla para /root/ e execute novamente."
    exit 1
fi

# ---- ETAPA 4: Variáveis de ambiente ----
echo ""
echo "[4/7] Configurando .env..."
cd $APP_DIR
if [ ! -f .env ]; then
    SECRET=$(openssl rand -hex 32)
    cat > .env << EOF
PAYLOAD_SECRET=$SECRET
DATABASE_URI=file:./database.db
NODE_ENV=production
EOF
    echo "  OK: .env criado"
else
    echo "  OK: .env já existe"
fi

# ---- ETAPA 5: Dependências + Build ----
echo ""
echo "[5/7] Instalando dependências (pode demorar 2-3 minutos)..."
npm install --legacy-peer-deps 2>&1 | tail -3
echo ""
echo "  Gerando build de produção (pode demorar 3-5 minutos)..."
npm run build 2>&1 | tail -10
echo "  OK: Build concluído"

# ---- ETAPA 6: PM2 ----
echo ""
echo "[6/7] Iniciando aplicação..."
pm2 delete seu-site-advogados 2>/dev/null || true
pm2 start npm --name "seu-site-advogados" -- start
pm2 save
pm2 startup systemd -u root --hp /root 2>/dev/null || true
echo "  OK: Aplicação iniciada"

# ---- ETAPA 7: Nginx Proxy ----
echo ""
echo "[7/7] Configurando Nginx proxy reverso..."

# Criar template customizado para HestiaCP
NGINX_CONF="/etc/nginx/conf.d/seusiteadvogados.conf"
cat > $NGINX_CONF << 'NGINXEOF'
server {
    listen 80;
    server_name seusiteadvogados.com.br www.seusiteadvogados.com.br;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 60s;
        proxy_send_timeout 60s;
        client_max_body_size 10M;
    }

    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    location /images/ {
        proxy_pass http://127.0.0.1:3000;
        expires 30d;
        add_header Cache-Control "public";
    }
}
NGINXEOF

# Testar e recarregar Nginx
nginx -t 2>&1 && systemctl reload nginx
echo "  OK: Nginx configurado"

# ---- VERIFICAÇÃO ----
echo ""
echo "Aguardando 5 segundos..."
sleep 5
STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:$PORT)
echo ""
echo "================================================"
if [ "$STATUS" = "200" ]; then
    echo "  ✅ SITE NO AR!"
    echo ""
    echo "  Local:  http://localhost:3000"
    echo "  Web:    http://$DOMAIN"
    echo ""
    echo "  Próximo passo:"
    echo "  - Configure o DNS do domínio para 72.61.54.96"
    echo "  - Ative SSL no HestiaCP ou execute:"
    echo "    apt install certbot python3-certbot-nginx -y"
    echo "    certbot --nginx -d $DOMAIN -d www.$DOMAIN"
else
    echo "  ⚠️  Status: $STATUS"
    echo "  O site pode estar iniciando. Aguarde 30s e teste:"
    echo "    curl http://localhost:3000"
    echo "    pm2 logs"
fi
echo ""
echo "  Comandos úteis:"
echo "    pm2 status       - ver se está rodando"
echo "    pm2 logs         - ver logs em tempo real"
echo "    pm2 restart all  - reiniciar"
echo "================================================"
