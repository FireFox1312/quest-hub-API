import 'dotenv/config';
import env from './config/env.js';
import app from './app.js';

const PORT = env.PORT;

//Inicializando o servidor
app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
