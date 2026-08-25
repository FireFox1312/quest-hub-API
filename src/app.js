//Importação do express e do arquivo de rotas
import express from 'express';
import authRoute from './routes/auth-route.js';
import questRoute from './routes/quest-route.js';
import { logger } from './middlewares/logger.js';
import { notFound } from './middlewares/not-found.js';
import { errorHandler } from './middlewares/error-handle.js';
import helmet from 'helmet';
import cors from 'cors';
import { authMiddleware } from './middlewares/auth.js';
import 'dotenv/config';
import { rateLimit } from 'express-rate-limit';
import { TooManyRequestsError } from './utils/app-error.js';
import env from './config/env.js';

//Configuração do CORS

const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim()) : [];


const corsOptions = {
    origin: (origin, callback) => {

        if (!origin || allowedOrigins.includes(origin)) {// Permite requisições sem origem (Postman, curl, etc.) ou se a origem estiver na lista de permitidas
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }

    }, // Origens permitidas
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    optionsSuccessStatus: 200 // Status de sucesso para requisições OPTIONS
};

const globalRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Limite de 100 requisições por IP
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    handler: (req, res, next) => {// Passa o erro para o middleware de tratamento de erros
        next(new TooManyRequestsError('Muitas requisições feitas a partir deste IP, por favor tente novamente mais tarde.'));
    }
});

//Objeto que vai conter todos o métodos do express
const app = express();

//Utiliza o helmet para adicionar cabeçalhos de segurança às respostas HTTP
app.use(helmet({
    contentSecurityPolicy: false, // Desativa a política de segurança de conteúdo ( Desativado pois a API retorna apenas JSON)
}));

//Limita o tamanho do corpo da requisição para 10kb
app.use(express.json({limit: '10kb'}));

//Utiliza o logger toda vez antes da requisição passar pela rota
app.use(logger);

//Utiliza o middleware antes das rotas
app.use(cors(corsOptions));

//Aplica o rate limiter globalmente
app.use(globalRateLimiter);

// //Rota para o endpoint /auth, que vai usar o router definido no arquivo auth-routes.js
app.use('/auth', authRoute);

//Rota de Ping
app.get('/ping', (req,res)=>{
    res.status(200).json({status: 'OK'});
});

// Adiciona o middleware de autenticação antes das rotas que precisam de autenticação
app.use(authMiddleware); 

//Rota para o endpoint /quests, que vai usar o router definido no arquivo quest-route.js
app.use('/quests', questRoute);


//Se passar por tudo chama o middleware responsável pelo erro de rota não encontrada
app.use(notFound);

//Tratamento de erro da API
app.use(errorHandler);

//Exportação do app para ser usado no server.js
export default app;
