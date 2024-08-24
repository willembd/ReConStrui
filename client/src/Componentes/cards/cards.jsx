import { Container,Alinhamento,Im,Absoluto,Caixa,Linha,Title,Palavra, IMG } from "../carrosselCards/modalCards/modalCards"

export default function Cards({ item }) {
    
    return (
        <>
            <Container key={item.id}>
                <IMG src={item.image}></IMG>
                <Absoluto>
                    <Caixa>
                        <Alinhamento>
                            <Linha>
                                <Title>{item.title}</Title>
                                <Palavra>AGR Ambiental</Palavra>
                            </Linha>
                        </Alinhamento>
                    </Caixa>
                </Absoluto>
            </Container>
        </>
    );
}
