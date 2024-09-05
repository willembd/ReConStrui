const Usuario = require("../model/Usuario");
const Empresa = require("../model/Empresa");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = class authControllers {
    static async userLogin(request, response){
        try {
            const{
                email,
                senha,
            } = request.body;
    
            if(!email){
                return response.status(422).json({ message: "email ou senha invalido" })
            }
            if(!senha){
                return response.status(422).json({ message: "email ou senha invalido" })
            }
    
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
        } catch (error) {
            console.log(error)
        }
    }

    static async empresaLogin(request, response){
       try{
        const{
            email,
            senha,
        } = request.body;

        if(!email){
            return response.status(422).json({ message: "email ou senha invalido" })
        }
        if(!senha){
            return response.status(422).json({ message: "email ou senha invalido" })
        }

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
       }catch(error){
            console.log(error)
       }
    }
}