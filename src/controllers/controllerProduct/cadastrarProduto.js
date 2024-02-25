const knex = require('../../database/conexao');

const cadastrarProduto = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body
    try {
        const categoriaExistente = await knex("categorias")
            .where("id", categoria_id)
            .first();

        if (!categoriaExistente) {
            return res.status(400).json({ mensagem: 'A categoria informada não existe.' })
        }

        const produtoCadastrado = await knex("produtos")
            .insert({
                descricao,
                quantidade_estoque,
                valor,
                categoria_id,
            })
            .returning('*')

        if (!produtoCadastrado || produtoCadastrado.length === 0) {
            return res.status(400).json({ mensagem: 'o produto não foi cadastrado' })

        }

        return res.status(201).json({
            mensagem: 'Produto cadastrado com sucesso',
            produto: produtoCadastrado[0]
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }

}

module.exports = cadastrarProduto