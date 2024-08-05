
import * as S from "./cartaoStyle.js";

import LogoBranca from "../../assets/LogoBranca.svg";
import Input from "../../Componentes/Input/input";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/navbar.jsx";
import Footer from "../../Componentes/Footer/footer.jsx";
import Select from "../../Componentes/Select/select.jsx";

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
                                <S.Button onClick={handleFechar}>Voltar</S.Button>
                            </S.ButtonContainer>
                            <S.Logo src={LogoBranca} alt="" />
                            <div>

                            </div>
                        </S.Imagem>

                        <S.Form>
                            <S.Titulo>Pagamento</S.Titulo>
                            <S.DivInput>
                                <Input text="Titular" />
                                <Input text="CPF" />
                                <Input text="Numero do Cartão" />
                                <Input text="Validade" />
                                <Input text="Código" />
                            </S.DivInput>

                            <S.FormadePagamento>
                                <S.DivRadio>
                                    <input type="radio" value="Usuario"/>
                                    <label htmlFor="">Crédito</label>
                                </S.DivRadio>
                                <S.DivRadio>
                                    <input type="radio" value="Empresa"/>
                                    <label htmlFor="">Débito</label>
                                </S.DivRadio>
                                <S.DivSelect>
                                    <Select>
                                            <option value="">Parcela</option>
                                            <option value="">2x</option>
                                            <option value="">3x</option>
                                    </Select> 
                                </S.DivSelect>
                            </S.FormadePagamento>


                            <ButtonMod text="Finalizar" />

                            
                        </S.Form>
                    </S.ModalContainer>
                </S.Modal>
            </S.Caixa>
            <Footer/>
        </>
    );
}
