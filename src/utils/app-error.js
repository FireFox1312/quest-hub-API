
export class AppError extends Error {

    constructor (message,statusCode){
        super(message); //Repassa a mensagem para a classe Error nativa
        this.statusCode = statusCode;
        this.name = this.constructor.name; //Pega o nome da classe atual dinamicamente
    }

}

export class NotFoundError extends AppError {

    constructor(message) {
        super(message, 404);
    }

}

export class ValidationError extends AppError {

    constructor(message) {
        super(message, 400);
    }

}

export class ConflictError extends AppError {

    constructor(message) {
        super(message, 409);
    }

}


