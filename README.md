# 📦 QuestHub API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v24.18.0-green?style=for-the-badge&logo=node.js" alt="Node.js Version" />
  <img src="https://img.shields.io/badge/Sprint%20Atual-Sprint%200-blue?style=for-the-badge&logo=git" alt="Sprint 0" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License" />
</p>

---

## 🎮 O que é a QuestHub?
Uma API REST desenvolvida para gerenciamento de desafios pessoais inspirados em mecânicas de jogos (RPG). O sistema permite que usuários criem e acompanhem missões (**Quests**), organizem objetivos por categorias, recebam experiência (**XP**), conquistas (**Badges**) e acompanhem sua evolução de nível.

Esta API está sendo desenvolvida de forma **incremental e pedagógica**, onde cada Sprint adiciona uma nova camada de arquitetura, segurança ou persistência sobre a versão anterior.

---

## 🚀 Status Atual: `Sprint 2` — Arquitetura da API
> ⚙️ **Foco da Sprint**: Migração para Express e organização do código em camadas de responsabilidade única (Router, Controller, Service, Repository).
- [ ] Migração do servidor HTTP nativo para o Express (em arquivo único)
- [ ] Criação do repositório isolado de dados em memória (`quest.repository.js`)
- [ ] Criação da camada de serviços para regras de negócio (`quest.service.js`)
- [ ] Criação da camada de controle de requisição/resposta (`quest.controller.js`)
- [ ] Isolamento de rotas com o Express Router (`quest.routes.js`)

---

## 🗺️ Roadmap de Evolução (Sprints)

| Status | Sprint | Descrição |
| :---: | :---: | :--- |
| ✅ | **Sprint 0** | Preparação de ambiente, repositório e estrutura inicial |
| ✅ | **Sprint 1** | Fundamentos HTTP em ESModules: Primeiros endpoints em memória (`/quests` e `quests/complete`) |
| 🟨 | **Sprint 2** | Refatoração em camadas e migração para Express(Router, Controller, Service, Repository(por enquanto em memória)) |
| ⬜ | **Sprint 3** | CRUD Completo + filtros, paginação e ordenação |
| ⬜ | **Sprint 4** | Validação de dados com Zod |
| ⬜ | **Sprint 5** | Sistema padronizado de tratamento de erros |
| ⬜ | **Sprint 6** | Banco de Dados: Integração com PostgreSQL & Prisma |
| ⬜ | **Sprint 7** | Autenticação e Autorização com JWT |
| ⬜ | **Sprint 8** | Segurança avançada (CORS, Helmet, Rate Limit) |
| ⬜ | **Sprint 9** | Middlewares de log e monitoramento de performance |
| ⬜ | **Sprint 10** | Documentação interativa com Swagger/OpenAPI |
| ⬜ | **Sprint 11** | Testes Unitários e de Integração |
| ⬜ | **Sprint 12** | Observabilidade estruturada e Health Check |

*(Legenda: ⬜ Não Iniciado | 🟨 Em Andamento | ✅ Concluído)*

---

## 🛠️ Tecnologias Utilizadas
* **Runtime**: Node.js
* **Framework**: Express (a partir da Sprint 2)
* **Banco de Dados**: PostgreSQL (a partir da Sprint 6)
* **ORM**: Prisma (a partir da Sprint 6)
* **Validação**: Zod (a partir da Sprint 4)

---

## 📂 Histórico e Evolução do Projeto

Para fins de aprendizado e documentação, o histórico de desenvolvimento foi preservado. Antes de utilizar o Express, esta API foi escrita inteiramente utilizando apenas os módulos nativos do Node.js. 

Você pode conferir a arquitetura original, incluindo os tratamentos manuais de streams e validações de rotas, acessando a pasta [📂 legacy/](./legacy).


---

## 🔧 Como Executar o Projeto (Futuro)
*Instruções de instalação e execução serão adicionadas nas próximas sprints.*