import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../utils/app-error.js';

export const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new UnauthorizedError('Token de autenticação não fornecido'));
    }

    const token = authHeader.split(' ')[1];

    try {
        // Verifica se o token é válido e decodifica o payload do token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Adiciona o payload decodificado do token ao objeto de requisição para que possa ser acessado em outros middlewares ou rotas
        req.user = decoded;

        next();


    }catch (error) {
        // Verifica se o erro é devido a um token expirado ou inválido, se não for nenhum dos dois, retorna um erro genérico de verificação de token
        return error.name === 'TokenExpiredError' 
        ? next(new UnauthorizedError('Token de autenticação expirado')) 
        : error.name === 'JsonWebTokenError' 
            ? next(new UnauthorizedError('Token de autenticação inválido')) 
            : next(new UnauthorizedError('Erro ao verificar o token de autenticação'));

    }

}
