import * as S from "./solicitacaoPedidosStyle"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/navbar";
import Footer from "../../Componentes/Footer/footer";
import ModalDetalhes from "../../Componentes/ModalDetalhes/modaldestalhes";
import FormularioDetalhes from "../../Componentes/FormDetalhes/formDetalhes";import ModalCancelar from "../../Componentes/ModalCancelar/modalCancelar";
import Select from "../../Componentes/Select/select";
import ButtonCancelar from "../../Componentes/ButtonCancelar/buttonCancelar";
''

export default function SolicitacaoPedidoEmp () {

    const [isOpenTest, setOpenTest] = useState(null);
    

    const handleCloseModalTest = () => {
        setOpenTest(null);
    };

    
    const navigate = useNavigate();

    
        const handleFechar = () => {
            navigate("/orcamentosempresa");
        };
    return (

        <>
            <NavBar />
           
            <S.Caixa>
                <S.Container>
                    <S.AAlinha>
                        <S.Pedidos>Minhas Solicitações</S.Pedidos>
                        <S.Barra/>
                    </S.AAlinha>
                    <S.TXT>Confira aqui o andamento do seus pedidos</S.TXT>
                    <S.PP>Filtrar por:</S.PP>
                    <div className="form-group">
                        <Select >
                            <option value="in progress">Solicitação Pedidos</option>
                            <option value="confirmed">Solicitação entrega/Retirada</option>
                            <option value="cancel">Histórico</option>
                        </Select>
                    </div>
                    <S.FlexColomn>
                        <S.CContainer>
                            <S.CCaixa>
                                <S.PLeft>
                                    <S.PPALAVRA>Dados do Pedido</S.PPALAVRA>
                                    <S.PPP>Solicitação de Orçamento</S.PPP>
                                </S.PLeft>
                                <S.CCaixinha>
                                    <S.Caixinha>
                                        <S.PaLavra>Data da compra: 00/00/0000</S.PaLavra>
                                        <S.PaLavra>ID do Pedido: 0214830</S.PaLavra>
                                    </S.Caixinha>
                                    
                                        <S.SobreContainer>
                                            <S.ContainerImg >
                                                <S.IIIMG src='areia.png'/>
                                                
                                                <S.TTTitle>Areia reciclada</S.TTTitle>
                                                <S.PPalavra>AGR Ambiental</S.PPalavra> 
                                            </S.ContainerImg>

                                            <S.QuebraLinha>
                                                <S.LETRA>Aguardando Envio de Orçamento</S.LETRA>
                                                <div>
                                                    <S.BBarraAguardando/>
                                                    <S.BarraAguardando/>
                                                </div>
                                                <S.Flex>
                                                    <ButtonCancelar text="Cancelar" onClick={() => setOpenTest(1)}/>
                                                    <ModalCancelar 
                                                     textbutton="Voltar"
                                                     text="Tem Certeza que deseja cancelar Orçamento?"
                                                      isOpenTest={isOpenTest === 1}
                                                      setOpenTest={handleCloseModalTest}></ModalCancelar>

                                                    <S.BBotao onClick={handleFechar}>Enviar Orçamento</S.BBotao>
                                                    
                                                </S.Flex>
                                            </S.QuebraLinha>
                                        </S.SobreContainer>
                
                                </S.CCaixinha>

                                
                            </S.CCaixa>

                            <S.CContainer>
                            <S.CCaixa>
                                <S.PLeft>
                                    <S.PPALAVRA>Dados do Pedido</S.PPALAVRA>
                                    <S.PPP>Solicitação de Orçamento</S.PPP>
                                </S.PLeft>
                                <S.CCaixinha>
                                    <S.Caixinha>
                                       
                                            <S.PaLavra>Data da compra: 00/00/0000</S.PaLavra>
                                            <S.PaLavra>ID do Pedido: 0214830</S.PaLavra>
                                        
                                 </S.Caixinha>
                                    <div>
                                        <S.SobreContainer>
                                            <S.ContainerImg>
                                                <S.IIIMG src='pedrisco.png'/>
                                                
                                                <S.TTTitle>Pedrisco</S.TTTitle>
                                                <S.PPalavra>AGR Ambiental</S.PPalavra>
                                            </S.ContainerImg>

                                            <S.QuebraLinha>
                                                <S.LETRA>Aguardando Envio de Orçamento</S.LETRA>
                                                <div>
                                                    <S.BBarraAguardando/>
                                                    <S.BarraAguardando/>
                                                </div>
                                                <S.Flex>
                                                <ButtonCancelar text="Cancelar" onClick={() => setOpenTest(2)}/>

                                                    <ModalCancelar 
                                                      textbutton="Voltar" 
                                                      text="Tem Certeza que deseja cancelar Orçamento?"
                                                      isOpenTest={isOpenTest === 2}
                                                      setOpenTest={handleCloseModalTest}></ModalCancelar>

                                                    <S.BBotao  onClick={handleFechar}>Enviar Orçamento</S.BBotao>
                                                </S.Flex>
                                            </S.QuebraLinha>
                                        </S.SobreContainer>
                                    </div>
                                </S.CCaixinha>
                                
                            </S.CCaixa>
                        </S.CContainer>

                        <S.CContainer>
                            <S.CCaixa>
                                <S.PLeft>
                                    <S.PPALAVRA>Dados do Pedido</S.PPALAVRA>
                                    <S.PPP>Solicitação de Orçamento</S.PPP>
                                </S.PLeft>
                                <S.CCaixinha>
                                    <S.Caixinha>
                                       
                                        <S.PaLavra>Data da compra: 00/00/0000</S.PaLavra>
                                        <S.PaLavra>ID do Pedido: 0214830</S.PaLavra>
                                      
                                    </S.Caixinha>
                                    <div>
                                        <S.SobreContainer>
                                            <S.ContainerImg>
                                                <S.IIIMG src='rachao.png'/>
                                                
                                                <S.TTTitle>Rachão</S.TTTitle>
                                                <S.PPalavra>AGR Ambiental</S.PPalavra>
                                            </S.ContainerImg>
                                            <S.QuebraLinha>
                                                <S.LETRA>Aguardando Envio de Orçamento</S.LETRA>
                                                <div>
                                                    <S.BBarraAguardando/>
                                                    <S.BarraAguardando/>
                                                </div>
                                                <S.Flex>
                                                <ButtonCancelar text="Cancelar" onClick={() => setOpenTest(3)}/>
                                                    <ModalCancelar 
                                                     textbutton="Voltar"
                                                     text="Tem Certeza que deseja cancelar Orçamento?"
                                                      isOpenTest={isOpenTest === 3}
                                                      setOpenTest={handleCloseModalTest}></ModalCancelar>
                                                    <S.BBotao  onClick={handleFechar}>Enviar Orçamento</S.BBotao>
                                                </S.Flex>
                                            </S.QuebraLinha>
                                        </S.SobreContainer>
                                    </div>
                                </S.CCaixinha>
                                
                            </S.CCaixa>
                        </S.CContainer>
                        </S.CContainer>
                    </S.FlexColomn>
                </S.Container>
            </S.Caixa>

            <Footer />
        
        </>

    )
}
