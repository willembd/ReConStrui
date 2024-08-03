import Cards from "../../../public/brita 1.svg";
import Input from "../../Componentes/Input/input"
import NavBar from "../../Componentes/NavBar/navbar"
import Footer from "../../Componentes/Footer/footer"
// import "./pedidosStyle"
import * as S from "./pedidosStyle"



export default function Pedidos () {
    return (

<>
            <S.NavBar>
                <NavBar/>
            </S.NavBar>
        <S.Primeiracaixa>

            <S.Titulo>
                <h1>Meus Pedidos</h1>
            </S.Titulo>

            <S.Cards>
                <S.img src={Cards} alt="" />
                <h1>Brita</h1>
                <h3>AGR Ambiental</h3>
            </S.Cards>

            <S.Info>
                        
                <label htmlFor="quantidade">Quantidade:</label>
                <Input type="text" id="nome" name="nome" />

                <label htmlFor="nome">Rua:</label>
                <Input type="text" id="nome" name="nome" />

                <label htmlFor="nome">Cidade:</label>
                <Input type="text" id="nome" name="nome" />

                <label htmlFor="nome">Bairro:</label>
                <Input type="text" id="nome" name="nome" />

                <label htmlFor="nome">Nº</label>
                <Input type="text" id="nome" name="nome" />

                <label htmlFor="nome">Cep:</label>
                <Input type="text" id="nome" name="nome" />
            </S.Info>

            <div className="barra de progresso">
                <p>Aguardando Orçamento</p>
            </div>

            <div className="button">
                <button>Cancelar</button>
                <button>Ver Orcamento</button>
            </div>
        </S.Primeiracaixa>

        <S.SegundaCaixa>
            <div className="img">
                <img src={Cards} alt="" />
                <h1>Brita</h1>
                <h3>AGR Ambiental</h3>
            </div>

            <div className="input">   
                <label htmlFor="quantidade">Quantidade:</label>
                <Input type="text" id="quantidade" name="quantidade" />

                <label htmlFor="rua">Rua:</label>
                <Input type="text" id="rua" name="rua" />

                <label htmlFor="cidade">Cidade:</label>
                <Input type="text" id="cidade" name="cidade" />

                <label htmlFor="bairro">Bairro:</label>
                <Input type="text" id="bairro" name="bairro" />

                <label htmlFor="numero">Nº</label>
                <Input type="text" id="numero" name="numero" />

                <label htmlFor="cep">Cep:</label>
                <Input type="text" id="cep" name="cep" />   
            </div>

            <div className="barra de progresso">
                <h2>Orçamento Recebido</h2>
            </div>

            <div className="button">
                <button>Cancelar</button>
                <button>Ver Orcamento</button>
            </div>
        </S.SegundaCaixa>

        <S.TerceiraCaixa>
            <div className="img">
                <img src={Cards} alt="" />
                <h1>Brita</h1>
                <h3>AGR Ambiental</h3>
            </div>

            <div className="input">   
                <label htmlFor="quantidade">Quantidade:</label>
                <Input type="text" id="quantidade" name="quantidade" />

                <label htmlFor="rua">Rua:</label>
                <Input type="text" id="rua" name="rua" />

                <label htmlFor="cidade">Cidade:</label>
                <Input type="text" id="cidade" name="cidade" />

                <label htmlFor="bairro">Bairro:</label>
                <Input type="text" id="bairro" name="bairro" />

                <label htmlFor="numero">Nº</label>
                <Input type="text" id="numero" name="numero" />

                <label htmlFor="cep">Cep:</label>
                <Input type="text" id="cep" name="cep" />   
            </div>

            <div className="barra de progresso">
                <h2>Compra Realizada</h2>
                <p>Entrega prevista: 00/00/0000</p>
            </div>

        </S.TerceiraCaixa>
            <div className="footer">
                <Footer/>
            </div>

</>

    )
}
