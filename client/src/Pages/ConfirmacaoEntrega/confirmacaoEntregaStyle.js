import styled from "styled-components";

import PlanoFundo from "../../assets/planodefundo.svg";

export const Caixa = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url(${PlanoFundo});
    background-repeat: no-repeat;
`;

export const Modal = styled.div`
    color: black;
    width: 56.25rem;
    height: 33.75rem;
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    margin-bottom: 2.5rem;
    border-radius: 0.75rem;
    box-shadow: 0.5rem 0.5rem 0.625rem rgba(0, 0, 0, 0.25);
    background-color: white;
`;

export const ModalContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 3.125rem;

    @media screen {
        width: 95%;
    }
`;

export const Button = styled.button`
    padding: 0.75rem;
    background-color: #228137;
    color: white;
    text-align: center;
    border: none;
    cursor: pointer;
    border-radius: 0;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 0.625rem;

    @media screen and (max-width: 31.25rem) {
        width: 10%;
        flex-direction: column;
    }
`;

export const Campos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 25rem;
    height: 18.75rem;
    border-radius: 0.75rem 0 0 0.75rem;
    gap: 0.625rem;

    @media screen and (max-width: 31.25rem) {
        width: 7.5rem;
        flex-direction: column;
        height: 12.5rem;
    }
`;

export const Titulo = styled.h1`
    color: #228137;
    margin-top: 1.875rem;
`;

export const Dados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5625rem;
    margin-top: 3.125rem;
    color: #228137;
    align-items: center;

    @media screen and (max-width: 34.375rem) {
        width: 2.1875rem;
        flex-direction: column;
    }
`;

export const Titulo1 = styled.h1`
    color: #228137;
    margin-top: 3.75rem;
    margin-right: 4.375rem;
    display: flex;
    padding-left: 0.625rem;
    padding: 0.3125rem;
    margin-bottom: 1.875rem;
`;
