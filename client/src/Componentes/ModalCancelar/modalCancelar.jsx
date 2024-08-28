import ButtonCancelar from "../ButtonCancelar/buttonCancelar";
import * as S from "./modalCancelarStyle"


export default function ModalCancelar({ isOpenTest, setOpenTest, text, textbutton, actionTransition, cancelTransition }){
   
    const setOpenModalTest = () => {
        setOpenTest(false);  
    }   

    
    if(isOpenTest){
        return(
            <S.Caixa>
                <S.ModalStyle>
                        <S.Itens>
                           
                             <S.Texto> {text} </S.Texto>
                             <S.Buttons>
                               <ButtonCancelar withTransition={cancelTransition} onClick={setOpenModalTest} text='Cancelar'/>
                               <S.ButtonStyle  withTransition={actionTransition} onClick={setOpenModalTest}> {textbutton}</S.ButtonStyle>
                              
                             </S.Buttons>
                             <S.X onClick={setOpenModalTest}>x</S.X>
                        </S.Itens>
                        
                </S.ModalStyle>        
            </S.Caixa>
        )
    }

    
}
