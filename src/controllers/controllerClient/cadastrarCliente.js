const knex = require('../../database/conexao')

const cadastrarCliente = async (req, res) => {
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body

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


        const clienteCadastrado = await knex('clientes')
            .insert({
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
            .returning('*')

        return res.status(201).json({
            mensagem: 'Cliente cadastrado com sucesso',
            usuario: clienteCadastrado[0]
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}
module.exports = cadastrarCliente