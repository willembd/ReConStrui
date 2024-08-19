const Usuario = require("../model/Usuario");
const bcrypt = require("bcrypt");

module.exports = class usuarioControllers{
    static async creatUsuario(request, response) {
        try {
            const{
                nome,
                data_nascimento,
                cpf,
                email,
                senha,
            } = request.body;

            if(!nome){
                response.status(422).json({ message: 'Nome Obrigatorio!' })
                return
            }
            if(!data_nascimento){
                response.status(422).json({ message: 'Data de Nascimneto Obrigatoria!' })
                return
            }
            if(!cpf){
                response.status(422).json({ message: 'CPF Obrigatorio!' })
                return
            }
            if(!email){
                response.status(422).json({ message: 'E-mail Obrigatorio!' })
                return
            }
            if(!senha){
                response.status(422).json({ message: 'Senha Obrigatoria!' })
                return
            }


            const salt = await bcrypt.genSalt(12);
            const encryptPass = await bcrypt.hash(senha, parseInt(salt));
            
            const usuario = await Usuario.create({
                nome,
                data_nascimento,
                cpf,
                email,
                senha: encryptPass,
            });

            response.status(201).json(usuario);

        } catch (error) {
            response.status(500).json({ error: "Erro ao criar Usuario", error});
        }
    }

    static async getAllUsuario(response){
        const usuario = await Usuario.findAll()
        response.status(200).json({ usuario: usuario })
    }
}