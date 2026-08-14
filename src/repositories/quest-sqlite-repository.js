import { RepositoryInterface } from './quest-repository.interface.js';
import { initSqliteDatabase } from '../database/sqlite-init.js';

export class QuestSqliteRepository extends RepositoryInterface {

    constructor(db) {
        super();
        this.db = db; //Salva as conexões do banco de dados SQLite
    }

    static async create() {
        //Inicia a conexão com o banco de dados SQLite
        const dbConnection = await initSqliteDatabase();
        //Injeta a conexão pronta para dentro da classe e devolve
        return new QuestSqliteRepository(dbConnection);

    }

    async create(quest) {

        //Cria a query de inserção no banco de dados 
        const query = `INSERT INTO quests (title, description, category, xp, difficulty, completed, deletedAt) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        //Cria um array com os valores a serem inseridos no banco de dados 
        const values = [quest.title, quest.description, quest.category, quest.xp, quest.difficulty, quest.completed ? 1 : 0, quest.deletedAt || null];

        const result = await this.db.run(query, values);

        //Retorna a quest criada no banco de dados
        return await this.findById(result.lastID);

    }

    async findById(id) {

        //Cria a query de busca no banco de dados SQLite
        const query = `SELECT * FROM quests WHERE id = ? and deletedAt IS NULL`;
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

    async update(id, data) {
    
        //Verifica se a quest existe no banco de dados
        const quest = await this.findById(id);

        if (quest === null) {
            return null;
        }

        //Cria a query de atualização no banco de dados
        const query = `UPDATE quests SET title = COALESCE(?, title), description = COALESCE(?, description), category = COALESCE(?, category), xp = COALESCE(?, xp), difficulty = COALESCE(?, difficulty), completed = COALESCE(?, completed), deletedAt = COALESCE(?, deletedAt) WHERE id = ?`;

        //Cria um array com os valores a serem atualizados no banco de dados.
        const values = [
            data.title !== undefined ? data.title : null, 
            data.description !== undefined ? data.description : null, 
            data.category !== undefined ? data.category : null, 
            data.xp !== undefined ? data.xp : null, 
            data.difficulty !== undefined ? data.difficulty : null, 
            data.completed !== undefined ? Number(data.completed) : null, 
            data.deletedAt !== undefined ? data.deletedAt : null, 
            id
        ];

        //Executa a query de atualização no banco de dados SQLite
        await this.db.run(query, values);

        //Retorna a quest atualizada
        return await this.findById(id);

    }

    async delete(id) {
        //Atualiza o campo deletedAt da quest com a data atual, marcando-a como deletada
        await this.update(id, { deletedAt: new Date().toISOString() });

    }

    async findAll(filters) {

        //Cria a query de busca no banco de dados SQLite (usa let pois será reatribuída)
        let query = `SELECT * FROM quests WHERE deletedAt IS NULL`;
        let countQuery = `SELECT COUNT(*) as total FROM quests WHERE deletedAt IS NULL`;

        //Armazena os valores a serem usados na query de busca no banco de dados
        const values = [];

        if (filters) {//Verifica se existem filtros de busca

            //Adiciona filtros à query de busca no banco de dados
            if (filters.difficulty) {
                //Concatena a query de busca com o filtro de dificuldade
                query += ` AND difficulty = ?`;
                countQuery += ` AND difficulty = ?`;
                //Adiciona o valor do filtro de dificuldade ao array de valores
                values.push(filters.difficulty);
            }

            if (filters.completed !== undefined) {//Adiciona filtro de busca por completed, se existir
                //Concatena a query de busca com o filtro de completed
                query += ` AND completed = ?`;
                countQuery += ` AND completed = ?`;
                //Adiciona o valor do filtro de completed ao array de valores (1 para true, 0 para false)
                const completedValue = filters.completed === 'true' ? 1 : 0;
                values.push(completedValue);
            }
        
        }
        //Adiciona paginação à query de busca no banco de dados
        const limit = filters && filters.limit ? filters.limit : 10;
        //Calcula o offset com base na página atual e no limite de resultados por página
        const offset = parseInt(filters && filters.page ? (filters.page - 1) * limit : 0);

        //Concatena a query de busca com os parâmetros de paginação
        query += ` LIMIT ? OFFSET ?`;

        //Descobre o total de itens para o metadado (usando a countQuery sem limit/offset)
        const totalResult = await this.db.get(countQuery, values);
        const totalItens = totalResult.total;

        //Adiciona os valores de limite e offset ao array de valores da query principal
        values.push(limit, offset);

        //Executa a query de busca
        const rows = await this.db.all(query, values);

        //Formata os dados retornados do banco de dados para o formato correto
        const formattedData = rows.map(row => ({
            //Desestruturação do objeto row
            ...row,
            //Converte o valor de completed para booleano
            completed: Boolean(row.completed)
        }));

        //Calcula a página atual com base nos filtros fornecidos, se houver
        const page = filters && filters.page ? parseInt(filters.page) : 1;

        //Retorna no formato esperado pelo controller
        return {
            data: formattedData,
            meta: {
                totalItens: totalItens,
                currentPage: page,
                totalPages: Math.ceil(totalItens / limit),
                limit: limit
            }
        };

    }

}

