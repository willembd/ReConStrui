// import { useState } from 'react';
import { useState} from "react"; 
import * as S from "./produtosEmpresaStyle";
import NavBar from "../../Componentes/NavBar/navbar";
import Footer from "../../Componentes/Footer/footer";
import RachaoImg from "../../../public/rachao.png"
import PedriscoImg from "../../../public/pedrisco.png"
import AreiaImg from "../../../public/areia.png"
import BritaImg from "../../../public/brita.png"


export default function ProdutosEmpresa() {

   
    
        const [checkboxes, setCheckboxes] = useState({
            1: false,
            2: false,
            3: false
        });
    
        const handleChange = (id) => {
            setCheckboxes(prevState => ({
                ...prevState,
                [id]: !prevState[id]
            }));
        };
 
    return (
        <>
 <NavBar />
    <S.FundoVerde />
         <S.BarraAmarela />
            <S.Caixa>
                <S.Container>
                    <S.Title>Meus Produtos</S.Title>

                    <S.ContainerSmall>
                        <S.FlexCaixa>
                            <S.Caixa1>
                                    <S.ContainerImg>
                                        <div className="box-item">
                                                    <S.Logo src={RachaoImg}  alt="rachaoimg" />
                                                    <S.TTTitle>Rachão</S.TTTitle>
                                                    <S.PPalavra>AGR Ambiental</S.PPalavra>
                                        </div> 
                                    </S.ContainerImg>

                            <S.FlexTextChek>
                                <S.TextPausar>Pausar Venda</S.TextPausar>
                                    <S.Switch>
                                        <S.Checkbox 
                                            type="checkbox" 
                                            checked={checkboxes [1]} 
                                            onChange={() => handleChange(1)} 
                                        />
                                        <S.Slider />
                                    </S.Switch>
                            </S.FlexTextChek>
                     </S.Caixa1>
                        </S.FlexCaixa>
                    </S.ContainerSmall>

                    <S.ContainerSmall>
                        <S.FlexCaixa>
                            <S.Caixa1>
                                <S.ContainerImg>
                                        <div className="box-item">
                                                <S.Logo src={AreiaImg}  alt="rachaoimg" />
                                                    <S.TTTitle>Areia reciclada</S.TTTitle>
                                                    <S.PPalavra>AGR Ambiental</S.PPalavra>
                                        </div>
                                </S.ContainerImg>
                            <S.FlexTextChek>
                                    <S.TextPausar>Pausar Venda</S.TextPausar>
                                    <S.Switch>
                                        <S.Checkbox 
                                            type="checkbox" 
                                            checked={checkboxes  [2]} 
                                            onChange={() => handleChange(2)} 
                                        />
                                        <S.Slider />
                                    </S.Switch>
                                </S.FlexTextChek>
                            </S.Caixa1>
                        </S.FlexCaixa>
                    </S.ContainerSmall>
                    <S.ContainerSmall>
                        <S.FlexCaixa>
                            <S.Caixa1>
                                <S.ContainerImg>
                                        <div className="box-item">
                                                <S.Logo src={PedriscoImg}  alt="Pedrisco" />
                                                    <S.TTTitle>Pedrisco</S.TTTitle>
                                                    <S.PPalavra>AGR Ambiental</S.PPalavra>
                                        </div>
                                        
                                </S.ContainerImg>
                                <S.FlexTextChek>
                                <S.TextPausar>Pausar Venda</S.TextPausar>
                                    <S.Switch>
                                        <S.Checkbox 
                                            type="checkbox" 
                                            checked={checkboxes [3]} 
                                            onChange={() => handleChange(3)} 
                                        />
                                        <S.Slider />
                                    </S.Switch>
                                </S.FlexTextChek>
                            </S.Caixa1>
                        </S.FlexCaixa>
                    </S.ContainerSmall>
                    <S.ContainerSmall>
                        <S.FlexCaixa>
                            <S.Caixa1>
                                <S.ContainerImg>
                                        <div className="box-item">
                                                <S.Logo src={BritaImg}  alt="Brita" />
                                                    <S.TTTitle>Brita</S.TTTitle>
                                                    <S.PPalavra>AGR Ambiental</S.PPalavra>
                                        </div>
                                        
                                </S.ContainerImg>
                                <S.FlexTextChek>
                                <S.TextPausar>Pausar Venda</S.TextPausar>
                                    <S.Switch>
                                        <S.Checkbox 
                                            type="checkbox" 
                                            checked={checkboxes [4]}
                                            onChange={() => handleChange(4)} 
                                        />
                                        <S.Slider />
                                    </S.Switch>
                                </S.FlexTextChek>
                            </S.Caixa1>
                        </S.FlexCaixa>
                    </S.ContainerSmall>
                </S.Container>
            </S.Caixa>
            <Footer />
        </>
    );
}
