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
