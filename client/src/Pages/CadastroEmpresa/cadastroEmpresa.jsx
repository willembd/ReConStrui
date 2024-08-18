import * as S from "./cadastroEmpresaStyle";
import NavBar from "../../Componentes/NavBar/navbar";
import Footer from "../../Componentes/Footer/footer";
import Input from "../../Componentes/Input/input";
import { useNavigate } from "react-router-dom";

export default function CadastroEmpresa() {
    const navigation = useNavigate();

    const handleFechar = () => {
        navigation("/");
    };

    return (
        <>
            <NavBar />
            <S.Response>
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
                                    <S.QuebraLinha>
                                        <S.TTitulo>Informação da empresa</S.TTitulo>
                                        <S.BBarra/>
                                    </S.QuebraLinha>
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
                                    <S.QuebraLinha>
                                        <S.TTitulo>Endereço</S.TTitulo>
                                        <S.BBarra2/>
                                    </S.QuebraLinha>
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
                                    <S.QuebraLinha>
                                        <S.TTitulo>Acesso</S.TTitulo>
                                        <S.BBarra3  />
                                    </S.QuebraLinha>
                                        <S.InputFlex>
                                            <Input text='Email'/>
                                            <Input text='Senha'/>
                                        </S.InputFlex>
                                    </S.ContainerInputs>
                                    </S.BigBox>
                                    <S.QuebraLinha>
                                        <S.TTitulo>Matérias</S.TTitulo>
                                        <S.BBarra4/>
                                    </S.QuebraLinha>
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
                                    <S.QuebraLinha>
                                        <S.TTitulo>Transporte</S.TTitulo>
                                        <S.BBarra2/>
                                    </S.QuebraLinha>
                                <div>
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
                                    <S.Centralizar>
                                        <S.Botao
                                            onClick={handleFechar}
                                        >
                                            {" "}
                                            Cadastrar{" "}
                                        </S.Botao>
                                    </S.Centralizar>
                                        <S.LinkCadastro
                                            onClick={() =>
                                                navigation("/CadastroUsuario")
                                            }
                                            href=""
                                        >
                                            <S.PP>Não tem cadastro? <S.Cor>Entrar</S.Cor></S.PP>
                                        </S.LinkCadastro>
                                </S.BigBox>
                        </S.Container>
                    </S.Caixa>
                </S.BigBox>
            </S.Response>
            <Footer />
        </>
    );
}
