import * as S from "./cadastroUsuarioStyle.js";
import ImgLogo from "../../assets/logoNavBar.svg";
import Input from "../../Componentes/Input/input";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import { useNavigate } from "react-router-dom";

export default function CadastroUsuario() {
    const navigate = useNavigate();

    const handleFechar = () => {
        navigate("/");
    };

    return (
        <S.Caixa>
            <S.Modal>
                
                <S.Button onClick={handleFechar}>x</S.Button>
            
                <S.Imagem>
                    <S.Logo src={ImgLogo} alt="" />
                </S.Imagem>

                <S.Linha></S.Linha>

                <S.FormLogin>
                    <S.Titulo>Cadastrar Usuário</S.Titulo>
                    <S.DivInput>
                        <Input text="Nome Completo" />
                        <Input text="Data de Nascimento" />
                        <Input text="CPF" />
                        <Input text="E-mail" />
                        <Input text="Senha" />
                    </S.DivInput>

                    <ButtonMod text="Cadastrar" />

                    <S.DivLink>
                        <S.Links href="cadastra Empresa">
                            Cadastrar Empresa
                        </S.Links>
                    </S.DivLink>
                </S.FormLogin>
            </S.Modal>
        </S.Caixa>
    );
}
