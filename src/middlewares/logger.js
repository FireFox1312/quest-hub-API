export const logger = (req, res, next) => {

    //Quarda a hora da requisição
    const hora = new Date().toISOString();

    res.on('finish', () => {

        let level = res.statusCode >= 500 ? 'error' : res.statusCode >= 400 ? 'warn' : 'info';

        const logData = {
            timestamp: hora,
            level: level,
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            responseTime: req.responseTime,
            ip: req.ip,
            userAgent: req.get('user-agent') // Informações do agente do usuário (navegador, dispositivo, etc.)
        };

        console.log(JSON.stringify(logData));

    })
    
    next();

}
