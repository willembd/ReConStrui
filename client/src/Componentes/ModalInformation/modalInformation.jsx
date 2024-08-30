import * as S from "./modalInformationStyle"



export default function ModalInformation({ isOpen, setOpen, text, children }){
   

    
    
    
    if(isOpen){
        return(
            <S.CaixaEmail>
                <S.ModalStyle>
                        <S.Itens>
                           
                             <S.Texto> {text} </S.Texto>
                                {children}
                        </S.Itens>
                        
                </S.ModalStyle>        
            </S.CaixaEmail>
        )
    }

    
}

