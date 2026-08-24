//Importações do express, das classes e funções
import express from 'express';
import { QuestRepositoryFactory } from '../factories/quest-repository.factory.js';
import { QuestService } from '../services/quest-service.js';
import { QuestController } from '../controllers/quest-controller.js';
import { validate } from '../middlewares/validation.js';
import { questSchema, updateQuestSchema, idParamSchema } from '../schemas/quest-schema.js';
import { TooManyRequestsError } from '../utils/app-error.js';
import { rateLimit } from 'express-rate-limit';

const readLimiter = rateLimit({// Limite de taxa para requisições de leitura (GET) para 100 requisições por 15 minutos
    windowMs: 15 * 60 * 1000,
    max: 100, 
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    handler: (req, res, next) => {// Passa o erro para o middleware de tratamento de erros
        next(new TooManyRequestsError('Muitas requisições feitas a partir deste IP, por favor tente novamente mais tarde.'));
    }
});

const writeLimiter = rateLimit({// Limite de taxa para requisições de escrita (POST, PUT, DELETE) para 30 requisições por 15 minutos
    windowMs: 15 * 60 * 1000, 
    max: 30, 
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    handler: (req, res, next) => {// Passa o erro para o middleware de tratamento de erros
        next(new TooManyRequestsError('Muitas requisições feitas a partir deste IP, por favor tente novamente mais tarde.'));
    }
});

//Injeção de dependência, criando instâncias das classes e passando elas para o construtor da próxima classe
const questRepository = await QuestRepositoryFactory.createRepository(); //Criando a instância do repositório definido no .env
const questService = new QuestService(questRepository);
const questController = new QuestController(questService);

const router = express.Router();

router.get('/', readLimiter, questController.getControll);
router.get('/:id', readLimiter, validate(idParamSchema, 'params'), questController.searchControll);
router.post('/', writeLimiter, validate(questSchema, 'body'), questController.postControll);
router.put('/:id', writeLimiter, validate(idParamSchema, 'params'), validate(updateQuestSchema), questController.putControll);
router.put('/:id/complete', writeLimiter, validate(idParamSchema, 'params'), questController.completeControll);
router.delete('/:id', writeLimiter, validate(idParamSchema, 'params'), questController.deleteControll);

export default router;

