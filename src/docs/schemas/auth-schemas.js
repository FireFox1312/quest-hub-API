import { registry } from '../registry.js';
import { registerSchema, loginSchema } from '../../schemas/auth-schema.js';

registry.register('UserRegister', registerSchema.openapi({
    title: 'Registro de Usuário',
    description: 'Payload para cadastro de novos usuários. Exige senha forte.'
}));

registry.register('UserLogin', loginSchema.openapi({
    title: 'Login de Usuário',
    description: 'Payload para autenticação.'
}));

