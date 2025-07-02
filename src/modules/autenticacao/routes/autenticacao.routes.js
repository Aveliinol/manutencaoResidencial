const express = require('express');
const router = express.Router()

const AutenticacaoController = require('../controllers/autenticacao.controller')

router.post('/login', AutenticacaoController.login);
 
router.post('/logout', AutenticacaoController.sair);

router.post('/refress-token', AutenticacaoController.refreshToken);

module.exports = router


