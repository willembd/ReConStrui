const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    // host: 'localhost',
    dialect: 'mysql',
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "reconstrui"


})

try {
    sequelize.authenticate()
    console.log("Banco logado")
} catch (error) {
    console.log("ERRO Banco")
}

module.exports = sequelize