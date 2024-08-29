import styled from "styled-components";

import PlanoFundo from "../../assets/planodefundo.svg";


export const BigBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const Caixa = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 91.2rem;
    background-image: url(${PlanoFundo});
    background-repeat: no-repeat;
`;

export const Container = styled.div`
    width: 900px;
    height: 1400px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    position: relative;

    @media screen and (max-width: 500px) {
        width: 360px;
        height: 1800px;
        margin-bottom: 40px;
    }
`;

export const ButtonVoltar = styled.button`
    padding: 12px;
    background-color: #228137;
    color: white;
    text-align: center;
    border: none;
    cursor: pointer;
    border-radius: 0px 4px 4px 0px;
    position: absolute;
    top: 20px;
    left: 0;

   
`;

export const ButtonContainer = styled.div`
    width: 100%;
`;

export const TextoCadastro = styled.h1`
    color: #228137;
    margin-top: 10px;
    justify-content: center;
    display: flex;
    margin-bottom: 50px;
    font-weight: bold;
    font-size: 2.2rem;

    @media screen and (max-width: 500px) {
        font-size:20px;
    }
`;

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding-bottom: 40px;
`;

export const InputFlex = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 45px;

    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`;

export const TTitulo = styled.h2`
    font-size: 1.5rem;
    color: #af7503;

    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`;

export const Subtitulo = styled.div`
    font-size: 30px;
    color: #228137;
    text-align: center;
    margin-bottom: 25px;

    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
`;

export const ContainerCheckbox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;
    flex-direction: column;
    height: 100%;
    align-items: center;
    width: 68%;
`;

export const TextoCheckbox = styled.h3`
    color: #228137;
    margin-bottom: 10px;
    color: #228137;
`;

export const CheckboxMateriais = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    color: #228137;
    list-style-type: none;
    font-size: 20px;
    gap: 20px;

    @media screen and (max-width: 500px) {
        font-size: 8px;
    }
    
`;

export const Material = styled.div`
    display: flex;
    gap: 4px;
`;

export const CheckboxTransporte1 = styled.li`
    display: flex;
    align-items: center;
    color: #228137;
    font-size: 20px;
    gap: 6px;

    @media screen and (max-width: 500px) {
        line-height: 20px;
    }
`;

export const CheckboxTransporte = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    width: 80%;
    @media screen and (max-width: 500px) {
        gap: 0px;
    }
`;

export const LinkCadastro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
`;

export const CaixaFundo = styled.div`
    height: 1460px;
    width: 1300px;
    background: #33603d;
    clip-path: polygon(0% 0%, 100% 0%, 40% 100%, 0% 100%);
    position: absolute;

    @media screen and (max-width: 500px) {
        width: 350px;
        height: 1842px;
    }
`;

export const BarraVertical = styled.div`
    height: 1460px;
    width: 1300px;
    background: #b7821c;
    clip-path: polygon(100% 0%, 90% 0%, 40% 100%, 100% 0%);
    position: absolute;

    @media screen and (max-width: 500px) {
        width: 350px;
        height: 1842px;
    }
`;

export const BBarra = styled.div`
    height: 2px;
    width: 500px;
    background-color: black;
    margin-top: 8px;

    @media screen and (max-width: 500px) {
        width: 200px;
    }
`;

export const QuebraLinha = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    gap: 10px;
`;

export const Linha = styled.hr`
    color: black;
    width: 60%;
`;
export const LinhaE = styled.hr`
    color: black;
    width: 100%;
`;

export const BBarra2 = styled.div`
    height: 2px;
    width: 600px;
    background-color: black;
    margin-top: 8px;

    @media screen and (max-width: 500px) {
        width: 200px;
    }
`;
export const BBarra3 = styled.div`
    height: 2px;
    width: 710px;
    background-color: black;
    margin-top: 8px;

    @media screen and (max-width: 500px) {
        width: 200px;
    }
`;

export const BBarra4 = styled.div`
    height: 2px;
    width: 700px;
    background-color: black;
    margin-top: 8px;

    @media screen and (max-width: 500px) {
        width: 200px;
    }
`;

export const Botao = styled.div`
    padding: 12px;
    width: 346px;
    text-align: center;
    background-color: rgba(175, 117, 3, 0.9);
    color: #fff;
    border-radius: 4px;
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        padding: 12px;
        width: 130px;
        font-size: 13px;
    }
`;

export const PP = styled.p`
    font-size: 20px;
    color: #228137;
    display: flex;
    justify-content: center;
`;

export const Centralizar = styled.div`
    display: flex;
    justify-content: center;
`;
export const Link = styled.a`
    color: #b7821c;
    text-decoration: none;
    font-size: 20px;
`;

export const ButaoConta = styled.button`
    font-size: 20px;
    background: none;
    border: none;
    color: #7b7b7b;
    cursor: pointer;

    &:hover {
        color: red;
    }
`;
export const ImagemPerfil = styled.img`
    width: 150px;
    color: green;

    @media screen {
        (max-width:500px)display: flex;
        flex-direction: column;
        gap: 20px;
        width: 70px;
    }
`;
export const ParteSuperior = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    margin-left: 45px;

    @media screen and (max-width: 360px) {
        gap: 5px;
        margin-left: 20px;
        display:flex;
        flex-direction:column;

    }
`;
