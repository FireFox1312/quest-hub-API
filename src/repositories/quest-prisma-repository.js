import { RepositoryInterface } from './quest-repository.interface.js';
import prisma from '../database/prisma-client.js';

export class QuestPrismaRepository extends RepositoryInterface {

    async findById(id) {

        //Verifica se a quest existe no banco de dados
        const quest = await prisma.quest.findFirst({

            where: {
                id: id,
                deletedAt: null
            }

        });

        return quest;

    }

    async create(data) {

        const quest = await prisma.quest.create({

            data: {
                title: data.title,
                description: data.description,
                category: data.category,
                xp: data.xp,
                difficulty: data.difficulty,
                completed: data.completed || false,
                deletedAt: null,
                userId: data.userId
            }

        });

        return quest;
    }

    async update(id, data) {

        const quest = await prisma.quest.update({

            where: {
                id: id
            },

            data: {
                title: data.title,
                description: data.description,
                category: data.category,
                xp: data.xp,
                difficulty: data.difficulty,
                completed: data.completed,
                deletedAt: data.deletedAt
            }

        });

        return quest;
    }
    
    async delete(id) {

        const quest = await this.update(id, { deletedAt: new Date() });

        return quest;

    }

    async findAll(filters) {

        //Constroi o objeto de opções para a query (padrão)
        let questOptions = {

            where:{
                deletedAt: null
            }
    
        }

        if (filters.userId){//Se houver filtro de usuário, adiciona ao objeto de opções
            questOptions.where.userId = filters.userId;
        }

        if (filters.difficulty) {//Se houver filtro de dificuldade, adiciona ao objeto de opções
            questOptions.where.difficulty = filters.difficulty;

        }

        if (filters.completed) {//Se houver filtro de completada, adiciona ao objeto de opções
            questOptions.where.completed = filters.completed === 'true' ? true : false;
        }

        //Extrai os valores de paginação e limite do objeto de filtros, com valores padrão caso não existam
        const page = filters.page ? Number(filters.page) : 1;
        const limit = filters.limit ? Number(filters.limit) : 10;

        
        const quests = await prisma.quest.findMany({//Busca as quests com as opções de filtro, paginação e limite
            ...questOptions,
            skip: (page - 1) * limit,
            take: limit
        });

        const totalItens = await prisma.quest.count({//Conta o total de itens com as opções de filtro
            ...questOptions
        });

        return {//Retorna um objeto com as quests e o total de itens
            data: quests,
            meta: {
                totalItens: totalItens,
                currentPage: page,
                totalPages: Math.ceil(totalItens / limit),
                limit: limit
            }
        };

    }

}


