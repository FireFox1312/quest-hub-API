import express from 'express';

//Objeto que vai conter todos o métodos do express
const app = express();

const PORT = 3000;

//Fará o parse dos dados para JSON
app.use(express.json());

const quests = [];

let questId = 0;

//Rota de Ping
app.get('/ping', (req,res)=>{
    res.status(200).json({status: 'OK'});
});

//Rota de listagem de Quests
app.get('/quests', (req,res)=>{
    return res.status(200).json(quests);
});

//Rota de listagem por id
app.get('/quests/:id', (req,res)=>{
    //Quarda o id recebido e lê apenas na base 10
    const id = parseInt(req.params.id, 10);

    if(isNaN(id)){// Verifica se é um ID válido
        return res.status(400).json({message: 'ID inválido'});
    }

    const index = quests.findIndex((quest) => quest.id === id);

    if(index === -1){//Verifica se existe no array
        return res.status(404).json({message: 'Quest não encontrada'});
    }

    //Retorna a quest
    return res.status(200).json(quests.find((quest) => quest.id === id));

})

app.post('/quests', (req,res)=>{
    //Quarda as informações do body
    const data = req.body;

    //Verifica se p título foi preeenchido e é uma string
    if(!data.title || typeof data.title !== 'string'){
        return res.status(400).json({message: 'O campo title é obrigatório e deve ser uma string'});
    }

    //Cria uma nova quest com as propriedades preenchidas ou não (exceto o id)
    const newQuest = {
        id: ++questId,
        title: data.title.trim(),
        description: typeof data.description === 'string' ? data.description.trim() : '',
        xp: data.xp ? Number(data.xp) : 0,
        difficulty: data.difficulty || 'easy',
        completed: typeof data.completed === 'boolean' ? data.completed : false
    }

    //Adiciona a nova quest no fim do array
    quests.push(newQuest);

    return res.status(201).json(newQuest);
})

app.put('/quests/:id', (req,res)=>{

    const id = parseInt(req.params.id, 10);
    
    //Quarda o corpo da requisição
    const data = req.body;

    //Quarda a posição da quest 
    const index = quests.findIndex((quest) => quest.id === id);

    if(index === -1){//Verifica se existe no array
        return res.status(404).json({message: 'Quest não encontrada'});
    }

    //Sobreescreve e força o id original
    quests[index] = {
        ...quests[index],
        ...data,
        id: quests[index].id
    };

    return res.status(200).json(quests[index]);
})

app.put('/quests/:id/complete', (req,res)=>{
    const id = parseInt(req.params.id, 10);

    const index = quests.findIndex((quest) => quest.id === id);

    if(index === -1){//Verifica se existe no array
        return res.status(404).json({message: 'Quest não encontrada'});
    }

    if(quests[index].completed){//Verifica se está completa
        return res.status(400).json({message: 'Quest já completada'});
    }

    //Altera a quest para completada
    quests[index].completed = true;

    return res.status(200).json(quests[index]);
})

export default app;