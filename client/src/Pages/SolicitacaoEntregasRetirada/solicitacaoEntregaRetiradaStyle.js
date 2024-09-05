import styled from "styled-components";

import PlanoFundo from "../../assets/planodefundo.svg";

export const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 99.1rem;
    background-image: url(${PlanoFundo});
    background-repeat: no-repeat;
    width: 100%;
`;

export const Container = styled.div`
    width: 56.25rem;
    height: 84.375rem;
    background-color: white;
    padding: 1.25rem;
    border-radius: 0.625rem;
    box-shadow: 0 0 0.9375rem rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 55.125rem) {
        width: 100%;
        height: 218.75rem;
    }
`;

export const Pedidos = styled.h1`
    font-size: 2.5rem;
    color: #228137;
    font-weight: bold;
    padding-bottom: 0.625rem;

    @media screen and (max-width: 55.125rem) {
        font-size: 1.25rem;
    }
`;

export const TXT = styled.p`
    font-size: 1.5rem;
    color: #af7503;
    padding-bottom: 0.9375rem;

    @media screen and (max-width: 55.125rem) {
        font-size: 0.8125rem;
    }
`;

export const PP = styled.p`
    font-size: 1rem;
    color: #228137;
    font-weight: 600;
`;

export const CContainer = styled.div`
    display: flex;
    padding-top: 2.2rem;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 0.9375rem;

    @media screen and (max-width: 55.125rem) {
        width: 100%;
        padding-bottom: 1.875rem;
        height: 25rem;
    }
`;

export const CCaixa = styled.div`
    width: 46.875rem;
    height: 21.25rem;
    background-color: white;
    padding: 0.9375rem;
    border-radius: 0.625rem;
    box-shadow: 0 0 0.9375rem rgba(0, 0, 0, 0.2);
    position: relative;

    @media screen and (max-width: 55.125rem) {
        width: 100%;
        gap: 1.25rem;
        height: 26.25rem;
    }
`;

export const PPP = styled.p`
    font-size: 1rem;
    color: #228137;
    font-weight: bolder;

    @media screen and (max-width: 27.75rem) {
        font-size: 0.9375rem;
    }
`;

export const PPALAVRA = styled.p`
    font-size: 1.5rem;
    color: #228137;
    font-weight: bold;

    @media screen and (max-width: 27.75rem) {
        font-size: 0.9375rem;
    }
`;

export const CCaixinha = styled.div`
    width: 100%;
    height: 14.375rem;
    background-color: white;
    border: 0.125rem solid #e0e0e0;

    @media screen and (max-width: 27.75rem) {
        width: 100%;
        height: 20.625rem;
    }
`;

export const PLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 0.375rem;

    @media screen and (max-width: 27.75rem) {
        font-size: 1rem;
    }
`;

export const PaLavra = styled.p`
    font-size: 0.75rem;
    font-weight: bold;

    @media screen and (max-width: 27.75rem) {
        font-size: 0.5625rem;
    }
`;

export const Barra = styled.div`
    width: 9.375rem;
    height: 0.125rem;
    background-color: black;

    @media screen and (max-width: 55.125rem) {
        width: 7.5rem;
    }
`;

export const AAlinha = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const IIIMG = styled.img`
    height: 6.875rem;
    width: 9.375rem;
    margin-top: 1.25rem;
    border-radius: 0.25rem;
`;

export const TTTitle = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: #228137;
`;

export const SobreContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0.625rem;

    @media screen and (max-width: 29.125rem) {
        flex-direction: column;
        height: 25rem;
    }
`;

export const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const BarraAguardando = styled.div`
    width: 13.125rem;
    height: 0.75rem;
    background-color: #aaaaaa;
    border-radius: 100rem;

    @media screen and (max-width: 27.75rem) {
        width: 6.875rem;
    }
`;

export const BBarraAguardando = styled.div`
    width: 4.375rem;
    height: 0.75rem;
    background-color: #228137;
    position: absolute;
    border-radius: 100rem;

    @media screen and (max-width: 27.75rem) {
        width: 4.375rem;
    }
`;

export const BBotao = styled.button`
    background-color: rgba(175, 117, 3, 0.9);
    color: #fff;
    font-size: 1rem;
    border: none;
    padding: 0.6rem 1.1rem;
    border-radius: 0.25rem;
    cursor: pointer;

    @media screen and (max-width: 55.125rem) {
        font-size: 0.9375rem;
    }
`;

export const LETRA = styled.p`
    font-size: 1rem;
    color: #228137;
`;

export const QuebraLinha = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    @media screen and (max-width: 27.75rem) {
        width: 19.5rem;
        height: 25rem;
        flex-direction: column;
    }
`;

export const Flex = styled.div`
    display: flex;
    gap: 0.625rem;
`;

export const FlexColomn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Caixinha = styled.div`
    width: 100%;
    height: 1.75rem;
    background-color: white;
    border-bottom: 0.125rem solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0.625rem;
`;

export const LLinks = styled.p`
    font-size: 0.875rem;
    color: #228137;
    padding: 0.75rem;
    cursor: pointer;
`;

export const PPalavra = styled.div`
    font-size: 1rem;
    font-weight: bolder;
    color: #af7503;

    @media screen and (max-width: 27.75rem) {
        font-size: 0.625rem;
    }
`;

export const BarraAguardandoC = styled.div`
    width: 13.125rem;
    height: 0.75rem;
    background-color: red;
    border-radius: 100rem;

    @media screen and (max-width: 27.75rem) {
        width: 6.875rem;
    }
`;

export const BBarraAguardandoT = styled.div`
    width: 13.125rem;
    height: 0.75rem;
    border-radius: 100rem;

    @media screen and (max-width: 27.75rem) {
        width: 6.875rem;
    }
`;

export const X = styled.button`
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 0.625rem;
    font-size: 1.875rem;
    font-weight: bold;
    color: #555;
    border: none;
    background-color: #fff;
`;

export const TittleModal = styled.h1`
    font-size: 1.125rem;
    font-weight: bold;
    margin-left: 1.125rem;
`;

export const ContainerModal = styled.div`
    display: flex;
    gap: 2.375rem;
`;

export const ButtonSim = styled.div`
    background-color: rgba(175, 117, 3, 0.9);
    color: #fff;
    font-size: 1rem;
    border: none;
    padding: 0.6875rem 2.25rem;
    border-radius: 0.25rem;
    cursor: pointer;

    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;
