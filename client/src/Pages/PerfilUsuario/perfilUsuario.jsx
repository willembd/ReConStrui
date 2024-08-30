import * as S from "./perfilUsuarioStyle";
import ImgPerfil from "../../assets/imgperfil.svg";
import Footer from "../../Componentes/Footer/footer";
import NavBar from "../../Componentes/NavBar/navbar";
import InputPrimary from "../../Componentes/InputPrimary/inputPrimary";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { jwtDecode } from "jwt-decode";
import ModalCancelar from "../../Componentes/ModalCancelar/modalCancelar";
import { useNavigate } from "react-router-dom";

export default function PerfilUsuario() {
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState({});
    const [nome, setNome] = useState("");
    const [data_nascimento, setData_nascimento] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");

    const navigastion = useNavigate()


    useEffect(() => {
        const fetchUserId = async () => {
            const token = localStorage.getItem("token");

            if (token) {
                try {
                    const decodedToken = jwtDecode(token);
                    const id = decodedToken.id;
                    setUserId(id);
                } catch (error) {
                    console.error("Erro ao decodificar o token:", error);
                }
            } else {
                console.log("No token found");
            }
        };

        fetchUserId();
    }, []);

    useEffect(() => {
        if (userId) {
            const fetchUserData = async () => {
                try {
                    const response = await api.get(`/usuario/${userId}`);
                    setUser(response.data.usuario);
         
                } catch (error) {
                    console.error("Erro ao buscar usuário:", error);
                }
            };

            setTimeout(() => {
                fetchUserData();
            }, 2000);
        }
    }, [userId]);

    
    useEffect(() => {
        if (user && user.nome) {
          setNome(user.nome);
        }
        if(user && user.data_nascimento){
            setData_nascimento(user.data_nascimento)
        }
        if(user && user.cpf){
            setCpf(user.cpf)
        }
        if(user && user.email){
            setEmail(user.email)
        }
      }, [user]);

      const [isOpenTest, setOpenTest] = useState(false);

    async function handleDelete(){
        await api.delete(`/usuario/${userId}`).then((response) => {
            console.log('Usuario deletado com sucesso')
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
            <S.Container>
                <S.Caixa>
                    <S.ContainerPrimaty>
                        <S.ImgPerfil src={ImgPerfil} alt="" />
                        <S.TituloNome>{user.nome}</S.TituloNome>
                    </S.ContainerPrimaty>
                    <S.ContainerSecondary>
                        <S.TituloEditar>Editar Dados</S.TituloEditar>
                        <S.ContainerInput>
                            <InputPrimary
                                text="Nome Completo"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                            <InputPrimary
                                text="Data de Nascimento"
                                type="date"
                                value={data_nascimento}
                                onChange={(e) => setData_nascimento(e.target.value)}
                            />
                            <InputPrimary 
                                text="CPF" 
                                type="number"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                            <InputPrimary 
                                text="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                        </S.ContainerInput>
                        <ButtonMod text="Salvar" />

                        <S.ContainerButton>
                            <S.ButtonExcluir  onClick={() => setOpenTest(!isOpenTest)}>Excluir Conta </S.ButtonExcluir>
                            <ModalCancelar 
                            actionTransition={true}
                            textbutton="Excluir"
                            text="Certeza que deseja excluir sua conta?"
                            isOpenTest={isOpenTest}
                            setOpenTest={setOpenTest} 
                            onConfirm={handleDelete}
                            />
                        </S.ContainerButton>
                    </S.ContainerSecondary>
                </S.Caixa>
            </S.Container>
            <Footer />
        </>
    );
}
