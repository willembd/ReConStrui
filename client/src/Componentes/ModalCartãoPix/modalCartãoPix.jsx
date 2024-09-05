import { useNavigate } from "react-router-dom";
import * as S from "./modalCartãoPixStyle"


export default function ModalCartãoPix({ isOpen, setOpen, text }){
   
    const setOpenModal = () => {
        setOpen(false);  
    }   

    
    const navigation = useNavigate();
     

    
    
    if(isOpen){
        return(
            <S.CaixaEmail>
                <S.ModalStyle>
                        <S.Itens>
                           
                             <S.Texto> {text} </S.Texto>
                             <S.X onClick={setOpenModal}>X</S.X>

                             <S.StyleButtons>
                             <S.ButtonCartão onClick={() => navigation('/pagamentocartao')}> Cartão</S.ButtonCartão>
                             <S.ButtonPix onClick={() => navigation('/pagamentopix')}> Pix</S.ButtonPix>
                           
                             </S.StyleButtons>
                        </S.Itens>
                        
                </S.ModalStyle>        
            </S.CaixaEmail>
        )
    }

    
}
