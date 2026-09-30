
import { AppError } from '../utils/app-error.js';

export const errorHandler = (err, req, res, next) => {

    req.error = err; // Adiciona o erro ao objeto de requisição para que possa ser acessado em outros middlewares ou rotas, se necessário

    if(err instanceof AppError){//Verifica se o erro é uma instância de AppError e retorna a mensagem do erro
        return res.status(err.statusCode).json({
            message: err.message
        });
    
    }
    else{ // Se não for, retorna um erro genérico de status code 500
        return res.status(500).json({
            message: 'Erro interno do servidor'
        });
    }

}
