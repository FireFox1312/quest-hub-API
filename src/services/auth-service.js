import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ConflictError, UnauthorizedError } from '../utils/app-error.js';

export class AuthService {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async register(data) {

        const user = await this.userRepository.findByEmail(data.email);

        if(user) throw new ConflictError('Email já cadastrado');

        //Futuremente ver esse ponto de softdelete
        if(user.deletedAt) throw new ConflictError('Email já cadastrado')

        const hashedPassword = await bcrypt.hash(data.password, parseInt(process.env.SALT_ROUNDS, 10));

        const newUser = await this.userRepository.create({name: data.name, email: data.email, password: hashedPassword});

        const { password: _, ...userWithoutPassword } = newUser;

        return userWithoutPassword;

    }

    async login(data) {

        const user = await this.userRepository.findByEmail(data.email);

        if(!user) throw new UnauthorizedError('Email ou senha invalidos');

        const isPasswordValid = await bcrypt.compare(data.password, user.password);

        if(!isPasswordValid) throw new UnauthorizedError('Email ou senha invalidos');

        const token = jwt.sign({ id: user.id, email: user.email },  process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})
        
        // 1. Limpa a senha usando destructuring e rest operator
        const { password, ...userWithoutPassword } = user;

        // 2. Retorna o token e os dados limpos do usuário
        return {
            token,
            user: userWithoutPassword
        };
    
    }

}
