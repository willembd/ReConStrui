import * as S from "./cadastroEmpresaStyle";
import NavBar from "../../Componentes/NavBar/navbar";
import Footer from "../../Componentes/Footer/footer";
import Input from "../../Componentes/Input/input";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { useState } from "react";

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
        await api.post('/empresa/create', {
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
            transporte
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
                                            <Input 
                                                text='Nome'  
                                                onChange={(e) => setNome(e.target.value)}
                                            />
                                            <Input 
                                                text='Razão social'
                                                onChange={(e) => setRazao_social(e.target.value)}
                                            />
                                        </S.InputFlex>
                                        <S.InputFlex>
                                            <Input 
                                                text='Telefone'
                                                onChange={(e) => setTelefone(e.target.value)}
                                            />
                                            <Input 
                                                text='CNPJ'
                                                onChange={(e) => setCnpj(e.target.value)}
                                            />
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
                                            <Input
                                                text='Cep'
                                                onChange={(e) => setCep(e.target.value)}
                                            />
                                            <Input 
                                                text='Estado'
                                                onChange={(e) => setEstado(e.target.value)}
                                            />
                                        </S.InputFlex>
                                        <S.InputFlex>
                                            <Input 
                                                text='Cidade'
                                                onChange={(e) => setCidade(e.target.value)}
                                            />
                                            <Input 
                                                text='Bairro'
                                                onChange={(e) => setBairro(e.target.value)}
                                            />
                                        </S.InputFlex>
                                        <S.InputFlex>
                                            <Input 
                                                text='Endereço'
                                                onChange={(e) => setEndereco(e.target.value)}
                                            />
                                            <Input 
                                                text='Número'
                                                onChange={(e) => setNumero(e.target.value)}
                                            />
                                        </S.InputFlex>
                                    </S.ContainerInputs>
                                </S.BigBox>
                                <S.BigBox>
                                    <S.ContainerInputs>
                                        <S.QuebraLinha>
                                            <S.TTitulo>Acesso</S.TTitulo>
                                            <S.BBarra3 />
                                        </S.QuebraLinha>
                                        <S.InputFlex>
                                            <Input 
                                                text='E-mail'
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <Input 
                                                text='Senha'
                                                onChange={(e) => setSenha(e.target.value)}
                                            />
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
                                                onChange={() => handleTransporteChange('Entrega')}
                                            />
                                            <label htmlFor="Entrega">
                                                Frete
                                            </label>
                                        </S.CheckboxTransporte1>
                                        <S.CheckboxTransporte2>
                                            <input
                                                id="Retirada"
                                                type="checkbox"
                                                onChange={() => handleTransporteChange('Retirada')}
                                            />
                                            <label htmlFor="Retirada">
                                                Retirada
                                            </label>
                                        </S.CheckboxTransporte2>
                                    </S.CheckboxTransporte>
                                </div>
                                <S.Centralizar>
                                    <S.Botao onClick={handleCadastrarEmpresa}> Cadastrar</S.Botao>
                                </S.Centralizar>
                                <S.LinkCadastro
                                    onClick={() => navigate("/CadastroUsuario")}
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