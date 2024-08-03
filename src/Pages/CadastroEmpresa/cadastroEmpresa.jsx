import { Container, CheckboxTransporte, InputRight, Caixa, TextoCadastro, InputLeft, ContainerLogo, ContainerInputs, ContainerCheckbox, TextoCheckbox, CheckboxMateriais1, LinkCadastro, ContainerRight, CheckboxMateriais2, CheckboxTransporte1,CheckboxTransporte2 } from "./cadastroEmpresaStyle"
import Logo from "../../assets/Logo2.svg"
import NavBar from "../../Componentes/NavBar/navbar"
import Footer from "../../Componentes/Footer/footer"
import Input from "../../Componentes/Input/input";
// import { Button } from "../EsqueceuSenha/ModalVerifiqueEmail/modalEmailStyle";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo";


export default function CadastroEmpresa(){
        return(
            <>
                <NavBar/>

<Caixa>
    <Container>
        <ContainerLogo>
            <img src={Logo} alt="Logo" />
            <TextoCadastro>Cadastrar Empresa</TextoCadastro>
        </ContainerLogo>
        <ContainerInputs>
            <InputLeft>
                <Input text="Nome"/>
                <Input text="CNPJ"/>
                <Input text="Email"/>
                <Input text="Senha"/>
                <Input text="Telefone"/>
                <Input text="Cep"/>
                <Input text="Estado"/>
            </InputLeft>
            <ContainerRight>
                <InputRight>
                    <Input text="Endereço"/>
                    <Input text="Cidade"/>
                    <Input text="Bairro"/>
                    <Input text="Número"/>
                </InputRight>
            <ContainerCheckbox>
                            <TextoCheckbox>Materiais</TextoCheckbox>

                    <div>
                    < CheckboxMateriais1>
                         
                        <li>
                           <input type="checkbox"  />
                           <label for="Areia">Areia Reciclada</label>
                        </li>
                        <li>      
                             <input type="checkbox"  />
                             <label for="Pedrisco">Brita Reciclada</label>
                        </li>
                    </ CheckboxMateriais1>
                    <CheckboxMateriais2>
                        <li>      
                             <input type="checkbox"  />
                             <label for="Pedrisco">Pedrisco</label>
                        </li>
                      
                        <li>
                             <input type="checkbox"  />
                             <label for="">Rachão</label>
                        </li>
                    </CheckboxMateriais2>
                       
                
                    </div>
                    <TextoCheckbox>Transporte</TextoCheckbox>
                    <div>


    
                        {/* <TextoCheckbox>Transporte</TextoCheckbox> */}
                    <CheckboxTransporte>
                        <CheckboxTransporte1>      
                             <input type="checkbox"  />
                             <label for="Entrega">Entrega</label>
                        </CheckboxTransporte1>
                        <CheckboxTransporte2>
                             <input type="checkbox"  />
                             <label for="Retirada">Retirada</label>
                        </CheckboxTransporte2>
                   </CheckboxTransporte>
                        
                    </div>
                        

                         
                             <ButtonMod text="Cadastrar"/>
                            
                    <LinkCadastro  href="">Cadastrar Usuário</LinkCadastro >
                         
                   
                </ContainerCheckbox>
            </ContainerRight>
            
        </ContainerInputs>
        

    </Container> 
</Caixa> 
<Footer/>

</>


        )
}




