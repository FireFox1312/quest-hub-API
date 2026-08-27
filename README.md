# 📦 QuestHub API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v24.18.0-green?style=for-the-badge&logo=node.js" alt="Node.js Version" />
  <img src="https://img.shields.io/badge/Sprint%20Atual-Sprint%2010%20(Em%20Andamento)-orange?style=for-the-badge&logo=git" alt="Sprint 10 Em Andamento" />
  <img src="https://img.shields.io/badge/Vers%C3%A3o-v0.7.5-blue?style=for-the-badge" alt="Versão v0.7.5" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License" />
</p>

---

## 🎮 O que é a QuestHub?
Uma API REST desenvolvida para gerenciamento de desafios pessoais inspirados em mecânicas de jogos (RPG). O sistema permite que usuários criem e acompanhem missões (**Quests**), organizem objetivos por categorias, recebam experiência (**XP**), conquistas (**Badges**) e acompanhem sua evolução de nível.

Esta API está sendo desenvolvida de forma **incremental e pedagógica**, onde cada Sprint adiciona uma nova camada de arquitetura, segurança ou persistência sobre a versão anterior.

---

## 🚀 Status Atual: `Sprint 10` (Em Andamento) — Documentação OpenAPI 3.0, Swagger & Governança (DX)
> ⚙️ **Foco da Sprint**: Documentar 100% da API com especificação OpenAPI 3.0 gerada via schemas Zod (Single Source of Truth), disponibilizar interfaces interativas no Swagger UI e Scalar UI, padronizar mensagens de erro via RFC 7807 (Problem Details), mapear headers de infraestrutura e garantir governança com linting automatizado (Spectral).

### 📦 Entregas & Blocos Planejados:
- **Entrega 1: Core & Zod (`feature/swagger-core`)**
  - [ ] Bloco 1: Setup Base Swagger UI (`/docs`), Spec Raw (`/docs/json`) e endpoint `/ping`
  - [ ] Bloco 2: Single Source of Truth — Integração Zod → OpenAPI (`@asteasolutions/zod-to-openapi`)
- **Entrega 2: Negócio & RFC 7807 (`feature/swagger-endpoints`)**
  - [ ] Bloco 3: Padronização RFC 7807 (Problem Details), Schemas de Erro (4xx/5xx), Security Scheme (Bearer JWT) e Headers
  - [ ] Bloco 4: Documentação dos Endpoints de Autenticação (`POST /auth/register`, `POST /auth/login`)
  - [ ] Bloco 5: Documentação dos Endpoints de Quests (CRUD, Paginação, Filtros, Transições de Estado e Idempotência)
- **Entrega 3: DX & Governança (`feature/swagger-dx`)**
  - [ ] Bloco 6: Visualizador Moderno com Scalar UI (`/docs/scalar`) e Customização Visual do Swagger UI (Tema RPG)
  - [ ] Bloco 7: Linter OpenAPI Automatizado (`@stoplight/spectral-cli`), Auditoria da Spec e Release v0.8.0

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
| ✅ | **Sprint 7** | Banco de Dados Profissional: PostgreSQL, Prisma ORM e Fábrica de Repositórios (Injeção Dinâmica) |
| ✅ | **Sprint 8** | Autenticação, Cadastro, Login, Hash de Senhas (Bcrypt), Proteção de Rotas com JWT e Autorização |
| ✅ | **Sprint 9** | Segurança Avançada, CORS Whitelist, Helmet, Rate Limit, Anti-DoS e Validação de Env com Zod |
| 🟨 | **Sprint 10** | Documentação Interativa (Swagger/Scalar UI), OpenAPI 3.0 (Zod to OpenAPI), RFC 7807 e Spectral Linter |
| ⬜ | **Sprint 11** | Middlewares próprios de logging e tempo de resposta |
| ⬜ | **Sprint 12** | Testes Unitários e de Integração |
| ⬜ | **Sprint 13** | Logging estruturado, Observabilidade e Health check |
| ⬜ | **Sprint 14** | Docker e Docker Compose para a API |
| ⬜ | **Sprint 15** | CI/CD Pipeline (GitHub Actions) e Deploy em Produção |

*(Legenda: ⬜ Não Iniciado | 🟨 Em Andamento / Próximo | ✅ Concluído)*

---

## 🛠️ Tecnologias Utilizadas
* **Runtime**: Node.js
* **Framework**: Express (a partir da Sprint 2)
* **Validação & Configuração**: Zod (Validação de schemas, senhas fortes e variáveis de ambiente com Fail-Fast)
* **Bancos de Dados Iniciais**: JSON e SQLite (a partir da Sprint 6)
* **Bancos de Dados Profissionais**: PostgreSQL e Prisma ORM (a partir da Sprint 7)
* **Autenticação & Criptografia**: JsonWebToken (JWT) e Bcrypt (a partir da Sprint 8)
* **Hardening & Segurança**: Helmet, CORS (Whitelist Dinâmica), Express-Rate-Limit e Payload Limiting (a partir da Sprint 9)
* **Documentação, Contratos & DX**: OpenAPI 3.0, Swagger UI (`swagger-ui-express`), Scalar UI (`@scalar/express-api-reference`), `@asteasolutions/zod-to-openapi` e Spectral CLI (`@stoplight/spectral-cli`) (a partir da Sprint 10)

---

## 📂 Histórico e Evolução do Projeto

Para fins de aprendizado e documentação, o histórico de desenvolvimento foi preservado. Antes de utilizar o Express, esta API foi escrita inteiramente utilizando apenas os módulos nativos do Node.js. 

Você pode conferir a arquitetura original, incluindo os tratamentos manuais de streams e validações de rotas, acessando a pasta [📂 legacy/](./legacy) ou conferindo as `Releases`.

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

3. Configure as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

**- Ambiente e Porta de Execução**
```env
PORT=3000
NODE_ENV="development"
ALLOWED_ORIGINS="http://localhost:3000,http://localhost:5173"
```

**- Configurações de Autenticação (JWT & Bcrypt)**
```env
JWT_SECRET="SuaPalavraChaveSecretaSuperSeguraComPeloMenos32Chars"
JWT_EXPIRES_IN="1d"
SALT_ROUNDS=10
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

4. Suba o banco de dados (PostgreSQL) e a interface gráfica (pgAdmin) utilizando o Docker (em caso de escolha de PostgreSQL e conexão local):
```bash
docker-compose up -d
```

5. Crie as tabelas no banco de dados rodando as migrations do Prisma:
```bash
npx prisma migrate dev
```

### Executando a API

Após o banco estar rodando, inicie o servidor localmente:
```bash
npm start
```

Você pode testar a API utilizando a extensão **REST Client** no VSCode através do arquivo `client.http` incluído no projeto.

### 📖 Documentação Interativa da API (OpenAPI / Swagger / Scalar)

Com a aplicação rodando, acesse a documentação interativa diretamente pelo navegador:

* **Swagger UI**: `http://localhost:3000/docs` (Interface clássica com autenticação Bearer JWT e execução direta)
* **OpenAPI Raw Spec (JSON)**: `http://localhost:3000/docs/json` (Contrato bruto para importação no Postman, Insomnia ou Bruno)
* **Scalar UI**: `http://localhost:3000/docs/scalar` (Interface moderna com geração automática de code snippets em várias linguagens)

Para validar a conformidade da especificação OpenAPI via linter:
```bash
npm run lint:docs
```
