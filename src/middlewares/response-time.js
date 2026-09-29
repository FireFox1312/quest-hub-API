
export function responseTime(req, res, next) {

    const startTime = process.hrtime.bigint(); // Marca o tempo de início da requisição

    const originalWriteHead = res.writeHead; // Armazena a função original writeHead do objeto de resposta

    res.writeHead = function (...args) {

        const endTime = process.hrtime.bigint(); // Marca o tempo de término da requisição

        let timeTaken = Number(endTime - startTime) / 1e6; // Calcula o tempo total em milissegundos

        res.setHeader('X-Response-Time', `${timeTaken.toFixed(3)}ms`); // Adiciona o cabeçalho X-Response-Time à resposta

        req.responseTime = Number(timeTaken.toFixed(3)); // Armazena o tempo de resposta no objeto da requisição

        originalWriteHead.apply(this, args); // Chama a função original writeHead com os argumentos fornecidos

    }

    next();
}
