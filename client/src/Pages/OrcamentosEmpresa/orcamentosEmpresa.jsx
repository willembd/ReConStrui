import * as S from "./orcamentosEmpresaStyle";
import NavBar from "../../Componentes/NavBar/navbar";
import Footer from "../../Componentes/Footer/footer";
import { useNavigate } from "react-router-dom";
import Input from "../../Componentes/Input/input"



export default function OrçamentosEmpresa() {
    const navigate = useNavigate();

    const handleFechar = () => {
        navigate("/");
    };

    return (
        <>
            <NavBar />
                <S.CaixaFundo />
                <S.BarraVertical />
                <S.BigBox>
                    <S.Caixa>
                        <S.Container>
                            <S.ButtonContainer>
                                <S.ButtonVoltar onClick={handleFechar}>
                                    Voltar
                                </S.ButtonVoltar>
                            </S.ButtonContainer>
                            <S.TextoCadastro>Orçamento</S.TextoCadastro>
                            <S.ContainerInputs>
                                <S.QuebraLinha>
                                    <S.TTitulo>Dados do cliente</S.TTitulo>
                                    <S.BBarra />
                                </S.QuebraLinha>
                            
                                <S.Linha>
                                    <S.Campo>
                                        <S.Label>Nome:</S.Label> 
                                        <S.Valor>
                                            <S.ValorTexto>Arline Monteiro</S.ValorTexto>
                                        </S.Valor>
                                    </S.Campo>
                                    <S.Campo>
                                        <S.Label>Email:</S.Label> 
                                        <S.Valor>
                                            <S.ValorTexto>Arlinesilva2@gmail.com</S.ValorTexto>
                                        </S.Valor>
                                    </S.Campo>
                                </S.Linha>
                                <S.Linha>
                                    <S.Campo>
                                        <S.Label>Telefone:</S.Label> 
                                        <S.Valor>
                                            <S.ValorTexto>(81) 98888-8888</S.ValorTexto>
                                        </S.Valor>
                                    </S.Campo>
                                </S.Linha>
                            </S.ContainerInputs>
                          
                            <S.QuebraLinha>
                                <S.TTitulo>Endereço</S.TTitulo>
                                <S.BBarra2 />
                            </S.QuebraLinha>

                            <S.ContainerInputs>
                                <S.Linha>
                                    <S.Campo>
                                        <S.Label>Cep:</S.Label> 
                                        <S.Valor>
                                            <S.ValorTexto>54580000</S.ValorTexto>
                                        </S.Valor>
                                    </S.Campo>
                                    <S.Campo>
                                        <S.Label>Estado:</S.Label> 
                                        <S.Valor>
                                            <S.ValorTexto>Pernambuco</S.ValorTexto>
                                        </S.Valor>
                                    </S.Campo>
                                </S.Linha>
                                <S.Linha>
                                    <S.Campo>
                                        <S.Label>Cidade:</S.Label> 
                                        <S.Valor>
                                            <S.ValorTexto>Jaboatão</S.ValorTexto>
                                        </S.Valor>
                                    </S.Campo>
                                    <S.Campo>
                                        <S.Label>Bairro:</S.Label> 
                                        <S.Valor>
                                            <S.ValorTexto>Vila Rica</S.ValorTexto>
                                        </S.Valor>
                                    </S.Campo>
                                </S.Linha>
                                <S.Linha>
                                    <S.Campo>
                                        <S.Label>Endereço:</S.Label> 
                                        <S.Valor>
                                            <S.ValorTexto>Rua José Paulo</S.ValorTexto>
                                        </S.Valor>
                                    </S.Campo>
                                    <S.Campo>
                                        <S.Label>Número:</S.Label> 
                                        <S.Valor>
                                            <S.ValorTexto>89</S.ValorTexto>
                                        </S.Valor>
                                    </S.Campo>
                                </S.Linha>
                            </S.ContainerInputs>

                            <S.QuebraLinha>
                                   <S.TTitulo>Orçamento do pedido</S.TTitulo>
                                    <S.BBarra3 />
                             </S.QuebraLinha>

                            <S.InputFlex>
                                <S.InputsStyle>
                                    <Input text="Produtos:" />
                                    <Input text="Quantidade:" />
                                </S.InputsStyle>
                            </S.InputFlex>  
                                
                            <S.InputFlex>
                                <S.InputRight>
                                    <Input text="Valor do Produto:" />
                                    <Input text="Valor do Frete:" />
                                </S.InputRight>
                            </S.InputFlex> 

                            <S.Centralizar>
                                <S.Botao onClick={handleFechar}> 
                                    Enviar Orçamento
                                </S.Botao>
                            </S.Centralizar>

                           
                           
                        </S.Container>
                    </S.Caixa>
                </S.BigBox>
        
            <Footer />
        </>
    );
}