import ButtonMod from "../ButtonModelo/buttonModelo";
import * as S from "./modalStyle"


export default function Modal({ isOpenMo,  setOpenMo, text, children  }){
   
    const setOpenModalMo = () => {
        setOpenMo(false);  
    }   

    
    if(isOpenMo){
        return(
            <S.CaixaEmail>
                <S.ModalStyle>
                        <S.Itens>
                              
                              <S.Texto> {text} </S.Texto>
                              <S.X onClick={setOpenModalMo}> x </S.X>
                          
                             {children}
                             {/* <ButtonMod padding= 'secondary'text= 'Entendi'/> */}
                        </S.Itens>
                        
                </S.ModalStyle>        
            </S.CaixaEmail>
        )
    }

    
}
