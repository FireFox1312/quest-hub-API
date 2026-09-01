

export const pingPaths = {

    '/ping': {
        get: {
            tags: ['HealthCheck'],
            summary: 'Verify status of the server',
            description: 'Returns a simple response to indicate that the server is running.',
            responses: {
                '200': {
                    description: 'Server is running',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    status: {
                                        type: 'string',
                                        example: 'OK'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}
