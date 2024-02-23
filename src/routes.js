const express = require('express')
const listarCategorias = require('./controllers/controllerCategory/listarCategorias')
const cadastrarUsuarios = require('./controllers/controllersUsers/cadastrarUsuarios')
const validarRequisicao = require('./middlewares/validarRequisicao')
const { schemaCadastroUsuario } = require('./validations/validationCadastrarUsuario')
const loginUsuario = require('./controllers/controllersUsers/loginUsuario')
const { schemaLoginUsuario } = require('./validations/validationLoginUsuario')
const verificarLogin = require('./middlewares/loginVerify')
const detalharUsuario = require('./controllers/controllersUsers/detalharUsuario')
const editarUsuario = require('./controllers/controllersUsers/editarUsuario')
const { schemaEditarUsuario } = require('./validations/validationEditarUsuario')

const router = express()

router.get('/categorias', listarCategorias)
router.post('/usuario', validarRequisicao(schemaCadastroUsuario), cadastrarUsuarios)
router.post('/login', validarRequisicao(schemaLoginUsuario), loginUsuario)

router.use(verificarLogin)

router.get('/usuario', detalharUsuario)
router.put('/usuario', validarRequisicao(schemaEditarUsuario), editarUsuario)

module.exports = router