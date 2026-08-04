import { RepositoryInterface } from './quest-repository.interface.js';
import { initSqliteDatabase } from '../database/sqlite-init.js';

export class QuestSqliteRepository extends RepositoryInterface {

    constructor(db) {
        super();
        this.db = db; //Salva as conexões do banco de dados SQLite
    }

    static async create(quest) {
        //Inicia a conexão com o banco de dados SQLite
        const dbConnection = await initSqliteDatabase();
        //Injeta a conexão pronta para dentro da classe e devolve
        return new QuestSqliteRepository(dbConnection);

    }

}
