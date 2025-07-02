const express = require('express');
const UsuarioController = require('../controllers/usuario.controller')
const AutenticacaoMiddleware = require('../middleware/usuario.middleware')
const router = express.Router()

// rota de cadastro
router.post('/cadastrar', UsuarioController.cadastrar)

// rota de perfil
router.get('/perfil', AutenticacaoMiddleware.autenticarToken, UsuarioController.perfil)

module.exports = router