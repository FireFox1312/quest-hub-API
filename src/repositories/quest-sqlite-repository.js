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

    async createQuest(quest) {

        //Cria a query de inserção no banco de dados 
        const query = `INSERT INTO quests (title, description, category, xp, difficulty, completed, deleteAt) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        //Cria um array com os valores a serem inseridos no banco de dados 
        const values = [quest.title, quest.description, quest.category, quest.xp, quest.difficulty, parseInt(quest.completed), quest.deleteAt];

        const result = await this.db.run(query, values);

        //Retorna a quest criada no banco de dados
        return await this.findById(result.lastID);
         
    }

    async findById(id) {

        //Cria a query de busca no banco de dados SQLite
        const query = `SELECT * FROM quests WHERE id = ? and deleteAt IS NULL`;
        //Cria um array com os valores a serem usados na query de busca no banco de dados
        const values = [id];

        //Executa a query de busca no banco de dados SQLite e retorna o resultado
        const quest = await this.db.get(query, values);
        
        if (quest === undefined) {//Se não encontrar a quest, retorna null
            return null;
        }

        //Converte o valor de completed para booleano
        quest.completed = Boolean(quest.completed);

        //Retorna a quest encontrada no banco de dados
        return quest;

    }

}
