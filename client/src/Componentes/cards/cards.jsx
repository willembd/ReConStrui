import { Container,Alinhamento,Absoluto,Caixa,Linha,Title,Palavra, IMG } from "../modalCards/modalCards"

export default function Cards({ item }) {
    
    return (
        <>
            <Container key={item.id}>
                <IMG src={item.image}></IMG>
                <Absoluto>
                    <Caixa>
                        <Alinhamento>
                            <Linha>
                                <Title>{item.titleProduto}</Title>
                                <Palavra>{item.titleEmpresa}</Palavra>
                            </Linha>
                        </Alinhamento>
                    </Caixa>
                </Absoluto>
            </Container>
        </>
    );
}
