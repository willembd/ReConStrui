
    import { Alinhaborda, Alinhamento, Bordas, Botao, Caixa, Carrosel, Container, Im, Linha, Palavra, Texto, Title, Absoluto } from "./carrosselCardsStyle.js";
    import { ContainerModal,TituloModal,DivInput,DivRadio, Th3, PP, CaixaFundo,  FUNDO,TituloProduto,DivTransporte, Organizacao,Descricao, Left, ContainerBotton } from "../modalCards/modalCards.js";
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
    import Input from "../Input/input.jsx";
    import Modal from "../Modal/modal.jsx";

    import { api } from "../../service/api.js";
    import { useForm } from "react-hook-form";

    
    export default function CarrosselCards() {

        const {register, setValue, getValues, setFocus} = useForm();
        const checkCEP = (e) => {
            const cep = e.target.value.replace(/\D/g, '');
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
              .then(res => res.json())
              .then(data => {
                  console.log(data, "data");
                  setValue("endereco", data.logradouro);
                  setValue("bairro", data.bairro);
                  setValue("cidade", data.localidade);
                  setValue("uf", data.uf);
                  setFocus('numero');
              })
              .catch(e => {
                  console.error(e);
              })
      
          }

        const [isOpenMo, setOpenMo] = useState(false)
        const [openModal, setOpenModal] = useState(null)
        const [select, setSelect] = useState(null)
        const [slidePerView, setSlidePerView] = useState(6)
        const produtos = [
            { id: '1', image: "/PEDRISCO.svg",titleProduto:"Pedrisco",titleEmpresa:"Usina Ecocycle" },
            { id: '2', image: "/RACHAO.svg",titleProduto:"Rachão",titleEmpresa:"Ciclo Ambiental" },
            { id: '3', image: "/AREIA.svg" ,titleProduto:"Areia reciclada",titleEmpresa:"Magalhães Ambiental"},
            { id: '4', image: "/BRITA.svg" ,titleProduto:"Brita reciclada",titleEmpresa:"Cator Ambiental"},
            { id: '5', image: "/PEDRISCO.svg" ,titleProduto:"Pedrisco",titleEmpresa:"Martins Ambiental"},
            { id: '6', image: "/RACHAO.svg" ,titleProduto:"Rachão",titleEmpresa:"Usina Ecocycle"},
            { id: '7', image: "/AREIA.svg" ,titleProduto:"Areia reciclada",titleEmpresa:"Magalhães Ambiental"},
            { id: '8', image: "/BRITA.svg" ,titleProduto:"Brita reciclada",titleEmpresa:"Cator Ambiental"},
            { id: '9', image: "/PEDRISCO.svg" ,titleProduto:"Pedrisco",titleEmpresa:"Martins Ambiental"},
            { id: '10', image: "/RACHAO.svg",titleProduto:"Rachão",titleEmpresa:"Ciclo Ambiental" },
        ];

        useEffect(() => {
            function handleResize(){
                if(window.innerWidth<490){
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
                                                        <Title>{item.titleProduto}</Title>
                                                        <Palavra>{item.titleEmpresa}</Palavra>
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

                {/* Modal Cards */}

                <ModalCards isOpen={openModal} setModalOpen= {() => setOpenModal(!openModal)}>
                        <CaixaFundo></CaixaFundo>
                            <Organizacao>
                                    <ContainerModal>
                                        <TituloProduto>Produto</TituloProduto>
                                        <Left>
                                            <Cards item = {produtos.find((p) => (p.id===select))}/>
                                            <Descricao>Quantidade mínima para solicitação de orçamento de 12 metros</Descricao>
                                        </Left>
                                    </ContainerModal>
                                    <DivInput>
                                            <TituloModal>Orçamento</TituloModal>
                                            <FUNDO>
                                                <Input text='Quantidade'/>
                                                <Th3>Informação para Entrega</Th3>
                                                <Input text='Cep'/>
                                                <Input text='Cidade'/>
                                                <Input text='Endereço'/>
                                                <Input text='Bairro'/>
                                                <Input text='Número'/>
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
                                                <ContainerBotton>
                                                    <ButtonMod  text="Envia" onClick={() => setOpenMo(!isOpenMo)}/>
                                                </ContainerBotton>
                                            </FUNDO>

                        

                                                <Modal text="A empresa tem 5 dias úteis para retornar uma resposta. "
                                                      isOpenMo={isOpenMo}
                                                      setOpenMo={setOpenMo}> 

                                                       <ButtonMod 
                                                        onClick={handleFechar}
                                                         padding= 'secondary'
                                                         text= 'Entendi'/>
                                                </Modal>

                                  
                                        </DivInput>
                                </Organizacao>
                </ModalCards>
            </> 
        );
    }