import * as S from "./confirmacaoPedidosStyle";
import NavBar from "../../Componentes/NavBar/navbar";
import Footer from "../../Componentes/Footer/footer";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo";
import { useState } from "react";
import ModalCartãoPix from "../../Componentes/ModalCartãoPix/modalCartãoPix";
import Imagempadrao from "../../assets/imagem-padrao1.svg";
import CampoDados from "../../Componentes/CampoDados/campoDados";
import { useNavigate } from "react-router-dom";

export default function Confirmacao() {

    const navigate = useNavigate();

    const handleFechar = () => {
        navigate("/pedidos");
    };

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <NavBar />

            <S.ButtonContainer>
                <S.Button onClick={handleFechar}>Voltar</S.Button>
            </S.ButtonContainer>

            <S.Caixa>
                <S.Modal>
                    <S.ModalContainer>
                        <S.Imagem>
                            <S.Logo src={Imagempadrao} alt="" />
                        </S.Imagem>

                        <S.FormConfPedido>
                            <S.Titulo>Finalizar Compra</S.Titulo>
                            <S.DivCampo>
                                <CampoDados text="15 Metros" />
                                <CampoDados text="Preço: 450,00R$" />
                                <CampoDados text="Frete: 45,00R$" />
                                <CampoDados text="Taxa: 10,00R$" />
                                <CampoDados text="Valor Total: 505,00R$" />
                            </S.DivCampo>

                            <S.DivButton>
                                <ButtonMod
                                    text="Comprar"
                                    onClick={() => setOpen(!isOpen)}
                                />
                                <ModalCartãoPix
                                    text="Pagamento"
                                    isOpen={isOpen}
                                    setOpen={setOpen}
                                />
                            </S.DivButton>
                        </S.FormConfPedido>
                    </S.ModalContainer>
                </S.Modal>
            </S.Caixa>

            <Footer />
        </>
    );
}