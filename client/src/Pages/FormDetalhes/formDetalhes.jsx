import CampoDados from "../../Componentes/CampoDados/campoDados"
import { AAlinhamento, LLinha } from "../../Componentes/carrosselCards/modalCards/modalCards"
import * as M from "./formDetalhesStyle"


export default function FormularioDetalhes(items) {
    return (


      <M.Caixa>
            {/* <M.IdDados>
               
                <M.ColorSpan> Data da Compra: 00/00/0000</M.ColorSpan>
                <M.ColorSpan>ID do Pedido: 0214830</M.ColorSpan>
            </M.IdDados> */}
            <M.FlexCaixa1>
            <M.IdDados>
               
               <M.ColorSpan> Data da Compra: 00/00/0000</M.ColorSpan>
           </M.IdDados>
            <M.Caixa1>
                <M.Caixinha1>
                    <M.Alinha>
                        <M.PaLavra>Produto</M.PaLavra>
                    
                    </M.Alinha>
                </M.Caixinha1>
          
                 <M.ContainerImg>
                        <div className="box-item">
                                <M.IIIMG
                                    src='areia.png'
                                />
                            <AAlinhamento>
                                <LLinha
                                >
                                    <M.TTTitle>Areia reciclada</M.TTTitle>
                                    <M.PPalavra>AGR Ambiental</M.PPalavra>
                                </LLinha>
                            </AAlinhamento>
                        </div>
                 </M.ContainerImg>
            </M.Caixa1>
            </M.FlexCaixa1>
            <M.Caixa2>
                         <M.Caixinha2>
                                <M.Alinha>
                                    <M.PaLavra>Informações De Endereço</M.PaLavra>
                                    
                                </M.Alinha>
                         </M.Caixinha2>
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

                                <CampoDados  fontsize='secondary'  borderbottom='secondary' text="15 Metros:" >   
                                    <M.Text>Oii</M.Text> 
                                </CampoDados>

                        <M.CampoFlex>
                                <M.FlexN> 
                                    <M.ColorP>Nº:</M.ColorP>
                                    <M.ColorSpan>405</M.ColorSpan>
                                    {/* <M.CampoPequeno>
                                    </M.CampoPequeno> */}
                                </M.FlexN>
                                <M.FlexCep>
                                    <M.ColorP>Cep: </M.ColorP>
                                    <M.ColorSpan> 53370-058</M.ColorSpan>
                                    {/* <M.CampoPequeno>
                                    </M.CampoPequeno> */}
                                </M.FlexCep>
                                <M.CampoMenor>
                                </M.CampoMenor>
                                <M.CampoPequeno>
                                </M.CampoPequeno>
                            
                        </M.CampoFlex>
                            
                     </M.Container2>
                
            </M.Caixa2>
            <M.Caixa3>
                        <M.Caixinha3>
                            <M.Alinha>
                                <M.PaLavra>Informações Do Cliente</M.PaLavra>
                        
                            </M.Alinha>
                        </M.Caixinha3>
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

                 <M.Caixa4>
                        <M.Caixinha4>
                            <M.Alinha>
                                <M.PaLavra>Quantidade</M.PaLavra>
                            
                            </M.Alinha>
                        </M.Caixinha4>
                    
                            <M.Container4>
                                 <M.FlexM>
                                    <M.ColorP> Nº: </M.ColorP>
                                    <M.ColorSpan>15 Metros </M.ColorSpan>
                              
                                   
                                 </M.FlexM>
                                 
                                 <M.CampoPequeno>
                                    </M.CampoPequeno>
                            </M.Container4>
                       
                </M.Caixa4>
             </M.FlexCaixa4>

         </M.Caixa>
  
    )
}