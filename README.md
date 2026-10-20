# Dalton Butke | Private Broker & Advisory Platform

Plataforma imobiliária completa de altíssimo padrão desenvolvida para o corretor **Dalton Butke (CRECI 48.912-F)**, baseada na identidade oficial do site `daltonbutke.com.br`, pronta para **GitHub**, **Vercel** e **Supabase**.

## Funcionalidades
- **Site Institucional Editorial**: Seções oficiais (*Alto padrão é um compromisso técnico antes de ser um endereço*, Tradição e Inovação na mesma planta, Pilares Técnicos de Engenharia).
- **Search Bar no Hero**: Filtros por tipo de imóvel, cidade e dormitórios com rolagem suave.
- **Landing Pages Isoladas (`/imovel/:slug`)**: Totalmente desacopladas, sem menus institucionais ou pontos de fuga, com plantas humanizadas e botão direto para o WhatsApp.
- **Painel Operacional (`/admin`)**: CRM de leads, gerenciador de landing pages por slug, roteiro de visitas com horários e integração de portais.
- **Supabase Ready**: Arquivo `supabase_schema.sql` incluído para criar tabelas no PostgreSQL do Supabase em 1 clique.
- **Vercel Ready**: Arquivo `vercel.json` configurado para SPA routing.

## Como Executar

### 1. Clonar e Instalar
```bash
npm install
npm run dev
```

### 2. Configurar o Supabase (Opcional para persistência real)
1. Crie um projeto no Supabase.
2. No SQL Editor do Supabase, execute o conteúdo do arquivo `supabase_schema.sql`.
3. Renomeie `.env.example` para `.env` e preencha suas chaves.

### 3. Deploy na Vercel
Basta conectar o repositório do GitHub na Vercel. O build Vite e o `vercel.json` cuidam do roteamento automático.
