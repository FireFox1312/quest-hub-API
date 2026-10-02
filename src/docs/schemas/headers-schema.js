
export const defaultHeaders = {

    'X-Request-Id': {

        description: 'Identificador único da requisição, utilizado para rastrear e correlacionar logs.',
        schema: {
            type: 'string',
            format: 'uuid',
            example: '123e4567-e89b-12d3-a456-426614174000'
        }

    },

    'X-Response-Time': {

        description: 'Tempo total de processamento da requisição, em milissegundos.',
        schema: {
            type: 'string',
            example: '12.45ms'
        }

    }

};
