// import { useNavigate } from "react-router-dom";
import * as S from "./modaldetalhes"
import { AAlinhamento, LLinha  } from "../../Componentes/carrosselCards/modalCards/modalCards";
import CampoDados from "../../Componentes/CampoDados/campoDados";



export default function ModalDetalhes({ isOpen, setOpen, text }){
   
    const setOpenModal = () => {
        setOpen(false);  
    }   

    
    // const navigation = useNavigate();
    
    if(isOpen){
        return(
            <S.CaixaModal>
              
                <S.ModalStyle>
                
                        <S.Itens>
                           
                             <S.Texto> {text} </S.Texto>
                             <S.X onClick={setOpenModal}>x</S.X>

                          <S.ContainerSegundo>
                             <S.CCaixa>
                                <S.IdDados>
                                    
                                </S.IdDados>
                                <S.Caixa1>
                                    <S.Caixinha1>
                                        <S.Alinha>
                                            <S.PaLavra>Produto</S.PaLavra>
                                          
                                        </S.Alinha>
                                    </S.Caixinha1>
                                    <div>
                                        <S.ContainerImg>
                                       
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
                                            {/* <S.Linha>
                                             </S.Linha> */}
                                        </S.ContainerImg>
                                    </div>
                                </S.Caixa1>


                                <S.Caixa2>
                                    <S.Caixinha2>
                                        <S.Alinha>
                                            <S.PaLavra>Informações De Endereço</S.PaLavra>
                                            
                                        </S.Alinha>
                                    </S.Caixinha2>
                                
                                    <S.Container2>

                                                <CampoDados padding='secondary' fontsize='secondary' borderbottom='secondary'  text="Rua:" >   
                                                    <S.Text>Joaquim Nabuco</S.Text> 
                                                </CampoDados>

                                                <CampoDados  fontsize='secondary'  borderbottom='secondary' text="Cidade:" > 
                                                    <S.Text>Olinda</S.Text> 
                                                </CampoDados>

                                                <CampoDados  fontsize='secondary'  borderbottom='secondary' text="Bairro:" > 
                                                    <S.Text>Rio Doce</S.Text>
                                                </CampoDados>

                                                <CampoDados  fontsize='secondary'  borderbottom='secondary' text="15 Metros:" >   
                                                    <S.Text>Oii</S.Text> 
                                                </CampoDados>

                                        <S.CampoFlex>
                                                <S.CampoPequeno>
                                                </S.CampoPequeno>

                                                <S.CampoPequeno>
                                                </S.CampoPequeno>
                                        </S.CampoFlex>
                                            
                                        </S.Container2>
                                    
                                   </S.Caixa2>

                                    <S.Caixa3>
                                            <S.Caixinha3>
                                                <S.Alinha>
                                                    <S.PaLavra>Informações Do Cliente</S.PaLavra>
                                            
                                                </S.Alinha>
                                            </S.Caixinha3>
                                            <div>
                                                <S.Container3>
                                                        <CampoDados padding='secondary' fontsize='secondary' borderbottom='secondary'  text="Nome:" >   
                                                            <S.Text>Rute Cajueiro</S.Text> 
                                                        </CampoDados>

                                                        <CampoDados  fontsize='secondary'  borderbottom='secondary' text="Email:" > 
                                                            <S.Text>Rute822@gmail.com</S.Text> 
                                                        </CampoDados>

                                                        <CampoDados  fontsize='secondary'  borderbottom='secondary' text="Telefone:" > 
                                                            <S.Text>(81) 937846221</S.Text>
                                                        </CampoDados>
                                                </S.Container3>
                                            </div>
                                        </S.Caixa3>


                                        <S.Caixa4>
                                            <S.Caixinha4>
                                                <S.Alinha>
                                                    <S.PaLavra>Quantidade</S.PaLavra>
                                                
                                                </S.Alinha>
                                            </S.Caixinha4>
                                            <div>
                                                <S.Container4>
                                                        <S.Metros>15 Metros </S.Metros>
                                                        <S.CampoPequeno>
                                                        </S.CampoPequeno>
                                                        
                                                </S.Container4>
                                            </div>
                                        </S.Caixa4>
                                        </S.CCaixa>
                                    </S.ContainerSegundo>
                                </S.Itens>
                                
                        </S.ModalStyle>        
                    </S.CaixaModal>
        )
    }

    
}
