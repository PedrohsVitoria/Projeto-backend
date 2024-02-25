const knex = require('../../database/conexao')


const deletarProduto = async (req, res) => {
    const { id } = req.params

    try {
        const produtoExistente = await knex('produtos')
            .where('id', id)
            .first()

        if (!produtoExistente) {
            return res.status(404).json({ mensagem: 'Produto informado não existe.' })
        }
        await knex('produtos')
            .where('id', id)
            .delete()

        return res.status(200).json({ mensagem: 'Produto excluído com sucesso.' })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: 'Erro no servidor.' });

    }
}

module.exports = deletarProduto