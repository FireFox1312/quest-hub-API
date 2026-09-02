// Possibilita acesso ao version, description, license, etc do package.json
import packageJson from '../../package.json' with { type: 'json' };
import env from '../config/env.js';
import { pingPaths } from './paths/ping-paths.js';
import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import { registry } from './registry.js';
import './schemas/quest-schemas.js';
import './schemas/auth-schemas.js';
import './schemas/error-schemas.js';

// Gera a documentação OpenAPI a partir dos schemas registrados
const generator = new OpenApiGeneratorV3(registry.definitions);

const generatedDocs = generator.generateDocument({

    openapi: '3.0.3',
    info: {
        title: packageJson.name,
        description: packageJson.description || ' API do Quest Hub, um sistema de gamificação para tarefas e objetivos.',
        version: packageJson.version,
        license: {
            name: packageJson.license,
        },
        contact: {
            name: packageJson.author,
            url: 'https://github.com/FireFox1312'
        }
    },
    servers: [
        {
            url: `http://localhost:${env.PORT}`,
            description: 'Development server'
        }
    ]

})

export const specDocs = {

    ...generatedDocs,
    paths: {
        ...generatedDocs.paths,// Pega os paths gerados (se houverem)
        ...pingPaths,
    }
}

export default specDocs;
