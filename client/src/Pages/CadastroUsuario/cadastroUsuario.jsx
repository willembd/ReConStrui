import React from "react";
import * as S from "./cadastroUsuarioStyle.js";
import Imagempadrao from "../../assets/imagem-padrao1.svg";
import Input from "../../Componentes/Input/input.jsx";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/navbar.jsx";
import Footer from "../../Componentes/Footer/footer.jsx";

export default function CadastroUsuario() {
    const navigate = useNavigate();

    const handleFechar = () => {
        navigate("/paginalogin");
    };

    return (
        <>
            <NavBar />
                     <S.ButtonContainer>
                                <S.Button onClick={handleFechar}>
                                    Voltar
                                </S.Button>
                     </S.ButtonContainer>
            <S.Caixa>
                <S.Modal>
                    <S.ModalContainer>
                        <S.Imagem>
                            <S.Logo src={Imagempadrao} alt="" />
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

                            <ButtonMod text="Cadastrar"></ButtonMod>

                            <S.DivLink>
                                <S.Links href="/cadastroempresa">
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
