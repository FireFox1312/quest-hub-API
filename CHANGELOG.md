# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
