import * as S from "./pedidosStyle"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import NavBar from "../../Componentes/NavBar/navbar"
import Footer from "../../Componentes/Footer/footer"
import { AAlinhamento, LLinha, PPalavra, TTitle } from "../../Componentes/carrosselCards/modalCards/modalCards";
import { Link } from "react-router-dom";
export default function Pedidos (item) {

    const [isOpenTest, setOpenTest] = useState(false)


    const navigate = useNavigate();
        const handleEntrar = () => {
            navigate("/confirmacaoPedidos");
        };
        const handleFechar = () => {
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
                        <S.Pedidos>Meus Pedidos</S.Pedidos>
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
                                    <S.PPP>Pedidos Finalizados</S.PPP>
                                </S.PLeft>
                                <div>
                                    <S.PPALAVRA>Dados do Pedido</S.PPALAVRA>
                                </div>
                                <S.CCaixinha>
                                    <S.Alinha>
                                        <S.PaLavra>Data da compra: 00/00/0000</S.PaLavra>
                                        <S.PaLavra>ID do Pedido: 0214830</S.PaLavra>
                                    </S.Alinha>
                                    <div>
                                        <S.SobreContainer>
                                            <div className="box-item">
                                                    <S.IIIMG
                                                        src='areia.png'
                                                    />
                                                <AAlinhamento>
                                                    <LLinha
                                                    >
                                                        <TTitle>Areia reciclada</TTitle>
                                                        <PPalavra>AGR Ambiental</PPalavra>
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
                                                    <S.BBotao2>Cancelar</S.BBotao2>
                                                    <S.BBotao>Verificar</S.BBotao>
                                                </S.Flex>
                                            </S.QuebraLinha>
                                        </S.SobreContainer>
                                    </div>
                                </S.CCaixinha>
                            <Link onChange={handleFechar}> Veja mais detalhes</Link>

                            </S.CCaixa>

                            <S.CContainer>
                            <S.CCaixa>
                                <S.PLeft>
                                    <S.PPP>Pedidos Finalizados</S.PPP>
                                </S.PLeft>
                                <div>
                                    <S.PPALAVRA>Dados do Pedido</S.PPALAVRA>
                                </div>
                                <S.CCaixinha>
                                    <S.Alinha>
                                        <S.PaLavra>Data da compra: 00/00/0000</S.PaLavra>
                                        <S.PaLavra>ID do Pedido: 0214830</S.PaLavra>
                                    </S.Alinha>
                                    <div>
                                        <S.SobreContainer>
                                            <div className="box-item">
                                                    <S.IIIMG
                                                        src='pedrisco.png'
                                                    />
                                                <AAlinhamento>
                                                    <LLinha
                                                    >
                                                        <TTitle>Pedrisco</TTitle>
                                                        <PPalavra>AGR Ambiental</PPalavra>
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
                                                    <S.BBotao2>Cancelar</S.BBotao2>
                                                    <S.BBotao>Verificar</S.BBotao>
                                                </S.Flex>
                                            </S.QuebraLinha>
                                        </S.SobreContainer>
                                    </div>
                                </S.CCaixinha>
                                <Link onChange={handleFechar}> Veja mais detalhes</Link>

                            </S.CCaixa>
                        </S.CContainer>
                        <S.CContainer>
                            <S.CCaixa>
                                <S.PLeft>
                                    <S.PPP>Pedidos Finalizados</S.PPP>
                                </S.PLeft>
                                <div>
                                    <S.PPALAVRA>Dados do Pedido</S.PPALAVRA>
                                </div>
                                <S.CCaixinha>
                                    <S.Alinha>
                                        <S.PaLavra>Data da compra: 00/00/0000</S.PaLavra>
                                        <S.PaLavra>ID do Pedido: 0214830</S.PaLavra>
                                    </S.Alinha>
                                    <div>
                                        <S.SobreContainer>
                                            <div className="box-item">
                                                    <S.IIIMG
                                                        src='areia.png'
                                                    />
                                                <AAlinhamento>
                                                    <LLinha
                                                    >
                                                        <TTitle>Pedrisco</TTitle>
                                                        <PPalavra>AGR Ambiental</PPalavra>
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
                                                    <S.BBotao2>Cancelar</S.BBotao2>
                                                    <S.BBotao>Verificar</S.BBotao>
                                                </S.Flex>
                                            </S.QuebraLinha>
                                        </S.SobreContainer>
                                    </div>
                                </S.CCaixinha>
                                <Link onChange={handleFechar}> Veja mais detalhes</Link>

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
