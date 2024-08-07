import * as S from "./paginaLoginStyle.js";
import LogoBranca from "../../assets/LogoBranca.svg";
import Input from "../../Componentes/Input/input";
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
                            <S.Titulo>Entrar</S.Titulo>
                            <S.DivInput>
                                <Input text="E-mail" />
                                <Input text="Senha" />
                            </S.DivInput>

                            <S.DivRadio>
                                <div>
                                    <input type="radio" value="Usuario" />
                                    <label htmlFor="">Usuário</label>
                                </div>
                                <div>
                                    <input type="radio" value="Empresa" />
                                    <label htmlFor="">Empresa</label>
                                </div>
                            </S.DivRadio>

                            <ButtonMod text="Entrar" />

                            <S.DivLink>
                                <S.Links href="cadastra">Cadastrar</S.Links>
                                <S.Links href="Esqueceu a Senha?">
                                    Esqueci Senha
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
