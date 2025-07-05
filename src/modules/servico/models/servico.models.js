const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDB");

const Servico = sequelize.define(
    "Servico",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        cliente_nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        endereco: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipo_servico: {
            type: DataTypes.ENUM,
            values: ['elétrica', 'hidráulica', 'outro']
        },
        data_solicitada: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM,
            values: ['pendente', 'em andamento', 'finalizada']
        },
        tecnico_responsavel: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: "servico",
        createdAt: "criado_em",
        updatedAt: "atualizado_em",
    }
);

module.exports = Servico;