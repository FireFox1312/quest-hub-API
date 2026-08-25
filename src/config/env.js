import { z } from 'zod';

export const envSchema = z.object({

    PORT: z.coerce.number().int().positive().default(3000),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    JWT_SECRET: z.string().min(32, 'JWT_SECRET deve ter no mínimo 32 caracteres'),
    JWT_EXPIRES_IN: z.string().min(1, 'JWT_EXPIRES_IN é obrigatório'),
    DATABASE_URL: z.string().min(1, 'DATABASE_URL é obrigatório'),
    SALT_ROUNDS: z.coerce.number().int().min(8).max(14).default(10),
    ALLOWED_ORIGINS: z.string().default(''),
    DB_DRIVER: z.enum(['sqlite', 'prisma', 'memory', 'json']).default('prisma'),
})

export const env =() => {

    try {

        const parsedEnv = envSchema.parse(process.env);

        return  Object.freeze(parsedEnv);

    }catch (error) {

        console.log('Erro ao validar as variáveis de ambiente:', error.issues);

        process.exit(1);

    }

}

export default env();
