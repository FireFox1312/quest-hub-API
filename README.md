# 📦 QuestHub API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v24.18.0-green?style=for-the-badge&logo=node.js" alt="Node.js Version" />
  <img src="https://img.shields.io/badge/Sprint%20Atual-Sprint%203-blue?style=for-the-badge&logo=git" alt="Sprint 3" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License" />
</p>

---

## 🎮 O que é a QuestHub?
Uma API REST desenvolvida para gerenciamento de desafios pessoais inspirados em mecânicas de jogos (RPG). O sistema permite que usuários criem e acompanhem missões (**Quests**), organizem objetivos por categorias, recebam experiência (**XP**), conquistas (**Badges**) e acompanhem sua evolução de nível.

Esta API está sendo desenvolvida de forma **incremental e pedagógica**, onde cada Sprint adiciona uma nova camada de arquitetura, segurança ou persistência sobre a versão anterior.

---

## 🚀 Status Atual: `Sprint 3` — CRUD, Paginação e Middlewares Básicos
> ⚙️ **Foco da Sprint**: Expandir as funcionalidades da API com paginação, filtros e introduzir o conceito de Middlewares manuais para interceptar requisições.
- [X] Implementação de exclusão (DELETE `/quests/:id`)
- [X] Implementação de paginação manual (Query Params: `page` e `limit`)
- [X] Implementação de filtros (Ex: listar apenas completadas ou ordenar por XP)
- [X] Criação de Middleware global de Logger (Registro de requisições no console)
- [X] Criação de Middleware de Fallback para rotas inexistentes (404 Not Found)

---

## 🗺️ Roadmap de Evolução (Sprints)

| Status | Sprint | Descrição |
| :---: | :---: | :--- |
| ✅ | **Sprint 0** | Preparação de ambiente, repositório e estrutura inicial |
| ✅ | **Sprint 1** | Fundamentos HTTP em ESModules: Primeiros endpoints em memória (`/quests` e `quests/complete`) |
| ✅ | **Sprint 2** | Refatoração em camadas e migração para Express (Router, Controller, Service, Repository em memória) |
| ✅ | **Sprint 3** | CRUD Completo (com Soft Delete), Paginação, Filtros e Middlewares Manuais (Logger e NotFound) |
| 🟨 | **Sprint 4** | Validação de dados com Zod, Middleware de Validação e CORS básico |
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
