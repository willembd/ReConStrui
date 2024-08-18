import React, { useState } from "react";
import * as S from "./cadastroUsuarioStyle.js";
import Imagempadrao from "../../assets/imagem-padrao1.svg";
import Input from "../../Componentes/Input/input.jsx";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/navbar.jsx";
import Footer from "../../Componentes/Footer/footer.jsx";
import { api } from "../../service/api.js";


export default function CadastroUsuario() {
    const [nome, setNome] = useState("");
    const [data_nascimento, setData_nascimento] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    const handleFechar = () => {
        
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
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <NavBar />
            <S.Response>
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

                        <S.FormLogin>
                            <S.Titulo>Cadastro Usuário</S.Titulo>
                            <S.DivInput>
                                <Input
                                    text="Nome Completo"
                                    onChange={(e) => setNome(e.target.value)}
                                />
                                <Input
                                    text="Data de Nascimento"
                                    type="date"
                                    onChange={(e) =>
                                        setData_nascimento(e.target.value)
                                    }
                                />
                                <Input
                                    text="CPF"
                                    type="number"
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                                <Input
                                    text="E-mail"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    text="Senha"
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
            </S.Response>
            <Footer />
        </>
    );
}
