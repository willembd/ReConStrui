import * as S from "./pixStyle.js"

import ImgLogo from "../../assets/logoNavBar.svg";
import ImgPix from "../../assets/qrcodepix.svg"
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";


export default function Pix() {
    return (
        <S.Caixa>
            <S.Modal>

                <S.Button>X</S.Button>

                <S.Imagem>
                    <S.Logo src={ImgLogo} alt="" />
                </S.Imagem>

                <S.Linha>
                </S.Linha>

                <S.Form>
                    <S.Titulo>Pagamento</S.Titulo>
                    <h2>Pague com o Pix</h2>
                    
                    <img src={ImgPix} alt="" />
                    <p>00045870acsda887124reconstrui01714</p>
                    <ButtonMod text="Copiar"/>

                </S.Form>
            </S.Modal>
        </S.Caixa>

    );
}