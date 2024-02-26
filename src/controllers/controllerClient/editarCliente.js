const knex = require('../../database/conexao')

const editarCliente = async (req, res) => {
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body
    const { id } = req.params
    try {
        const emailExistente = await knex('clientes')
            .where('email', email)
            .andWhere('id', '<>', id)
            .first()

        if (emailExistente) {
            return res.status(400).json({ erro: "E-mail já cadastrado" })
        }
        const cpfExistente = await knex('clientes')
            .where('cpf', cpf)
            .andWhere('id', '<>', id)
            .first()

        if (cpfExistente) {
            return res.status(400).json({ erro: "Cpf já cadastrado" })
        }
        const clienteEditado = await knex('clientes')
            .where('id', id)
            .update({
                nome,
                email,
                cpf,
                cep,
                rua,
                numero,
                bairro,
                cidade,
                estado
            })

        if (!clienteEditado) {
            return res.status(400).json('Cliente não foi atualizado')
        }

        return res.status(200).json("Cliente atualizado com sucesso.")
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}
module.exports = editarCliente