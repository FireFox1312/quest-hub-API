
export class QuestRepository{
    constructor() {//Inicializando o array de quests e o contador de id
        this.quests = [];
        this.questId = 0;
    }
    
    findAll() {//Método para retornar todas as quests
        return this.quests;
    }
    
    findById(id) {//Método para retornar uma quest pelo id
        return this.quests.find((quest) => quest.id === id);
    }

    create(data) {//Método para criar uma nova quest
        const newQuest = {
            id: ++this.questId,
            title: data.title.trim(),
            description: typeof data.description === 'string' ? data.description.trim() : '',
            xp: data.xp ? Number(data.xp) : 0,
            difficulty: data.difficulty || 'easy',
            completed: typeof data.completed === 'boolean' ? data.completed : false
        }

        //Adiciona a nova quest no fim do array
        this.quests.push(newQuest);

        return newQuest;
    }

    update(id, data) {//Método para atualizar uma quest existente
        const index = this.quests.findIndex((quest) => quest.id === id);

        if(index === -1){//Verifica se existe no array
            return null;
        }

        //Sobreescreve e força o id original
        this.quests[index] = { 
            ...this.quests[index],
            ...data,
            id: this.quests[index].id 
        };

        return this.quests[index];
    }
}