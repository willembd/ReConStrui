import Rachao from "../../../public/rachao 1.svg"
import { Botao, Caixa, Container, Im, Linha } from "./styleCards"


export default function Cards(){
    return(
        <Container>
            <Caixa>
                <div className="box-item">
                    <div className="img">
                        <Im src={Rachao} alt="" />
                    </div>
                    <Linha>
                        <h2>Rachão</h2>
                        <p>AGR Ambiental</p>
                    </Linha>
                    <Container>
                        <Botao>Compra</Botao>
                    </Container>
                </div>
            </Caixa>
        </Container>

        
    )
}