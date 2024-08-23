import React from "react";
import { useState } from "react";
import * as S from "./esqueceuSenhaStyle.js";
import Imagempadrao from "../../assets/imagem-padrao1.svg";
import Input from "../../Componentes/Input/input";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/navbar.jsx";
import Footer from "../../Componentes/Footer/footer.jsx";
import ModalVerifiqueEmail from "../../Componentes/ModalVerifiqueEmail/ModalVerifiqueEmail.jsx";
import Input2 from "../../Componentes/Input2/input2.jsx";

export default function EsqueceuSenha() {
    const [isOpen, setOpen] = useState(false);

    const navigate = useNavigate();

    const handleFechar = () => {
        navigate("/paginalogin");
    };

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
                            <div></div>
                        </S.Imagem>

                        <S.FormSenha>
                            <S.EsqueceuETexto>
                                <S.Titulo>Esqueceu sua senha?</S.Titulo>
                                <S.Texto>
                                    Para redefinir sua senha, informe o seu
                                    e-mail cadastrado.
                                </S.Texto>
                                <S.DivInput>
                                    <Input2 text="E-mail" />

                                    <ButtonMod
                                        text="Enviar"
                                        onClick={() => setOpen(!isOpen)}
                                    />
                                    <ModalVerifiqueEmail
                                        text="Verifique seu e-mail"
                                        isOpen={isOpen}
                                        setOpen={setOpen}
                                    />
                                </S.DivInput>
                            </S.EsqueceuETexto>
                        </S.FormSenha>
                    </S.ModalContainer>
                </S.Modal>
            </S.Caixa>
            <Footer />
        </>
    );
}
