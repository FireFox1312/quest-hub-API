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

}
