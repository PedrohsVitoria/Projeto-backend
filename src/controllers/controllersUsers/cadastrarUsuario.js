const bcrypt = require('bcrypt')
const knex = require('../../database')

const schemaCadastroUsuario = require('../../validations/validacoesCadastrarUsuario')


const cadastrarUsuario = async (req, res) => {
    const { error, value } = schemaCadastroUsuario.validateAsync(req.body)
    if (error) {
        const errorMessage = error.details[0].message;
        return res.status(400).json({ erro: errorMessage });
    }

    const { nome, email, senha } = value;
    try {

        const usuarioExistente = await knex("usuarios")
            .where("email", email)
            .first();
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
            .returning(["nome", "email"])


        return res.status(201).json({
            mensagem: "Usuário cadastrado com sucesso.",
            usuario: usuario.cadastrado[0]
        })


    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = cadastrarUsuario