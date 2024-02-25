const knex = require('../../database/conexao')

const listarProdutos = async (req, res) => {
    try {
        const produtos = await knex('produtos')
        return res.status(202).json(produtos)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = listarProdutos