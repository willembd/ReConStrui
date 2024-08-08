import {
    Container,
    Alinhamento,
    Linha
} from "../carrosselCards/carrosselCardsStyle";
import { AAlinhamento, IImagem, LLinha, PPalavra, TTitle } from "../carrosselCards/modalCards/modalCards";

export default function Cards({ item }) {
    
    return (
        <>
            <Container key={item.id}>
                <div className="box-item">
                    <div className="img">
                        <IImagem
                            src={item.image}
                            alt="Slide"
                            className="slide-item"
                        />
                    </div>
                    <AAlinhamento>
                        <LLinha>
                            <TTitle>{item.title}</TTitle>
                            <PPalavra>AGR Ambiental</PPalavra>
                        </LLinha>
                    </AAlinhamento>
                </div>
            </Container>
        </>
    );
}
