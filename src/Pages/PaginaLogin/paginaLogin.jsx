import * as S from "./paginaLoginStyle.js";
import ImgLogo from "../../assets/logoNavBar.svg";
import Input from "../../Componentes/Input/input";

export default function PaginaLogin() {
    return (
        <S.Caixa>
            <S.Modal>
                <S.Itens>
                    <h1>Entrar</h1>

                    <S.Logo src={ImgLogo} alt="" />
                    <S.Logintext>
                        <Input text="E-mail" />
                        <Input text="Senha" />
                    </S.Logintext>
                </S.Itens>

                <a href="cadastra"></a>
                <a href="Esqueceu a Senha?"></a>

                <button> Usuario</button>
                <button> Empresa </button>
                <button> Entrar </button>
            </S.Modal>
        </S.Caixa>
    );
}
