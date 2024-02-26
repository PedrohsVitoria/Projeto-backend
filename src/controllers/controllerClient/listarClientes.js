const knex = require('../../database/conexao')

const listarClientes = async (req, res) => {
    try {
        const clientes = await knex('clientes')
        return res.status(202).json(clientes)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = listarClientes