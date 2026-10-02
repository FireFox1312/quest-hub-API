import 'dotenv/config';
import './docs/registry.js';
import env from './config/env.js';
import app from './app.js';
import { Log } from './utils/logger-core.js';

const PORT = env.PORT;

//Inicializando o servidor
app.listen(PORT, ()=>{
    Log.info(`Servidor rodando em http://localhost:${PORT}`);
})
