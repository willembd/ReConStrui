import * as S from "./cadastroEmpresaStyle";
import NavBar from "../../Componentes/NavBar/navbar";
import Footer from "../../Componentes/Footer/footer";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { useState } from "react";
import InputPrimary from "../../Componentes/InputPrimary/inputPrimary";


export default function CadastroEmpresa() {
    const [nome, setNome] = useState("");
    const [razao_social, setRazao_social] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [cep, setCep] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [transporte, setTransporte] = useState([]);

    const navigate = useNavigate();

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
        await api
            .post("/empresa/create", {
                nome,
                razao_social,
                telefone,
                cnpj,
                cep,
                estado,
                cidade,
                bairro,
                endereco,
                numero,
                email,
                senha,
                transporte,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    }

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
                                        <InputPrimary
                                            text="Cep"
                                            onChange={(e) =>
                                                setCep(e.target.value)
                                            }
                                        />
                                        <InputPrimary
                                            text="Estado"
                                            onChange={(e) =>
                                                setEstado(e.target.value)
                                            }
                                        />
                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <InputPrimary
                                            text="Cidade"
                                            onChange={(e) =>
                                                setCidade(e.target.value)
                                            }
                                        />
                                        <InputPrimary
                                            text="Bairro"
                                            onChange={(e) =>
                                                setBairro(e.target.value)
                                            }
                                        />
                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <InputPrimary
                                            text="Endereço"
                                            onChange={(e) =>
                                                setEndereco(e.target.value)
                                            }
                                        />
                                        <InputPrimary
                                            text="Número"
                                            onChange={(e) =>
                                                setNumero(e.target.value)
                                            }
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
                                            <input id="Pedrisco" type="checkbox" />
                                            <label htmlFor="Pedrisco">Pedrisco</label>
                                        </S.Material>
                                        <S.Material>
                                            <input id="Rachao" type="checkbox" />
                                            <label htmlFor="Rachao">Rachão</label>
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
