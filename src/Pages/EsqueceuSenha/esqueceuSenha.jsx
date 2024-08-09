import React from "react";
import { useState } from "react";
import * as S from "./esqueceuSenhaStyle.js";
import LogoBranca from "../../assets/LogoBranca.svg";
import Input from "../../Componentes/Input/input";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/navbar.jsx";
import Footer from "../../Componentes/Footer/footer.jsx";
import ModalVerifiqueEmail from "../../Componentes/ModalVerifiqueEmail/ModalVerifiqueEmail.jsx"

export default function EsqueceuSenha() {


    const [isOpen, setOpen] = useState(false)


    const navigate = useNavigate();
     

    const handleFechar = () => {
        navigate("/paginalogin");
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

                        <S.FormSenha>
                         <S.EsqueceuETexto>

                             
                            <S.Titulo>Esqueceu sua senha?</S.Titulo>
                            <S.Texto>
                               Para redefinir sua senha, informe o seu e-mail cadastrado e lhe enviaremos um link com as instruções.
                            </S.Texto>
                            <S.DivInput>
                                <Input text="E-mail" />
                            <div>
                                <ButtonMod text="Enviar" onClick={() => setOpen(!isOpen)} />
                                <ModalVerifiqueEmail text = 'Verifique seu e-mail' isOpen={isOpen} setOpen={setOpen} />
                            </div>
                            </S.DivInput>
                         </S.EsqueceuETexto> 

                        </S.FormSenha>
                    </S.ModalContainer>
                </S.Modal>
            </S.Caixa>
            <Footer/>
        </>
    );
}
