import React, { useState } from "react";
import * as S from "./cadastroUsuarioStyle.js";
import Imagempadrao from "../../assets/imagem-padrao1.svg";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/navbar.jsx";
import Footer from "../../Componentes/Footer/footer.jsx";
import { api } from "../../service/api.js";
import InputPrimary from "../../Componentes/InputPrimary/inputPrimary.jsx";
import ModalDetalhes from "../../Componentes/ModalDetalhes/modaldestalhes.jsx";



export default function CadastroUsuario() {
    const [nome, setNome] = useState("");
    const [data_nascimento, setData_nascimento] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    const handleFechar = () => {
        navigate("/paginalogin");
    };

    async function handleCadastrarUser(e) {
        await api.post('/usuario/create', {
                nome,
                data_nascimento,
                cpf,
                email,
                senha
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                navigate("/paginalogin");
                localStorage.removeItem("token")
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    }
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <NavBar />
           
            <S.ButtonContainer>
                <S.Button onClick={handleFechar}>Voltar</S.Button>
            </S.ButtonContainer>
            <S.Caixa>
                <S.Modal>
                    <S.ModalContainer>
                        <S.Imagem>
                            <S.Logo src={Imagempadrao} alt="" />
                        </S.Imagem>

                        <S.FormLogin>
                            <S.Titulo>Cadastro Usuário</S.Titulo>
                            <S.DivInput>
                                <InputPrimary
                                    text="Nome Completo"
                                    onChange={(e) => setNome(e.target.value)}
                                />
                                <InputPrimary
                                    text="Data de Nascimento"
                                    type="date"
                                    onChange={(e) =>
                                        setData_nascimento(e.target.value)
                                    }
                                />
                                <InputPrimary
                                    text="CPF"
                                    type="number"
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                                <InputPrimary
                                    text="E-mail"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <InputPrimary
                                    text="Senha"
                                    type="password"
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </S.DivInput>

                            <S.CheckBoxTermo>
                                       <input 
                                       type="checkbox" 
                                        id="TermoDeUso" />

                                        <label htmlFor="Termo"> Eu li e aceito os </label>

                                        <a  href="#" onClick={() => setOpen(!isOpen)}> Termos e condições.</a>
                             </S.CheckBoxTermo>

                            <ButtonMod
                                text="Cadastrar"
                                onClick={() => handleCadastrarUser()}>

                             </ButtonMod>

                             <ModalDetalhes    
                                 isOpen={isOpen}
                                  setOpen={setOpen}> 
                                  
                                  <S.ContainerTermo>
                                             <S.TittleTermo>Termos e condições</S.TittleTermo> 

                                             <S.ContainerTextTermo>                                                                             
                                                  <S.FlexText>
                                                         <S.SubTittleTermo> Bem-vindo(a) à plataforma ReConStrui. </S.SubTittleTermo>
                                                    <S.TextTermo>

                                                             

                                                               <S.TextP> 1. Aceitação dos Termos
                                                               Ao se cadastrar na ReConStrui, você concorda com os Termos e Condições de Uso descritos abaixo. Se não concordar com alguma parte dos termos, por favor, não conclua seu cadastro.</S.TextP>

                                                               <S.TextP> 2. Cadastro de Usuário
                                                                         2.1. Para utilizar nossos serviços, é necessário completar o processo de cadastro fornecendo informações verdadeiras e atualizadas.
                                                                         2.2. A ReConStrui se reserva o direito de verificar a veracidade das informações e solicitar documentação adicional, caso necessário.</S.TextP> 

                                                              <S.TextP> 3. Privacidade e Proteção de Dados
                                                                         3.1. As informações coletadas durante o cadastro serão usadas para fins de gerenciamento de contas e para melhorar os serviços da ReConStrui.
                                                                         3.2. Seus dados estão protegidos de acordo com a legislação vigente de proteção de dados e não serão compartilhados com terceiros sem seu consentimento, exceto em casos previstos em lei.</S.TextP>  

                                                              <S.TextP> 4.2. O usuário compromete-se a não usar a plataforma para fins ilegais ou para violar direitos de terceiros.</S.TextP> 

                                                              <S.TextP> 5. Conduta Proibida
                                                                        5.1. É proibido publicar conteúdos ofensivos, discriminatórios, ou que infrinjam os direitos de outras pessoas.
                                                                        5.2. Qualquer uso indevido da plataforma pode resultar na suspensão ou cancelamento da conta.</S.TextP> 

                                                              <S.TextP> 6. Limitação de Responsabilidade
                                                                        6.1. A ReConStrui não se responsabiliza por danos causados por falhas no sistema, interrupções de serviço, ou pela utilização indevida da plataforma por outros usuários.
                                                                        6.2. O usuário é responsável pela segurança de sua conta e pela confidencialidade de sua senha.</S.TextP> 

                                                              <S.TextP> 7. Alterações nos Termos de Uso
                                                                        7.1. A ReConStrui pode alterar estes Termos e Condições de Uso a qualquer momento, com aviso prévio aos usuários.
                                                                        7.2. O uso continuado da plataforma após a notificação das alterações será considerado como aceitação dos novos termos.</S.TextP> 

                                                              <S.TextP> 8. Cancelamento e Encerramento de Conta
                                                                        8.1. O usuário pode solicitar o cancelamento de sua conta a qualquer momento.
                                                                        8.2. A ReConStrui se reserva o direito de encerrar contas que violem estes termos.</S.TextP> 

                                                              <S.TextP> 9. Disposições Gerais
                                                                        9.1. Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será resolvida no foro da comarca da sede da ReConStrui.</S.TextP> 
                                                    
                                                    </S.TextTermo>
                                                </S.FlexText>
                                         </S.ContainerTextTermo> 
                                               
                                         </S.ContainerTermo>
                                                 <S.ButtonTermo onClick={() => setOpen(false)}>Voltar</S.ButtonTermo>
                              </ModalDetalhes>

                            <S.DivLink>
                                <S.Links href="/cadastroempresa">
                                    Cadastrar Empresa
                                </S.Links>
                            </S.DivLink>
                        </S.FormLogin>
                    </S.ModalContainer>
                </S.Modal>
            </S.Caixa>
           
            <Footer />
        </>
    );
}
