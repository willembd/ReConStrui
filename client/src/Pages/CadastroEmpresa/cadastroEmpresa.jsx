import * as S from "./cadastroEmpresaStyle";
import NavBar from "../../Componentes/NavBar/navbar";
import Footer from "../../Componentes/Footer/footer";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { useState } from "react";
import InputPrimary from "../../Componentes/InputPrimary/inputPrimary";
import {useForm} from "react-hook-form"
import InputPrimaryAddress from "../../Componentes/InputPrimaryAddress/inputPrimaryAddress";
import ModalDetalhes from "../../Componentes/ModalDetalhes/modaldestalhes";



export default function CadastroEmpresa() {
    const [nome, setNome] = useState("");
    const [razao_social, setRazao_social] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [transporte, setTransporte] = useState([]);
    const [termo, setTermo] = useState(false);


    const navigate = useNavigate();
    const {register, setValue, getValues, setFocus} = useForm();



    const handleFechar = () => {
        navigate("/paginalogin");
    };

    const handleTransporteChange = (tipo) => {
        setTransporte((prev) =>
            prev.includes(tipo)
                ? prev.filter((item) => item !== tipo)
                : [...prev, tipo]
        );
    };

    async function handleCadastrarEmpresa() {
        console.log(getValues("endereco"))
        console.log(termo);

        if (termo === false) {
            alert("Por favor, confirme que leu e aceita os Termos e condições antes de prosseguir.");
        } else {
            await api
            .post("/empresa/create", {
                nome,
                razao_social,
                telefone,
                cnpj,
                cep: getValues("cep"),
                estado: getValues("uf"),
                cidade: getValues("cidade"),
                bairro: getValues("bairro"),
                endereco: getValues("endereco"),
                numero: getValues("numero"),
                email,
                senha,
                transporte,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                localStorage.removeItem("token")
                navigate("/paginalogin");
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
        }

        
    }



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
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <NavBar />

           
            <S.BigBox>
                <S.Caixa>
                    <S.Container>
                        <S.ButtonContainer>
                            <S.ButtonVoltar onClick={handleFechar}>
                                Voltar
                            </S.ButtonVoltar>
                        </S.ButtonContainer>

                        <S.TextoCadastro>Cadastrar Empresa</S.TextoCadastro>
                        <S.BigBox>
                            <S.BigBox>
                                <S.ContainerInputs>
                                    <S.QuebraLinha>
                                        <S.TTitulo>
                                            Informação da empresa
                                        </S.TTitulo>
                                        <S.Linha />
                                    </S.QuebraLinha>
                                    <S.InputFlex>
                                        
                                        <InputPrimary
                                            text="Nome"
                                            onChange={(e) =>
                                                setNome(e.target.value)
                                            }
                                        />

                                        <InputPrimary
                                            text="Razão social"
                                            onChange={(e) =>
                                                setRazao_social(e.target.value)
                                            }
                                        />
                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <InputPrimary
                                            text="Telefone"
                                            onChange={(e) =>
                                                setTelefone(e.target.value)
                                            }
                                        />
                                        <InputPrimary
                                            text="CNPJ"
                                            onChange={(e) =>
                                                setCnpj(e.target.value)
                                            }
                                        />
                                    </S.InputFlex>
                                </S.ContainerInputs>
                            </S.BigBox>

                            <S.BigBox>
                                <S.ContainerInputs>
                                    <S.QuebraLinha>
                                        <S.TTitulo>Endereço</S.TTitulo>
                                        <S.LinhaE />
                                    </S.QuebraLinha>
                                    <S.InputFlex>

                                        <InputPrimaryAddress>
                                            <label className="text" > CEP </label>
                                            <input {...register("cep")} onBlur={checkCEP} className="input" type="text" required />
                                        </InputPrimaryAddress>
                                         
                                        <InputPrimaryAddress>

                                            <label className="text" > Estado </label>
                                            <input {...register("uf")} className="input" type="text" required />
                                        
                                        </InputPrimaryAddress>
                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <InputPrimaryAddress>

                                            <label className="text" > Cidade </label>
                                            <input {...register("cidade")} className="input" type="text" required />

                                        </InputPrimaryAddress>
                                        
                                        <InputPrimaryAddress>

                                            <label className="text" > Bairro </label>
                                            <input {...register("bairro")} className="input" type="text" required />

                                        </InputPrimaryAddress>


                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <InputPrimaryAddress>

                                            <label className="text"> Endereço </label>
                                            <input {...register("endereco")} className="input" type="text" required />

                                        </InputPrimaryAddress>

                                        <InputPrimaryAddress>

                                           <label className="text"> Número </label>
                                           <input {...register("numero")} className="input" type="text" required />

                                        </InputPrimaryAddress>

                                       
                                    </S.InputFlex>
                                </S.ContainerInputs>
                            </S.BigBox>
                            <S.BigBox>
                                <S.ContainerInputs>
                                    <S.QuebraLinha>
                                        <S.TTitulo>Acesso</S.TTitulo>
                                        <S.LinhaE />
                                    </S.QuebraLinha>
                                    <S.InputFlex>
                                        <InputPrimary
                                            text="E-mail"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        <InputPrimary
                                            text="Senha"
                                            onChange={(e) =>
                                                setSenha(e.target.value)
                                            }
                                        />
                                    </S.InputFlex>
                                </S.ContainerInputs>
                            </S.BigBox>

                            <S.BigBox>
                                <S.ContainerInputs>
                                    <S.QuebraLinha>
                                        <S.TTitulo>Transporte</S.TTitulo>
                                    <S.LinhaE />
                                </S.QuebraLinha>
                                    <S.CheckboxTransporte>
                                        <S.CheckboxTransporte1>
                                            <input
                                                id="Entrega"
                                                type="checkbox"
                                                onChange={() =>
                                                    handleTransporteChange("Entrega")
                                                }
                                            />
                                            <label htmlFor="Entrega">Frete</label>
                                        </S.CheckboxTransporte1>
                                        <S.CheckboxTransporte1>
                                            <input
                                                id="Retirada"
                                                type="checkbox"
                                                onChange={() =>
                                                    handleTransporteChange("Retirada")
                                                }
                                            />
                                            <label htmlFor="Retirada">Retirada</label>
                                        </S.CheckboxTransporte1>
                                    </S.CheckboxTransporte>
                                </S.ContainerInputs>
                                        <S.CheckBoxTermo>
                                                <input onChange={() =>
                                                    setTermo(!termo)
                                                }
                                                type="checkbox" 
                                                    id="TermoDeUso" />

                                                    <label htmlFor="Termo"> Eu li e aceito os </label>
                                                    <a  href="#" onClick={() => setOpen(!isOpen)}> Termos e condições. </a>

                                        </S.CheckBoxTermo>
                                                <ModalDetalhes    
                                                    isOpen={isOpen}
                                                    setOpen={setOpen}> 
                                            
                                         <S.ContainerTermo>
                                             <S.TittleTermo>Termos e condições</S.TittleTermo> 

                                             <S.ContainerTextTermo>                                                                             
                                                  <S.FlexText>
                                                         <S.SubTittleTermo> Bem-vindo(a) à plataforma ReConStrui. </S.SubTittleTermo>
                                                    <S.TextTermo>

                                                               <S.TextP> Estes Termos de Uso regulam a inscrição, uso e participação das empresas interessadas em vender seus produtos na nossa plataforma. Ao se cadastrar, a empresa declara estar de acordo com todos os termos descritos abaixo.</S.TextP> 

                                                               <S.TextP>  1. Cadastro e Acesso 1.1. Para se cadastrar como fornecedor na ReConStrui, a empresa deve preencher o formulário de inscrição, fornecendo informações verídicas e atualizadas. 1.2. A ReConStrui se reserva o direito de verificar a autenticidade das informações fornecidas e, se necessário, solicitar documentos adicionais para validação do cadastro. 1.3. O acesso à plataforma é restrito às empresas aprovadas pela ReConStrui após análise do cadastro.</S.TextP>

                                                               <S.TextP> 2. Responsabilidades da Empresa 2.1. A empresa é responsável por manter as informações do seu perfil atualizadas e por garantir a veracidade dos dados informados. 2.2. A empresa deve seguir as normas legais aplicáveis, incluindo as relacionadas à comercialização de produtos reciclados e sustentáveis. 2.3. Os produtos oferecidos na plataforma devem ser apresentados com descrições claras, fotos reais e informações precisas sobre as condições e características.</S.TextP> 

                                                               <S.TextP> 3. Regras de Conduta 3.1. É proibida a comercialização de produtos ilegais, perigosos ou que infrinjam os direitos de terceiros. 3.2. A empresa não deve adotar práticas que possam prejudicar a experiência dos compradores ou a reputação da ReConStrui. 3.3. Qualquer tentativa de fraude, manipulação de avaliações ou condutas antiéticas resultará na exclusão imediata da empresa da plataforma.</S.TextP>  

                                                               <S.TextP> 4. Taxas e Pagamentos 4.1. A ReConStrui poderá cobrar taxas pela utilização da plataforma, que serão comunicadas previamente à empresa. 4.2. Os pagamentos pelos produtos vendidos serão processados conforme os termos estabelecidos no momento da venda.</S.TextP> 

                                                               <S.TextP> 5. Privacidade e Segurança 5.1. A ReConStrui adota medidas para proteger os dados pessoais e comerciais das empresas, em conformidade com a legislação vigente de proteção de dados. 5.2. As informações cadastradas serão utilizadas exclusivamente para os fins operacionais da plataforma.</S.TextP> 

                                                               <S.TextP> 6. Limitação de Responsabilidade 6.1. A ReConStrui não se responsabiliza por eventuais falhas na plataforma, interrupções de serviço ou problemas decorrentes de fatores externos. 6.2. A responsabilidade sobre a qualidade dos produtos e cumprimento das obrigações de venda é exclusiva da empresa.</S.TextP> 

                                                               <S.TextP> 7. Rescisão e Cancelamento 7.1. A ReConStrui se reserva o direito de suspender ou cancelar o acesso de qualquer empresa que viole estes Termos de Uso. 7.2. A empresa poderá solicitar o cancelamento do seu cadastro a qualquer momento, mediante aviso prévio.</S.TextP> 

                                                               <S.TextP> 8. Alterações nos Termos de Uso 8.1. A ReConStrui pode alterar estes Termos de Uso a qualquer momento, mediante aviso prévio às empresas cadastradas. 8.2. O uso continuado da plataforma após a notificação das alterações será considerado como aceitação dos novos termos.</S.TextP> 

                                                               <S.TextP> 9. Disposições Gerais 9.1. Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será resolvida no foro da comarca da sede da ReConStrui.</S.TextP> 
                                                    
                                                    </S.TextTermo>
                                                </S.FlexText>
                                         </S.ContainerTextTermo> 
                                         </S.ContainerTermo>
                                                 <S.ButtonTermo onClick={() => setOpen(false)}>Voltar</S.ButtonTermo>
                                    </ModalDetalhes>
                                            
                         
                            </S.BigBox>
                            
                            <S.Centralizar>
                                <S.Botao onClick={handleCadastrarEmpresa}>
                                    {" "}
                                    Cadastrar
                                </S.Botao>
                            </S.Centralizar>
                            <S.LinkCadastro>
                                <S.PP>
                                    Já tem cadastro? 
                                </S.PP>
                                <S.Link onClick={() => navigate("/paginalogin")}
                                href="">Entrar</S.Link>
                            </S.LinkCadastro>
                        </S.BigBox>
                    </S.Container>
                </S.Caixa>
            </S.BigBox>

            <Footer />
        </>
    );
}
