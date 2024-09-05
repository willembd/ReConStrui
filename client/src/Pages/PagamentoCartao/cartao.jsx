import * as S from "./cartaoStyle.js";
import { useState } from "react";
import Imagempadrao from "../../assets/imagem-padrao1.svg";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/navbar.jsx";
import Footer from "../../Componentes/Footer/footer.jsx";
import Select from "../../Componentes/Select/select.jsx";
import ModalInformation from "../../Componentes/ModalInformation/modalInformation.jsx";
import InputPrimary from "../../Componentes/InputPrimary/inputPrimary.jsx";



export default function PaginaLogin() {
    const [isOpen, setOpen] = useState(false);

    const navigate = useNavigate();

    const handleFechar = () => {
        navigate("/pedidos");
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

                        <S.Form>
                            <S.Titulo>Pagamento</S.Titulo>
                            <S.DivInput>
                                <InputPrimary type="text" text="Titular" />
                                <InputPrimary type="text" text="CPF" />
                                <InputPrimary type="number" text="Numero do Cartão" />
                                <InputPrimary type="number" text="Validade" />
                                <InputPrimary type="text" text="Código" />
                            </S.DivInput>

                            <S.FormadePagamento>
                                <S.DivRadio>
                                    <input type="radio" value="Usuario" />
                                    <label htmlFor="">Crédito</label>
                                </S.DivRadio>
                                <S.DivRadio>
                                    <input type="radio" value="Empresa" />
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

                            <ButtonMod
                                text="Finalizar"
                                onClick={() => setOpen(!isOpen)}
                            />

                            <ModalInformation
                                text="Compra Finalizada!"
                                isOpen={isOpen}
                                setOpen={setOpen}>  <S.X onClick={handleFechar}> x </S.X>  
                            </ModalInformation>

                        </S.Form>
                    </S.ModalContainer>
                </S.Modal>
            </S.Caixa>
            <Footer />
        </>
    );
}
