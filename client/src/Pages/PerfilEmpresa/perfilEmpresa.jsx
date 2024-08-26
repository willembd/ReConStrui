import * as S from "./perfilEmpresaStyle";
import NavBar from "../../Componentes/NavBar/navbar";
import Footer from "../../Componentes/Footer/footer";
import { useNavigate } from "react-router-dom";
import InputPrimary from "../../Componentes/InputPrimary/inputPrimary";
import ImgPerfil from "../../assets/imagem perfil.svg";
import { useState } from "react";
import ModalCancelar from "../../Componentes/ModalCancelar/modalCancelar";


export default function PerfilEmpresa() {
    const navigate = useNavigate();

    const handleFechar = () => {
        navigate("/paginalogin");
    };

    const [isOpenTest, setOpenTest] = useState(false);

    return (
        <>
            <NavBar />

            <S.CaixaFundo></S.CaixaFundo>
            <S.BarraVertical />
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
                                        <InputPrimary text="Nome" />
                                        <InputPrimary text="Razão social" />
                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <InputPrimary text="Telefone" />
                                        <InputPrimary text="CNPJ" />
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
                                        <InputPrimary text="Cep" />
                                        <InputPrimary text="Estado" />
                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <InputPrimary text="Cidade" />
                                        <InputPrimary text="Bairro" />
                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <InputPrimary text="Endereço" />
                                        <InputPrimary text="Número" />
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
                                        <InputPrimary text="E-mail" />
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
                            textbutton="Excluir"
                            text="Certeza que deseja excluir conta?"
                            isOpenTest={isOpenTest}
                            setOpenTest={setOpenTest} />
                        </S.BigBox>
                    </S.Container>
                </S.Caixa>
            </S.BigBox>

            <Footer />
        </>
    );
}
