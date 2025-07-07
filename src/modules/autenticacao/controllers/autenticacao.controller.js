const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
const Usuario = require("../../usuario/models/usuario.models");

const tempo_acess_token = process.env.TEMPO_ACESS_TOKEN;
const tempo_refresh_token = process.env.TEMPO_REFRESH_TOKEN;

class AutenticacaoController {
  static gerarTokenAcesso(dadosUsuario) {
    return jwt.sign(dadosUsuario, process.env.SECRET_KEY, {
      expiresIn: tempo_acess_token,
    });
  }
  static gerarRefressToken(dadosUsuario) {
    return jwt.sign(dadosUsuario, process.env.SECRET_KEY, {
      expiresIn: tempo_refresh_token,
    });
  }

  static async login(req, res) {
    try {
      const { email, senha } = req.body;
      if (!email || !senha) {
        return res.status(400).json({ msg: "É necessario informar o email e senha para login" });
      }
      const usuario = await Usuario.findOne();
      if (!usuario) {
        return res.status(401).json({ msg: "Usuario não encontrado!" });
      }
      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
      if (!senhaCorreta) {
        return res.status(400).json({ msg: "E-mail ou senha incorreto!" });
      }
      const dadosUsuario = {
        nome: usuario.nome,
        id: usuario.id,
        papel: "admin",
      };
     
      const tokenAcesso = AutenticacaoController.gerarTokenAcesso(dadosUsuario);
      const refreshToken = AutenticacaoController.gerarRefressToken(dadosUsuario);

      res.cookie("refreshToken", refreshToken, {
        httpOnly: false,
        secure: process.env.NODE_ENV,
        sameStrict: "strict",
        maxAge: 1 * 24,
      });
      res.status(200).json({
        msg: "Usuario logado com sucesso",
        tokenAcesso,
        nome: usuario.nome,
        id: usuario.id,
        papel: "admin",
      });
    } catch (error) {
      res.status(500).json({msg: "Erro interno do servidor. Por favor tente mais tarde.",erro: error.message});
    }
  }
  static refreshToken(req, res) {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return res.status(403).json({ msg: "Refresh token invalido!" });
    }
    jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET,
      (erro, usuario) => {
        if (erro) {
          return res.status(403).json({ msg: "Refresh Token invalido!" });
        }
        const dadosUsuario = {
          nome: usuario.nome,
          id: usuario.id,
          papel: "admin",
        };
        const novoTokenAcesso = this.gerarTokenAcesso(dadosUsuario);
        res.status(200).json({ tokenAcesso: novoTokenAcesso });
      }
    );
  }
  static async sair(req, res) {
    try {
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "development",
        sameSite: "strict",
      });
      res.status(200).json({ msg: "Logout realizado com sucesso" });
    } catch (error) {
      res.status(500).json({msg: "Erro interno do servidor. Por favor, tente mais tarde.",erro: error.message});
    }
  }
}

module.exports = AutenticacaoController;
