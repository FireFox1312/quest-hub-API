import express from 'express';
import { UserPrismaRepository } from "../repositories/user-prisma-repository.js";
import { AuthService } from "../services/auth-service.js";
import { AuthController } from "../controllers/auth-controller.js";
import { registerSchema, loginSchema } from "../schemas/auth-schema.js";
import { validate } from "../middlewares/validation.js";
import { rateLimit } from "express-rate-limit";
import { TooManyRequestsError } from "../utils/app-error.js";

const authRouter = express.Router();

export const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // Limite de 5 requisições por IP
    standardHeaders: 'draft-8', // Retorna os cabeçalhos de limite de taxa padrão
    legacyHeaders: false,
    handler: (req, res, next) => {// Passa o erro para o middleware de tratamento de erros
        next(new TooManyRequestsError('Muitas requisições feitas a partir deste IP, por favor tente novamente mais tarde.'));
    }
});

const userRepository = new UserPrismaRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

authRouter.post("/register", authLimiter, validate(registerSchema), authController.registerControll);
authRouter.post("/login", authLimiter, validate(loginSchema), authController.loginControll);

export default authRouter;
