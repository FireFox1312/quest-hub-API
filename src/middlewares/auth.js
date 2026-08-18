import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../utils/app-error.js';

export const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token de autenticação não fornecido' });
    }

    const token = authHeader.split(' ')[1];

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();


    }catch (error) {
        next(new UnauthorizedError('Token de autenticação inválido ou expirado'));
    }

}
