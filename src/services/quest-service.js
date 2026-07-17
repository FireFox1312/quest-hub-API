export class QuestService {
    constructor(questRepository) {
        //Iniciando a propriedade questRepository
        this.questRepository = questRepository;
    }
    //Retorna todas as quests
    getAll(filters) {
        return this.questRepository.findAll(filters);
    }

    //Retorna a quest pelo id
    getById(id) {
        //Busca pelo id e guarda a quest
        const quest = this.questRepository.findById(id);

        //Verifica se existe, se não existe lança um erro
        if(!quest) throw new Error('Quest não encontrada');
        
        return quest;

    }

    //Cria uma quest com as informações do body "data"
    create(data) {
        //Verifica se o título foi preenchido e é uma string
        if (!data.title || typeof data.title !== 'string') {
            throw new Error('O campo title é obrigatório e deve ser uma string');
        }
        
        //Retorna a quest criada
        return this.questRepository.create(data);
    }

    //Faz o update de uma quest
    update(id, data){
        //Busca a quest pelo id
        const quest = this.getById(id);

        //Retorna a quest atualizada
        return this.questRepository.update(quest.id, data);
    }

    //Altera para completa a quest passada
    complete(id){
        //Busca a quest pelo id
        const quest = this.getById(id);

        if(quest.completed){//Verifica se já está completada
            throw new Error('Quest já completada');
        }
        //Retorna a quest atualizada
        return this.questRepository.update(quest.id, {completed: true});
    }

    delete(id){
        //Busca a quest pelo id
        const quest = this.getById(id);

        return this.questRepository.delete(quest.id);
        
    }

}