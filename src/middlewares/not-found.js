import { NotFoundError } from "../utils/app-error.js"

export const notFound = (req, res, next) => {
    next(new NotFoundError('Rota não encontrada'));
}

