//Exporta uma função que receberá o schema e retornará o middleware
export const validate = (schema, property = 'body') => {

    return (req, res, next) => {

        try{//Tenta fazer o parse do corpo da requsição
            
            //Acessa dinamicamente a propriedade do req e faz o parse com o schema
            schema.parse(req[property]);
            //Se não der erro vai para o próximo middleware
            next();
        }
        catch(error){
            //Em caso de erro, retorna a resposta com a mensagem e o campo inválido
            return res.status(400).json({
                message: 'Erro de validação de dados',
                issues: error.errors
            });
        }
    }
}

//Sugestão para melhoria futura (TODO): 

//TODO: Middleware "validate" para validação de dados de todas as propriedades (body, params, query).
// Irá receber apenas o schemas de parâmetro, que será um objeto com propriedades que, aí sim serão os schemas.

//O que mudar:
//No try, deve-se validar e higienizar os parametros da URL, o corpo da requisição e os filtros da URL, exemplo:
//if (schema.params){ req.params = schemas.params.parse(req.params) }
//No catch, deve-se adicionar a chave "fields" e "message" dentro de um map do issues, com o objetivo de mostrar o caminho exato do erro, exemplo:
//issues: error.errors.map({ issue => ({
    //field: issue.path.join('.'),
    //message: issue.message
//  })
//})


//No routes, deve-se mudar a forma de chamar o middleware, para informar o nome do campo a ser validado com um schema pra validação, exemplo:
//router.put('/:id', validate({ params: idParamSchema, body: updateQuestSchema }), questController.putControll);


