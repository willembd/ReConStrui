import React, { useState } from "react";
import * as S from "./cadastroUsuarioStyle.js";
import Imagempadrao from "../../assets/imagem-padrao1.svg";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/navbar.jsx";
import Footer from "../../Componentes/Footer/footer.jsx";
import { api } from "../../service/api.js";
import InputPrimary from "../../Componentes/InputPrimary/inputPrimary.jsx";



export default function CadastroUsuario() {
    const [nome, setNome] = useState("");
    const [data_nascimento, setData_nascimento] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    const handleFechar = () => {
        navigate("/paginalogin");
    };

    async function handleCadastrarUser(e) {
        await api.post('/usuario/create', {
                nome,
                data_nascimento,
                cpf,
                email,
                senha
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                navigate("/paginalogin");
                localStorage.removeItem("token")
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    }

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

                        <S.FormLogin>
                            <S.Titulo>Cadastro Usuário</S.Titulo>
                            <S.DivInput>
                                <InputPrimary
                                    text="Nome Completo"
                                    onChange={(e) => setNome(e.target.value)}
                                />
                                <InputPrimary
                                    text="Data de Nascimento"
                                    type="date"
                                    onChange={(e) =>
                                        setData_nascimento(e.target.value)
                                    }
                                />
                                <InputPrimary
                                    text="CPF"
                                    type="number"
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                                <InputPrimary
                                    text="E-mail"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <InputPrimary
                                    text="Senha"
                                    type="password"
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </S.DivInput>

                            <ButtonMod
                                text="Cadastrar"
                                onClick={() => handleCadastrarUser()}
                            ></ButtonMod>

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
