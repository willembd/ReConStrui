import * as S from "./modalEmailStyle"


export default function ModalVerifiqueEmail({ isOpen, setOpen }){
   
    const setOpenModal = () => {
        setOpen(false);  
    }   

    
    if(isOpen){
        return(
            <S.CaixaEmail>
                <S.ModalStyle>
                        <S.Itens>
                           
                             <S.Texto>Verifique seu e-mail</S.Texto>
                             <S.X onClick={setOpenModal}>x</S.X>
                        </S.Itens>
                        
                </S.ModalStyle>        
            </S.CaixaEmail>
        )
    }

    
}

