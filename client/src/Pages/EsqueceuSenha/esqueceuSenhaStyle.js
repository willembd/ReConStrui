import styled from "styled-components";

export const Caixa = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 6.25rem 0;
`;

export const Modal = styled.div`
    background-color: #fcfcfc;
    color: black;
    width: 65rem;
    height: 33.75rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    margin-bottom: 2.5rem;
    border-radius: 0.75rem;
    box-shadow: 0.5rem 0.5rem 0.625rem rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 31.25rem) {
        width: 21.875rem;
        height: 31.25rem;
        display: flex;
        justify-content: center;
    }
`;

export const ModalContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;

export const Button = styled.button`
    padding: 0.75rem;
    background-color: #228137;
    color: white;
    text-align: center;
    border: none;
    cursor: pointer;
    border-radius: 0 0.25rem 0.25rem 0;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 1.25rem;
`;

export const Imagem = styled.div`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 33.75rem;
    border-radius: 0.75rem 0 0 0.75rem;

    @media screen and (max-width: 31.25rem) {
        display: none;
    }
`;

export const Logo = styled.img`
    object-fit: contain;
    max-width: 135%;
    max-height: 100%;
`;

export const FormSenha = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    @media screen and (max-width: 31.25rem) {
        width: 24.375rem;
    }
`;

export const Titulo = styled.h1`
    color: #228137;
    white-space: nowrap;
    font-size: 2.1875rem;

    @media screen and (max-width: 31.25rem) {
        font-size: 1.5625rem;
    }
`;

export const Texto = styled.p`
    color: #228137;
    font-size: 0.9375rem;

    @media screen and (max-width: 31.25rem) {
        font-size: 0.5625rem;
    }
`;

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    margin: 0 0 1.25rem 0;
`;

export const EsqueceuETexto = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 2.5rem;
    align-items: center;
    gap: 1.25rem;

    @media screen and (max-width: 31.25rem) {
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
`;

export const X = styled.button`
    background-color: #fff;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0.625rem;
    font-size: 1.875rem;
    font-weight: bold;
    color: #555;
    border: none;
`;
