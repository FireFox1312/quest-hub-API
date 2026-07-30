# 📦 QuestHub API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v24.18.0-green?style=for-the-badge&logo=node.js" alt="Node.js Version" />
  <img src="https://img.shields.io/badge/Sprint%20Atual-Sprint%205-blue?style=for-the-badge&logo=git" alt="Sprint 5" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License" />
</p>

---

## 🎮 O que é a QuestHub?
Uma API REST desenvolvida para gerenciamento de desafios pessoais inspirados em mecânicas de jogos (RPG). O sistema permite que usuários criem e acompanhem missões (**Quests**), organizem objetivos por categorias, recebam experiência (**XP**), conquistas (**Badges**) e acompanhem sua evolução de nível.

Esta API está sendo desenvolvida de forma **incremental e pedagógica**, onde cada Sprint adiciona uma nova camada de arquitetura, segurança ou persistência sobre a versão anterior.

---

## 🚀 Status Atual: `Sprint 5` — Tratamento de Erros e Segurança Básica
> ⚙️ **Foco da Sprint**: Padronizar e centralizar a captura e resposta de erros da aplicação utilizando uma hierarquia de erros customizada (AppError) e um middleware global, eliminando repetição de código. Além disso, preparar o terreno para código assíncrono (asyncWrapper) e blindar a API com o Helmet.
- [x] Bloco 1: A Fundação — Classes de Erro Customizadas (`utils/AppError.js`)
- [x] Bloco 2: O Guardião — Middleware Global de Erros (`error.middleware.js`)
- [x] Bloco 3: A Limpeza — Refatoração de Controllers e Services
- [x] Milestone de Release: Fim do Sincronismo Puro
- [x] Bloco 4: O Facilitador — Wrapper Async (`asyncWrapper`)
- [x] Bloco 5: A Armadura — Segurança Básica com `helmet`

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
| 🟨 | **Sprint 6** | Persistência Local: Migração para JSON e Desafio SQLite nativo |
| ⬜ | **Sprint 7** | Banco de Dados Profissional: Integração com PostgreSQL & Prisma ORM |
| ⬜ | **Sprint 8** | Autenticação e Autorização com JWT |
| ⬜ | **Sprint 9** | Segurança avançada e Rate Limit |
| ⬜ | **Sprint 10** | Middlewares avançados de log e monitoramento de performance |
| ⬜ | **Sprint 11** | Documentação interativa com Swagger/OpenAPI |
| ⬜ | **Sprint 12** | Testes Unitários e de Integração |
| ⬜ | **Sprint 13** | Observabilidade estruturada e Health Check |

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

Você pode conferir a arquitetura original, incluindo os tratamentos manuais de streams e validações de rotas, acessando a pasta [📂 legacy/](./legacy).


---

## 🔧 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (v18 ou superior)
- Git

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

3. Instale as ferramentas globais recomendadas (opcional, para geração automatizada de Changelog e Tags):
```bash
npm install -g standard-version
```

### Executando a API

Para rodar o servidor localmente na porta 3000:
```bash
npm start
```

Você pode testar a API utilizando a extensão **REST Client** no VSCode utilizando o arquivo `client.http` incluído no projeto.
