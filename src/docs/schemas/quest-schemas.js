import { registry } from '../registry.js';
import { questSchema, updateQuestSchema, idParamSchema } from '../../schemas/quest-schema.js';

registry.register('QuestInput', questSchema.openapi({
    title: 'Criação de Quest',
    description: 'Payload obrigatório para criar uma nova quest.'
}));

registry.register('QuestUpdate', updateQuestSchema.openapi({
    title: 'Atualização de Quest',
    description: 'Payload para atualização parcial de uma quest.'
}));

// No idParamSchema, a validação de uuid está na propriedade 'id'
registry.register('IdParam', idParamSchema.shape.id.openapi({
    title: 'ID da quest (UUID)',
    description: 'Parâmetro de ID da quest, que deve ser um UUID válido.',
    example: '550e8400-e29b-41d4-a716-446655440000'
}));

