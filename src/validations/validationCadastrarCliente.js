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

    }),
    cep: joi.number().integer().positive().optional().messages({
        'number.integer': 'O cep deve ser um número inteiro',
        'number.positive': 'O cep deve ser um número positivo',
        'any.required': 'O campo cep é obrigatório',
    }),
    rua: joi.string().optional().messages({
        'string.empty': 'Caso seja inserido, o campo rua não pode estar vazio',
    }),
    numero: joi.number().integer().positive().optional().messages({
        'number.integer': 'O número deve ser inteiro',
        'number.positive': 'O número deve ser positivo',
    }),
    bairro: joi.string().optional().messages({
        'string.empty': 'Caso seja inserido, o campo bairro não pode estar vazio',
    }),
    cidade: joi.string().optional().messages({
        'string.empty': 'Caso seja inserido, o campo cidade não pode estar vazio',
    }),
    estado: joi.string().optional().messages({
        'string.empty': 'Caso seja inserido, o campo estado não pode estar vazio',
    }),
});

module.exports = {
    schemaCadastroCliente,

};