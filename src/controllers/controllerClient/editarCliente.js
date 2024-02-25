const knex = require('../../database/conexao')

const editarCliente = async (req, res) => {
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body
    const { id } = req.params
    try {
        const emailExistente = await knex('clientes')
            .where('email', email)
            .first()
        if (emailExistente) {
            return res.status(400).json({ erro: "E-mail já cadastrado por outro cliente." });
        }
        const cpfExistente = await knex('clientes')
            .where('cpf', cpf)
            .first()
        if (cpfExistente) {
            return res.status(400).json({ erro: "Cpf já cadastrado por outro cliente." });
        }
        await knex('cliente').where('id', id).update({
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

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}
module.exports = editarCliente