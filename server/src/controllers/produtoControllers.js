
const Produto = require("../model/Produto")

module.exports = class produtoControllers{
    static async creatProduto(request, response){
        try {
            const{
                nome,
                id_empresa,
                categoria,
                q_minima,
                q_maxima,
            } = request.boby;
            if(!nome){
                response.status(422).json({ message: 'Nome Obrigatorio!' })
                return
            }
            if(!id_empresa){
                response.status(422).json({ message: 'Nome Obrigatorio!' })
                return
            }
            if(!categoria){
                response.status(422).json({ message: 'Categoria Obrigatorio!' })
                return
            }
            if(!q_minima){
                response.status(422).json({ message: 'Quantidade minima Obrigatoria!' })
                return
            }
            if(!q_maxima){
                response.status(422).json({ message: 'Quantidade maxima Obrigatoria!' })
                return
            }


            const produto = await Produto.create({
                nome,
                id_empresa,
                categoria,
                q_minima,
                q_maxima
            });

            response.status(201).json(produto);
        } catch (error) {
            response.status(500).json({ error: "Erro ao criar Produto", error });
        }
    }

    static async getAllProduto( request, response){
        const produtos = await Produto.findAll();
        response.status(200).json({ produto: produtos });
    }
};