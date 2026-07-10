import http from 'node:http';

//Array para armazenamento de Quests
const quests = [];

//Variável para indexar os elementos do array
let questId = 0;


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

            if(isNaN(ID)){// Verificação de incosistência de parâmetro
                res.writeHead(400, {'Content-type': 'application/json'});
                return res.end(JSON.stringify({message: 'ID inválido'}));
            }

            if(index === -1){//Verificação de id inexistênte na lista
                res.writeHead(404, {'Content-type': 'application/json'});
                return res.end(JSON.stringify({message: 'Quest não encontrada'}));
            }

            //Se tudo certo retorna a quest com id correspondente
            res.writeHead(200, {'Content-type': 'application/json'});
            return res.end(JSON.stringify(quests[index])); 
        }
        //Caso nenhum parâmetro foi passado, retorna a lista completa de quests
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(quests));

    }
    else if(req.method === 'POST' && url.pathname === '/quests'){
        //Variável para armazenar o corpo da requisição
        let body = '';

        //Executando cada pedaço de dados que chegam
        req.on('data', (chunk)=>{
            body += chunk;
        });

        req.on('end', ()=>{
            
            try{
                if(!body.trim()){//Breve validação de corpo vazio antes do parse
                    res.writeHead(400, {'Content-type': 'application/json'});
                    return res.end(JSON.stringify({message: 'Requisição vazia'}));
                }
                
                let data;

                try{//Teste de Parse bem sucedido
                    data = JSON.parse(body);
                } catch(parseError){
                    //Erro avisando que o body possue erro de formatação
                    res.writeHead(400, {'Content-type': 'application/json'});
                    return res.end(JSON.stringify({message: 'JSON mal formatado'}));
                }

                //Garante que existe, é string e não está vazia após o "trim"
                if(!data.title || typeof data.title !== 'string' || !data.title.trim()){// Validação do campo obrigatório "title"
                    res.writeHead(400, {'Content-type': 'application/json'});
                    return res.end(JSON.stringify({message: 'O campo title é obrigatório e deve ser uma string'}));
                }

                const newQuest = {//Criação do objeto quest com as chaves do modelo de negócio
                    id: ++questId ,
                    title: data.title.trim(),
                    description: typeof data.description === 'string' ? data.description.trim() : '',
                    xp: data.xp ? Number(data.xp) : 0,
                    difficulty: data.difficulty || 'easy',
                    completed: typeof data.completed === 'boolean' ? data.completed : false //default falso
                }
                //Adicionando no fim do array de armazenamento a nova quest
                quests.push(newQuest);

                res.writeHead(201, {'Content-type': 'application/json'});
                res.end(JSON.stringify(newQuest));

            }catch(error){//Em caso de erro 
                
                res.writeHead(400, {'Content-type': 'application/json'});
                res.end(JSON.stringify({error: 'Requisição inválida'}));

            }
        })


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
