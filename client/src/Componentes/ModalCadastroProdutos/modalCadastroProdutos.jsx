import InputPrimary from "../InputPrimary/inputPrimary";
import * as S from "./modalCadastroProdutos"
import ButtonCancelar from "../ButtonCancelar/buttonCancelar";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";



export default function ModalMaisProdutos({ isOpen, setOpen, text}){
   
    const setOpenModal = () => {
        setOpen(false);  
    }   

    
    
    if(isOpen){
        return(
            <S.CaixaModal>
                <S.ModalStyle>
                
                        <S.Itens>
                               <S.Texto> {text}</S.Texto>
                               <S.X onClick={setOpenModal}>X</S.X>
                                 <S.ContainerTextLinha>
                                    <S.TextDados>Dados Gerais do Material</S.TextDados>
                                    <S.Linha />
                                </S.ContainerTextLinha>
                            <S.ContainerInputs>
                                        <S.ContainerInputFlex>
                                            <InputPrimary text='Quantidade mínima '/>
                                            <InputPrimary text='Categoria '/>
                                           

                                    </S.ContainerInputFlex>

                                    <S.ContainerInputFlex>
                                            <InputPrimary text='Nome do Produto'/>
                                            <InputPrimary text='Quantidade  Máxima'/>
                                          
                                    </S.ContainerInputFlex>
                             </S.ContainerInputs>
                             <S.ContainerButtons>  
                                    <ButtonCancelar  
                                    padding='secondary'
                                    text="Cancelar" 
                                    onClick={() => {}}  />
                                  
                                    <ButtonMod
                                        padding='terciário'
                                        text="Adicionar produto"
                                        onClick={() => {}} 
                                    />
                                 
                              </S.ContainerButtons>  
                        </S.Itens>
                       
                </S.ModalStyle>        
            </S.CaixaModal>
        )
    }

    
}
