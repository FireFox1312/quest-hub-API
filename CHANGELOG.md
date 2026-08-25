# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.7.5](https://github.com/FireFox1312/quest-hub-API/compare/v0.7.0...v0.7.5) (2026-08-25)


### Features

* **auth:** enforce quest ownership verification and user isolation ([cb9130c](https://github.com/FireFox1312/quest-hub-API/commit/cb9130cfa9d2700c138c020b883146586630f4c7))
* **auth:** implement password complexity rules and decouple login schema ([ef1f386](https://github.com/FireFox1312/quest-hub-API/commit/ef1f386df5bf8d06389889d309264ecfd964004b))
* **config:** add environment variables validation with Zod on startup ([6a8d530](https://github.com/FireFox1312/quest-hub-API/commit/6a8d53018b56a348bd6dd1837678b76f62765f6a))
* **error:** add TooManyRequestsError (429) to AppError hierarchy ([8b16bc6](https://github.com/FireFox1312/quest-hub-API/commit/8b16bc632770035bf81b15b2b8e5966fed8d4a66))
* **security:** add global rate limiter and differentiated quest limits ([22e44e0](https://github.com/FireFox1312/quest-hub-API/commit/22e44e0b067c431a6302acec19547186527a2ebc))
* **security:** add rate limiting to auth routes (5 req/15min) ([e166c8c](https://github.com/FireFox1312/quest-hub-API/commit/e166c8c5251749f6bd3138b12f5a41a94694fc31))
* **security:** configure dynamic CORS origin whitelist via environment variables ([44f09b0](https://github.com/FireFox1312/quest-hub-API/commit/44f09b02bb276c04dedaaf0fe8c2629ecee87fec))
* **security:** customize helmet config and disable CSP for REST API ([790764e](https://github.com/FireFox1312/quest-hub-API/commit/790764e0fbb0b259b7b1076f66b8b7bf26eafb9e))
* **security:** limit JSON payload size to 10KB ([7295d94](https://github.com/FireFox1312/quest-hub-API/commit/7295d94432e4b39742ea7ea4d91a22fdaf0fd652))


### Bug Fixes

* **quest:** inject user ID in quest list filtering ([9ed3831](https://github.com/FireFox1312/quest-hub-API/commit/9ed3831d78163ae5ef1891b34f87f1c7b898f622))

## [0.7.0](https://github.com/FireFox1312/quest-hub-API/compare/v0.6.5...v0.7.0) (2026-08-19)


### Features

* **auth:** add auth controller, routes, and REST Client test scenarios ([5aca312](https://github.com/FireFox1312/quest-hub-API/commit/5aca312326ef971933f4b336c7132a4c1eeaca80))
* **auth:** add register and login validation schemas with Zod ([d5d7723](https://github.com/FireFox1312/quest-hub-API/commit/d5d77232ea434eade2a073bc3d5fa8526dad0ae7))
* **auth:** configure JWT environment and add UnauthorizedError class ([9e1ff29](https://github.com/FireFox1312/quest-hub-API/commit/9e1ff291cb02e09def2dd7b47dea9404697f55da))
* **auth:** implement AuthService with register and login logic ([c15566b](https://github.com/FireFox1312/quest-hub-API/commit/c15566bb788d3c2daacd870cbfc461061e6c148c))
* **auth:** implement JWT middleware to protect private routes ([70909d3](https://github.com/FireFox1312/quest-hub-API/commit/70909d38d77fce76290eb43414ce199cb267bc1b))
* **prisma:** add User model and 1:N relationship with Quest ([831b99c](https://github.com/FireFox1312/quest-hub-API/commit/831b99c8fd5bfb6f2625c3ee84c001af55923dbf))
* **quest:** bind user ID on quest creation and fix search parameter ([ff2e4fe](https://github.com/FireFox1312/quest-hub-API/commit/ff2e4fee2fc0416961eb779f11f7bc8298393297))


### Bug Fixes

* **auth:** remove unreachable soft-delete check in register method ([9408d6d](https://github.com/FireFox1312/quest-hub-API/commit/9408d6d29b05130ff60d0688ad4826b21eed81c9))
* **auth:** update prisma client import path in user repository ([bfe43e2](https://github.com/FireFox1312/quest-hub-API/commit/bfe43e2c9d0e61d4d12dbddd1c7be01e2366ea1e))
* **prisma:** correct PrismaPg import path in shared client ([ea214e4](https://github.com/FireFox1312/quest-hub-API/commit/ea214e4773879b5fcf4be04527aba9d7393fc0da))
* **schema:** update idParamSchema to validate UUID instead of number ([ba09561](https://github.com/FireFox1312/quest-hub-API/commit/ba0956112dac62d163311c8778ea5344f465e0a1))

### [0.6.5](https://github.com/FireFox1312/quest-hub-API/compare/v0.6.0...v0.6.5) (2026-08-11)


### Features

* config prisma orm and create initial schema ([c609000](https://github.com/FireFox1312/quest-hub-API/commit/c6090007f9d7b949fe9d79cc9b0c96e5cc804750))
* create quest repository factory ([56f4d26](https://github.com/FireFox1312/quest-hub-API/commit/56f4d26dc6bbd02e09cf176046b7f1c25ed5a507))
* implement QuestPrismaRepository with full CRUD ([109ef86](https://github.com/FireFox1312/quest-hub-API/commit/109ef863509cfa82a6c4d0d0d87871ef55d6512d))


### Bug Fixes

* make memory repository async and extends interface ([92c4083](https://github.com/FireFox1312/quest-hub-API/commit/92c4083628114cc1675362bec10b5a8e2e3c6d9e))
* remove sqlite artifacts and set postgresql as db provider ([af03644](https://github.com/FireFox1312/quest-hub-API/commit/af036449845cad594db0f0bbe97bb950df06405f))
* resolve PrismaClient initialization error on ESM ([7f071b9](https://github.com/FireFox1312/quest-hub-API/commit/7f071b916904ce8c3619aa5461c1d9aade23ed44))
* restore Sprint 6 persistence layer (revert the revert) ([183daae](https://github.com/FireFox1312/quest-hub-API/commit/183daae1cec9ae90a0fee270c7878d1d188a7b77)), closes [#14](https://github.com/FireFox1312/quest-hub-API/issues/14)

## [0.6.0](https://github.com/FireFox1312/quest-hub-API/compare/v0.5.5...v0.6.0) (2026-08-05)


### Features

* create and findById methods implemented ([13f65a5](https://github.com/FireFox1312/quest-hub-API/commit/13f65a52d52afc3d2cc4aa72fbc5eb585a78b4da))
* **database:** setup SQLite and initial schema ([448353e](https://github.com/FireFox1312/quest-hub-API/commit/448353ed0e71097bf37c4d1fe9350ba195e9bc57))
* **repository:** add QuestSqliteRepository skeleton with static factory ([d921feb](https://github.com/FireFox1312/quest-hub-API/commit/d921feb9afd6a23da4bc2fd6df06bfd36d2ccf54))
* **repository:** complete QuestSqliteRepository CRUD operations ([b581186](https://github.com/FireFox1312/quest-hub-API/commit/b581186b0dddfb1ff7b6e852d7f9ad4881115fa5))
* swap to QuestSqliteRepository ([565665e](https://github.com/FireFox1312/quest-hub-API/commit/565665eb171378d2fe40b85719fb21d89cb1dcd4))


### Bug Fixes

* Boolean conversion ([f97e584](https://github.com/FireFox1312/quest-hub-API/commit/f97e584a5335a2a46645ff657e1271dab1fd9b2c))

### [0.5.5](https://github.com/FireFox1312/quest-hub-API/compare/v0.5.0...v0.5.5) (2026-08-04)

### Features

* Addition of a JSON repository ([a74cd72](https://github.com/FireFox1312/quest-hub-API/commit/a74cd72777cf0e61520bc3309770e21fec62f6e0))
* **repository:** create Quest repository interface contract ([6ee76bb](https://github.com/FireFox1312/quest-hub-API/commit/6ee76bbf865f9b5eed10c21b99ce4118da76a3e0))
* **repository:** implement full QuestJsonRepository with file persistence ([4c5a790](https://github.com/FireFox1312/quest-hub-API/commit/4c5a7900a7c6465f46bb11ed7bcda6b9933df638))
* **routes:** inject QuestJsonRepository as main persistence ([19bdf21](https://github.com/FireFox1312/quest-hub-API/commit/19bdf21c1c48a84aafd9b8b8bb8aef2291eaeee6))

## [0.5.0](https://github.com/FireFox1312/quest-hub-API/compare/v0.4.6...v0.5.0) (2026-07-29)


### Features

* add asyncWrapper to controllers removing try-catch blocks ([1a43cac](https://github.com/FireFox1312/quest-hub-API/commit/1a43caca46ff3685a363a26c6b87449330e80c50))


### Bug Fixes

* add cors import and define corsOptions ([eb220db](https://github.com/FireFox1312/quest-hub-API/commit/eb220db7af75694c95279d3e236f3351dcfbb987))
* correct app-error import path and add missing dependencies (cors, zod) ([6b02ea3](https://github.com/FireFox1312/quest-hub-API/commit/6b02ea35d4dc657d50e1fe10c912041118d39efb))

## [0.4.6](https://github.com/FireFox1312/quest-hub-API/compare/v0.4.0...v0.4.6) (2026-07-28)

### Features

* add global error handler middleware ([479a901](https://github.com/FireFox1312/quest-hub-API/commit/479a9016b129b470cc4fd5dbde484778bcbef5b6))
* create custom AppError classes hierarchy ([16f939f](https://github.com/FireFox1312/quest-hub-API/commit/16f939f063b34780bd2af5cc9815f56cdcc0ca4d))

## [0.4.0](https://github.com/FireFox1312/quest-hub-API/compare/v0.3.0...v0.4.0) (2026-07-22)

### Features

* add strict mode and refine schemas ([927a860](https://github.com/FireFox1312/quest-hub-API/commit/927a8607dd555771dc7d0be3592cf337bb89d7bf))
* create quest validation schemas ([acca645](https://github.com/FireFox1312/quest-hub-API/commit/acca6457403521c0708e92949476f4baee9bd50f))
* created generic validation middleware ([de37f81](https://github.com/FireFox1312/quest-hub-API/commit/de37f81b1a7ca6e2db24f793999da656e265294f))

## [0.3.0](https://github.com/FireFox1312/quest-hub-API/compare/v0.2.0...v0.3.0) (2026-07-20)


### Features

* add 404 fallback middleware ([75b921b](https://github.com/FireFox1312/quest-hub-API/commit/75b921b202bef5d7b1a889f220114784463246b9))
* add global logger middleware ([fbb0605](https://github.com/FireFox1312/quest-hub-API/commit/fbb0605aebee6e1d922cf1eadc4c745f1f13b392))
* add pagination, metadata and filters to list endpoint ([f9e445c](https://github.com/FireFox1312/quest-hub-API/commit/f9e445cca540efda24cbee0e0818f1e1c1c072cc))
* add soft delete to quests ([1854c62](https://github.com/FireFox1312/quest-hub-API/commit/1854c6259337aed047e21a21ef8a4a1941467fdc))


### Bug Fixes

* resolve null reference on soft deleted quests and meta length ([8696aa7](https://github.com/FireFox1312/quest-hub-API/commit/8696aa78b46318666a549fe913bcd3a710051f94))

---

## [0.2.0]

### Features

* feat: setup express and new directory structure for sprint 2 ([fe6fd85])

### Code Refactoring

* refactor: separate routes ([b404516])
* refactor: add controllers ([6c094a5])

### Bug Fixes

* fix: Changed the declaration order. ([02e758d])

---

## [0.1.0]

### Features

* feat: verification at the /quests/complete endpoint ([0b0d941])
* feat: implemented PUT /quests/completed ([5e76fb3])
* feat: Implemented PUT /quests ([bc61231])
* feat: implemented POST /quests ([82893fd])
* feat: implement GET /quests ([6f413d2])
* feat: create server with ping endpoint ([7eaead3])

---

# 📄 Nota

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado no [Keep a Changelog](https://keepachangelog.com) e este projeto adere ao [Versionamento Semântico](https://semver.org).

---

*Nota: As versões anteriores a v0.1.0 representam a prova de conceito inicial desenvolvida estritamente com os módulos nativos do ecossistema Node.js.*
