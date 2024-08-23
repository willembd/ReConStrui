import * as S from "./paginaLoginStyle.js";
import Imagempadrao from "../../assets/imagem-padrao1.svg";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/navbar.jsx";
import Footer from "../../Componentes/Footer/footer.jsx";
import { useState } from "react";
import { api } from "../../service/api.js";
import InputSecondary from "../../Componentes/InputPrimary/inputPrimary.jsx";

export default function PaginaLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [login, setLogin] = useState(null);

    const navigate = useNavigate();

    const handleFechar = () => {
        navigate("/");
    };

    async function handleLogin(e) {
        if (login === "usuario") {
            await api
                .post("/userlogin", {
                    email: email,
                    senha,
                })
                .then((response) => {
                    localStorage.setItem("token", response.data.token);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else if (login === "empresa") {
            await api
                .post("/empresalogin", {
                    email,
                    senha,
                })
                .then((response) => {
                    localStorage.setItem("token", response.data.token);
                    navigate("/orcamentosempresa");
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            return alert("Erro");
        }
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
                            <S.Titulo>Entrar</S.Titulo>
                            <S.Organizacao>
                                <S.DivInput>
                                    <InputSecondary
                                        text="E-mail"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <InputSecondary
                                        type="password"
                                        text="Senha"
                                        onChange={(e) =>
                                            setSenha(e.target.value)
                                        }
                                    />
                                </S.DivInput>

                                <S.Linksenha href="/esqueceusenha">
                                    Esqueceu a senha?
                                </S.Linksenha>
                            </S.Organizacao>
                            <S.DivRadio>
                                <S.DivRadioOpcoes>
                                    <input
                                        type="radio"
                                        name="login"
                                        onChange={() => setLogin("usuario")}
                                    />
                                    <label htmlFor="">Usuário</label>
                                </S.DivRadioOpcoes>
                                <S.DivRadioOpcoes>
                                    <input
                                        type="radio"
                                        name="login"
                                        onChange={() => setLogin("empresa")}
                                    />
                                    <label htmlFor="">Empresa</label>
                                </S.DivRadioOpcoes>
                            </S.DivRadio>

                            <ButtonMod
                                text="Entrar"
                                onClick={() => handleLogin()}
                            />

                            <S.DivLink>
                                <S.TextP>Não tem Cadastro?</S.TextP>
                                <S.Links href="/cadastrousuario">
                                    Cadastre-se
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
