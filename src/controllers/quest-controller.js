
export class QuestController{

    //Para a injeção de dependência correta e melhor divisão de responsabilidade
    //É usado constructor para não precisar referênciar um novo repository e para evitar erro de contextp usamos arrow function 

    constructor(questService){
        //Iniciando a propriedade questService
        this.questService = questService;
    }

    //Chama o service pra retornar a lista
    getControll = (req, res) => {
        const questList = this.questService.getAll();
        res.status(200).json(questList);
    }

    //Chama o service pra retornar a quest pelo id tratado
    searchControll = (req, res) => {
        //Pega o id da requisição e transforma em número
        const id = parseInt(req.params.id, 10);

        try{
            //Guarda a quest retornada pelo service
            const quest = this.questService.getById(id);
            res.status(200).json(quest);
        }
        catch(error){//Caso não exista a quest, retorna o erro lancado pelo service
            res.status(404).json({message: error.message});
        }
    }

    //Chama o service pra criar a quest com os dados do body
    postControll = (req, res) => {
        //Quarda as informações do body
        const data = req.body;

        try{
            //Guarda a quest criada pelo service
            const newQuest = this.questService.create(data);
            res.status(201).json(newQuest);
        }
        catch(error){//Caso não exista a quest, retorna o erro lancado pelo service
            res.status(400).json({message: error.message});
        }
    }

    //Chama o service pra atualizar a quest com os dados do body
    putControll = (req, res) => {
        //Pega o id da requisição e transforma em número
        const id = parseInt(req.params.id, 10);
        //Quarda as informações do body
        const data = req.body;
    
        try{
            //Guarda a quest atualizada pelo service
            const updatedQuest = this.questService.update(id, data);
            res.status(200).json(updatedQuest);
        }
        catch(error){//Caso não exista a quest, retorna o erro lancado pelo service
            res.status(404).json({message: error.message});
        }
    }

    //Chama o service pra completar a quest com o id passado
    completeControll = (req, res) => {
        //Pega o id da requisição e transforma em número
        const id = parseInt(req.params.id, 10);
    
        try{
            //Guarda a quest completada pelo service
            const completedQuest = this.questService.complete(id);
            res.status(200).json(completedQuest);
        }
        catch(error){//Caso não exista a quest, retorna o erro lancado pelo service
            res.status(400).json({message: error.message});
        }
    }
}