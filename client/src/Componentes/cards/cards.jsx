import { Container,Alinhamento,Im,Absoluto,Caixa,Linha,Title,Palavra } from "../carrosselCards/modalCards/modalCards"

export default function Cards({ item }) {
    
    return (
        <>
            <Container key={item.id}>
                <Im src={item.image}></Im>
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
