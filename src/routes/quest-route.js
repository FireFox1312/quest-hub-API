//Importações do express e das classes
import express from 'express';
import { QuestRepository } from '../repositories/quest-repository.js';
import { QuestService } from '../services/quest-service.js';
import { QuestController } from '../controllers/quest-controller.js';

//Injeção de dependência, criando instâncias das classes e passando elas para o construtor da próxima classe
const questRepository = new QuestRepository();
const questService = new QuestService(questRepository);
const questController = new QuestController(questService);

const router = express.Router();

router.get('/', questController.getControll);
router.get('/:id', questController.searchControll);
router.post('/', questController.postControll);
router.put('/:id', questController.putControll);
router.put('/:id/complete', questController.completeControll);
router.delete('/:id', questController.deleteControll);

export default router;
