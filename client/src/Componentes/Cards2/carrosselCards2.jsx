import * as S from "./CardStyle.js"
import { Barra,ContainerModal,ContainerDivModal,TituloModal,DivInput,DivRadio, QuebraLinha, Th3, PP } from "./modalCards2/modalCards2Style.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import Cards from "../cards/cards.jsx"
import "../cards/cards.css"
import ModalCards from "../carrosselCards/modalCards/modalCards.jsx";
import Input from "../Input/input.jsx";
import ButtonMod from "../ButtonModelo/buttonModelo.jsx";


export default function CarrosselCards2() {
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
       <S.Alinhaborda>
            <S.Texto>Recomendações para você</S.Texto>
            <S.Bordas/>
       </S.Alinhaborda>
        
       <S.CContainer>
                <S.Carrosel>
                    <Swiper 
                        modules={[Navigation, Scrollbar, A11y]}
                        slidesPerView={slidePerView}
                        navigation
                    >
                        {produtos.map((item) => (
                            <SwiperSlide key={item.id}>
                                <S.CContainer>
                                    <S.IIm src={item.image} alt="Slide" className='slide-item'></S.IIm>
                                    <S.AAbsoluto>
                                        <S.CCaixa>
                                            <S.AAlinhamento>
                                                <S.LLinha>
                                                    <S.TTitle>{item.title}</S.TTitle>
                                                    <S.PPalavra>AGR Ambiental</S.PPalavra>
                                                    <S.BBotao onClick={() => handleComprar(item.id)}>Comprar</S.BBotao>
                                                    
                                                </S.LLinha>
                                            </S.AAlinhamento>
                                        </S.CCaixa>
                                    </S.AAbsoluto>
                                </S.CContainer>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </S.Carrosel>
            </S.CContainer>
            
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