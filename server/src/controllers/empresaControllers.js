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

      if(!nome){
        response.status(422).json({ message: 'Nome Obrigatorio!' })
        return
      }
      if(!razao_social){
        response.status(422).json({ message: 'Razão Social Obrigatorio!' })
        return
      }
      if(!telefone){
        response.status(422).json({ message: 'Telefone Obrigatorio!' })
        return
      }
      if(!cnpj){
        response.status(422).json({ message: 'CNPJ Obrigatorio!' })
        return
      }
      if(!cep){
        response.status(422).json({ message: 'CEP Obrigatorio!' })
        return
      }
      if(!estado){
        response.status(422).json({ message: 'Estado Obrigatorio!' })
        return
      }
      if(!cidade){
        response.status(422).json({ message: 'Cidade Obrigatoria!' })
        return
      }
      if(!bairro){
        response.status(422).json({ message: 'Bairro Obrigatorio!' })
        return
      }
      if(!endereco){
        response.status(422).json({ message: 'Endereço Obrigatorio!' })
        return
      }
      if(!numero){
        response.status(422).json({ message: 'Número Obrigatorio!' })
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
      if(!transporte || transporte.length === 0){
        response.status(422).json({ message: 'Transporte Obrigatoria!' })
        return
      }
      

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

  static async getOneEmpresa(request, response) {
    const { id } = request.params;

    const empresa = await Empresa.findByPk(id);

    if (!empresa) {
      response.status(422).json({ message: "Empresa não encontrado" });
      return;
    }

    response.status(200).json({ empresa : empresa });
  }


  static async deleteEmpresa(request, response){
    try {
      const { id } = request.params;

      const empresa = await Empresa.findByPk(id);

      if (!empresa) {
        response.status(422).json({ message: "Empresa não encontrada" });
        return;
      }

      await Empresa.destroy({ where: { id } });

      return response
        .status(200)
        .json({ message: "Empresa deletada com sucesso!" });
    } catch (error) {
        console.log(error)

        return response.status(500).json({ message: "Erro ao deletar empresa", error })
    }
  }
};





