//Importação do express e do arquivo de rotas
import express from 'express';
import questRoute from './routes/quest-route.js';

//Objeto que vai conter todos o métodos do express
const app = express();

//Fará o parse dos dados para JSON
app.use(express.json());

//Rota para o endpoint /quests, que vai usar o router definido no arquivo quest-route.js
app.use('/quests', questRoute);

//Rota de Ping
app.get('/ping', (req,res)=>{
    res.status(200).json({status: 'OK'});
});

//Rota para lidar com erros de rota não encontrada
app.use((req, res) => {
    res.status(404).json({message: 'Rota não encontrada'});
});

export default app;