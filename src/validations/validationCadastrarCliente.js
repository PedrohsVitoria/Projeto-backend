const joi = require('joi');

const schemaCadastroCliente = joi.object({
    nome: joi.string().required().messages({
        'string.empty': 'O campo nome não pode estar vazio',
        'any.required': 'O campo nome é obrigatório',
    }),
    email: joi.string().email().required().messages({
        'string.email': 'O campo email deve ser um endereço de email válido',
        'string.empty': 'O campo email não pode estar vazio',
        'any.required': 'O campo email é obrigatório',
    }),
    cpf: joi.number().integer().positive().required().messages({
        'number.integer': 'O cpf deve ser um número inteiro',
        'number.positive': 'O cpf deve ser um número positivo',
        'any.required': 'O campo cpf é obrigatório',


    })
});


module.exports = {
    schemaCadastroCliente,

};