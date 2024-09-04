import styled from "styled-components";

export const BACKGROUND_STYLE = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: -0.0625rem;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`;

export const MODAL_STYLE = styled.div`
    position: relative;
    max-height: 93%;
    max-width: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    color: black;
    width: 62.5rem;
    height: 43.75rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center; 
    justify-content: center;

    @media screen and (max-width: 34.375rem) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-height: 95%;
        max-width: 85%;
    }
`;

export const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3.5rem;
    align-items: center;

    @media screen and (max-width: 83.75rem) {
        margin: 2.8rem;
    }
    @media screen and (max-width: 76.875rem) {
        margin: 2.5rem;
    }
    @media screen and (max-width: 71.4375rem) {
        gap: 1rem;
        margin: 2rem;
    }
    @media screen and (max-width: 68.75rem) {
        margin: 1rem;
    }
    @media screen and (max-width: 35.3125rem) {
        margin: 0.5rem;
    }
    @media screen and (max-width: 34.125rem) {
        margin: 0;
        gap: 0;
        width: auto;
    }
    @media screen and (max-height: 33.125rem) {
        gap: 0;
    }
`;

export const QuebraLinha = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 19rem;
`;

export const Barra = styled.div`
    padding: 14.375rem 0.0625rem;
    background-color: rgba(28, 69, 37, 0.94);
`;

export const DivRadio = styled.div`
    display: flex;
    margin-bottom: 1rem;
    gap: 3rem;

    @media screen and (max-width: 39.125rem) {
        gap: 1rem;
    }
`;

export const Transporte = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 1rem 1rem 1rem;
    font-size: 1rem;
`;

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 34.125rem) {
        gap: 0;
    }
    @media screen and (max-height: 34.125rem) {
        gap: 0.0625rem;
    }
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    flex-wrap: wrap;
`;

export const Im = styled.img`
    width: 14.1rem;
    height: 19.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.5);
    filter: brightness(1.2);
`;

export const IMG = styled.img`
    width: 16rem;
    height: 22rem;
    border-radius: 0.75rem;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.5);
    filter: brightness(1.2);

    @media screen and (max-width: 71.4375rem) {
        width: 14rem;
        height: 19rem;
    }
    @media screen and (max-width: 60.625rem) {
        width: 11rem;
        height: 15rem;
    }
    @media screen and (max-width: 41.25rem) {
        width: 10rem;
        height: 14rem;
    }
    @media screen and (max-width: 34.125rem) {
        width: 5rem;
        height: 7rem;
    }
    @media screen and (max-height: 33.75rem) {
        height: 16rem;
    }
`;

export const Absoluto = styled.div`
    position: absolute;
`;

export const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to right, rgba(60, 60, 60, 1) 0%, rgba(60, 60, 60, 0.5) 100%);
    border-radius: 0 0 0.75rem 0.75rem;
    filter: brightness(1.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 16rem;
    height: 6rem;
    justify-content: space-around;
    align-items: center;
    margin-top: 16rem;

    @media screen and (max-width: 71.4375rem) {
        width: 14rem;
        height: 5rem;
        margin-top: 14.1rem;
    }
    @media screen and (max-width: 60.625rem) {
        width: 11rem;
        height: 4.1rem;
        margin-top: 11rem;
    }
    @media screen and (max-width: 41.25rem) {
        width: 10rem;
        height: 3.1rem;
    }
    @media screen and (max-width: 34.125rem) {
        margin-top: 4.2rem;
        width: 5rem;
        height: 2.8rem;
    }
    @media screen and (max-height: 29.75rem) {
        height: 4rem;
        margin-top: 12rem;
    }
`;

export const Alinhamento = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Linha = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
`;

export const Title = styled.h1`
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;

    @media (max-width: 48rem) {
        font-size: 0.9rem;
    }
    @media (max-width: 34.125rem) {
        font-size: 0.6rem;
    }
`;

export const Palavra = styled.p`
    font-size: 0.8rem;
    font-weight: normal;
    margin: 0.3rem;
    color: #fff;

    @media (max-width: 34.125rem) {
        font-size: 0.5rem;
    }
`;

export const Botao = styled.button`
    background-color: rgba(175, 117, 3, 0.9);
    color: #fff;
    font-size: 1rem;
    border: none;
    padding: 0.5rem 4rem;
    border-radius: 0.25rem;
    cursor: pointer;
