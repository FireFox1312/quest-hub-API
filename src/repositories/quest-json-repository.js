import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { RepositoryInterface } from './quest-repository.interface.js';

//Descobre onde o exato caminho do arquivo está sendo executado, para poder acessar o arquivo JSON
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Caminho absoluto do arquivo JSON que contém os dados das quests
const DATA_PATH = path.join(__dirname, '..', 'database', 'data.json');

export class QuestJsonRepository extends RepositoryInterface {
    
    static async create(){
        //Encapsula a criação da instância e a inicialização do banco de dados em um método estático para facilitar o uso da classe

        const repository = new QuestJsonRepository();//Cria uma nova instância da própria classe
        await repository._initDatabase();//Chama o método privado para inicializar o banco de dados
        return repository;//Retorna a instância criada

    }

    _readData = async () => {
        //Lê de forma assíncrona o arquivo e retorna o conteúdo como uma string.
        const data = await fs.readFile(DATA_PATH, 'utf-8');

        //Usando "JSON.parse" para converter a string JSON em um objeto JavaScript. 
        //Necessário para poder manipular os dados das quests como objetos em vez de strings.
        return JSON.parse(data);
    }

    _writeData = async (data) => {
        
        // Converte o objeto JavaScript de volta para uma string JSON formatada com 4 espaços de indentação.
        const stringJson = JSON.stringify(data, null, 4); 

        //Escreve de forma assíncrona a string JSON no arquivo, substituindo o conteúdo anterior.
        await fs.writeFile(DATA_PATH, stringJson, 'utf-8');

    }

    _initDatabase = async () => {
        try {// Verifica se o arquivo existe, se não existir, o catch será acionado e o arquivo será criado
        
            //Caso o arquivo não exista, o método "fs.access" lançará um erro, que será capturado pelo bloco "catch".
           await fs.access(DATA_PATH); 

        }
        catch (error) {
            //Se o arquivo não existir, cria um novo arquivo JSON com a estrutura inicial de dados.
            await this._writeData({ 
                quests: [],
                nextId: 1 
            });
        }
    }

    create = async (data) => {

        const db = await this._readData();//Lê os dados atuais do arquivo JSON

        const newQuest = {
            id: db.nextId++,
            title: data.title.trim(),
            description: typeof data.description === 'string' ? data.description.trim() : '',
            category: data.category,
            xp: data.xp ? Number(data.xp) : 0,
            difficulty: data.difficulty,
            completed: typeof data.completed === 'boolean' ? data.completed : false,
            deletedAt: null
        };

        db.quests.push(newQuest);//Adiciona a nova quest
        await this._writeData(db);//Escreve os dados atualizados no arquivo JSON

        return newQuest;//Retorna a nova quest criada
    }

    findAll = async (filters) => {
        const db = await this._readData();

        //Filtra as quests que não foram deletadas
        let filteredQuests = db.quests.filter(quest => quest.deletedAt === null);

        //Aplica os filtros de dificuldade
        if (filters.difficulty) {
            filteredQuests = filteredQuests.filter(quest => quest.difficulty === filters.difficulty);
        }

        //Aplica os filtros de completude
        if (filters.completed !== undefined) {
            const completed = filters.completed === 'true';
            filteredQuests = filteredQuests.filter(quest => quest.completed === completed);
        }
        
        //Aplica a paginação e calcula os metadados
        const page = filters.page || 1;
        const limit = filters.limit || 10;

        const startIndex = (page - 1) * limit;
        const totalItens = filteredQuests.length;

        filteredQuests = filteredQuests.slice(startIndex, startIndex + limit);

        const response = {
            data: filteredQuests,
            meta: {
                totalItens: totalItens,
                currentPage: page,
                totalPages: Math.ceil(totalItens / limit),
                limit: limit
            }
        };

        return response;
    }

    findById = async (id) => {
        //Lê os dados do arquivo JSON
        const db = await this._readData();
        //Busca a quest pelo id
        const quest = db.quests.find(quest => quest.id === id && quest.deletedAt === null);
        
        //Retorna a quest se ela não for deletada, caso contrário retorna null
        return quest || null;
    }

    update = async (id, data) => {

        const db = await this._readData();

        //Busca a quest pelo id
        const questIndex = db.quests.findIndex(quest => quest.id === id && quest.deletedAt === null);

        if (questIndex === -1) {//Se a quest não for encontrada ou estiver deletada, retorna null
            return null;
        }

        //Sobreescreve e força o id original para evitar adulteração
        db.quests[questIndex] = { 
            ...db.quests[questIndex], 
            ...data,
            id: db.quests[questIndex].id
        };

        //Escreve os dados atualizados no arquivo JSON
        await this._writeData(db);
        //Retorna a quest atualizada
        return db.quests[questIndex];
    }

    delete = async (id) => {

        //Busca a quest pelo id
        const quest = await this.findById(id);

        if (!quest) {
            return null;
        }

        await this.update(id, { deletedAt: new Date().toISOString() });

        return quest;

    }

}

