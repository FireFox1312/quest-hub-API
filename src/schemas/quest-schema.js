import { z } from 'zod';

//Schema padrão de criação de quest
export const questSchema = z.object({
    title: z.string({
        required_error: 'O título é obrigatório',
        invalid_type_error: 'O título deve ser uma string'
    }).min(3, "O título deve ter no mínimo 3 caracteres"),
    description: z.string().optional(),
    category: z.enum(['trabalho', 'estudo', 'lazer', 'saude', 'financeiro', 'outros']),
    xp: z.number().optional(),
    difficulty: z.enum(['easy', 'medium', 'hard', 'almost impossible']).default('easy'),

}).strict();


//Schema padrão de atualização de quest (deixa todas as chaves opcionais)
export const updateQuestSchema = questSchema.partial();

//Schema de validação do Id passado no parâmetro, se tiver
export const idParamSchema = z.object({
    id: z.coerce.number({
        invalid_type_error: 'O id deve ser um número válido'
    })
}).strict();


