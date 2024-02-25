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

const { schemaCadastroProduto } = require('./validations/validationCadastrarProduto')
const cadastrarProduto = require('./controllers/controllerProduct/cadastrarProduto')
const { schemaEditarProduto } = require('./validations/validationEditarProduto')
const editarProduto = require('./controllers/controllerProduct/editarProduto')
const listarProdutos = require('./controllers/controllerProduct/listarProdutos')
const detalharProduto = require('./controllers/controllerProduct/detalharProduto')
const deletarProduto = require('./controllers/controllerProduct/deletarProduto')
const cadastrarCliente = require('./controllers/controllerClient/cadastrarCliente')
const { schemaCadastroCliente } = require('./validations/validationCadastrarCliente')

const router = express()

router.get('/categorias', listarCategorias)
router.post('/usuario', validarRequisicao(schemaCadastroUsuario), cadastrarUsuarios)
router.post('/login', validarRequisicao(schemaLoginUsuario), loginUsuario)

router.use(verificarLogin)

router.get('/usuario', detalharUsuario)
router.put('/usuario', validarRequisicao(schemaEditarUsuario), editarUsuario)

router.post('/produto', validarRequisicao(schemaCadastroProduto), cadastrarProduto)
router.put('/produto/:id', validarRequisicao(schemaEditarProduto), editarProduto)
router.get('/produtos', listarProdutos)
router.get('/produto/:id', detalharProduto)
router.delete('/produto/:id', deletarProduto)

router.post('/cliente', validarRequisicao(schemaCadastroCliente), cadastrarCliente)

module.exports = router