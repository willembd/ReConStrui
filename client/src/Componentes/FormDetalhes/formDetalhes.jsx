import CampoDados from "../CampoDados/campoDados"
import { AAlinhamento, LLinha } from "../../Componentes/modalCards/modalCards"
import * as M from "./formDetalhesStyle"


export default function FormularioDetalhes() {
    return (


      <M.Caixa>
           
            <M.FlexCaixa1>
                <M.IdDados>
                
                    <M.ColorSpan> Data da Compra: 12/08/2024</M.ColorSpan>
                </M.IdDados>
              <M.FlexContainerPrimeiro>
            <M.Caixa1>
                <M.LabelProduto>
                    <M.Alinha>
                        <M.TextBox>Produto</M.TextBox>
                    
                    </M.Alinha>
                
                </M.LabelProduto>
         
                 <M.ContainerImg>
                        <div className="box-item">
                                <M.Img
                                    src='areia.png'
                                />
                            <AAlinhamento>
                                <LLinha
                                >
                                    <M.TextProduto>Areia reciclada</M.TextProduto>
                                    <M.NameUsina>AGR Ambiental</M.NameUsina>
                                </LLinha>
                            </AAlinhamento>
                        </div>
                 </M.ContainerImg>
            </M.Caixa1>
            </M.FlexContainerPrimeiro>
            </M.FlexCaixa1>
            <M.Caixa2>
                         <M.LabelEndereço>
                                <M.Alinha>
                                    <M.TextBox>Informações De Endereço</M.TextBox>
                                    
                                </M.Alinha>
                         </M.LabelEndereço>
                    <M.Container2>

                                <CampoDados padding='secondary' fontsize='secondary' borderbottom='secondary'  text="Rua:" >   
                                    <M.Text>Joaquim Nabuco</M.Text> 
                                </CampoDados>

                                <CampoDados  fontsize='secondary'  borderbottom='secondary' text="Cidade:" > 
                                    <M.Text>Olinda</M.Text> 
                                </CampoDados>

                                <CampoDados  fontsize='secondary'  borderbottom='secondary' text="Bairro:" > 
                                    <M.Text>Rio Doce</M.Text>
                                </CampoDados>

                               
                         

                        <M.CampoFlex>
                                <M.FlexN> 
                                    <M.ColorP>Nº:</M.ColorP>
                                    <M.ColorSpan>405</M.ColorSpan>
                                  
                                </M.FlexN>
                                <M.FlexCep>
                                    <M.ColorP>Cep: </M.ColorP>
                                    <M.ColorSpan> 53370-058</M.ColorSpan>
                                    
                                </M.FlexCep>
                                <M.CampoMenor>
                                </M.CampoMenor>
                                <M.CampoMenor>
                                </M.CampoMenor>
                            
                        </M.CampoFlex>
                            
                     </M.Container2>
                
            </M.Caixa2>
            <M.Caixa3>
                        <M.LabelCliente>
                            <M.Alinha>
                                <M.TextBox>Informações Do Cliente</M.TextBox>
                        
                            </M.Alinha>
                        </M.LabelCliente>
                        <div>
                            <M.Container3>
                                    <CampoDados padding='secondary' fontsize='secondary' borderbottom='secondary'  text="Nome:" >   
                                        <M.Text>Rute Cajueiro</M.Text> 
                                    </CampoDados>

                                    <CampoDados  fontsize='secondary'  borderbottom='secondary' text="Email:" > 
                                        <M.Text>Rute822@gmail.com</M.Text> 
                                    </CampoDados>

                                    <CampoDados  fontsize='secondary'  borderbottom='secondary' text="Telefone:" > 
                                        <M.Text>(81) 937846221</M.Text>
                                    </CampoDados>
                            </M.Container3>
                        </div>
                    </M.Caixa3>

             <M.FlexCaixa4>
             <M.ColorSpan>ID do Pedido: 0214830</M.ColorSpan>
            <M.FlexContainerPrimeiro>
                 <M.Caixa4>
                        <M.LabelQuantidade>
                            <M.Alinha>
                                <M.TextBox>Quantidade</M.TextBox>
                            
                            </M.Alinha>
                        </M.LabelQuantidade>
                    
                            <M.Container4>
                                 <M.FlexM>
                                    <M.ColorP> Nº: </M.ColorP>
                                    <M.ColorSpan>15 Metros </M.ColorSpan>
                              
                                   
                                 </M.FlexM>
                                 
                                    <M.CampoPequeno>
                                    </M.CampoPequeno>
                            </M.Container4>
                </M.Caixa4>
             </M.FlexContainerPrimeiro>
             </M.FlexCaixa4>

         </M.Caixa>
  
    )
}