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