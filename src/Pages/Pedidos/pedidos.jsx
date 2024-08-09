import * as S from "./pedidosStyle"
import { useState } from "react";


import Brita from "../../../public/brita.png"
import Areia from "../../../public/areia.png"
import { useNavigate } from "react-router-dom"
import NavBar from "../../Componentes/NavBar/navbar"
import Footer from "../../Componentes/Footer/footer"
import CampoDados from "../../Componentes/CampoDados/campoDados";
import ButtonCancelar from "../../Componentes/ButtonCancelar/buttonCancelar";
import ButtonPadrao from "../../Componentes/ButtonPadrao/buttonPadrao";
import ModalCancelar from "../../Componentes/ModalCancelar/modalCancelar";


export default function Pedidos () {

    const [isOpenTest, setOpenTest] = useState(false)


    const navigate = useNavigate();
        const handleEntrar = () => {
            navigate("/confirmacaoPedidos");
        };
        const handleFechar = () => {
            navigate("/");
        };
    return (

        <>
            <NavBar/>
            
            <S.Caixa>
                <S.DivLink>
                    <h1>Meus Pedidos</h1>
                </S.DivLink>
                
                <S.Pedido>
                    <S.DivEmpresa>
                        <S.Imagem src={Areia} alt="" />
                        <h1>Aria Reciclada</h1>
                        <p>AGR Ambiental</p>
                    </S.DivEmpresa>
                    <S.Dados>
                        <h2>Produto</h2>
                        <CampoDados text="Quantidade: 15 metros"/>
                        <h2>Informação para Entrega</h2>
                        <CampoDados text="Cidade: Olinda"/>
                        <CampoDados text="Bairro: Rio Doce"/>
                        <CampoDados text="Rua: Joaquim Nabuco"/>
                        <CampoDados text="N: 405"/>
                        <CampoDados text="Cep: 53380-058"/>
                    </S.Dados>
                    <S.DivResposta>
                        <h1>Aguardando Orçamento </h1>
                        
                        <S.Progress>
                            <S.ProgressCampo></S.ProgressCampo>
                        </S.Progress>

                        <S.DivButton>
                            <ButtonCancelar text="Cancelar" onClick={() => setOpenTest(!isOpenTest) } />
                            <ModalCancelar text="Tem Certeza que deseja cancelar compra?" isOpenTest={isOpenTest} setOpenTest={setOpenTest} />

                            <ButtonPadrao text="Ver Orçamento"onClick={handleEntrar}/>
                        </S.DivButton>
                    </S.DivResposta>
                </S.Pedido>   

                <S.Pedido>
                    <S.DivEmpresa>
                        <S.Imagem src={Brita} alt="" /> 
                        <h1>Brita Reciclada</h1>
                        <p>AGR Ambiental</p>
                    </S.DivEmpresa>
                    <S.Dados>
                        <h2>Produto</h2>
                        <CampoDados text="Quantidade: 25 metros"/>
                        <h2>Informação para Entrega</h2>
                        <CampoDados text="Cidade: Olinda"/>
                        <CampoDados text="Bairro: Rio Doce"/>
                        <CampoDados text="Rua: Joaquim Nabuco"/>
                        <CampoDados text="N: 405"/>
                        <CampoDados text="Cep: 53380-058"/>
                    </S.Dados>
                    <S.DivResposta>
                        <h1>Aguardando Orçamento </h1>

                        <S.Progress>
                            <S.ProgressCampo></S.ProgressCampo>
                        </S.Progress>
                        
                        <S.DivButton>
                            <ButtonCancelar text="Cancelar" onClick={() => setOpenTest(!isOpenTest) }/>
                            <ModalCancelar text="Tem Certeza que deseja cancelar compra?" isOpenTest={isOpenTest} setOpenTest={setOpenTest} />

                            <ButtonPadrao text="Ver Orçamento" onClick={handleEntrar}/>
                        </S.DivButton>
                    </S.DivResposta>
                </S.Pedido>   
            </S.Caixa>
        
            <Footer/>
        
        </>

    )
}
