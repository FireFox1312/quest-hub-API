// Possibilita acesso ao version, description, license, etc do package.json
import packageJson from '../../package.json' with { type: 'json' };
import env from '../config/env.js';
import { pingPaths } from './paths/ping-paths.js';

export const specDocs = {

    openapi: '3.0.3',
    info: {
        title: packageJson.name,
        description: packageJson.description || '',
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
    ],
    paths: {
        ...pingPaths
    },
}

export default specDocs;
