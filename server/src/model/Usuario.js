const { DataTypes } = require("sequelize");
const db = require("../database/database");

const Usuario = db.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data_nascimento: {
      type: DataTypes.DATE
    },
    cpf: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    senha: {
      type: DataTypes.STRING
    },
  },
  {
    timestamps: false
  }
);

module.exports = Usuario;