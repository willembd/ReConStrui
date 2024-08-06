import React from "react";
import * as S from "./CadastroUsuarioStyle.js";
import LogoBranca from "../../assets/LogoBranca.svg";
import Input from "../../Componentes/Input/input.jsx";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/navbar.jsx";
import Footer from "../../Componentes/Footer/footer.jsx";

export default function PaginaLogin() {
    const navigate = useNavigate();

    const handleFechar = () => {
        navigate("/");
    };

    return (
        <>
            <NavBar />
            <S.Caixa>
                <S.Modal>
                    <S.ModalContainer>
                        <S.Imagem>
                            <S.ButtonContainer>
                                <S.Button onClick={handleFechar}>
                                    Voltar
                                </S.Button>
                            </S.ButtonContainer>
                            <S.Logo src={LogoBranca} alt="" />
                            <div></div>
                        </S.Imagem>

                        <S.FormLogin>
                            <S.Titulo>Cadastro Usuário</S.Titulo>
                            <S.DivInput>
                                <Input text="Nome Completo" />
                                <Input text="Data de Nascimento" />
                                <Input text="CPF" />
                                <Input text="E-mail" />
                                <Input text="Senha" />
                            </S.DivInput>

                            <ButtonMod text="Cadastrar" />

                            <S.DivLink>
                                <S.Links href="cadastrar empresa">
                                    Cadastrar Empresa
                                </S.Links>
                            </S.DivLink>
                        </S.FormLogin>
                    </S.ModalContainer>
                </S.Modal>
            </S.Caixa>
            <Footer />
        </>
    );
}
