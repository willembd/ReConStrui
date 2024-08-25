import * as S from "./perfilUsuarioStyle";
import ImgPerfil from "../../assets/imgperfil.svg";
import Footer from "../../Componentes/Footer/footer";
import NavBar from "../../Componentes/NavBar/navbar";
import InputPrimary from "../../Componentes/InputPrimary/inputPrimary";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo";
import { useEffect } from "react";
import { api } from "../../service/api";
import { jwtDecode } from "jwt-decode";


export default function PerfilUsuario() {
    const token = localStorage.getItem('token')

    if (token) {
        const decodedToken = jwtDecode(token);
      
        const userId = decodedToken.id; 
      
        console.log('User ID:', userId);
      } else {
        console.log('No token found');
      }

    /*useEffect(() => {
        setTimeout(() => {
            api.get('')
        }, 2000)
    }, [])*/

    return (
        <>
            <NavBar />
            <S.Container>
                <S.Caixa>
                    <S.ContainerPrimaty>
                        <S.ImgPerfil src={ImgPerfil} alt="" />
                        <S.TituloNome>Maria Eduarda da Silva</S.TituloNome>
                    </S.ContainerPrimaty>
                    <S.ContainerSecondary>
                        <S.TituloEditar>Editar Dados</S.TituloEditar>
                        <S.ContainerInput>
                            <InputPrimary text="Nome Completo" />
                            <InputPrimary text="Data de Nascimento" type="date"/>
                            <InputPrimary text="CPF" type="number"/>
                            <InputPrimary text="E-mail" />
                            <InputPrimary text="Senha" type="password"/>
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
