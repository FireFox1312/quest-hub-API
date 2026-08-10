# 🛠️ Guia de Instalação e Comandos (QuestHub API)

Este documento centraliza todos os comandos necessários para clonar, instalar dependências, configurar o banco de dados e rodar o projeto do zero em uma máquina nova.

---

## 1. Instalação Básica

Clone o projeto para a sua máquina:
```bash
git clone https://github.com/FireFox1312/quest-hub-API.git
cd quest-hub-API
```

Instale as bibliotecas com o comando:

```bash
npm install
```

Caso queira instalar as bibliotecas uma a uma (para entender a stack), rode os comandos abaixo:

```bash
# 1. Framework e utilitários da API
npm install express dotenv cors helmet

# 2. Validação de dados
npm install zod

# 3. Bancos de dados e ORM (Dependencies)
npm install @prisma/client sqlite sqlite3

# 4. Ferramentas de Desenvolvimento (DevDependencies)
npm install --save-dev prisma @types/node

# 5. Ferramentas Globais de versionamento (Opcional)
npm install -g standard-version
```

---

## 2. Configuração de Variáveis de Ambiente

Como o arquivo `.env` não sobe para o GitHub (por segurança), você precisa criá-lo na máquina nova:

1. Copie o arquivo `.env.example` e renomeie a cópia para `.env`.
2. Configure as URLs do banco de dados (veja as opções no guia de testes abaixo).

---

## 3. Comandos do Prisma (Banco de Dados)

Toda vez que você baixar o projeto em um PC novo ou alterar o arquivo `schema.prisma`, você precisará rodar estes comandos:

```bash
# 1. Gera o Prisma Client (código JS/TS que conversa com o banco)
# Rode isso toda vez que clonar o projeto num PC novo
npx prisma generate

# 2. Aplica as migrations pendentes no banco de dados
# (No caso do SQLite, isso também cria o arquivo dev.db localmente)
npx prisma migrate dev
```

---

## 4. Rodando a Aplicação

Com as dependências instaladas e o Prisma gerado, basta ligar o servidor:

```bash
npm start
```
O servidor estará ouvindo em `http://localhost:3000`. Teste as rotas usando a extensão REST Client no VSCode com o arquivo `client.http`.
