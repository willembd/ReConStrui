const { DataTypes } = require("sequelize");
const db = require("../database/database");

const Produto = db.define("produtos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_empresa: {
    type: DataTypes.INTEGER,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
  },
  q_minima: {
    type: DataTypes.STRING,
  },
  q_maxima: {
    type: DataTypes.STRING,
  }
},
{
  
  timestamps: false,

  createdAt: false,

  updatedAt: false,

}
);

module.exports = Produto;

