//Importação do express e do arquivo de rotas
import express from 'express';
import questRoute from './routes/quest-route.js';
import { logger } from './middlewares/logger.js';
import { notFound } from './middlewares/notFound.js';

//Objeto que vai conter todos o métodos do express
const app = express();

//Fará o parse dos dados para JSON
app.use(express.json());

//Utiliza o logger toda vez antes da requisição passar pela rota
app.use(logger);

//Rota para o endpoint /quests, que vai usar o router definido no arquivo quest-route.js
app.use('/quests', questRoute);

//Rota de Ping
app.get('/ping', (req,res)=>{
    res.status(200).json({status: 'OK'});
});

//Se passar por tudo chama o middleware responsável pelo erro de rota não encontrada
app.use(notFound);

//Exportação do app para ser usado no server.js
export default app;