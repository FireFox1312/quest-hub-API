import { OpenAPIRegistry, extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

//Extende o zod com a funcionalidade de gerar documentação OpenAPI
extendZodWithOpenApi(z);

export const registry = new OpenAPIRegistry();

registry.registerComponent('securitySchemes', 'BearerAuth', {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
    description: 'Autenticação via token JWT. Inclua o token no cabeçalho Authorization como "Bearer <token>".'
});
