import crypto from 'node:crypto';

export function requestId(req, res, next) {

    const reqId = req.headers['x-request-id'] || crypto.randomUUID();

    req.requestId = reqId;

    res.setHeader('X-Request-Id', reqId);

    next();

}
