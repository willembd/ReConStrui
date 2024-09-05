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
    width: 56.25rem;
    height: 87.5rem;
    background-color: white;
    padding: 1.25rem;
    border-radius: 0.625rem;
    box-shadow: 0 0 0.9375rem rgba(0, 0, 0, 0.1);
    position: relative;

    @media screen and (max-width: 31.25rem) {
        width: 22.5rem;
        height: 112.5rem;
        margin-bottom: 2.5rem;
    }
`;

export const ButtonVoltar = styled.button`
    padding: 0.75rem;
    background-color: #228137;
    color: white;
    text-align: center;
    border: none;
    cursor: pointer;
    border-radius: 0 0.25rem 0.25rem 0;
    position: absolute;
    top: 1.25rem;
    left: 0;
`;

export const ButtonContainer = styled.div`
    width: 100%;
`;

export const TextoCadastro = styled.h1`
    color: #228137;
    margin-top: 0.625rem;
    justify-content: center;
    display: flex;
    margin-bottom: 3.125rem;
    font-weight: bold;
    font-size: 2.2rem;

    @media screen and (max-width: 31.25rem) {
        font-size: 1.25rem;
    }
`;

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2.5rem;
`;

export const InputFlex = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 2.8125rem;

    @media screen and (max-width: 31.25rem) {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
`;

export const TTitulo = styled.h2`
    font-size: 1.5rem;
    color: #af7503;

    @media screen and (max-width: 31.25rem) {
        font-size: 1rem;
    }
`;

export const Subtitulo = styled.div`
    font-size: 1.875rem;
    color: #228137;
    text-align: center;
    margin-bottom: 1.5625rem;

    @media screen and (max-width: 31.25rem) {
        font-size: 1.25rem;
    }
`;

export const ContainerCheckbox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    flex-direction: column;
    height: 100%;
    align-items: center;
    width: 68%;
`;

export const TextoCheckbox = styled.h3`
    color: #228137;
    margin-bottom: 0.625rem;
`;

export const CheckboxMateriais = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    color: #228137;
    list-style-type: none;
    font-size: 1.25rem;
    gap: 1.25rem;

    @media screen and (max-width: 31.25rem) {
        font-size: 0.5rem;
    }
`;

export const Material = styled.div`
    display: flex;
    gap: 0.25rem;
`;

export const CheckboxTransporte1 = styled.li`
    display: flex;
    align-items: center;
    color: #228137;
    font-size: 1.25rem;
    gap: 0.375rem;

    @media screen and (max-width: 31.25rem) {
        line-height: 1.25rem;
    }
`;

export const CheckboxTransporte = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    width: 80%;

    @media screen and (max-width: 31.25rem) {
        gap: 0;
    }
`;

export const LinkCadastro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
`;

export const CaixaFundo = styled.div`
    height: 91.25rem;
    width: 81.25rem;
    background: #33603d;
    clip-path: polygon(0% 0%, 100% 0%, 40% 100%, 0% 100%);
    position: absolute;

    @media screen and (max-width: 31.25rem) {
        width: 21.875rem;
        height: 115.125rem;
    }
`;

export const BarraVertical = styled.div`
    height: 91.25rem;
    width: 81.25rem;
    background: #b7821c;
    clip-path: polygon(100% 0%, 90% 0%, 40% 100%, 100% 0%);
    position: absolute;

    @media screen and (max-width: 31.25rem) {
        width: 21.875rem;
        height: 115.125rem;
    }
`;

export const BBarra = styled.div`
    height: 0.125rem;
    width: 31.25rem;
    background-color: black;
    margin-top: 0.5rem;

    @media screen and (max-width: 31.25rem) {
        width: 12.5rem;
    }
`;

export const QuebraLinha = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    gap: 0.625rem;
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
    height: 0.125rem;
    width: 37.5rem;
    background-color: black;
    margin-top: 0.5rem;

    @media screen and (max-width: 31.25rem) {
        width: 12.5rem;
    }
`;

export const BBarra3 = styled.div`
    height: 0.125rem;
    width: 44.375rem;
    background-color: black;
    margin-top: 0.5rem;

    @media screen and (max-width: 31.25rem) {
        width: 12.5rem;
    }
`;

export const BBarra4 = styled.div`
    height: 0.125rem;
    width: 43.75rem;
    background-color: black;
    margin-top: 0.5rem;

    @media screen and (max-width: 31.25rem) {
        width: 12.5rem;
    }
`;

export const Botao = styled.div`
    padding: 0.75rem;
    width: 21.625rem;
    text-align: center;
    background-color: rgba(175, 117, 3, 0.9);
    color: #fff;
    border-radius: 0.25rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
    font-size: 1.25rem;
    cursor: pointer;

    @media screen and (max-width: 31.25rem) {
        padding: 0.75rem;
        width: 8.125rem;
        font-size: 0.8125rem;
    }
`;

export const PP = styled.p`
    font-size: 1.25rem;
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
    font-size: 1.25rem;
`;

export const ButaoConta = styled.button`
    font-size: 1.25rem;
    background: none;
    border: none;
    color: #7b7b7b;
    cursor: pointer;

    &:hover {
        color: red;
    }
`;

export const ImagemPerfil = styled.img`
    width: 9.375rem;
    color: green;

    @media screen and (max-width: 31.25rem) {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        width: 4.375rem;
    }
`;

export const ParteSuperior = styled.div`
    display: flex;
    align-items: center;
    gap: 1.875rem;
    margin-left: 2.8125rem;

    @media screen and (max-width: 22.5rem) {
        gap: 0.3125rem;
        margin-left: 1.25rem;
        display: flex;
        flex-direction: column;
    }
`;
