import prisma from '../database/prisma-client.js';

export class UserPrismaRepository {

    async findByEmail(email) {

        //Guarda o usuário no banco de dados utilizando o email como referência
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        //Verifica se o usuário foi encontrado, caso não seja encontrado, lança um erro
        if (!user) {
            return null;
        }

        //Retorna o usuário encontrado(todos os campos)
        return user;

    }

    async create(data) {

        //Cria um novo usuário no banco de dados utilizando os dados fornecidos
        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        });

        //Retorna o usuário criado
        return user;

    }

}
