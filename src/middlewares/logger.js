export const logger = (req, res, next) => {

    //Quarda a hora da requisição
    const hora = new Date().toISOString();

    res.on('finish', () => {

        let level = res.statusCode >= 500 ? 'error' : res.statusCode >= 400 ? 'warn' : 'info';

        const logData = {
            timestamp: hora,
            requestId: req.requestId,
            level: level,
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            responseTime: req.responseTime,
            ip: req.ip,
            userAgent: req.get('user-agent') // Informações do agente do usuário (navegador, dispositivo, etc.)
        };

        if (req.error) {
            logData.errorMessage = req.error.message;

            if (process.env.NODE_ENV !== 'production') {
                logData.errorStack = req.error.stack;
            }
        }

        console.log(JSON.stringify(logData));

    })
    
    next();

}
