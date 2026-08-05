import { asyncWrapper } from "../utils/async-wrapper.js";

export class QuestController{

    //Para a injeção de dependência correta e melhor divisão de responsabilidade
    //É usado constructor para não precisar referênciar um novo repository e para evitar erro de contextp usamos arrow function 

    constructor(questService){
        //Iniciando a propriedade questService
        this.questService = questService;
    }

    //Chama o service pra retornar a lista
    getControll = asyncWrapper(async(req, res) => {
        //Guarda os filtros passados na URL
        const filters = req.query;

        const page = req.query.page ? parseInt(req.query.page, 10) : 1;

        const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;

        filters.page = page;
        filters.limit = limit;

        //Guarda a lista retornada pelo service
        const questList = await this.questService.getAll(filters);
        res.status(200).json(questList);
    })

    //Chama o service pra retornar a quest pelo id tratado
    searchControll = asyncWrapper(async(req, res, next) => {
        //Pega o id da requisição e transforma em número
        const id = parseInt(req.params.id, 10);

        //Guarda a quest retornada pelo service
        const quest = await this.questService.getById(id);
        res.status(200).json(quest);
        
    })

    //Chama o service pra criar a quest com os dados do body
    postControll = asyncWrapper(async(req, res, next) => {
        //Quarda as informações do body
        const data = req.body;

        //Guarda a quest criada pelo service
        const newQuest = await this.questService.create(data);
        res.status(201).json(newQuest);
        
    })

    //Chama o service pra atualizar a quest com os dados do body
    putControll = asyncWrapper(async(req, res, next) => {
        //Pega o id da requisição e transforma em número
        const id = parseInt(req.params.id, 10);
        //Quarda as informações do body
        const data = req.body;
        
        //Guarda a quest atualizada pelo service
        const updatedQuest = await this.questService.update(id, data);
        res.status(200).json(updatedQuest);
        
    })

    //Chama o service pra completar a quest com o id passado
    completeControll = asyncWrapper(async(req, res, next) => {
        //Pega o id da requisição e transforma em número
        const id = parseInt(req.params.id, 10);
        
        //Guarda a quest completada pelo service
        const completedQuest = await this.questService.complete(id);
        res.status(200).json(completedQuest);
        
    })

    deleteControll = asyncWrapper(async(req, res, next) => {
        //Pega o id da requisição e transforma em número
        const id = parseInt(req.params.id, 10);
       
        const deletedQuest = await this.questService.delete(id);
            
        res.status(204).send();
    
    })

    
}