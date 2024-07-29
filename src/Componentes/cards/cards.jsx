
import { Alinhamento, Botao, Caixa, Carrosel, Container, Im, Linha, Palavra, Title } from "./styleCards";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./card.css"


export default function Cards() {
    const imagens = [
        { id: '1', image: "/pedrisco 1.svg",title:"Pedrisco" },
        { id: '2', image: "/rachao 1.svg",title:"Rachão" },
        { id: '3', image: "/image 36areia.svg" ,title:"Areia reciclada"},
        { id: '4', image: "/brita 1.svg" ,title:"Brita reciclada"},
        { id: '5', image: "/pedrisco 1.svg" ,title:"Pedrisco"},
        { id: '6', image: "/rachao 1.svg" ,title:"Rachão"},
        { id: '7', image: "/image 36areia.svg" ,title:"Areia reciclada"},
        { id: '8', image: "/brita 1.svg" ,title:"Brita reciclada"},
        { id: '9', image: "/pedrisco 1.svg" ,title:"Pedrisco"},
        { id: '10', image: "/rachao 1.svg",title:"Rachão" },
    ];

    return (
        <Container>
            <Carrosel>
                <Swiper 
                    modules={[Navigation, Scrollbar, A11y]}
                    slidesPerView={5}
                    navigation
                >
                    {imagens.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Container>
                                <Caixa>
                                    <div className="box-item">
                                        <div className="img">
                                            <Im src={item.image} alt="Slide" className='slide-item'/>
                                        </div>
                                        <Alinhamento>
                                            <Linha>
                                                <Title>{item.title}</Title>
                                                <Palavra>AGR Ambiental</Palavra>
                                                <Botao>Compra</Botao>
                                            </Linha>
                                        </Alinhamento>
                                    </div>
                                </Caixa>

                            </Container>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Carrosel>
        </Container>
    );
}