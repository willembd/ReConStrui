import { Container, InputRight, Caixa, InputLeft, ContainerInputs, ContainerCheckbox, ContainerRight, QuebraLinha } from "./StyleConfirmacaoPedidos"
import { ContainerModal } from "../../Componentes/carrosselCards/Style";
import NavBar from "../../Componentes/NavBar/navbar"
import Footer from "../../Componentes/Footer/footer"
import Input from "../../Componentes/Input/input";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo";
import { Barra } from "../../Componentes/carrosselCards/Style";
import Cards from "../../Componentes/cards/cards";


export default function Confirmação(){
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
                                            <Input text="CEP"/>
                                        </InputRight>
                                        <Barra/>
                                        <InputRight>
                                            <Input text="Quantidade"/>
                                            <Input text="Endereço"/>
                                            <Input text="Cidade"/>
                                            <Input text="Bairro"/>
                                            <Input text="Número"/>
                                            <Input text="CEP"/>
                                            <ContainerCheckbox>    
                                                <ButtonMod text="Cadastrar"/>
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




