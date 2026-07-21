//Importações do express e das classes
import express from 'express';
import { QuestRepository } from '../repositories/quest-repository.js';
import { QuestService } from '../services/quest-service.js';
import { QuestController } from '../controllers/quest-controller.js';
import { validate } from '../middlewares/validation.js';
import { questSchema, updateQuestSchema, idParamSchema } from '../schemas/quest-schema.js';


//Injeção de dependência, criando instâncias das classes e passando elas para o construtor da próxima classe
const questRepository = new QuestRepository();
const questService = new QuestService(questRepository);
const questController = new QuestController(questService);

const router = express.Router();

router.get('/', questController.getControll);
router.get('/:id', validate(idParamSchema, 'params'), questController.searchControll);
router.post('/', validate(questSchema, 'body'), questController.postControll);
router.put('/:id', validate(idParamSchema, 'params'), validate(updateQuestSchema), questController.putControll);
router.put('/:id/complete', validate(idParamSchema, 'params'), questController.completeControll);
router.delete('/:id', validate(idParamSchema, 'params'), questController.deleteControll);

export default router;
