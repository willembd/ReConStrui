import {
    Container,
    Caixa,
    Alinhamento,
    Linha,
    Title,
    Palavra,
    Im,
} from "../Filtro/Style";

export default function Cards({ item }) {
    
    return (
        <>
            <Container key={item.id}>
                <Caixa>
                    <div className="box-item">
                        <div className="img">
                            <Im
                                src={item.image}
                                alt="Slide"
                                className="slide-item"
                            />
                        </div>
                        <Alinhamento>
                            <Linha>
                                <Title>Brita reciclada</Title>
                                <Palavra>AGR Ambiental</Palavra>
                            </Linha>
                        </Alinhamento>
                    </div>
                </Caixa>
            </Container>
        </>
    );
}
