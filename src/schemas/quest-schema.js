import { z } from 'zod';

//Schema padrão de criação de quest
export const questSchema = z.object({
    title: z.string().min(3, "O título deve ter no mínimo 3 caracteres"),
    description: z.string().optional(),
    category: z.enum(['trabalho', 'estudo', 'lazer', 'saude', 'financeiro', 'outros'])
});

//Schema padrão de atualização de quest (deixa todas as chaves opcionais)
export const updateQuestSchema = questSchema.partial();
