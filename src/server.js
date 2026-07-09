import http from 'node:http';

//Array para armazenamento de Quests
const quests = [{
    'id' : 1,
    'title' : 'mission 1',
    'description' : 'mission 1 a fazer',
    'difficulty' : 'hard',
    'xp' : 10,
    'status' : 'true'
},
{
    'id' : 2,
    'title' : 'mission 2',
    'description' : 'mission 2 a fazer',
    'difficulty' : 'medium',
    'xp' : 20,
    'status' : 'false'
}
];

//Variável para indexar os elementos do array
const questId = 1;


const PORT = 3000;
const server = http.createServer((req,res)=>{

    const url = new URL(req.url, `http://${req.headers.host}`); //Guarda a url

    //Endpoint de ping
    if(req.method === 'GET' && url.pathname === '/ping'){

        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify({status: 'OK'}));

    }
    //Endpoint de listagem do array "quests", com ou sem parâmetro (GET)
    else if(req.method === 'GET' && url.pathname === '/quests'){
        
        
        //Busca algum parâmetro na URL
        const idParam = url.searchParams.get('id');

        if(idParam !== null){//Verificação se foi passado algum parâmetro

            //Transformando em inteiro
            const ID = parseInt(idParam);
            //Guarda qual quest listar
            const index = quests.findIndex((quest) => quest.id === ID);

            if(isNaN(ID)|| index === -1){// Verificação de incosistência de parâmetro ou id inexistênte na lista
                res.writeHead(400, {'Content-type': 'application/json'});
                return res.end(JSON.stringify({message: 'ID inválido ou não existente'}));
            }

            //Se tudo certo retorna a quest com id correspondente
            res.writeHead(200, {'Content-type': 'application/json'});
            return res.end(JSON.stringify(quests[index])); 
        }
        //Caso nenhum parâmetro foi passado, retorna a lista completa de quests
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(quests));

    }
    //Tratamento de rota não encontrada
    else {
        res.writeHead(404, {'Content-type': 'application/json'});
        res.end(JSON.stringify({message: 'Not Found'}));
    }

});

server.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
