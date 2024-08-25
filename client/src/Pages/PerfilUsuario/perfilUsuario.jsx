import * as S from "./perfilUsuarioStyle";
import ImgPerfil from "../../assets/imgperfil.svg";
import Footer from "../../Componentes/Footer/footer";
import NavBar from "../../Componentes/NavBar/navbar";
import InputPrimary from "../../Componentes/InputPrimary/inputPrimary";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { jwtDecode } from "jwt-decode";

export default function PerfilUsuario() {
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState({});
    const [nome, setNome] = useState("");
    const [data_nascimento, setData_nascimento] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");


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
                            <S.ButtonExcluir>Excluir Conta</S.ButtonExcluir>
                        </S.ContainerButton>
                    </S.ContainerSecondary>
                </S.Caixa>
            </S.Container>
            <Footer />
        </>
    );
}
