import * as S from "./orcamentosEmpresaStyle";
import NavBar from "../../Componentes/NavBar/navbar";
import Footer from "../../Componentes/Footer/footer";
import { useNavigate } from "react-router-dom";
import InputPrimary from "../../Componentes/InputPrimary/inputPrimary";




export default function OrçamentosEmpresa() {
    const navigate = useNavigate();

    const handleFechar = () => {
        navigate("/solicitacaopedidoemp");
    };

    return (
        <>
            <NavBar />
                
                    <S.BigBox>
                        <S.Caixa>
                            <S.Container>
                                <S.ButtonContainer>
                                    <S.ButtonVoltar onClick={handleFechar}>
                                        Voltar
                                    </S.ButtonVoltar>
                                </S.ButtonContainer>

                                <S.Titulo>Orçamento</S.Titulo>
                                <S.ContainerCampos >
                                    <S.QuebraLinha>

                                        <S.SubTitulos>Dados do cliente</S.SubTitulos>
                                    
                                        <S.LinhaE />
                                    </S.QuebraLinha>
                                
                                    <S.Linha>
                                        <S.Campo>
                                            <S.Label>Nome:</S.Label> 
                                            
                                            <S.Valor>
                                                <S.TextNome>Arline Monteiro</S.TextNome>
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
                                                <S.TextFone>(81) 98888-8888</S.TextFone>
                                            </S.Valor>
                                        </S.Campo>
                                    </S.Linha>
                                </S.ContainerCampos >
                            
                                <S.QuebraLinha>
                                    <S.SubTitulos>Endereço</S.SubTitulos>
                                    <S.LinhaE />
                                </S.QuebraLinha>

                                <S.ContainerCampos >
                                    <S.Linha>
                                        <S.Campo>
                                            <S.Label>Cep:</S.Label> 
                                            <S.Valor>
                                                <S.TextCep>54580000</S.TextCep>
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
                                                <S.TextE>Rua José Paulo</S.TextE>
                                            </S.Valor>
                                        </S.Campo>
                                        <S.Campo>
                                            <S.Label>Número:</S.Label> 
                                            <S.Valor>
                                                <S.ValorTexto>89</S.ValorTexto>
                                            </S.Valor>
                                        </S.Campo>
                                    </S.Linha>
                                </S.ContainerCampos >

                                <S.QuebraLinha>
                                    <S.SubTitulos>Orçamento do pedido</S.SubTitulos>
                                    <S.LinhaE />
                                </S.QuebraLinha>

                            
                                 <S.CampoCentralizar>
                                     <S.Campo>
                                            <S.Label>Produto:</S.Label> 
                                            <S.Valor>
                                                <S.ValorTexto>Areia Reciclada</S.ValorTexto>
                                            </S.Valor>
                                     </S.Campo>
                                     <S.Campo>
                                            <S.Label>Quantidade:</S.Label> 
                                            <S.Valor>
                                                <S.TextM>15 Metros</S.TextM>
                                            </S.Valor>
                                   </S.Campo>
                                 </S.CampoCentralizar>
                        
                                 <S.InputCentralizar>
                                    <InputPrimary
                                                text="Valor do Produto"/>
                                    <InputPrimary
                                                text="Valor Frete"/>
                                 </S.InputCentralizar>
                

                                <S.CentralizarButton>
                                    <S.Botao onClick={handleFechar}> 
                                        Enviar Orçamento
                                    </S.Botao>
                                </S.CentralizarButton>

                        </S.Container>
                    </S.Caixa>
                </S.BigBox>
        
            <Footer />
        </>
    );
}