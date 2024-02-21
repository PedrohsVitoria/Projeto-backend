const express = require('express')
const listarCategorias = require('./controllers/controllerCategory/listarCategorias')
const cadastrarUsuario = require('./controllers/controllersUsers/cadastrarUsuario')

const router = express.Router()

router.get('/categorias', listarCategorias)
router.post('/usuario', cadastrarUsuario)

module.exports = router