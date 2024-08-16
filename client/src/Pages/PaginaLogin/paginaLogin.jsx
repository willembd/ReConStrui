import * as S from "./paginaLoginStyle.js";
import Imagempadrao from "../../assets/imagem-padrao1.svg";
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
                            <S.Titulo>Entrar</S.Titulo>
                            <S.Organizacao>
                                <S.DivInput>
                                    <Input text="E-mail" />
                                    <Input text="Senha" />
                                </S.DivInput>

                                <S.Linksenha href="/esqueceusenha">
                                    Esqueceu a senha?
                                </S.Linksenha>

                            </S.Organizacao>
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

                            <ButtonMod text="Entrar" onClick={handleFechar} />

                            <S.DivLink>
                                <p>Não tem Cadastro?</p>
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
