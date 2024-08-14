import ButtonCancelar from "../ButtonCancelar/buttonCancelar";
import * as S from "./modalCancelarStyle"


export default function ModalCancelar({ isOpenTest, setOpenTest, text }){
   
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
                               <ButtonCancelar padding='secondary' color= 'primary' border= 'secondary' text='Cancelar'/>
                               <ButtonCancelar padding='secondary' color= 'secondary' border= 'secondary' text='Voltar'/>
                             </S.Buttons>
                             <S.X onClick={setOpenModalTest}>x</S.X>
                        </S.Itens>
                        
                </S.ModalStyle>        
            </S.Caixa>
        )
    }

    
}
