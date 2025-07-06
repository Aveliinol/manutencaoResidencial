const express = require('express');
const ServicoController = require('../controllers/servico.controller');
const AutenticacaoMiddleware = require('../../usuario/middleware/usuario.middleware');
const router = express.Router();

//Cadastrar serviço
router.post('/criar', AutenticacaoMiddleware.autenticarToken, ServicoController.criarServico)

//Editar serviço
router.put('/editar', AutenticacaoMiddleware.autenticarToken, ServicoController.editarServico)

//Listar Todos os serviço
router.get('/listar', AutenticacaoMiddleware.autenticarToken, ServicoController.listarServicos)

//Listar serviço por id
router.get('/listarid', AutenticacaoMiddleware.autenticarToken, ServicoController.listarServicoPorId)

//Deletar serviço
router.delete('deletar', AutenticacaoMiddleware.autenticarToken, ServicoController.deletarServico)