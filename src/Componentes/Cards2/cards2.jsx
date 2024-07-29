import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Botao, Caixa, Container, Im, Linha, Alinhamento, Carrosel, Descricao, Titulo, Alinhaborda, Texto,  Bordas } from "./CardStyle"


export default function Cards2(){
    
  const imagens = [
        { id: '1', image: "/pedrisco 1.svg",Titulo:"Pedrisco" },
        { id: '2', image: "/rachao 1.svg",Titulo:"Rachão" },
        { id: '3', image: "/image 36areia.svg" ,Titulo:"Areia reciclada"},
        { id: '4', image: "/brita 1.svg" ,Titulo:"Brita reciclada"},
        { id: '5', image: "/pedrisco 1.svg" ,Titulo:"Pedrisco"},
        { id: '6', image: "/rachao 1.svg" ,Titulo:"Rachão"},
        { id: '7', image: "/image 36areia.svg" ,Titulo:"Areia reciclada"},
        { id: '8', image: "/brita 1.svg" ,Titulo:"Brita reciclada"},
        { id: '9', image: "/pedrisco 1.svg" ,Titulo:"Pedrisco"},
        { id: '10', image: "/rachao 1.svg",Titulo:"Rachão" },
  ];

    return(
        <>
        <Alinhaborda>
            <Texto>Mais Vendidos</Texto>
            <Bordas/>
       </Alinhaborda>
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
                                                    <Titulo>{item.Titulo}</Titulo>
                                                    <Descricao>AGR Ambiental</Descricao>
                                                    <Botao>Comprar</Botao>
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
            </>
        );
}