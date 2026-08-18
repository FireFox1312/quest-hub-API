import express from 'express';
import { UserPrismaRepository } from "../repositories/user-prisma-repository.js";
import { AuthService } from "../services/auth-service.js";
import { AuthController } from "../controllers/auth-controller.js";
import { registerSchema, loginSchema } from "../schemas/auth-schema.js";
import { validate } from "../middlewares/validation.js";

const authRouter = express.Router();

const userRepository = new UserPrismaRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

authRouter.post("/register", validate(registerSchema), authController.registerControll);
authRouter.post("/login", validate(loginSchema), authController.loginControll);

export default authRouter;
