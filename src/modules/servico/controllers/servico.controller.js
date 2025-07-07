const ServicoModel = require("../models/servico.models");

class ServicoController {

    static async criarServico(req, res) {
        try {
            const { cliente_nome, endereco, tipo_servico, data_solicitada, status, tecnico_responsavel } = req.body
            if (!cliente_nome || !endereco || !tipo_servico || !data_solicitada || !status || !tecnico_responsavel) {
                return res.status(400).json({ msg: "Todos os campos devem ser preenchidos" })
            }
            const servico = await ServicoModel.create({ cliente_nome, endereco, tipo_servico, data_solicitada, status, tecnico_responsavel })
            res.status(200).json(servico)
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!" })
        }
    }
    static async editarServico(req, res) {
        try {
            const id = req.params;
            const servico = await ServicoModel.findByPk(req.params.id)
            if (!servico) {
                return res.status(400).json({ msg: "Serviço não encontrado no sistema" })
            }
            const { cliente_nome, endereco, tipo_servico, data_solicitada, status, tecnico_responsavel } = req.body
            if (!cliente_nome || !endereco || !tipo_servico || !data_solicitada || !status || !tecnico_responsavel) {
                return res.status(400).json({ msg: "Todos os campos devem ser preenchidos" })
            }
            const updateService = await servico.update({ cliente_nome, endereco, tipo_servico, data_solicitada, status, tecnico_responsavel }, { where: id })
            res.status(200).json(updateService)
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!", erro: error.message })
        }
    }
    static async listarServicos(req, res) {
        try {
            const servico = await ServicoModel.findAll()
            if (servico.length === 0) {
                return res.status(200).json({ msg: "Não há seviços o sistema" })
            }
            res.status(200).json(servico)
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!" })
        }
    }
    static async listarServicoPorId(req, res) {
        try {
            const servico = await ServicoModel.findByPk(req.params.id)
            if (!servico) {
                return res.status(400).json({ msg: "Serviço não encontrado no sistema" })
            }
            res.status(200).json(servico)
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!" })
        }
    }
    static async deletarServico(req, res) {
        try {
            const id = req.params;
            const servico = await ServicoModel.findByPk(req.params.id)
            if (!servico) {
                return res.status(400).json({ msg: "Serviço não encontrado no sistema" })
            }
            await ServicoModel.destroy({ where: id })
            res.status(200).json({ msg: "Serviço deletado com sucesso!" })
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!", erro: error.message })
        }
    }

}

module.exports = ServicoController;
