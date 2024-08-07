import { Container, InputRight, Caixa, InputLeft, ContainerInputs, ContainerCheckbox, ContainerRight, QuebraLinha, Button } from "./confirmacaoPedidosStyle"
import { ContainerModal } from "../../Componentes/Filtro/Style";
import NavBar from "../../Componentes/NavBar/navbar"
import Footer from "../../Componentes/Footer/footer"
import Input from "../../Componentes/Input/input";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo";
import { Barra } from "../../Componentes/Filtro/Style";
import Cards from "../../Componentes/cards/cards";


export default function Confirmacao(){
        return(
            <>
                <NavBar/>

                    <Caixa>
                        
                        <Container>
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
                                            <Input text="405"/>
                                            <Input text="53370-058"/>
                                            <ContainerCheckbox>
                                                <Button>Voltar</Button>
                                            </ContainerCheckbox>
                                        </InputRight>
                                        <Barra/>
                                        <InputRight>
                                            <Input text="Preço: 450.00 R$"/>
                                            <Input text="Frete: 00,00 R$"/>
                                            <Input text="Taxa: 10,00 R$"/>
                                            <p>Taxa de serviço</p>
                                            <Input text="Valor Total: 460,00 R$"/>
                                            <Input text="Número"/>
                                            <Input text="CEP"/>
                                            <ContainerCheckbox>    
                                                <ButtonMod text="Comprar"/>
                                            </ContainerCheckbox>
                                        </InputRight>
                                    </QuebraLinha>
                                    
                                </ContainerRight>
                            </ContainerInputs>
                            

                        </Container> 
                    </Caixa> 
                <Footer/>
</>


        )
}




