import styled from "styled-components";

export const CaixaModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);      
    z-index: 9999;

  
`;

export const ModalStyle = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FCFCFC;
    border: 0.125rem solid #295032; 
    width: 53.8125rem;
    height: 31.25rem;
    border-radius: 0.5rem;
    display: flex;
    padding: 1.25rem;
    justify-content: space-around;
    flex-direction: column;

    @media screen and (max-width: 56.6875rem) {
        width: 89.08%;
        height: 31.75rem;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }

    @media screen and (max-width: 31.25rem) {
        width: 19.5625rem;
        height: 36.9375rem;
    }

    @media screen and (max-width: 23.75rem) {
        width: 19.0625rem;
        height: 45.25rem;
    }
`;

export const Itens = styled.div`
    padding: 0.625rem;
    gap: 1.5rem;
    color: #228137;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 31.25rem) {
        gap: 1.5rem;
        display: flex;
    }

    @media screen and (max-width: 23.4375rem) {
        gap: 1.5rem;
    }
`;

export const Texto = styled.h1`
    color: #228137;
    font-size: 2rem;
    margin-left: 1.375rem;
    margin-bottom: 0.625rem;
    font-weight: bold;

    @media screen and (max-width: 31.25rem) {
        white-space: nowrap;
        font-size: 1.625rem;
    }
`;

export const X = styled.button`
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0.625rem;
    font-size: 1.875rem;
    font-weight: bold;
    color: #555;
    background-color: #fff;
    border: none;
`;

export const TextDados = styled.p`
    color: #AF7503;
    word-wrap: break-word;
    white-space: nowrap;
`;

export const Linha = styled.hr`
    color: black;
    width: 95%;
`;

export const ContainerTextLinha = styled.div`
    display: flex;
    align-items: center;
    width: 97%;
    gap: 0.625rem;
`;

export const ContainerInputFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
`;

export const ContainerInputs = styled.div`
    display: flex;
    gap: 3.6875rem;

    @media screen and (max-width: 31.25rem) {
        gap: 0.875rem;
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 23.75rem) {
        gap: 0.875rem;
        display: flex;
        flex-direction: column;
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    gap: 2.5625rem;

    @media screen and (max-width: 31.25rem) {
        gap: 1.5rem;
        display: flex;
        flex-direction: column-reverse;
    }
`;
