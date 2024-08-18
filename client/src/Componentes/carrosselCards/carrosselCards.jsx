
    import { Alinhaborda, Alinhamento, Bordas, Botao, Caixa, Carrosel, Container, Im, Linha, Palavra, Texto, Title } from "./carrosselCardsStyle.js";
    import { Barra,ContainerModal,ContainerDivModal,TituloModal,DivInput,DivRadio,Transporte, QuebraLinha, Th3, PPalavra, PP } from "./modalCards/modalCards.js";
    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/scrollbar";
    import { Navigation, Scrollbar, A11y } from 'swiper/modules';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { useState, useEffect } from "react"; 
    import { useNavigate } from "react-router-dom";
    import Cards from "../cards/cards.jsx"
    import "../cards/cards.css"
    import ModalCards from "./modalCards/modalCards.jsx";
    import Input from "../Input/input";
    import ButtonMod from "../ButtonModelo/buttonModelo.jsx";


    export default function CarrosselCards() {
        const [openModal, setOpenModal] = useState(null)
        const [select, setSelect] = useState(null)
        const [slidePerView, setSlidePerView] = useState(6)
        const produtos = [
            { id: '1', image: "/pedrisco.png",title:"Pedrisco" },
            { id: '2', image: "/rachao.png",title:"Rachão" },
            { id: '3', image: "/areia.png" ,title:"Areia reciclada"},
            { id: '4', image: "/brita.png" ,title:"Brita reciclada"},
            { id: '5', image: "/pedrisco.png" ,title:"Pedrisco"},
            { id: '6', image: "/rachao.png" ,title:"Rachão"},
            { id: '7', image: "/areia.png" ,title:"Areia reciclada"},
            { id: '8', image: "/brita.png" ,title:"Brita reciclada"},
            { id: '9', image: "/pedrisco.png" ,title:"Pedrisco"},
            { id: '10', image: "/rachao.png",title:"Rachão" },
        ];

        useEffect(() => {
            function handleResize(){
                if(window.innerWidth<453){
                    setSlidePerView(1);
                }else{
                    if(window.innerWidth<600){
                        setSlidePerView(2)
                    }else{
                        if(window.innerWidth<710){
                            setSlidePerView(3)
                        }else{
                            if(window.innerWidth<=1920){
                                setSlidePerView(5)
                            }else{
                                setSlidePerView(6)
                            }
                        }
                    }
                }
            }
            handleResize();

            window.addEventListener("resize", handleResize)

            return () => {
                window.removeEventListener("resize", handleResize)
            }

        },[])

        const handleComprar = (id) => {
            setOpenModal(true)
            setSelect(id)
        }

        const navigate = useNavigate();
        const handleFechar = () => {
            navigate("/pedidos");
        };
        

        return (
        <>
        <Alinhaborda>
                <Texto>Recomendações para você</Texto>
                <Bordas/>
        </Alinhaborda>
            
                <Container>
                    <Carrosel>
                        <Swiper 
                            modules={[Navigation, Scrollbar, A11y]}
                            slidesPerView={slidePerView}
                            navigation
                            className="cards"
                        >
                            {produtos.map((item) => (
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
                                                        <Botao onClick={() => handleComprar(item.id)}>Comprar</Botao>
                                                        
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
                
                <ModalCards isOpen={openModal} setModalOpen= {() => setOpenModal(!openModal)}>
                    <ContainerDivModal>
                        <>
                        <ContainerModal>
                            <Cards item = {produtos.find((p) => (p.id===select))}/>
                        </ContainerModal>
                        <Barra>
                        </Barra>
                        <ContainerModal>
                        <TituloModal>Orçamento</TituloModal>
                            <DivInput>
                                <Input text="Quantidade"/>
                                <Th3>Informação para Entrega</Th3>
                                <Input text="Endereço"/>
                                <Input text="Cidade"/>
                                <Input text="Bairro"/>
                                <QuebraLinha>
                                    <Input text="Número"/>
                                    <Input text="CEP"/>
                                </QuebraLinha>
                                <Th3 className="transorte">Forma de transpote</Th3>
                                <DivRadio>
                                    <div>
                                        <input type="radio" value="Usuario"/>
                                        <t htmlFor=""><PP>Frete</PP></t>
                                    </div>
                                    <div>
                                        <input type="radio" value="Empresa"/>
                                        <label htmlFor=""><PP>Transporte próprio</PP></label>
                                    </div>
                                </DivRadio>
                            </DivInput>
                            <ButtonMod  text="Envia" onClick={handleFechar}></ButtonMod>
                        </ContainerModal>
                        <ContainerModal>
                            
                        </ContainerModal>
                        </>
                    </ContainerDivModal>
                </ModalCards>
            </> 
        );
    }