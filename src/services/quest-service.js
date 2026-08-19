import { AppError, NotFoundError, ValidationError, ConflictError, ForbiddenError } from "../utils/app-error.js";

export class QuestService {

    async _ensureOwnership(questId, userId) {

        const quest = await this.questRepository.findById(questId);

        if (!quest) {
            throw new NotFoundError('Quest não encontrada');
        }

        if (quest.userId !== userId) {
            throw new ForbiddenError('Acesso negado');
        }

        return quest;

    }

    constructor(questRepository) {
        //Iniciando a propriedade questRepository
        this.questRepository = questRepository;
    }
    //Retorna todas as quests
    async getAll(filters) {
        return await this.questRepository.findAll(filters);
    }

    //Retorna a quest pelo id
    async getById(id, userId) {
        
        const quest = await this._ensureOwnership(id, userId)

        //Verifica se existe, se não existe lança um erro
        if(!quest) throw new NotFoundError('Quest não encontrada');
        
        return quest;

    }

    //Cria uma quest com as informações do body "data"
    async create(data) {
        //Retorna a quest criada
        return await this.questRepository.create(data);
    }

    //Faz o update de uma quest
    async update(id, data, userId) {
        //Busca a quest pelo id
        const quest = await this._ensureOwnership(id, userId);

        //Retorna a quest atualizada
        return await this.questRepository.update(quest.id, data);
    }

    //Altera para completa a quest passada
    async complete(id, userId) {
        //Busca a quest pelo id
        const quest = await this._ensureOwnership(id, userId);

        if(quest.completed){//Verifica se já está completada
            throw new ValidationError('Quest já completada');
        }
        //Retorna a quest atualizada
        return await this.questRepository.update(quest.id, {completed: true});
    }

    async delete(id, userId){
        //Busca a quest pelo id
        const quest = await this._ensureOwnership(id, userId);

        return await this.questRepository.delete(quest.id);
        
    }

}
