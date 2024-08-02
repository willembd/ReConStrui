import {
    Container,
    Caixa,
    Alinhamento,
    Linha,
    Title,
    Palavra,
    Im,
} from "../carrosselCards/Style";

export default function Cards({ item }) {
    // const imagens = [
    //     { id: '1', image: "/pedrisco 1.svg",title:"Pedrisco" },
    //     { id: '2', image: "/rachao 1.svg",title:"Rachão" },
    //     { id: '3', image: "/image 36areia.svg" ,title:"Areia reciclada"},
    //     { id: '4', image: "/brita 1.svg" ,title:"Brita reciclada"},
    //     { id: '5', image: "/pedrisco 1.svg" ,title:"Pedrisco"},
    //     { id: '6', image: "/rachao 1.svg" ,title:"Rachão"},
    //     { id: '7', image: "/image 36areia.svg" ,title:"Areia reciclada"},
    //     { id: '8', image: "/brita 1.svg" ,title:"Brita reciclada"},
    //     { id: '9', image: "/pedrisco 1.svg" ,title:"Pedrisco"},
    //     { id: '10', image: "/rachao 1.svg",title:"Rachão" },
    // ];

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
                                <Title>{item.title}</Title>
                                <Palavra>AGR Ambiental</Palavra>
                            </Linha>
                        </Alinhamento>
                    </div>
                </Caixa>
            </Container>
        </>
    );
}
