import * as S from "./perfilUsuarioStyle";
import ImgPerfil from "../../assets/imgperfil.svg";
import Footer from "../../Componentes/Footer/footer";
import NavBar from "../../Componentes/NavBar/navbar";
import InputPrimary from "../../Componentes/InputPrimary/inputPrimary";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo";

export default function PerfilUsuario() {
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
                            <InputPrimary text="Data de Nascimento" />
                            <InputPrimary text="CPF" />
                            <InputPrimary text="E-mail" />
                            <InputPrimary text="Senha" />
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
