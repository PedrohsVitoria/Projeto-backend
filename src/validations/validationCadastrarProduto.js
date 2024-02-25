const joi = require('joi');

const schemaCadastroProduto = joi.object({
    descricao: joi.string().required().messages({
        'string.empty': 'O campo descricao não pode estar vazio',
        'any.required': 'O campo descricao é obrigatório',
    }),
    quantidade_estoque: joi.number().positive().integer().required().messages({
        'number.integer': 'A quantidade deve ser um número inteiro',
        'number.positivo': 'A quantidade deve ser um numero positivo',
        'any.required': 'O campo quantidade_estoque é obrigatório',
    }),
    valor: joi.number().positive().integer().required().messages({
        'number.integer': 'O valor deve ser um número inteiro',
        'number.positivo': 'O valor deve ser um numero positivo',
        'any.required': 'O campo valor é obrigatório',

    }),
    categoria_id: joi.number().integer().positive().required().messages({
        'number.integer': 'A categoria_id deve ser um número inteiro',
        'number.positivo': 'A categoria_id d1eve ser um numero positivo',
        'any.required': 'O campo categoria_id é obrigatório',
    })
});


module.exports = {
    schemaCadastroProduto,

};