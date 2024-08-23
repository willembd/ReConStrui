// import { useNavigate } from "react-router-dom";
import * as S from "./modaldetalhes"




export default function ModalDetalhes({ isOpen, setOpen, text, children}){
   
    const setOpenModal = () => {
        setOpen(false);  
    }   

    
    // const navigation = useNavigate();
    
    if(isOpen){
        return(
            <S.CaixaModal>
              
                <S.ModalStyle>
                
                        <S.Itens>
                           
                             <S.Texto> {text} </S.Texto>
                             <S.X onClick={setOpenModal}>x</S.X>

                             {children}
                        </S.Itens>
                                
                        </S.ModalStyle>        
                    </S.CaixaModal>
        )
    }

    
}
