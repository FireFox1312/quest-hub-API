
//"@typedef" serve para definir tipos customizados e estruturados de objetos, que podem ser usados para documentação e validação de tipos em JavaScript.
    //Ele funciona da seguinte forma: Primeiro define-se o tipo do objeto e depois vem a nomeação do tipo customizado, que pode ser usado em outros lugares do código para referenciar esse tipo específico.

    //"@property" é usado dentro de um bloco "@typedef" para definir as propriedades de um tipo customizado, especificando o nome da propriedade e seu tipo.
    //"@returns" é usado para documentar o tipo de valor que uma função retorna, especificando o tipo de retorno esperado.
        //Dentro do "@returns", você pode usar tipos primitivos, tipos customizados definidos com "@typedef" ou até mesmo tipos complexos, como objetos ou arrays.
        //Um ponto importante abordado nesse código foi o uso de "Promise" no "@returns", que indica que a função retorna uma promessa assíncrona, e o tipo de valor que será resolvido quando a promessa for concluída.

    //Dentro da classe em que o JSDoc está sendo usado, cada método é documentado com "@param" para descrever os parâmetros que ele recebe e "@returns" para descrever o valor que ele retorna.
//

/**
 * @typedef{Object} Quest
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} category
 * @property {number} xp
 * @property {string} difficulty
 */
/** 
 * @typedef{Object} QuestFilters
 * @property {string} difficulty
 * @property {boolean} completed
 * @property {number} page
 * @property {number} limit
 */
export class RepositoryInterface {//Interface que define os métodos que devem ser implementados por qualquer repositório de quests

    /**
     * @param {QuestFilters} filters
     * @returns {Promise<{data: Quest[], meta: object} | null >}
     */
    async findAll(filters) {
        throw new Error('Method not implemented.');
    } 

    /**
     * @param {number} id
     * @returns {Promise<Quest | null>}
     */
    async findById(id) {
        throw new Error('Method not implemented.');
    }

    /**
     * @param {object} data
     * @returns {Promise<Quest>}
     */
    async create(data) {
        throw new Error('Method not implemented.');
    }

    /**
     * @param {number} id
     * @param {object} data
     * @returns {Promise<Quest | null>}
     */
    async update(id, data) {
        throw new Error('Method not implemented.');
    }

    /**
     * @param {number} id
     * @returns {Promise<Quest | null>}
     */
    async delete(id) {
        throw new Error('Method not implemented.');
    }

}
