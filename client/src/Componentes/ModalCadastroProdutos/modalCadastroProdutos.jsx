import InputPrimary from "../InputPrimary/inputPrimary";
import * as S from "./modalCadastroProdutos"
import ButtonCancelar from "../ButtonCancelar/buttonCancelar";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import { api } from "../../service/api.js";
import { useState } from "react";


export default function ModalMaisProdutos({ isOpen, setOpen, text}){
    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    const [q_minima, setQ_minima] = useState("");
    const [q_maxima, setQ_maxima] = useState("");

    const setOpenModal = () => {
        setOpen(false);  
    }   

    async function handleCadastraProduto(e) {
        await api.post('/produto/create', {
            nome,
            categoria,
            q_minima,
            q_maxima
        })
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
                                        <InputPrimary 
                                        text='Nome do Produto'
                                        onChange={(e) => setNome(e.target.value)}
                                        />
                                        <InputPrimary 
                                        text='Categoria'
                                        onChange={(e) => setCategoria(e.target.value)}
                                        />
                                    </S.ContainerInputFlex>

                                    <S.ContainerInputFlex>
                                        <InputPrimary 
                                        text='Quantidade mínima'
                                        onChange={(e) => setQ_minima(e.target.value)}
                                        />
                                        <InputPrimary 
                                        text='Quantidade Máxima'
                                        onChange={(e) => setQ_maxima(e.target.value)}
                                        />
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
