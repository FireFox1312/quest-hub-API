import 'dotenv/config';
import fs from 'fs';
import specDocs from '../src/docs/swagger.js';

fs.writeFileSync('./openapi.json', JSON.stringify(specDocs, null, 2));

console.log('Arquivo openapi.json gerado com sucesso!');
