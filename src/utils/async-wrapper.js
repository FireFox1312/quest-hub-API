
//Uma função que recebe uma função assíncrona e retorna uma nova função que lida com erros de forma adequada.
export const asyncWrapper = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    }
}

