//Importação do express e do arquivo de rotas
import express from 'express';
import questRoute from './routes/quest-route.js';
import { logger } from './middlewares/logger.js';
import { notFound } from './middlewares/not-found.js';
import { errorHandler } from './middlewares/error-handle.js';
import helmet from 'helmet';
import cors from 'cors';

//Configuração do CORS
const corsOptions = {
    origin: '*', // Permitir todas as origens
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
};

//Objeto que vai conter todos o métodos do express
const app = express();

//Utiliza o helmet para adicionar cabeçalhos de segurança às respostas HTTP
app.use(helmet());

//Fará o parse dos dados para JSON
app.use(express.json());

//Utiliza o logger toda vez antes da requisição passar pela rota
app.use(logger);

//Utiliza o middleware antes das rotas
app.use(cors(corsOptions));

//Rota para o endpoint /quests, que vai usar o router definido no arquivo quest-route.js
app.use('/quests', questRoute);

//Rota de Ping
app.get('/ping', (req,res)=>{
    res.status(200).json({status: 'OK'});
});

//Se passar por tudo chama o middleware responsável pelo erro de rota não encontrada
app.use(notFound);

//Tratamento de erro da API
app.use(errorHandler);

//Exportação do app para ser usado no server.js
export default app;