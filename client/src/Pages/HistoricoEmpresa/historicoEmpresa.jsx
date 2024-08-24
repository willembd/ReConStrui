import * as S from "./historicoEmpresa.Style";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/navbar";
import Footer from "../../Componentes/Footer/footer";
import { AAlinhamento, LLinha  } from "../../Componentes/carrosselCards/carrosselCardsStyle";


export default function HistoricoEmpresa () {


    const navigate = useNavigate();
        const handleEntrar = () => {
            navigate("/confirmacaoentrega");
        };
        const handleFechar = () => {
            navigate("/orcamentosempresa");
        };
        const handleHome = () => {
            navigate("/");
        };
        

    return (

        <>
            <NavBar />
            <S.CaixaFundo></S.CaixaFundo>
            <S.BarraVertical />
            <S.Caixa>
                <S.Container>
                    <S.AAlinha>
                        <S.Pedidos>Histórico</S.Pedidos>
                        <S.Barra/>
                    </S.AAlinha>
                    <S.TXT>Confira aqui o andamento do seus pedidos</S.TXT>
                    <S.PP>Filtrar por</S.PP>
                    <div className="form-group">
                        <label htmlFor="label"></label>
                        <select name="label" id="label">
                            <option value="in progress">Em Andamento</option>
                            <option value="confirmed">Confirmado</option>
                            <option value="cancel">Cancelado</option>
                        </select>
                    </div>
                    <S.FlexColomn>
                        <S.CContainer>
                            <S.CCaixa>
                                <S.PLeft>
                                    <S.PPP>Dados do Pedidos</S.PPP>

                                    <S.PPALAVRA>Pedidos para Entrega</S.PPALAVRA>
                                </S.PLeft>
                                <S.CCaixinha>
                                    <S.Caixinha>
                                        <S.Alinha>
                                            <S.PaLavra>Data da compra: 00/00/0000</S.PaLavra>
                                            <S.PaLavra>ID do Pedido: 0214830</S.PaLavra>
                                        </S.Alinha>
                                    </S.Caixinha>
                                    <div>
                                        <S.SobreContainer>
                                            <div className="box-item">
                                                    <S.IIIMG
                                                        src='areia.png'
                                                    />
                                                <AAlinhamento>
                                                    <LLinha
                                                    >
                                                        <S.TTTitle>Areia reciclada</S.TTTitle>
                                                        <S.PPalavra>AGR Ambiental</S.PPalavra>
                                                    </LLinha>
                                                </AAlinhamento>
                                            </div>
                                            <S.QuebraLinha>
                                                <S.LETRA>Em andamento</S.LETRA>
                                                <div>
                                                    <S.BBarraAguardando/>
                                                    <S.BarraAguardando/>
                                                </div>
                                                <S.Flex>
                                                    <S.BBotao2>Cancelar</S.BBotao2>
                                                    <S.BBotao onClick={handleFechar}>Entregar</S.BBotao>
                                                </S.Flex>
                                            </S.QuebraLinha>
                                        </S.SobreContainer>
                                    </div>
                                </S.CCaixinha>
                            <S.LLinks   onClick={() => setOpen(!isOpen)}> Veja mais detalhes</S.LLinks>
                           

                            </S.CCaixa>

                            <S.CContainer>
                            <S.CCaixa>
                                <S.PLeft>
                                    <S.PPP>Dados do Pedido</S.PPP>

                                    <S.PPALAVRA>Solicitação de Orçamento</S.PPALAVRA>
                                </S.PLeft>
                                <S.CCaixinha>
                                    <S.Caixinha>
                                        <S.Alinha>
                                            <S.PaLavra>Data da compra: 00/00/0000</S.PaLavra>
                                            <S.PaLavra>ID do Pedido: 0214830</S.PaLavra>
                                        </S.Alinha>
                                    </S.Caixinha>
                                    <div>
                                        <S.SobreContainer>
                                            <div className="box-item">
                                                    <S.IIIMG
                                                        src='pedrisco.png'
                                                    />
                                                <AAlinhamento>
                                                    <LLinha
                                                    >
                                                        <S.TTTitle>Pedrisco</S.TTTitle>
                                                        <S.PPalavra>AGR Ambiental</S.PPalavra>
                                                    </LLinha>
                                                </AAlinhamento>
                                            </div>
                                            <S.QuebraLinha>
                                                <S.LETRA>Aguardando Orçamento</S.LETRA>
                                                <div>
                                                    <S.BBarraAguardando/>
                                                    <S.BarraAguardando/>
                                                </div>
                                                <S.Flex>
                                                    
                                                    <S.BBotao  onClick={handleFechar}>Enviar Orçamento</S.BBotao>
                                                </S.Flex>
                                            </S.QuebraLinha>
                                        </S.SobreContainer>
                                    </div>
                                </S.CCaixinha>
                                <S.LLinks onChange={handleEntrar}> Veja mais detalhes</S.LLinks>

                            </S.CCaixa>
                        </S.CContainer>
                        <S.CContainer>
                            <S.CCaixa>
                                <S.PLeft>
                                    <S.PPP>Dados do Pedido</S.PPP>

                                    <S.PPALAVRA>Pedido Finalizado</S.PPALAVRA>
                                </S.PLeft>
                                <S.CCaixinha>
                                    <S.Caixinha>
                                        <S.Alinha>
                                            <S.PaLavra>Data da compra: 00/00/0000</S.PaLavra>
                                            <S.PaLavra>ID do Pedido: 0214830</S.PaLavra>
                                        </S.Alinha>
                                    </S.Caixinha>
                                    <div>
                                        <S.SobreContainer>
                                            <div className="box-item">
                                                    <S.IIIMG
                                                        src='rachao.png'/>
                                                <AAlinhamento>
                                                    <LLinha>
                                                        <S.TTTitle>Rachão</S.TTTitle>
                                                        <S.PPalavra>AGR Ambiental</S.PPalavra>
                                                    </LLinha>
                                                </AAlinhamento>
                                            </div>
                                            <S.QuebraLinha>
                                                <S.LETRA>Pedido Finalizado</S.LETRA>
                                                <div>
                                                    <S.BBarraAguardando/>
                                                    <S.BarraAguardando/>
                                                </div>
                                            </S.QuebraLinha>
                                        </S.SobreContainer>
                                    </div>
                                </S.CCaixinha>
                                <S.LLinks onClick={handleEntrar}> Veja mais detalhes</S.LLinks>

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
