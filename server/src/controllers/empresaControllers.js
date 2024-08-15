const Empresa = require("../model/Empresa");
const bcrypt = require("bcrypt");

module.exports = class empresaControllers {
  static async creatEmpresa(request, response) {
    try {
      const {
        nome,
        razao_social,
        telefone,
        cnpj,
        cep,
        estado,
        cidade,
        bairro,
        endereco,
        numero,
        email,
        senha,
        materiais,
        transporte,
      } = request.body;

      const salt = await bcrypt.genSalt(12);
      const encryptPass = await bcrypt.hash(senha, parseInt(salt));

      const empresa = await Empresa.create({
        nome,
        razao_social,
        telefone,
        cnpj,
        cep,
        estado,
        cidade,
        bairro,
        endereco,
        numero,
        email,
        senha: encryptPass,
        materiais,
        transporte,
      });

      response.status(201).json(empresa);

    } catch (error) {
      response.status(500).json({ error: "Erro ao criar empresa", error });
    }
  }

  static async getAllEmpresa(response){
    const empresas = await Empresa.findAll()

    response.status(200).json({ empresa: empresas })

  }
};
