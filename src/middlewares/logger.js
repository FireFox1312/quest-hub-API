import { Log } from '../utils/logger-core.js';

export const logger = (req, res, next) => {

    res.on('finish', () => {

        let level = res.statusCode >= 500 ? 'error' : res.statusCode >= 400 ? 'warn' : 'info';

        const meta = {
            responseTime: req.responseTime,
            ip: req.ip,
            userAgent: req.get('user-agent'),
            requestId: req.requestId,
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode
        };

        if (req.error) {
            meta.errorMessage = req.error.message;
            if (process.env.NODE_ENV !== 'production') {
                meta.errorStack = req.error.stack;
            }
        }

        if (level === 'error') Log.error('HTTP Request Error', meta);
        else if (level === 'warn') Log.warn('HTTP Request Warning', meta);
        else Log.info('HTTP Request Info', meta);

    })
    
    next();

}
