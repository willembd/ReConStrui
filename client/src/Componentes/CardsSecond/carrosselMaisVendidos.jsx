import * as S from "./CardStyle.js"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import Cards from "../Cards/cards.jsx";
import "../Cards/cards.css"
import InputPrimary from "../InputPrimary/inputPrimary.jsx";
import ModalCards from "../modalCards/modalCards.jsx";
import ButtonMod from "../ButtonModelo/buttonModelo.jsx";
import Modal from "../Modal/modal.jsx";



export default function CarrosselMaisVendidos() {

    const [isOpenMo, setOpenMo] = useState(false)
    const [openModal, setOpenModal] = useState(null)
    const [select, setSelect] = useState(null)
    const [slidePerView, setSlidePerView] = useState(6)
    const produtos = [
        { id: '1', image: "/PEDRISCO.svg",title:"Pedrisco" },
            { id: '2', image: "/RACHAO.svg",title:"Rachão" },
            { id: '3', image: "/AREIA.svg" ,title:"Areia reciclada"},
            { id: '4', image: "/BRITA.svg" ,title:"Brita reciclada"},
            { id: '5', image: "/PEDRISCO.svg" ,title:"Pedrisco"},
            { id: '6', image: "/RACHAO.svg" ,title:"Rachão"},
            { id: '7', image: "/AREIA.svg" ,title:"Areia reciclada"},
            { id: '8', image: "/BRITA.svg" ,title:"Brita reciclada"},
            { id: '9', image: "/PEDRISCO.svg" ,title:"Pedrisco"},
            { id: '10', image: "/RACHAO.svg",title:"Rachão" },
        ];

        useEffect(() => {
            function handleResize(){
                if(window.innerWidth<410){
                    setSlidePerView(1)
                }else{
                    if(window.innerWidth<676){
                        setSlidePerView(2)
                    }else{
                        if(window.innerWidth<906){
                            setSlidePerView(3)
                        }else{
                            if(window.innerWidth<1135){
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
                <S.TTexto>Os mais vendidos</S.TTexto>
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
                                                <S.AlinhaCard>
                                                    <S.LinhaCard>
                                                        <S.TTitle>{item.title}</S.TTitle>
                                                        <S.PPalavra>AGR Ambiental</S.PPalavra>
                                                        <S.BBotao onClick={() => handleComprar(item.id)}>Comprar</S.BBotao>
                                                        
                                                    </S.LinhaCard>
                                                </S.AlinhaCard>
                                            </S.CCaixa>
                                        </S.AAbsoluto>
                                    </S.CContainer>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </S.Carrosel>
                </S.CContainer>

                {/* Modal Cards */}

                <ModalCards isOpen={openModal} setModalOpen= {() => setOpenModal(!openModal)}>
                    <S.Organizacao>
                        <S.CaixaFundo></S.CaixaFundo>
                    </S.Organizacao>
                        <S.ContainerModal>
                        <S.ContainerDivModal>
                            <S.Organizacao>
                                    <S.ContainerModal>
                                        <S.TituloProduto>Produto</S.TituloProduto>
                                        <Cards item = {produtos.find((p) => (p.id===select))}/>
                                        <S.Descricao>Quantidade mínima para solicitação de orçamento de 12 metros</S.Descricao>
                                    </S.ContainerModal>
                                    <S.DivInput>
                                            <S.TituloModal>Orçamento</S.TituloModal>
                                            <S.FUNDO>
                                                <InputPrimary text='Quantidade'/>
                                                <S.Th3>Informação para Entrega</S.Th3>
                                                <InputPrimary text='Cep'/>
                                                <InputPrimary text='Cidade'/>
                                                <InputPrimary text='Endereço'/>
                                                <InputPrimary text='Bairro'/>
                                                <InputPrimary text='Número'/>
                                                
                                                <S.Th3 className="transorte">Forma de transpote</S.Th3>
                                                <S.DivRadio>
                                                    <S.DivTransporte>
                                                        <input type="radio" value="Usuario"/>
                                                        <S.PP>Frete</S.PP>
                                                    </S.DivTransporte>
                                                    <S.DivTransporte>
                                                        <input type="radio" value="Empresa"/>
                                                       <S.PP>Transporte próprio</S.PP>
                                                    </S.DivTransporte>
                                                </S.DivRadio>
                                            </S.FUNDO>

                                            <ButtonMod  text="Envia" onClick={() => setOpenMo(!isOpenMo)}/>

                                        

                                                <Modal text="A empresa tem 5 dias úteis para retornar uma resposta. "
                                                    isOpenMo={isOpenMo}
                                                    setOpenMo={setOpenMo}> 

                                                    <ButtonMod 
                                                        onClick={handleFechar}
                                                        padding= 'secondary'
                                                        text= 'Entendi'/>
                                                </Modal>

                                        </S.DivInput>
                                </S.Organizacao>
                            </S.ContainerDivModal>
                            </S.ContainerModal>
                </ModalCards>
        </> 
    );
}