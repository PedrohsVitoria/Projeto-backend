const joi = require('joi');

const schemaCadastroPedido = joi.object({
    cliente_id: joi.number().integer().required().messages({
        'any.required': 'O campo cliente_id é obrigatório.',
        'number.base': 'O cliente_id deve ser um número inteiro.',
    }),
    observacao: joi.string().messages({
        'string.base': 'A observação deve ser uma string.'
    })

    pedido_produtos: joi.array().min(1).items(
        joi.object({
            produto_id: joi.number().integer().required().messages({
                'any.required': 'O campo produto_id é obrigatório.',
                'number.base': 'O produto_id deve ser um número inteiro.',
            }),
            quantidade_produto: joi.number().integer().required().messages({
                'any.required': 'O campo quantidade_produto é obrigatório.',
                'number.base': 'A quantidade_produto deve ser um número inteiro.',
            }),
        })
    ).required().messages({
        'any.required': 'É necessário pelo menos um produto no pedido.',
    }),
});

module.exports = { schemaCadastroPedido };