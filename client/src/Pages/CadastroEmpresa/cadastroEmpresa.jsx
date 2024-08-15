import * as S from "./cadastroEmpresaStyle";
import NavBar from "../../Componentes/NavBar/navbar";
import Footer from "../../Componentes/Footer/footer";
import Input from "../../Componentes/Input/input";
import { useNavigate } from "react-router-dom";
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo";

export default function CadastroEmpresa() {
    const navigation = useNavigate();

    const handleFechar = () => {
        navigation("/");
    };

    return (
        <>
            <NavBar />
            <S.CaixaFundo></S.CaixaFundo>
            <S.BarraVertical />
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
                                    <S.TTitulo>Informação da empresa</S.TTitulo>
                                    <S.InputFlex>
                                        <Input text='Nome'/>
                                        <Input text='Razão social'/>
                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <Input text='Telefone'/>
                                        <Input text='CNPJ'/>
                                    </S.InputFlex>
                                </S.ContainerInputs>
                                </S.BigBox>
                                <S.BigBox>
                                <S.ContainerInputs>
                                    <S.TTitulo>Endereço</S.TTitulo>
                                    <S.InputFlex>
                                        <Input text='Cep'/>
                                        <Input text='Estado'/>
                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <Input text='Cidade'/>
                                        <Input text='Bairro'/>
                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <Input text='Endereço'/>
                                        <Input text='Número'/>
                                    </S.InputFlex>
                                </S.ContainerInputs>
                                </S.BigBox>
                                <S.BigBox>
                                <S.ContainerInputs>
                                    <S.TTitulo>Acesso</S.TTitulo>
                                    <S.InputFlex>
                                        <Input text='Email'/>
                                        <Input text='Senha'/>
                                    </S.InputFlex>
                                </S.ContainerInputs>
                                </S.BigBox>
                                    <S.TTitulo>Matérias</S.TTitulo>
                                    <div>
                                        <S.CheckboxMateriais1>
                                            <li>
                                                <input id="Areia" type="checkbox" />
                                                <label htmlFor="Areia">
                                                    Areia Reciclada
                                                </label>
                                            </li>
                                            <li>
                                                <input id="Brita" type="checkbox" />
                                                <label htmlFor="Brita">
                                                    Brita Reciclada
                                                </label>
                                            </li>
                                        </S.CheckboxMateriais1>
                                        <S.CheckboxMateriais2>
                                            <li>
                                                <input
                                                    id="Pedrisco"
                                                    type="checkbox"
                                                />
                                                <label htmlFor="Pedrisco">
                                                    Pedrisco
                                                </label>
                                            </li>

                                            <li>
                                                <input
                                                    id="Rachao"
                                                    type="checkbox"
                                                />
                                                <label htmlFor="Rachao">
                                                    Rachão
                                                </label>
                                            </li>
                                        </S.CheckboxMateriais2>
                                    </div>
                                    <S.TTitulo>Transporte</S.TTitulo>
                                    <div>
                                        <S.CheckboxTransporte>
                                            <S.CheckboxTransporte1>
                                                <input
                                                    id="Entrega"
                                                    type="checkbox"
                                                />
                                                <label htmlFor="Entrega">
                                                    Entrega
                                                </label>
                                            </S.CheckboxTransporte1>
                                            <S.CheckboxTransporte2>
                                                <input
                                                    id="Retirada"
                                                    type="checkbox"
                                                />
                                                <label htmlFor="Retirada">
                                                    Retirada
                                                </label>
                                            </S.CheckboxTransporte2>
                                        </S.CheckboxTransporte>
                                    </div>
                                    <ButtonMod
                                        onClick={handleFechar}
                                        text="Cadastrar"
                                    >
                                        {" "}
                                        Cadastrar{" "}
                                    </ButtonMod>
                                    <S.LinkCadastro
                                        onClick={() =>
                                            navigation("/CadastroUsuario")
                                        }
                                        href=""
                                    >
                                        <p>Não tem cadastro? <span>Entrar</span></p>
                                    </S.LinkCadastro>
                            </S.BigBox>
                    </S.Container>
                </S.Caixa>
            </S.BigBox>
            <Footer />
        </>
    );
}
