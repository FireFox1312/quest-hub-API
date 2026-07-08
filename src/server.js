import http from 'node:http';
import { type } from 'node:os';


const PORT = 3000;
const server = http.createServer((req,res)=>{

    const url = new URL(req.url, `http://${req.headers.host}`); // pega a url


    if(req.method === 'GET' && url.pathname === '/ping'){

        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify({status: 'OK'}));

    }else {
        res.writeHead(404, {'Content-type': 'application/json'});
        res.end(JSON.stringify({message: 'Not Found'}));
    }

});

server.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