`;

export const Button = styled.button`
    cursor: pointer;
    position: absolute; 
    top: 0;
    right: 0.625rem;
    font-size: 1.875rem;
    font-weight: bold;
    padding: 0.3rem;
    border: none;
    background-color: #fff;
`;

export const TituloModal = styled.h1`
    color: #228137;
    margin: 0.1rem;
    font-size: 2rem;
    font-weight: bold;

    @media screen and (max-width: 57.5rem) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 42.1875rem) {
        font-size: 1.3rem;
    }
    @media screen and (max-width: 36.875rem) {
        font-size: 1rem;
    }
    @media screen and (max-height: 29.75rem) {
        font-size: 1.5rem;
    }
`;


export const CaixaFundo = styled.div`
    width: 100%;
    height: 100.01%;
    background: #33603D;
    clip-path: polygon(0% 0%, 50% 0%, 49% 100%, 0% 100%);
    position: absolute;
    z-index: -1;
    border-radius: 0.5rem;
    
    @media screen and (max-width: 81.875rem) {
        margin: -0.0625rem;
    }
    @media screen and (max-width: 34.125rem) {
        background-color: #fff;
    }
`;

export const FUNDO = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 34.125rem) {
        gap: 0;
    }
`;

export const TTitle = styled.div`
    color: #228137;
    font-weight: 600;
    font-size: 2rem;
`;

export const PPalavra = styled.p`
    font-size: 1rem;
    color: #AF7503;
`;

export const AAlinhamento = styled.div`
    display: flex;
    flex-direction: row;
`;

export const LLinha = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Th3 = styled.div`
    color: #228137;
    font-weight: bolder;
    font-size: 1.1rem;
    @media screen and (max-width: 48.4375rem) {
        font-size: 0.8rem;
    }
    @media screen and (max-width: 34.125rem) {
        font-size: 0.7rem;
    }
    @media screen and (max-height: 29.6875rem) {
        font-size: 0.8rem;
    }
`;

export const PP = styled.div`
    color: #228137;
    font-size: 0.8rem;
`;

export const Organizacao = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;
    @media screen and (max-width: 93.75rem) {
        gap: 5.5rem;
    }
    @media screen and (max-width: 68.75rem) {
        gap: 4rem;
    }
    @media screen and (max-width: 63.125rem) {
        gap: 3rem;
    }
    @media screen and (max-width: 41.25rem) {
        gap: 2rem;
    }
    @media screen and (max-width: 38.125rem) {
        gap: 1rem;
    }
    @media screen and (max-width: 34.125rem) {
        flex-direction: column;
        gap: 0;
    }
`;

export const TituloProduto = styled.h1`
    color: white;
    margin: 0.1rem;
    @media screen and (max-width: 34.125rem) {
        color: rgba(175, 117, 3, 0.9);
        font-size: 1.5rem;
    }
    @media screen and (max-height: 37.8125rem) {
        font-size: 1rem;
    }
`;

export const DivTransporte = styled.div`
    display: flex;
    gap: 0.3rem;
`;

export const Descricao = styled.p`
    font-size: 1rem;
    font-weight: 600;
    margin: 0.3rem;
    color: #1C4525;
    background-color: #fff;
    height: 3.2rem;
    width: 18.8rem;
    display: flex;
    text-align: center;
    border-radius: 0.5rem;
    align-items: center;
    @media screen and (max-width: 70.9375rem) {
        width: 18rem;
    }
    @media screen and (max-width: 60.625rem) {
        width: 16rem;
    }
    @media screen and (max-width: 54.375rem) {
        width: 14rem;
    }
    @media screen and (max-width: 48.75rem) {
        width: 13rem;
    }
    @media screen and (max-width: 45rem) {
        width: 12rem;
        height: 5rem;
    }
    @media screen and (max-width: 45rem) {
        width: 11rem;
    }
    @media screen and (max-width: 45rem) {
        width: 10rem;
        height: 6rem;
    }
    @media screen and (max-width: 34.125rem) {
        width: 9rem;
        height: 6rem;
        box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.5);
        font-size: 0.7rem;
    }
`;

export const Left = styled.div`
    @media screen and (max-width: 34.125rem) {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2rem;
        height: 8rem;
    }
    @media screen and (max-width: 26.625rem) {
        gap: 1rem;
    }
`;

export const ContainerBotton = styled.div`
    text-align: center;
`;
