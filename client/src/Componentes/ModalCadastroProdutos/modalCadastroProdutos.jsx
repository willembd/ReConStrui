import * as S from "./modalCadastroProdutos"



export default function ModalMaisProdutos({ isOpen, setOpen, text}){
   
    const setOpenModal = () => {
        setOpen(false);  
    }   

    
    
    if(isOpen){
        return(
            <S.CaixaModal>
                <S.ModalStyle>
                
                        <S.Itens>
                           
                             <S.Texto> {text} </S.Texto>
                             <S.X onClick={setOpenModal}>x</S.X>

                              <h1>Olá</h1>
                          
                        </S.Itens>
                       
                </S.ModalStyle>        
            </S.CaixaModal>
        )
    }

    
}
