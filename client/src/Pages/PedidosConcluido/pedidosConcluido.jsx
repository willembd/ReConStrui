import * as S from "./pedidosConcluidoStyle"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import NavBar from "../../Componentes/NavBar/navbar"
import Footer from "../../Componentes/Footer/footer"
import ModalDetalhes from "../../Componentes/ModalDetalhes/modaldestalhes";
import FormularioDetalhes from "../../Componentes/FormDetalhes/formDetalhes";
import Select from "../../Componentes/Select/select";

''

export default function PedidosConcluido () {

    const [isOpenTest, setOpenTest] = useState(null);


    const [openModalId, setOpenModalId] = useState(null);
    

    const handleOpenModalTest = (id) => {
        setOpenTest(id);
    };

    const handleCloseModalTest = () => {
        setOpenTest(null);
    };

    const handleOpenModal = (id) => {
        setOpenModalId(id);
    };

    const handleCloseModal = () => {
        setOpenModalId(null);
    };


    const navigate = useNavigate();

    
        const handleFechar = () => {
            navigate("/confirmacaopedidos");
        };
    return (

        <>
            <NavBar />
           
            <S.Caixa>
                <S.Container>
                    <S.AAlinha>
                        <S.Pedidos>Meus Pedidos</S.Pedidos>
                        <S.Barra/>
                    </S.AAlinha>
                    <S.TXT>Confira aqui o andamento do seus pedidos</S.TXT>
                    <S.PP>Filtrar por:</S.PP>
                    <div className="form-group">
                        <Select >
                            <option value="in progress">Em Andamento</option>
                            <option value="confirmed">Concluído</option>
                            <option value="cancel">Cancelado</option>
                        </Select>
                    </div>
                    <S.FlexColomn>
                        <S.CContainer>
                            <S.CCaixa>
                                <S.PLeft>
                                    <S.PPALAVRA>Dados do Pedido</S.PPALAVRA>
                                    <S.PPP>Pedido Concluído</S.PPP>
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
                                                <S.LETRA>Concluído</S.LETRA>
                                                <div>
                                                    <S.BBarraAguardando/>
                                                    <S.BarraAguardando/>
                                                </div>
                                                <S.Flex>
                                                   

                                                    <S.BBotao onClick={handleFechar}>Comprar Novamente</S.BBotao>
                                                    
                                                </S.Flex>
                                            </S.QuebraLinha>
                                        </S.SobreContainer>
                
                                </S.CCaixinha>

                                <S.LLinks onClick={() => handleOpenModal(1)}>Ver detalhes</S.LLinks>
                                <ModalDetalhes
                                    text="DETALHES DO PEDIDO"
                                    isOpen={openModalId === 1}
                                    setOpen={handleCloseModal}>
                                    <FormularioDetalhes />

                                </ModalDetalhes>

                            </S.CCaixa>

                            <S.CContainer>
                            <S.CCaixa>
                                <S.PLeft>
                                    <S.PPALAVRA>Dados do Pedido</S.PPALAVRA>
                                    <S.PPP>Pedido Concluído</S.PPP>
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
                                                <S.LETRA>Concluído</S.LETRA>
                                                <div>
                                                    <S.BBarraAguardando/>
                                                    <S.BarraAguardando/>
                                                </div>
                                                <S.Flex>
                                                

                                                   

                                                    <S.BBotao  onClick={handleFechar}>Comprar Novamente</S.BBotao>
                                                </S.Flex>
                                            </S.QuebraLinha>
                                        </S.SobreContainer>
                                    </div>
                                </S.CCaixinha>
                                <S.LLinks onClick={() => handleOpenModal(2)}> Ver detalhes</S.LLinks>
                                <ModalDetalhes
                                    text="DETALHES DO PEDIDO"
                                    isOpen={openModalId === 2}
                                    setOpen={handleCloseModal}>
                                    <FormularioDetalhes />
                                </ModalDetalhes>
                            </S.CCaixa>
                        </S.CContainer>

                        <S.CContainer>
                            <S.CCaixa>
                                <S.PLeft>
                                    <S.PPALAVRA>Dados do Pedido</S.PPALAVRA>
                                    <S.PPP>Pedido Concluído</S.PPP>
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
                                                <S.LETRA>Concluído</S.LETRA>
                                                <div>
                                                    <S.BBarraAguardando/>
                                                    <S.BarraAguardando/>
                                                </div>
                                                <S.Flex>
                                               
                                                    <S.BBotao  onClick={handleFechar}>Comprar Novamente</S.BBotao>
                                                </S.Flex>
                                            </S.QuebraLinha>
                                        </S.SobreContainer>
                                    </div>
                                </S.CCaixinha>
                                <S.LLinks onClick={() => handleOpenModal(3)}>Ver detalhes</S.LLinks>
                                <ModalDetalhes
                                    text="DETALHES DO PEDIDO"
                                    isOpen={openModalId === 3}
                                    setOpen={handleCloseModal}>
                                    <FormularioDetalhes />
                                </ModalDetalhes>

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
