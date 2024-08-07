import * as S from "./novosOrcamentoEmpStyle"

import Footer from "../../Componentes/Footer/footer";
import NavBar from "../../Componentes/NavBar/navbar";
import CampoDados from "../../Componentes/CampoDados/campoDados";
import ButtonCancelar from "../../Componentes/ButtonCancelar/buttonCancelar";
import ButtonPadrao from "../../Componentes/ButtonPadrao/buttonPadrao";

export default function NovosOrcamentoEmp(){
    return (
        <>
            <NavBar/>

            <S.Caixa>
                <a href="">Novos Orçamentos</a>
                <a href="">Entregas</a>
                <a href=""> Retiradas</a>
                <a href="">Finalizados</a>
                <S.Pedido>
                    <div>
                        <p>Brita Reciclada</p>
                        <p>AGR Ambiental</p>
                    </div>
                    <S.Dados>
                        <CampoDados text="Quantidade: 15 metros"/>
                        <CampoDados text="Cidade: Olinda"/>
                        <CampoDados text="Bairro: Rio Doce"/>
                        <CampoDados text="Rua: Joaquim Nabuco"/>
                        <CampoDados text="N: 405"/>
                        <CampoDados text="Cep: 53380-058"/>
                    </S.Dados>
                    <div>
                        <h2>Aguardando Recebido</h2>
                        
                        <S.DivButton>
                            <ButtonCancelar text="Cancelar"/>
                            <ButtonPadrao text="Verificar"/>
                        </S.DivButton>
                    </div>
                </S.Pedido>    
            </S.Caixa>
        
            <Footer/>
        </>

    )
}