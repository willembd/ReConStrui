import * as S from "./paginaLoginStyle.js";
import ImgLogo from "../../assets/logoNavBar.svg";
import Input from "../../Componentes/Input/input";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";

export default function PaginaLogin() {
    return (
        <S.Caixa>
            <S.Modal>

                <S.Button>X</S.Button>

                <S.Imagem>
                    <S.Logo src={ImgLogo} alt="" />
                </S.Imagem>

                <S.Linha>
                </S.Linha>

                <S.FormLogin>
                    <S.Titulo>Entrar</S.Titulo>
                    <S.DivInput>
                        <Input text="E-mail" />
                        <Input text="Senha" />
                    </S.DivInput>
                    
                    <S.DivRadio>
                        <div>
                            <input type="radio" value="Usuario"/>
                            <label htmlFor="">Usuário</label>
                        </div>
                        <div>
                            <input type="radio" value="Empresa"/>
                            <label htmlFor="">Empresa</label>
                        </div>
                    </S.DivRadio>

                    <ButtonMod text="Entrar"/>

                    <S.DivLink>
                        <S.Links href="cadastra">Cadastrar</S.Links>
                        <S.Links href="Esqueceu a Senha?">Esqueci Senha</S.Links>
                    </S.DivLink>

                </S.FormLogin>
            </S.Modal>
        </S.Caixa>




    );
}
