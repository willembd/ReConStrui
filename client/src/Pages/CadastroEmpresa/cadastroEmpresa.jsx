import * as S from "./cadastroEmpresaStyle";
import NavBar from "../../Componentes/NavBar/navbar";
import Footer from "../../Componentes/Footer/footer";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { useState } from "react";
import InputPrimary from "../../Componentes/InputPrimary/inputPrimary";
import {useForm} from "react-hook-form"
import InputPrimaryAddress from "../../Componentes/InputPrimaryAddress/inputPrimaryAddress";


export default function CadastroEmpresa() {
    const [nome, setNome] = useState("");
    const [razao_social, setRazao_social] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [transporte, setTransporte] = useState([]);

    const navigate = useNavigate();
    const {register, setValue, getValues, setFocus} = useForm();

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
        console.log(getValues("endereco"))

        await api
            .post("/empresa/create", {
                nome,
                razao_social,
                telefone,
                cnpj,
                cep: getValues("cep"),
                estado: getValues("uf"),
                cidade: getValues("cidade"),
                bairro: getValues("bairro"),
                endereco: getValues("endereco"),
                numero: getValues("numero"),
                email,
                senha,
                transporte,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                localStorage.removeItem("token")
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    }



    const checkCEP = (e) => {
      const cep = e.target.value.replace(/\D/g, '');
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
            console.log(data, "data");
            setValue("endereco", data.logradouro);
            setValue("bairro", data.bairro);
            setValue("cidade", data.localidade);
            setValue("uf", data.uf);
            setFocus('numero');
        })
        .catch(e => {
            console.error(e);
        })

    }

    return (
        <>
            <NavBar />

           
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

                                        <InputPrimaryAddress>
                                            <label className="text" > CEP </label>
                                            <input {...register("cep")} onBlur={checkCEP} className="input" type="text" required />
                                        </InputPrimaryAddress>
                                         
                                        <InputPrimaryAddress>

                                            <label className="text" > Estado </label>
                                            <input {...register("uf")} className="input" type="text" required />
                                        
                                        </InputPrimaryAddress>
                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <InputPrimaryAddress>

                                            <label className="text" > Cidade </label>
                                            <input {...register("cidade")} className="input" type="text" required />

                                        </InputPrimaryAddress>
                                        
                                        <InputPrimaryAddress>

                                            <label className="text" > Bairro </label>
                                            <input {...register("bairro")} className="input" type="text" required />

                                        </InputPrimaryAddress>


                                    </S.InputFlex>
                                    <S.InputFlex>
                                        <InputPrimaryAddress>

                                            <label className="text"> Endereço </label>
                                            <input {...register("endereco")} className="input" type="text" required />

                                        </InputPrimaryAddress>

                                        <InputPrimaryAddress>

                                           <label className="text"> Número </label>
                                           <input {...register("numero")} className="input" type="text" required />

                                        </InputPrimaryAddress>

                                       
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
