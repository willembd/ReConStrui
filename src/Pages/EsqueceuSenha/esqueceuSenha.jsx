// import { useState } from "react";
import * as S from "./esqueceuSenhaStyle.js";
import ImgLogo from "../../assets/logoNavBar.svg";
import Input from "../../Componentes/Input/input";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
// import ModalEmail from "./ModalVerifiqueEmail/ModalVerifiqueEmail.jsx"


export default function EsqueceuSenha(){
    return (


        // const [isOpen, setOpen] = useState(false)


        <S.Caixa>
            <S.Modal>

            {/* <S.ButtonEnviar text="Entrar TESTE CADASTRO" onClick={() => setOpen(!isOpen)} />
            <S.EsqueceuSenhaModal isOpen={isOpen} setOpen={setOpen} /> */}

                <S.Button>X</S.Button>

                <S.Imagem>
                    <S.Logo src={ImgLogo} alt="" />
                </S.Imagem>

                  <S.Linha>
                  </S.Linha>

                <S.FormEsqueceu>
                    <S.Titulo>Esqueceu sua senha?</S.Titulo>
                    <S.Texto>Para redefinir sua senha, informe o seu e-mail cadastrado e lhe enviaremos um link com as instruções. </S.Texto>
                    
                    <S.DivInput>
                        <Input text="Email" />
                    </S.DivInput>
            

                    <ButtonMod text="Enviar"/>
                    
             

                </S.FormEsqueceu>
            </S.Modal>
        </S.Caixa>




    )
}