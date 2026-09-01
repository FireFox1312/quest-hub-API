import { OpenAPIRegistry, extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

//Extende o zod com a funcionalidade de gerar documentação OpenAPI
extendZodWithOpenApi(z);

export const registry = new OpenAPIRegistry();
