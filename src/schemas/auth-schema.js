import { z } from 'zod';

//Schema padrão de registro de usuário
export const registerSchema = z.object({

    name : z.string({
        required_error: 'O nome é obrigatório',
        invalid_type_error: 'O nome deve ser uma string'
    }).min(3, "O nome deve ter no mínimo 3 caracteres"),

    email : z.string({
    required_error: 'O email é obrigatório',
    invalid_type_error: 'O email deve ser uma string'
    }).email("E-mail inválido"),

    password : z.string({
    required_error: 'A senha é obrigatória',
    invalid_type_error: 'A senha deve ser uma string'
    }).min(8, "A senha deve ter no mínimo 8 caracteres")

}).strict();

//Schema padrão de login de usuário (Utilizando apenas os campos de email e senha do schema de registro)
export const loginSchema = registerSchema.pick({
    email: true,
    password: true
}).strict();
