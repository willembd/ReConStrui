import * as S from "./CardStyle.js"
import { ContainerModal,ContainerDivModal,TituloModal,DivInput,DivRadio, QuebraLinha, Th3, PP,Organizacao,CaixaFundo,TituloProduto,Descricao,FUNDO,DivTransporte } from "./modalCards2/modalCards2Style.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import Cards from "../cards/cards.jsx"
import "../cards/cards.css"
import InputPrimary from "../InputPrimary/inputPrimary.jsx";
import ModalCards from "../modalCards/modalCards.jsx";
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
        
   

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, ' ');
        console.log(cep);
       

    }

    return (
       <>
       <S.Alinhaborda>
                <S.TTexto>Recomendações para você</S.TTexto>
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
                    <Organizacao>
                        <CaixaFundo></CaixaFundo>
                    </Organizacao>
                        <ContainerModal>
                        <ContainerDivModal>
                            <Organizacao>
                                    <ContainerModal>
                                        <TituloProduto>Produto</TituloProduto>
                                        <Cards item = {produtos.find((p) => (p.id===select))}/>
                                        <Descricao>Quantidade mínima para solicitação de orçamento: 12 metros</Descricao>
                                    </ContainerModal>
                                    <DivInput>
                                            <TituloModal>Orçamento</TituloModal>
                                            <FUNDO>
                                                <InputPrimary text='Quantidade'/>
                                                <Th3>Informação para Entrega</Th3>
                                                <InputPrimary text='Cep' onBlur={checkCEP}/>
                                                <InputPrimary text='Cidade'/>
                                                <InputPrimary text='Endereço'/>
                                                <InputPrimary text='Bairro'/>
                                                <InputPrimary text='Número'/>
                                                
                                                <QuebraLinha>
                                                    
                                                </QuebraLinha>
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