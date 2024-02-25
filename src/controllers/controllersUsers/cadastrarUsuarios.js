const knex = require('../../database/conexao')
const bcrypt = require('bcrypt')

const cadastrarUsuarios = async (req, res) => {
    const { nome, email, senha } = req.body


    try {
        const usuarioExistente = await knex('usuarios')
            .where('email', email)
            .first()
        if (usuarioExistente) {
            return res.status(400).json({ erro: "E-mail já cadastrado" });
        }
        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const usuarioCadastrado = await knex('usuarios')
            .insert({
                nome,
                email,
                senha: senhaCriptografada
            })
            .returning(['nome', 'email'])

        return res.status(201).json({
            mensagem: 'Usuário cadastrado com sucesso',
            usuario: usuarioCadastrado[0]
        })

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ erro: "Erro interno do servidor" });
    }
}

module.exports = cadastrarUsuarios