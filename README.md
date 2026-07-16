# 📦 QuestHub API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v24.18.0-green?style=for-the-badge&logo=node.js" alt="Node.js Version" />
  <img src="https://img.shields.io/badge/Sprint%20Atual-Sprint%202-blue?style=for-the-badge&logo=git" alt="Sprint 2" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License" />
</p>

---

## 🎮 O que é a QuestHub?
Uma API REST desenvolvida para gerenciamento de desafios pessoais inspirados em mecânicas de jogos (RPG). O sistema permite que usuários criem e acompanhem missões (**Quests**), organizem objetivos por categorias, recebam experiência (**XP**), conquistas (**Badges**) e acompanhem sua evolução de nível.

Esta API está sendo desenvolvida de forma **incremental e pedagógica**, onde cada Sprint adiciona uma nova camada de arquitetura, segurança ou persistência sobre a versão anterior.

---

## 🚀 Status Atual: `Sprint 2` — Arquitetura da API
> ⚙️ **Foco da Sprint**: Migração para Express e organização do código em camadas de responsabilidade única (Router, Controller, Service, Repository).
- [X] Migração do servidor HTTP nativo para o Express (em arquivo único)
- [X] Criação do repositório isolado de dados em memória (`quest.repository.js`)
- [X] Criação da camada de serviços para regras de negócio (`quest.service.js`)
- [X] Criação da camada de controle de requisição/resposta (`quest.controller.js`)
- [X] Isolamento de rotas com o Express Router (`quest.routes.js`)

---

## 🗺️ Roadmap de Evolução (Sprints)

| Status | Sprint | Descrição |
| :---: | :---: | :--- |
| ✅ | **Sprint 0** | Preparação de ambiente, repositório e estrutura inicial |
| ✅ | **Sprint 1** | Fundamentos HTTP em ESModules: Primeiros endpoints em memória (`/quests` e `quests/complete`) |
| ✅ | **Sprint 2** | Refatoração em camadas e migração para Express (Router, Controller, Service, Repository em memória) |
| ⬜ | **Sprint 3** | CRUD Completo, Paginação, Filtros e Middlewares Manuais (Logger e NotFound) |
| ⬜ | **Sprint 4** | Validação de dados com Zod, Middleware de Validação e CORS básico |
| ⬜ | **Sprint 5** | Sistema padronizado de Tratamento de Erros (AppError) e Helmet |
| ⬜ | **Sprint 6** | Persistência Local: Migração para JSON e Desafio SQLite nativo |
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

## 🔧 Como Executar o Projeto (Futuro)
*Instruções de instalação e execução serão adicionadas nas próximas sprints.*
