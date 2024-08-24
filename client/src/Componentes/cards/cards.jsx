import { Absoluto, IMG, CCaixa, CContainer, TTitle, PPalavra,AAlinhamento,LLinha } from "../carrosselCards/carrosselCardsStyle"

export default function Cards({ item }) {
    
    return (
        <>
            <CContainer key={item.id}>
                <IMG src={item.image}></IMG>
                <Absoluto>
                    <CCaixa>
                        <AAlinhamento>
                            <LLinha>
                                <TTitle>{item.title}</TTitle>
                                <PPalavra>AGR Ambiental</PPalavra>
                            </LLinha>
                        </AAlinhamento>
                    </CCaixa>
                </Absoluto>
            </CContainer>
        </>
    );
}
