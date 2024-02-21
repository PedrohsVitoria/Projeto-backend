const knex = require('../../database/conexao')

const listarCategorias = async (req, res) => {
    try {
        const categorias = await knex('categorias')
        return res.status(202).json(categorias)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }

}

module.exports = listarCategorias