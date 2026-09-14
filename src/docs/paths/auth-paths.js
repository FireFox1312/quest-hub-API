import { registry } from '../registry.js';
import { registerSchema, loginSchema } from '../../schemas/auth-schema.js';
import { z } from 'zod';

registry.registerPath({
    method: 'post',
    path: '/auth/register',
    tags: ['Auth'],
    summary: 'Registrar novo usuário',
    description: 'Payload para cadastro de novos usuários. Exige senha com letra maiúscula, minúscula, número, caractere especial e no mínimo 8 caracteres.',
    request: {
        body: {
            content: {
                'application/json': {
                    schema: registerSchema
                }
            }
        }
    },
    responses: {
        '201': {
            description: 'Usuário registrado com sucesso.',
            content: {
                'application/json': {
                    schema: z.object({
                        user: z.object({
                            id: z.string().uuid(),
                            name: z.string(),
                            email: z.string().email()
                        })
                    })
                }
            }
        },
        '400': {
            description: 'Validação falhou.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/schemas/ValidationProblem' }
                }
            }
        },
        '409': {
            description: 'Conflito. O e-mail já está cadastrado.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/schemas/ProblemDetails' }
                }
            }
        },
        '429': {
            $ref: '#/components/responses/RateLimitError'
        }
    }
});

registry.registerPath({
    method: 'post',
    path: '/auth/login',
    tags: ['Auth'],
    summary: 'Autenticar usuário',
    description: 'Payload para fazer login no sistema.,',
    request: {
        body: {
            content: {
                'application/json': {
                    schema: loginSchema
                }
            }
        }
    },
    responses: {
        '200': {
            description: 'Login realizado com sucesso.',
            content: {
                'application/json': {
                    schema: z.object({
                        token: z.string()
                    })
                }
            }
        },
        '400': {
            description: 'Validação falhou.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/schemas/ValidationProblem' }
                }
            }
        },
        '401': {
            $ref: '#/components/responses/UnauthorizedError'
        },
        '429': {
            $ref: '#/components/responses/RateLimitError'
        }
    }
});