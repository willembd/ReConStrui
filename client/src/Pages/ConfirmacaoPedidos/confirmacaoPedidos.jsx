import { Container, InputRight, Caixa, InputLeft, ContainerInputs, ContainerCheckbox, ContainerRight, QuebraLinha, Button } from "./confirmacaoPedidosStyle"
import NavBar from "../../Componentes/NavBar/navbar"
import Footer from "../../Componentes/Footer/footer"
import Input from "../../Componentes/Input/input";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo";
import { Barra,ContainerModal } from "../../Componentes/carrosselCards/modalCards/modalCards";
import Cards from "../../Componentes/cards/cards";
import { useState } from "react";
import ModalCartãoPix from "../../Componentes/ModalCartãoPix/modalCartãoPix";


export default function Confirmacao({item}){

     const [isOpen, setOpen] = useState(false)

        return(
            <>
                <NavBar/>
                        <Container>
                            <Caixa>
                            <ContainerInputs>
                                <InputLeft>
                                    <ContainerModal>
                                        <Cards item />
                                    </ContainerModal>
                                </InputLeft>
                                <ContainerRight>
                                    <QuebraLinha>
                                        <InputRight>
                                            <Input text="15 metros"/>
                                            <Input text="Rua Joaquim Nabuco"/>
                                            <Input text="Olinda"/>
                                            <Input text="Rio Doce"/>
                                            <QuebraLinha>
                                                <Input text="405"/>
                                                <Input text="53370-058"/>
                                            </QuebraLinha>
                                        </InputRight>
                                        <Barra/>
                                        <InputRight>
                                            <Input text="Preço: 450.00 R$"/>
                                            <Input text="Frete: 00,00 R$"/>
                                            <Input text="Taxa: 10,00 R$"/>
                                            <Input text="Valor Total: 460,00 R$"/>
                                            <ContainerCheckbox>    
                                                <QuebraLinha>
                                                    <Button>Voltar</Button>
                                                    <ButtonMod text="Comprar"  onClick={() => setOpen(!isOpen)} />
                                                    <ModalCartãoPix text="Pagamento" isOpen={isOpen} setOpen={setOpen} />

                                                </QuebraLinha>
                                            </ContainerCheckbox>
                                        </InputRight>
                                    </QuebraLinha>
                                    
                                </ContainerRight>
                            </ContainerInputs>
                            
                            </Caixa>
                        </Container>  
                <Footer/>
</>


        )
}




