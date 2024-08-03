import { useState } from "react";
import * as S from "./esqueceuSenhaStyle.js";
import ImgLogo from "../../assets/logoNavBar.svg";
import Input from "../../Componentes/Input/input";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import ModalVerifiqueEmail from "./ModalVerifiqueEmail/ModalVerifiqueEmail.jsx"



export default function EsqueceuSenha(){
    
    const [isOpen, setOpen] = useState(false)
    return (
    
        <S.Caixa>
              <S.Modal>
                

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
                

                      
                      <div>
                            <ButtonMod text="Enviar" onClick={() => setOpen(!isOpen)} />
                            <ModalVerifiqueEmail isOpen={isOpen} setOpen={setOpen} />
                      </div>

                 </S.FormEsqueceu>
            </S.Modal>
        </S.Caixa>




    )
}