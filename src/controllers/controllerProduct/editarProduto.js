const knex = require('../../database/conexao')

const editarProduto = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body
    const { id } = req.params

    try {
        const categoriaExistente = await knex('categorias')
            .where('id', categoria_id)
            .first()

        if (!categoriaExistente) {
            return res.status(404).json({ mensagem: "Categoria informada não existe." })
        }
        const produtoEditado = await knex('produtos')
            .where('id', id)
            .update({
                descricao,
                quantidade_estoque,
                valor,
                categoria_id,
            })
        if (!produtoEditado) {
            return res.status(404).json({ mensagem: "Produto informado não encontrado" })
        }
        return res.status(200).json({
            mensagem: 'Produto atualizado com sucesso.',
            produto: produtoEditado[0]
        })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = editarProduto