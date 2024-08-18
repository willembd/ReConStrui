const Usuario = require("../model/Usuario");
const Empresa = require("../model/Empresa");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = class authControllers {
    static async userLogin(request, response){
        const{
            email,
            senha,
        } = request.body;

        const user = await Usuario.findOne({ where: { email: email } })

        const validateSenha = await bcrypt.compare(senha, user.senha)

        if(!validateSenha){
            response.status(422).json({ message: 'email ou senha invalidos!' })
            return
        }

        const token = jwt.sign({
            id: user.id, 
            type: 'usuario'
        }, 'screet')

        response.status(200).json({ token: token })
    }

    static async empresaLogin(request, response){
        const{
            email,
            senha,
        } = request.body;

        const empresa = await Empresa.findOne({ where: { email: email } })

        const validateSenha = await bcrypt.compare(senha, empresa.senha)

        if(!validateSenha){
            response.status(422).json({ message: 'email ou senha invalidos!' })
            return
        }

        const token = jwt.sign({
            id: empresa.id,
            type: 'empresa'
        }, 'screet')

        response.status(200).json({ token: token })
    }
}