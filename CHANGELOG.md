# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.3.0](https://github.com/FireFox1312/quest-hub-API/compare/v0.2.0...v0.3.0) (2026-07-20)


### Features

* add 404 fallback middleware ([75b921b](https://github.com/FireFox1312/quest-hub-API/commit/75b921b202bef5d7b1a889f220114784463246b9))
* add global logger middleware ([fbb0605](https://github.com/FireFox1312/quest-hub-API/commit/fbb0605aebee6e1d922cf1eadc4c745f1f13b392))
* add pagination, metadata and filters to list endpoint ([f9e445c](https://github.com/FireFox1312/quest-hub-API/commit/f9e445cca540efda24cbee0e0818f1e1c1c072cc))
* add soft delete to quests ([1854c62](https://github.com/FireFox1312/quest-hub-API/commit/1854c6259337aed047e21a21ef8a4a1941467fdc))


### Bug Fixes

* resolve null reference on soft deleted quests and meta length ([8696aa7](https://github.com/FireFox1312/quest-hub-API/commit/8696aa78b46318666a549fe913bcd3a710051f94))

# 📄 Changelog

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado no [Keep a Changelog](https://keepachangelog.com) e este projeto adere ao [Versionamento Semântico](https://semver.org).

---

## [Unreleased]
### 🚀 Adicionado (Added)
* *(Deixe este espaço reservado. Conforme você for criando as features da Sprint 3, vá listando-as aqui)*

---

## 🏷️ [v0.2.0] — Sprint 2
> **Data:** 16 de Julho de 2026  
> **Foco:** Arquitetura Modular, Injeção de Dependências e Padrões RESTful.

### ✨ Adicionado (Added)
*   **Arquitetura em Camadas**: Estruturação completa do projeto baseada no princípio de Responsabilidade Única (SRP), dividindo a aplicação nas pastas `/routes`, `/controllers`, `/services` e `/repositories`.
*   **Injeção de Dependências**: Implementação da injeção de dependência manual via construtores, garantindo forte desacoplamento entre a camada de regras de negócio e o protocolo HTTP.
*   **Express Router**: Configuração de roteadores modulares (ex: `quest-route.js`) para isolar os domínios da aplicação, centralizando a montagem das instâncias da API.

### 🔄 Alterado (Changed)
*   **Desacoplamento de Servidor**: Divisão do arquivo monolítico em dois. O `app.js` agora lida estritamente com as configurações do Express, enquanto o `server.js` é o entry point isolado para a porta HTTP.
*   **Padrão de Rotas (Restful API)**: Atualização dos endpoints `PUT` e `GET` para adoção de *Route Params* (ex: `/quests/:id/complete`), substituindo o modelo antigo baseado em *Query Params*.
*   **Ambiente de Testes HTTP**: Atualização do arquivo `client.http` para compatibilidade imediata com as novas rotas, arquitetura e parâmetros do Express.
*   **Isolamento de Código Legado**: Transferência do core nativo (`server.old.js`) para o diretório `/legacy`, acompanhado de documentação dedicada para preservação do histórico de aprendizado original.

---

## 🏷️ [v0.1.0] — Sprint 1
> **Data:** 06 de Julho de 2026  
> **Foco:** Fundamentos HTTP e Criação da API Nativa.

### 🚀 Adicionado (Added)
*   **Endpoint GET /ping**: Rota de healthcheck para validação rápida do status de inicialização do servidor.
*   **Endpoint GET /quests**: Rota nativa para listagem geral de missões ou busca filtrada por ID via Query Parameters.
*   **Endpoint POST /quests**: Rota de criação com tratamento manual de streams de dados direto no core do código e validações clínicas de campos.
*   **Endpoint PUT /quests**: Rota de atualização com aplicação de mesclagem parcial de dados utilizando o operador Spread (`...`).
*   **Endpoint PUT /quests/completed**: Rota específica para alteração e controle do status de conclusão da missão.
*   **Arquivo client.http**: Implementação de automação para testes locais rápidos de todas as rotas diretamente pelo editor.

---

*Nota: As versões anteriores a v0.1.0 representam a prova de conceito inicial desenvolvida estritamente com os módulos nativos do ecossistema Node.js.*

<!-- LINKS DE COMPARAÇÃO DO GITHUB -->
[Unreleased]: https://github.com
[v0.2.0]: https://github.com
[v0.1.0]: https://github.com
