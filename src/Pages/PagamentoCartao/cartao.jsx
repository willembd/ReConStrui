import * as S from "./cartaoStyle.js"

import ImgLogo from "../../assets/logoNavBar.svg";
import Input from "../../Componentes/Input/input";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import Select from "../../Componentes/Select/select.jsx";

export default function Cartao() {
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
                    <S.DivInput>
                        <Input text="Titular" />
                        <Input text="CPF" />
                        <Input text="Numero do Cartão" />
                        <Input text="Validade" />
                        <Input text="Código" />
                    </S.DivInput>
                    
                    <S.DivRadio>
                        <div>
                            <input type="radio" value="Usuario"/>
                            <label htmlFor="">Crédito</label>
                        </div>
                        <div>
                            <input type="radio" value="Empresa"/>
                            <label htmlFor="">Débito</label>
                        </div>
                    </S.DivRadio>

                    <S.DivSelect>
                        <Select>
                                <option value="">Parcela</option>
                                <option value="">2x</option>
                                <option value="">3x</option>
                        </Select> 
                    </S.DivSelect>
                    

                    <ButtonMod text="Finalizar"/>


                </S.Form>
            </S.Modal>
        </S.Caixa>

    );
}
