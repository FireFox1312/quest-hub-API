export const logger = (req, res, next) => {

    //Quarda a hora da requisição
    const hora = new Date().toISOString();

    //Print a hora, seguida do método utilizado e URL passado
    console.log(`[${hora}] ${req.method} ${req.originalUrl}`);

    next();

}