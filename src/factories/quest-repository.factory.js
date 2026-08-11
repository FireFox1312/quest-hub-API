import { QuestPrismaRepository } from "../repositories/quest-prisma-repository.js";
import { QuestJsonRepository } from "../repositories/quest-json-repository.js";
import { QuestSqliteRepository } from "../repositories/quest-sqlite-repository.js";
import { QuestRepository } from "../repositories/quest-repository.js";

export class QuestRepositoryFactory {

    static async createRepository() {
        const driver = process.env.DB_DRIVER;

        switch (driver) {

            case "prisma":
                return new QuestPrismaRepository();

            case "sqlite":
                return await QuestSqliteRepository.create();
                    
            case "json":
                return new QuestJsonRepository();

            case "memory":
                return new QuestRepository();

            default:
                throw new Error(`Driver de banco de dados inválido: ${driver}`);
        }

    }

}
