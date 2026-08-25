# 📦 QuestHub API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v24.18.0-green?style=for-the-badge&logo=node.js" alt="Node.js Version" />
  <img src="https://img.shields.io/badge/Sprint%20Atual-Sprint%209%20(Conclu%C3%ADda)-brightgreen?style=for-the-badge&logo=git" alt="Sprint 9 Concluída" />
  <img src="https://img.shields.io/badge/Vers%C3%A3o-v0.7.5-blue?style=for-the-badge" alt="Versão v0.7.5" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License" />
</p>

---

## 🎮 O que é a QuestHub?
Uma API REST desenvolvida para gerenciamento de desafios pessoais inspirados em mecânicas de jogos (RPG). O sistema permite que usuários criem e acompanhem missões (**Quests**), organizem objetivos por categorias, recebam experiência (**XP**), conquistas (**Badges**) e acompanhem sua evolução de nível.

Esta API está sendo desenvolvida de forma **incremental e pedagógica**, onde cada Sprint adiciona uma nova camada de arquitetura, segurança ou persistência sobre a versão anterior.

---

## 🚀 Status Atual: `Sprint 9` (Concluída) — Segurança Avançada & Hardening
> ⚙️ **Foco da Sprint**: Endurecer a segurança da API — CORS restritivo com whitelist, Helmet refinado, Rate Limiting multinível, Política de Senhas Fortes, Erros Granulares de JWT, Proteção Anti-DoS (Payload Limit) e Validação Fail-Fast de Variáveis de Ambiente via Zod.
- [x] Bloco 1: CORS Restritivo + Password Strength Policy
- [x] Bloco 2: Helmet a Fundo + Granular JWT Error Handling
- [x] Bloco 3: Rate Limiting + Desafio Diferenciado (GET vs POST)
- [x] Bloco 4: Segurança Teórica (SQL Injection, XSS, CSRF)
- [x] Bloco 5: Env Validation + Security Tests + Hardening Final

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
| 🟨 | **Sprint 10** | Documentação via Swagger/OpenAPI |
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
