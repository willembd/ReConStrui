import React from "react";
import * as S from "./orcamentosEmpresaStyle.js";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/navbar.jsx";
import Footer from "../../Componentes/Footer/footer.jsx";
import CampoDados from "../../Componentes/CampoDados/campoDados.jsx";
import Input from "../../Componentes/Input/input.jsx";

export default function OrcamentosEmpresa() {
    const navigation = useNavigate();
    return (
        <>
            <NavBar />
            <S.Caixa>
                <S.Modal>
                    <S.ModalContainer>
                        <S.ButtonContainer>
                            <S.Button onClick={() => navigation("/")}>
                                Voltar
                            </S.Button>
                        </S.ButtonContainer>

                        <S.Campos>
                            <div>
                                <S.Titulo1>
                                    <h4>Dados do Cliente</h4>
                                </S.Titulo1>

                                <CampoDados text="Nome: Rute Cajueiro" />
                                <CampoDados text="Quantidade: 15 Metros" />
                                <CampoDados text="Cidade: Olinda" />
                                <CampoDados text="Bairro: Rio Doce" />
                                <CampoDados text="CEP:54370-058 " />
                                <CampoDados text="N°:405" />
                            </div>
                        </S.Campos>

                        <S.Dados>
                            <S.Titulo>
                                <h4>Orçamentos</h4>
                            </S.Titulo>

                            <Input text="Valor do Material:" />
                            <Input text="Frete:" />

                            <ButtonMod text="Enviar" />
                        </S.Dados>
                    </S.ModalContainer>
                </S.Modal>
            </S.Caixa>
            <Footer />
        </>
    );
}
