const knex = require('../../database/conexao')


const detalharCliente = async (req, res) => {
    const { id } = req.params
    try {
        const clienteDetalhado = await knex('clientes')
            .where('id', id)
            .first()
            .returning('*')

        return res.status(200).json(clienteDetalhado)

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

module.exports = detalharCliente