# 📦 QuestHub API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v24.18.0-green?style=for-the-badge&logo=node.js" alt="Node.js Version" />
  <img src="https://img.shields.io/badge/Sprint%20Atual-Sprint%207-blue?style=for-the-badge&logo=git" alt="Sprint 7" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License" />
</p>

---

## 🎮 O que é a QuestHub?
Uma API REST desenvolvida para gerenciamento de desafios pessoais inspirados em mecânicas de jogos (RPG). O sistema permite que usuários criem e acompanhem missões (**Quests**), organizem objetivos por categorias, recebam experiência (**XP**), conquistas (**Badges**) e acompanhem sua evolução de nível.

Esta API está sendo desenvolvida de forma **incremental e pedagógica**, onde cada Sprint adiciona uma nova camada de arquitetura, segurança ou persistência sobre a versão anterior.

---

## 🚀 Status Atual: `Sprint 7` — Banco de Dados Profissional (PostgreSQL e Prisma ORM)
> ⚙️ **Foco da Sprint**: Substituir os bancos de dados locais por um sistema relacional robusto focado em produção. Implementaremos o PostgreSQL via Docker e usaremos o Prisma ORM para gerenciar o esquema e as conexões. Além disso, criaremos uma Factory para injetar dinamicamente o repositório adequado com base nas variáveis de ambiente.
- [x] Bloco 1: Setup do PostgreSQL com Docker e Configuração do Prisma
- [x] Bloco 2: Criação do Schema e Migrations
- [x] Bloco 3: Refatoração de IDs (UUID)
- [x] Bloco 4: Implementação do QuestPrismaRepository (CRUD)
- [x] Bloco 5: Padrão Factory (QuestRepositoryFactory)
- [x] Bloco 6: Refatoração do Composition Root (`quest-route.js`)
- [x] Bloco 7: Documentação e Release v0.7.0

---

## 🗺️ Roadmap de Evolução (Sprints)

| Status | Sprint | Descrição |
| :---: | :---: | :--- |
| ✅ | **Sprint 0** | Preparação de ambiente, repositório e estrutura inicial |
| ✅ | **Sprint 1** | Fundamentos HTTP em ESModules: Primeiros endpoints em memória (`/quests` e `quests/complete`) |
| ✅ | **Sprint 2** | Refatoração em camadas e migração para Express (Router, Controller, Service, Repository em memória) |
| ✅ | **Sprint 3** | CRUD Completo (com Soft Delete), Paginação, Filtros e Middlewares Manuais (Logger e NotFound) |
| ✅ | **Sprint 4** | Validação de dados rigorosa com Zod, Middleware Genérico e CORS básico |
| ✅ | **Sprint 5** | Sistema padronizado de Tratamento de Erros (AppError) e Helmet |
| ✅ | **Sprint 6** | Persistência Local: Migração para JSON e banco relacional com SQLite nativo |
| ✅ | **Sprint 7** | Banco de Dados Profissional: PostgreSQL, Prisma ORM e Container de Injeção de Dependência (Alternância entre Memory, JSON, SQLite e Prisma) |
| ⬜ | **Sprint 8** | Autenticação e Autorização com JWT |
| ⬜ | **Sprint 9** | Segurança avançada e Rate Limit |
| ⬜ | **Sprint 10** | Documentação interativa com Swagger/OpenAPI |
| ⬜ | **Sprint 11** | Middlewares avançados de log e monitoramento de performance |
| ⬜ | **Sprint 12** | Testes Unitários e de Integração |
| ⬜ | **Sprint 13** | Observabilidade estruturada e Health Check |
| ⬜ | **Sprint 14** | Infraestrutura e Deploy: Conteinerização da API |

*(Legenda: ⬜ Não Iniciado | 🟨 Em Andamento | ✅ Concluído)*

---

## 🛠️ Tecnologias Utilizadas
* **Runtime**: Node.js
* **Framework**: Express (a partir da Sprint 2)
* **Validação**: Zod (a partir da Sprint 4)
* **Bancos de Dados Iniciais**: JSON e SQLite (a partir da Sprint 6)
* **Bancos de Dados Profissionais**: PostgreSQL e Prisma ORM (a partir da Sprint 7)

---

## 📂 Histórico e Evolução do Projeto

Para fins de aprendizado e documentação, o histórico de desenvolvimento foi preservado. Antes de utilizar o Express, esta API foi escrita inteiramente utilizando apenas os módulos nativos do Node.js. 

Você pode conferir a arquitetura original, incluindo os tratamentos manuais de streams e validações de rotas, acessando a pasta [📂 legacy/](./legacy) ou conferindo as ``Releases``


---

## 🔧 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (v18 ou superior)
- Git
- Docker Desktop (para rodar o banco de dados localmente)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/FireFox1312/quest-hub-API.git
cd quest-hub-API
```

2. Instale as dependências do projeto:
```bash
npm install
```

3. Configure as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`, escolha o tipo de banco de dados e a conexão:

**- Porta de Execução**

```env
PORT=3000
```

**- Banco de Dados**

```env

# Database - Opções: "sqlite", "memory", "prisma"(PostgreSQL) e "json"
DB_DRIVER="prisma"

```

**- PostgreSQL Conexões:**

```env
# Formato Local (Docker)
DATABASE_URL="postgresql://root:rootpassword@localhost:5432/questhub"
```

```env

# Formato Nuvem (Supabase / Neon)

#--- método IPv4 (pooler) ---

# URL Transacional (Usa a porta 6543 e o domínio pooler.supabase.com)
#DATABASE_URL="postgresql://postgres.wevgfue...:SuaSenha@aws-0-sa-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# URL de Sessão / Migrations (Usa a porta 5432 e o domínio pooler.supabase.com)
#DIRECT_URL="postgresql://postgres.wevgfue...:SuaSenha@aws-0-sa-east-1.pooler.supabase.com:5432/postgres"

#--- método IPv6 (direta) ---

# URL Direta (Usa a porta 5432 e o domínio db.wevgfue...supabase.co)
#DATABASE_URL="postgresql://postgres.xxx:SuaSenha@aws-0-sa-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

#DIRECT_URL="postgresql://postgres.xxx:SuaSenha@aws-0-sa-east-1.pooler.supabase.com:5432/postgres"

```

4. Suba o banco de dados (PostgreSQL) e a interface gráfica (pgAdmin) utilizando o Docker (Em caso de escolha de PostgreSQL e conexão local):
```bash
docker-compose up -d
```

5. Crie as tabelas no banco de dados rodando as migrations do Prisma:
```bash
npx prisma migrate dev
```

### Executando a API

Após o banco estar rodando, inicie o servidor localmente na porta 3000:
```bash
npm start
```

Você pode testar a API utilizando a extensão **REST Client** no VSCode utilizando o arquivo `client.http` incluído no projeto.
