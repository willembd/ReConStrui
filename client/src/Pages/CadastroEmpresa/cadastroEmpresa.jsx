import * as S from "./cadastroEmpresaStyle"
import Logo from "../../assets/Logo2.svg"
import NavBar from "../../Componentes/NavBar/navbar"
import Footer from "../../Componentes/Footer/footer"
import Input from "../../Componentes/Input/input";
import { useNavigate } from "react-router-dom";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo";





export default function CadastroEmpresa(){

    
    const navigation = useNavigate();
     

    const handleFechar = () => {
        navigation("/");
    };
    
       
        return(
                <>
                  <NavBar/>
                        <S.BigBox>
                                 <S.ContainerLogo>
                                     <img src={Logo} alt="Logo" />
                                                
                                  </S.ContainerLogo>
                                      <S.Caixa>
                                          <S.Container> 
                                          <S.ButtonContainer>
                                             <S.ButtonVoltar onClick={handleFechar}>Voltar</S.ButtonVoltar>
                                          </S.ButtonContainer>
                                            <S.TextoCadastro>Cadastrar Empresa</S.TextoCadastro>
                                            <S.ContainerInputs>
                                                <S.InputLeft>
                                                        <Input text="Nome"/>
                                                        <Input text="CNPJ"/>
                                                        <Input text="Email"/>
                                                        <Input text="Senha"/>
                                                        <Input text="Telefone"/>
                                                        <Input text="Cep"/>
                                                        <Input text="Estado"/>
                                                </S.InputLeft>
                                     <S.ContainerRight>
                                                <S.InputRight>
                                                        <Input text="Endereço"/>
                                                        <Input text="Cidade"/>
                                                        <Input text="Bairro"/>
                                                        <Input text="Número"/>
                                                </S.InputRight>
                                       <S.ContainerCheckbox>
                                                <S.TextoCheckbox>Materiais</S.TextoCheckbox>

                                                <div>
                                                < S.CheckboxMateriais1>
                                                    
                                                <li>
                                                <input id="Areia" type="checkbox"  />
                                                <label htmlFor="Areia">Areia Reciclada</label>
                                                </li>
                                                <li>      
                                                    <input id="Brita" type="checkbox"  />
                                                    <label htmlFor="Brita">Brita Reciclada</label>
                                                </li>
                                            </ S.CheckboxMateriais1>
                                            <S.CheckboxMateriais2>
                                                <li>      
                                                    <input id="Pedrisco" type="checkbox"  />
                                                    <label htmlFor="Pedrisco">Pedrisco</label>
                                                </li>
                                            
                                                <li>
                                                    <input id="Rachao" type="checkbox"  />
                                                    <label htmlFor="Rachao">Rachão</label>
                                                </li>
                                            </S.CheckboxMateriais2>
                                            
                                        
                                            </div>
                                            <S.TextoCheckbox>Transporte</S.TextoCheckbox>
                                       <div>
                                            <S.CheckboxTransporte>
                                                  <S.CheckboxTransporte1>      
                                                        <input id="Entrega" type="checkbox"  />
                                                        <label htmlFor="Entrega">Entrega</label>
                                                   </S.CheckboxTransporte1>
                                                   <S.CheckboxTransporte2>
                                                        <input id="Retirada" type="checkbox"  />
                                                        <label htmlFor="Retirada">Retirada</label>
                                                   </S.CheckboxTransporte2>
                                            </S.CheckboxTransporte>
                                        </div>
                                                        <ButtonMod onClick={handleFechar} text="Cadastrar"> Cadastrar </ButtonMod>
                                                        {/* <ButtonMod text="Enviar" onClick={() => setOpen(!isOpen)} />
                                                        <ModalVerifiqueEmail isOpen={isOpen} setOpen={setOpen} /> */}
                                         <S.LinkCadastro onClick={() => navigation('/CadastroUsuario')}  href="">Cadastrar Usuário</S.LinkCadastro >
                                         
                                        </S.ContainerCheckbox>
                                    </S.ContainerRight>
                                </S.ContainerInputs>
                            </S.Container> 
                         </S.Caixa> 
                     </S.BigBox>
                 <Footer/>

          </>

       )
     }





