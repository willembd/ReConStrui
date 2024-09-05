const { DataTypes } = require("sequelize");
const db = require("../database/database");

const Empresa = db.define(
  "empresa",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    razao_social: {
      type: DataTypes.STRING,
    },
    telefone: {
      type: DataTypes.STRING,
    },
    cnpj: {
      type: DataTypes.STRING,
      unique: true,
    },
    cep: {
      type: DataTypes.STRING,
    },
    estado: {
      type: DataTypes.STRING,
    },
    cidade: {
      type: DataTypes.STRING,
    },
    bairro: {
      type: DataTypes.STRING,
    },
    endereco: {
      type: DataTypes.STRING,
    },
    numero: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
    },
    materiais: {
      type: DataTypes.JSON,
    },
    transporte: {
      type: DataTypes.JSON,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Empresa;
