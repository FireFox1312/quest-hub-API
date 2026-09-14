import { registry } from '../registry.js';
import { z } from 'zod';

const ProblemDetailsSchema = z.object({
    type: z.string().default('about:blank'),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().optional()
});

registry.register('ProblemDetails', ProblemDetailsSchema.openapi({
    title: 'Detalhes do Problema',
    description: 'Esquema de detalhes do problema conforme a especificação RFC 7807.',
}));

const ValidationErrorSchema = ProblemDetailsSchema.extend({
    errors: z.array(z.object({
        field: z.string(),
        message: z.string()
    })).optional()
});

registry.register('ValidationProblem', ValidationErrorSchema.openapi({
    title: 'Detalhes do Problema de Validação',
    description: 'Esquema de detalhes do problema de validação, incluindo erros específicos de campo.',
}));

registry.registerComponent('responses', 'NotFoundError', {
    description: 'Recurso não encontrado',
    content: {
        'application/json': {
            schema: { $ref: '#/components/schemas/ProblemDetails' },
            example: {
                type: 'about:blank',
                title: 'Not Found',
                status: 404,
                detail: 'O recurso solicitado não foi encontrado.'
            }
        }
    }
});

registry.registerComponent('responses', 'UnauthorizedError', {
    description: 'Não autorizado',
    content: {
        'application/json': {
            schema: { $ref: '#/components/schemas/ProblemDetails' },
            example: {
                type: 'about:blank',
                title: 'Unauthorized',
                status: 401,
                detail: 'O usuário não está autorizado a acessar o recurso solicitado.'
            }
        }
    }
});

registry.registerComponent('responses', 'RateLimitError', {
    description: 'Muitas solicitações',
    content: {
        'application/json': {
            schema: { $ref: '#/components/schemas/ProblemDetails' },
            example: {
                type: 'about:blank',
                title: 'Too Many Requests',
                status: 429,
                detail: 'O usuário fez muitas solicitações e está temporariamente bloqueado.'
            }
        }
    }
});
