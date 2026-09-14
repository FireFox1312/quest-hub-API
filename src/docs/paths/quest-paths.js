import { registry } from '../registry.js';
import { questSchema, updateQuestSchema, idParamSchema } from '../../schemas/quest-schema.js';
import { z } from 'zod';

registry.registerPath({

    method: 'get',
    path: '/quests',
    tags: ['Quests'],
    summary: 'Listar quests',
    description: 'Retorna uma lista de quests cadastradas no sistema.',
    security: [
        {
            BearerAuth: []
        }
    ],
    request: {
        query: z.object({
            page: z.coerce.number().optional(),
            limit: z.coerce.number().int().positive().optional(),
            difficulty: z.enum(['easy', 'medium', 'hard', 'almost impossible']).optional(),
            completed: z.coerce.boolean().optional(),
        })
    },
    responses: {
        '200': {
            description: 'Lista de quests retornada com sucesso.',
            content: {
                'application/json': {
                    schema: z.object({
                        quests: z.array(questSchema),
                        limit: z.number(),
                        totalItems: z.number(),
                        totalPages: z.number()
                    })
                }
            }
        },
        '401': {
            description: 'Não autorizado.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/UnauthorizedError' }
                }
            }
        },

        '429': {
            description: 'Muitas requisições. Limite de requisições atingido.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/RateLimitError' }
                }
            }
        }
    }
})

registry.registerPath({

    method: 'get',
    path: '/quests/{id}',
    tags: ['Quests'],
    summary: 'Obter detalhes de uma quest',
    description: 'Retorna os detalhes de uma quest específica.',
    security: [
        {
            BearerAuth: []
        }
    ],
    request: {
        params: idParamSchema
    },
    responses: {
        '200': {
            description: 'Detalhes da quest retornados com sucesso.',
            content: {
                'application/json': {
                    schema: questSchema
                }
            }
        },
        '401': {
            description: 'Não autorizado.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/UnauthorizedError' }
                }
            }
        },
        '403': {
            description: 'Proibido. O usuário não tem permissão para acessar esta quest.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/schemas/ProblemDetails' }
                }
            }
        },
        '404': {
            description: 'Quest não encontrada.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/NotFoundError' }
                }
            }
        },
        '429': {
            description: 'Muitas requisições. Limite de requisições atingido.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/RateLimitError' }
                }
            }
        }
    }
})

registry.registerPath({
    method: 'post',
    path: '/quests',
    tags: ['Quests'],
    summary: 'Criar uma nova quest',
    description: 'Cria uma nova quest com os dados fornecidos.',
    security: [
        {
            BearerAuth: []
        }
    ],
    request: {
        body: {
            required: true,
            content: {
                'application/json': {
                    schema: z.object({
                        title: z.string().max(200),
                        description: z.string().max(1000).optional(),
                        difficulty: z.enum(['easy', 'medium', 'hard', 'almost impossible']).optional(),
                        completed: z.coerce.boolean().optional()
                    })
                }
            }
        }
    },
    responses: {
        '201': {
            description: 'Quest criada com sucesso.',
            content: {
                'application/json': {
                    schema: questSchema
                }
            }
        },
        '400': {
            description: 'Dados inválidos.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/schemas/ValidationProblem' }
                }
            }
        },
        '401': {
            description: 'Não autorizado.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/UnauthorizedError' }
                }
            }
        },
        '429': {
            description: 'Muitas requisições. Limite de requisições atingido.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/RateLimitError' }
                }
            }
        }
    }
})

registry.registerPath({
    method: 'put',
    path: '/quests/{id}',
    tags: ['Quests'],
    summary: 'Atualizar uma quest existente',
    description: 'Atualiza os dados de uma quest existente com os dados fornecidos.',
    security: [
        {
            BearerAuth: []
        }
    ],
    request: {
        params: idParamSchema,
        body: {
            required: true,
            content: {
                'application/json': {
                    schema: z.object({
                        title: z.string().max(200).optional(),
                        description: z.string().max(1000).optional(),
                        difficulty: z.enum(['easy', 'medium', 'hard', 'almost impossible']).optional(),
                        completed: z.coerce.boolean().optional()
                    })
                }
            }
        }
    },
    responses: {
        '200': {
            description: 'Quest atualizada com sucesso.',
            content: {
                'application/json': {
                    schema: questSchema
                }
            }
        },
        '400': {
            description: 'Dados inválidos.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/schemas/ValidationProblem' }
                }
            }
        },
        '401': {
            description: 'Não autorizado.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/UnauthorizedError' }
                }
            }
        },
        '403': {
            description: 'Proibido. O usuário não tem permissão para atualizar esta quest.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/schemas/ProblemDetails' }
                }
            }
        },
        '404': {
            description: 'Quest não encontrada.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/NotFoundError' }
                }
            }
        },
        '429': {
            description: 'Muitas requisições. Limite de requisições atingido.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/RateLimitError' }
                }
            }
        }
    }
})

registry.registerPath({
    method: 'put',
    path: '/quests/{id}/complete',
    tags: ['Quests'],
    summary: 'Marcar uma quest como concluída',
    description: 'Marca uma quest existente como concluída.',
    security: [
        {
            BearerAuth: []
        }
    ],
    request: {
        params: idParamSchema
    },
    responses: {
        '200': {
            description: 'Quest marcada como concluída com sucesso.',
            content: {
                'application/json': {
                    schema: questSchema
                }
            }
        },
        '401': {
            description: 'Não autorizado.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/UnauthorizedError' }
                }
            }
        },
        '403': {
            description: 'Proibido. O usuário não tem permissão para marcar esta quest como concluída.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/schemas/ProblemDetails' }
                }
            }
        },
        '404': {
            description: 'Quest não encontrada.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/NotFoundError' }
                }
            }
        },
        '429': {
            description: 'Muitas requisições. Limite de requisições atingido.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/RateLimitError' }
                }
            }
        }
    }
})

registry.registerPath({
    method: 'delete',
    path: '/quests/{id}',
    tags: ['Quests'],
    summary: 'Excluir uma quest',
    description: 'Exclui uma quest existente.',
    security: [
        {
            BearerAuth: []
        }
    ],
    request: {
        params: idParamSchema
    },
    responses: {
        '204': {
            description: 'Quest excluída com sucesso.',
        },
        '401': {
            description: 'Não autorizado.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/UnauthorizedError' }
                }
            }
        },
        '403': {
            description: 'Proibido. O usuário não tem permissão para excluir esta quest.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/schemas/ProblemDetails' }
                }
            }
        },
        '404': {
            description: 'Quest não encontrada.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/NotFoundError' }
                }
            }
        },
        '429': {
            description: 'Muitas requisições. Limite de requisições atingido.',
            content: {
                'application/json': {
                    schema: { $ref: '#/components/responses/RateLimitError' }
                }
            }
        }
    }
})
