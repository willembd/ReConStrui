import * as S from "../ConfirmacaoEntrega/confirmacaoEntregaStyle.js";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/navbar.jsx";
import Footer from "../../Componentes/Footer/footer.jsx";
import CampoDados from "../../Componentes/CampoDados/campoDados.jsx";
import { Barra } from "../../Componentes/modalCards/modalCards.js";

export default function ConfirmacaoEntrega() {
    const navigation = useNavigate();
    return (
        <>
            <NavBar />
            <S.Caixa>
                <S.Modal>
                    <S.ButtonContainer>
                        <S.Button onClick={() => navigation("/solicitacaoentregaretirada")}>
                            Voltar
                        </S.Button>
                    </S.ButtonContainer>
                    <S.ModalContainer>
                        <S.Campos>
                            <S.Titulo1>
                                <h4>Dados do Cliente</h4>
                            </S.Titulo1>

                            <CampoDados text="Nome: Rute Cajueiro" />
                            <CampoDados text="Quantidade: 15 Metros" />
                            <CampoDados text="Cidade: Olinda" />
                            <CampoDados text="Bairro: Rio Doce" />
                            <CampoDados text="CEP:54370-058 " />
                            <CampoDados text="N°:405" />
                        </S.Campos>

                        <Barra></Barra>

                        <S.Dados>
                            <S.Titulo>
                                <h4>Notificar Cliente</h4>
                            </S.Titulo>

                            <p>Enviar notificação de entrega para o cliente.</p>

                            <ButtonMod text="Enviar" />
                        </S.Dados>
                    </S.ModalContainer>
                </S.Modal>
            </S.Caixa>
            <Footer />
        </>
    );
}
