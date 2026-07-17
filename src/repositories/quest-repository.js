
export class QuestRepository{
    constructor() {//Inicializando o array de quests e o contador de id
        this.quests = [];
        this.questId = 0;
    }
    
    findAll(filters) {//Método para retornar todas as quests que estejam ativas e aplica filtros, se ouver.

        //Filtra as quests que não foram deletadas
        let objQuest = this.quests.filter((quest) => quest.deleteAt === null);

        if(filters.difficulty){
            objQuest = objQuest.filter((quest) => quest.difficulty === filters.difficulty);
        }

        if(filters.completed){
            //Altera para verdadeiro (boleano) caso as string no query params for "true"
            filters.completed = filters.completed === 'true';
            objQuest = objQuest.filter((quest) => quest.completed === filters.completed);
        }

        if(objQuest.length === 0){
            return null;
        }

        //---- Paginação ----

        const page = filters.page;
        const limit = filters.limit;

        const startIndex = (page - 1) * limit;
        const totalItens = objQuest.length;

        objQuest = objQuest.slice(startIndex, startIndex + limit);

        const response = {
            data: objQuest,
            meta: {
                totalItens: totalItens,
                currentPage: page,
                totalPages: Math.ceil(totalItens / limit),
                limit: limit
            }
        }

        return response;
    }
    
    findById(id) {//Método para retornar uma quest pelo id, exceto se ela foi deletada
        //Busca a quest pelo id
        const objQuest = this.quests.find((quest) => quest.id === id);

        //Verifica se existe, se não existe já retorna null
        if(!objQuest) return null;

        //Retorna a quest se ela não for deletada, caso contrário retorna null
        return objQuest.deleteAt === null ? objQuest : null;
    }

    create(data) {//Método para criar uma nova quest
        const newQuest = {
            id: ++this.questId,
            title: data.title.trim(),
            description: typeof data.description === 'string' ? data.description.trim() : '',
            xp: data.xp ? Number(data.xp) : 0,
            difficulty: data.difficulty || 'easy',
            completed: typeof data.completed === 'boolean' ? data.completed : false,
            deleteAt: null
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

    delete(id) {//Método para deletar uma quest

        //Busca a quest pelo id
        const objQuest = this.findById(id);

        if(objQuest === null){//Verifica se existe no array
            return null;
        }
        else{//Se existe, chama o método update para alterar a propriedade deleteAt para a data atual
            return this.update(id, {deleteAt: new Date().toISOString()});
        }
    }

}