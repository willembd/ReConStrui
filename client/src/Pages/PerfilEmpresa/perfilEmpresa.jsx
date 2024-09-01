import * as S from "./perfilEmpresaStyle";
import NavBar from "../../Componentes/NavBar/navbar";
import Footer from "../../Componentes/Footer/footer";
import { useNavigate } from "react-router-dom";
import InputPrimary from "../../Componentes/InputPrimary/inputPrimary";
import ImgPerfil from "../../assets/imagem perfil.svg";
import { useEffect, useState } from "react";
import ModalCancelar from "../../Componentes/ModalCancelar/modalCancelar";
import { api } from "../../service/api";
import { jwtDecode } from "jwt-decode";



export default function PerfilEmpresa() {
    const [empresaId, setEmpresaId] = useState();
    const [empresa, setEmpresa] = useState({});
    const [nome, setNome] = useState("");
    const [razao_social, setRazao_social] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [transporte, setTransporte] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmpresaId = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const decodedToken = jwtDecode(token);
                    const id = decodedToken.id;

                    setEmpresaId(id);
                } catch (error) {
                    console.error("Erro ao decodificar o token:", error);
                }
            } else {
                console.log("No token found");
            }
        };

        fetchEmpresaId();
    }, []);


    useEffect(() => {
        if (empresaId) {
            const fetchEmpresaData = async () => {
                console.log(empresaId)
                try {
                    const response = await api.get(`/empresa/${empresaId}`);
                    setEmpresa(response.data.empresa);
         
                } catch (error) {
                    console.error("Erro ao buscar usuário:", error);
                }
            };

            setTimeout(() => {
                fetchEmpresaData();
            }, 2000);
        }
    }, [empresaId]);


    useEffect(() => {
        if (empresa && empresa.nome) {
          setNome(empresa.nome);
        }
        if(empresa && empresa.razao_social){
            setRazao_social(empresa.razao_social)
        }
        if(empresa && empresa.telefone){
            setTelefone(empresa.telefone)
        }
        if(empresa && empresa.cnpj){
            setCnpj(empresa.cnpj)
        }
        if(empresa && empresa.email){
            setEmail(empresa.email)
        }
        if(empresa && empresa.transporte){
            setTransporte(empresa.transporte)
        }
      }, [empresa]);



    const handleFechar = () => {
        navigate("/paginalogin");
    };

    const [isOpenTest, setOpenTest] = useState(false);

    async function handleDelete(){

        await api.delete(`/empresa/${empresaId}`).then((response) => {
            console.log('Empresa deletado com sucesso')
            setOpenTest(!isOpenTest)
            localStorage.removeItem("token")
            navigastion("/")
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <>
            <NavBar />

            
            <S.BigBox>
                <S.Caixa>
                    <S.Container>
                        <S.ButtonContainer>
                            <S.ButtonVoltar onClick={() => handleFechar()}>
                                Voltar
                            </S.ButtonVoltar>
                        </S.ButtonContainer>
                        <S.ParteSuperior>
                            <S.ImagemPerfil src={ImgPerfil} alt="" />
                            <S.TextoCadastro>
                                Perfil Empresa AGR Ambiental
                            </S.TextoCadastro>
                        </S.ParteSuperior>

                        <S.BigBox>
                            <S.Subtitulo>Editar Informações</S.Subtitulo>

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
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        />
                                        <InputPrimary 
                                        text="Razão social" 
                                        value={razao_social}
                                        onChange={(e) => setRazao_social(e.target.value)}
                                        />
                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <InputPrimary 
                                        text="Telefone" 
                                        value={telefone}
                                        onChange={(e) => setTelefone(e.target.value)}
                                        />
                                        <InputPrimary 
                                        text="CNPJ"
                                        value={cnpj}
                                        onChange={(e) => setCnpj(e.target.value)}
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
                                        <InputPrimary 
                                        text="Cep" 
                                       
                                        />
                                        <InputPrimary 
                                        text="Estado"

                                        />
                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <InputPrimary 
                                        text="Cidade" 

                                        />
                                        <InputPrimary 
                                        text="Bairro" 

                                        />
                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <InputPrimary 
                                        text="Endereço" 

                                        />
                                        <InputPrimary 
                                        text="Número"

                                         />
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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                         />
                                        <InputPrimary text="Senha" />
                                    </S.InputFlex>
                                </S.ContainerInputs>
                            </S.BigBox>

                            <S.BigBox>
                                <S.ContainerInputs>
                                    <S.QuebraLinha>
                                        <S.TTitulo>Matérias</S.TTitulo>
                                        <S.LinhaE />
                                    </S.QuebraLinha>

                                    <S.CheckboxMateriais>
                                        <S.Material>
                                            <input id="Areia" type="checkbox" />
                                            <label htmlFor="Areia">
                                                Areia Reciclada
                                            </label>
                                        </S.Material>

                                        <S.Material>
                                            <input id="Brita" type="checkbox" />
                                            <label htmlFor="Brita">
                                                Brita Reciclada
                                            </label>
                                        </S.Material>
                                        <S.Material>
                                            <input
                                                id="Pedrisco"
                                                type="checkbox"
                                            />
                                            <label htmlFor="Pedrisco">
                                                Pedrisco
                                            </label>
                                        </S.Material>
                                        <S.Material>
                                            <input
                                                id="Rachao"
                                                type="checkbox"
                                            />
                                            <label htmlFor="Rachao">
                                                Rachão
                                            </label>
                                        </S.Material>
                                    </S.CheckboxMateriais>
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
                                            />
                                            <label htmlFor="Entrega">
                                                Frete
                                            </label>
                                        </S.CheckboxTransporte1>
                                        <S.CheckboxTransporte1>
                                            <input
                                                id="Retirada"
                                                type="checkbox"
                                            />
                                            <label htmlFor="Retirada">
                                                Retirada
                                            </label>
                                        </S.CheckboxTransporte1>
                                    </S.CheckboxTransporte>
                                </S.ContainerInputs>
                            </S.BigBox>

                            <S.Centralizar>
                                <S.Botao>Salvar Alteração</S.Botao>
                            </S.Centralizar>

                            <S.ButaoConta  onClick={() => setOpenTest(!isOpenTest)}>Excluir Conta</S.ButaoConta>
                            <ModalCancelar 
                            actionTransition={true}
                            textbutton="Excluir"
                            text="Certeza que deseja excluir conta?"
                            isOpenTest={isOpenTest}
                            setOpenTest={setOpenTest} 
                            onConfirm={handleDelete}
                            />
                        </S.BigBox>
                    </S.Container>
                </S.Caixa>
            </S.BigBox>

            <Footer />
        </>
    );
}
