import { useNavigate } from "react-router-dom";
import * as S from "./modalCartãoPixStyle"


export default function ModalCartãoSenha({ isOpen, setOpen, text }){
   
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
                             <S.X onClick={setOpenModal}>x</S.X>

                             <S.StyleButtons>
                             <S.ButtonCartão  onClick={() => navigation('/pagamentocartao')} >CARTÃO</S.ButtonCartão>
                             <S.ButtonPix onClick={() => navigation('/pagamentopix')} >PIX</S.ButtonPix>
                             </S.StyleButtons>
                        </S.Itens>
                        
                </S.ModalStyle>        
            </S.CaixaEmail>
        )
    }

    
}
