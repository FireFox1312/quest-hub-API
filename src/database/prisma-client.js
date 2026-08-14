import PrismaPg from '@prisma/client';
import { PrismaClient } from '@prisma/client';

//Instancia o adaptador do PostgreSQL com a string de conexão do banco de dados
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

//Instancia o PrismaClient com o adaptador do PostgreSQL
const prisma = new PrismaClient({ adapter });

export default prisma;
