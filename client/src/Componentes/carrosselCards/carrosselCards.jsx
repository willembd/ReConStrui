
    import { Alinhaborda, Alinhamento, Bordas, Botao, Caixa, Carrosel, Container, Im, Linha, Palavra, Texto, Title, Absoluto } from "./carrosselCardsStyle.js";
    import { ContainerModal,ContainerDivModal,TituloModal,DivInput,DivRadio, Th3, PP, CaixaFundo,  FUNDO,TituloProduto,DivTransporte, Organizacao,Descricao } from "../modalCards/modalCards.js";
    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/scrollbar";
    import { Navigation, Scrollbar, A11y } from 'swiper/modules';
    import { Swiper, SwiperSlide } from 'swiper/react';

    import { useState, useEffect } from "react"; 
    import { useNavigate } from "react-router-dom";
    import Cards from "../Cards/cards.jsx"
    import "../Cards/cards.css"
    import ModalCards from "../modalCards/modalCards.jsx";
    import ButtonMod from "../ButtonModelo/buttonModelo.jsx";
    import InputPrimary from "../InputPrimary/inputPrimary.jsx";
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
                if(window.innerWidth<545){
                    setSlidePerView(3)
                }else{
                    if(window.innerWidth<=1135){
                        setSlidePerView(4)
                    }else{
                        if(window.innerWidth<=1920){
                            setSlidePerView(5)
                        }else{
                            setSlidePerView(6)
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
                        >
                            {produtos.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Container>
                                        <Im src={item.image} alt="Slide" className='slide-item'></Im>
                                        <Absoluto>
                                            <Caixa>
                                                <Alinhamento>
                                                    <Linha>
                                                        <Title>{item.title}</Title>
                                                        <Palavra>AGR Ambiental</Palavra>
                                                        <Botao onClick={() => handleComprar(item.id)}>Comprar</Botao>
                                                        
                                                    </Linha>
                                                </Alinhamento>
                                            </Caixa>
                                        </Absoluto>
                                    </Container>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Carrosel>
                </Container>

                <ModalCards isOpen={openModal} setModalOpen= {() => setOpenModal(!openModal)}>
                    <Organizacao>
                        <CaixaFundo></CaixaFundo>
                    </Organizacao>
                        <ContainerModal>
                        <ContainerDivModal>
                            <Organizacao>
                                    <ContainerModal>
                                        <TituloProduto>Produto</TituloProduto>
                                        <Cards item = {produtos.find((p) => (p.id===select))}/>
                                        <Descricao>Quantidade mínima para solicitação de orçamento de 12 metros</Descricao>
                                    </ContainerModal>
                                    <DivInput>
                                            <TituloModal>Orçamento</TituloModal>
                                            <FUNDO>
                                                <InputPrimary text='Quantidade'/>
                                                <Th3>Informação para Entrega</Th3>
                                                <InputPrimary text='Cep'/>
                                                <InputPrimary text='Cidade'/>
                                                <InputPrimary text='Endereço'/>
                                                <InputPrimary text='Bairro'/>
                                                <InputPrimary text='Número'/>
                                            
                                                <Th3 className="transorte">Forma de transpote</Th3>
                                                <DivRadio>
                                                    <DivTransporte>
                                                        <input type="radio" value="Usuario"/>
                                                        <PP>Frete</PP>
                                                    </DivTransporte>
                                                    <DivTransporte>
                                                        <input type="radio" value="Empresa"/>
                                                       <PP>Transporte próprio</PP>
                                                    </DivTransporte>
                                                </DivRadio>
                                            </FUNDO>
                                            <ButtonMod  text="Envia" onClick={handleFechar}></ButtonMod>
                                        </DivInput>
                                </Organizacao>
                            </ContainerDivModal>
                            </ContainerModal>
                </ModalCards>
            </> 
        );
    }