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

## 🚀 Status Atual: `Sprint 0` — Preparação do Ambiente
> ⚙️ **Foco da Sprint**: Configuração inicial do ambiente de desenvolvimento, repositório e Git.

- [x] Inicialização do repositório e Gitignore
- [x] Estruturação inicial do projeto
- [x] Configuração de ferramentas de qualidade (ESLint/Prettier)
- [x] Primeiro commit e push para o repositório remoto

---

## 🗺️ Roadmap de Evolução (Sprints)

| Status | Sprint | Descrição |
| :---: | :---: | :--- |
| 🟨 | **Sprint 0** | Preparação de ambiente, repositório e estrutura inicial |
| ⬜ | **Sprint 1** | Fundamentos HTTP: Primeiros endpoints em memória (`/quests`) |
| ⬜ | **Sprint 2** | Refatoração em camadas (Router, Controller, Service, Repository) |
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
* **Framework**: Express (a partir da Sprint 1)
* **Banco de Dados**: PostgreSQL (a partir da Sprint 6)
* **ORM**: Prisma (a partir da Sprint 6)
* **Validação**: Zod (a partir da Sprint 4)

---

## 🔧 Como Executar o Projeto (Futuro)
*Instruções de instalação e execução serão adicionadas nas próximas sprints.*