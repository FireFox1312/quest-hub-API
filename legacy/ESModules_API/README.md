# 📂 Legacy Code (Código Legado)

Este diretório contém a primeira versão funcional da API, desenvolvida antes da migração para o framework Express. O objetivo de manter este arquivo aqui é preservar o histórico de evolução do projeto e servir como uma excelente referência técnica de como construir um servidor HTTP nativo robusto.

---

## 📄 Arquivo: `server.old.js`

Este arquivo contém uma API **totalmente funcional** de gerenciamento de Quests (Missões), construída em um único arquivo estruturado. A migração para o Express foi feita logo após consolidar esta lógica, antes da etapa de modularização do projeto.

### 🚀 Tecnologias e Recursos Utilizados
*   **Node.js** (Ambiente de execução)
*   **ESM (`import`)**: Utilizado para a importação nativa do módulo de rede (`node:http`).
*   **Módulo HTTP Nativo**: Criação do servidor (`createServer`) e escuta de requisições na porta 3000.

### 💡 O que foi implementado e consolidado nesta versão
O grande diferencial deste arquivo é a implementação manual de regras de negócio e validações que normalmente são delegadas a middlewares:

*   **Roteamento e Endpoints**: Mapeamento manual de verbos HTTP e caminhos para as rotas:
    *   `GET /ping` (Healthcheck)
    *   `GET /quests` (Listagem geral ou busca por ID via *Query Params*)
    *   `POST /quests` (Criação de novas missões)
    *   `PUT /quests` (Atualização completa/parcial via ID)
    *   `PUT /quests/complete` (Endpoint específico para alterar o status da missão)
*   **Manipulação de Streams (`req.on`)**: Captura manual de pedaços de dados (*chunks*) enviados no corpo das requisições `POST` e `PUT` para reconstruir o `body`.
*   **Validações Clínicas de Input**:
    *   Verificação de corpos de requisição vazios.
    *   Tratamento de erros para JSON mal formatado com blocos `try/catch`.
    *   Sanitização de strings usando `.trim()`.
    *   Garantia de tipos (ex: forçar o campo `xp` como `Number` e `completed` como `Boolean`).
*   **Gerenciamento de Estado**: Simulação de um banco de dados utilizando persistência em memória através de um array nativo (`quests`) com autoincremento de ID (`++questId`).

---

## 🔄 Motivo da Migração para o Express
Embora toda a lógica de validação, tratamento de erros (400, 404, 201, 200) e regras de negócio estejam funcionando perfeitamente, o projeto migrou para o **Express** para:
1. **Reduzir o Boilerplate**: Evitar repetir manualmente a captura de streams (`req.on('data')`) e o `JSON.parse` em cada rota que recebe dados.
2. **Escalabilidade**: Facilitar a quebra do código em arquivos separados (Rotas, Controllers, Modelos) utilizando o ecossistema pronto do Express.
3. **Padrão de Mercado**: Alinhar a estrutura do repositório com as práticas mais utilizadas em ambientes profissionais de desenvolvimento Node.js.
