const knex = require('../../database/conexao')

const detalharProduto = async (req, res) => {
    const { id } = req.params

    try {
        const produtoDetalhado = await knex('produtos')
            .where('id', id)
            .first()
            .returning('*')

        if (!produtoDetalhado) {
            return res.status(404).json({ mensagem: 'Produto informado não existe.' })
        }
        return res.status(202).json(produtoDetalhado)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = detalharProduto