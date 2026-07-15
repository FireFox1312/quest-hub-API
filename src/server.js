import app from './app.js';

const PORT = 3000;

//Inicializando o servidor
app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
