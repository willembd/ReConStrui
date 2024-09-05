import styled from "styled-components";

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
    margin-top: 0.625rem;
`;

export const Caixa = styled.div`
    display: flex;
    justify-content: center;
    margin: 6.25rem 0;

    @media screen and (max-width: 31.25rem) {
        margin: 2.5rem 0;
    }
`;

export const Modal = styled.div`
    background-color: #fcfcfc;
    width: 65rem;
    height: 36.875rem;
    border-radius: 0.75rem;
    box-shadow: 0.5rem 0.5rem 0.625rem rgba(0, 0, 0, 0.25);
    
    @media screen and (max-width: 31.25rem) {
        width: 21.875rem;
        height: 37.5rem;
        display: flex;
        justify-content: center;
    }
`;

export const ModalContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Imagem = styled.div`
    width: 50%;
    height: 36.875rem;
    border-radius: 0.75rem 0 0 0.75rem;
    
    @media screen and (max-width: 31.25rem) {
        display: none;
    }
`;

export const Logo = styled.img`
    max-height: 100%;
`;

export const FormConfPedido = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    
    @media screen and (max-width: 31.25rem) {
        width: 0;
    }
`;

export const Titulo = styled.h1`
    color: #228137;
    
    @media screen and (max-width: 31.25rem) {
        font-size: 1.5625rem;
        gap: 0.625rem;
        display: flex;
        align-items: center;
        margin-top: 2.5rem;
        white-space: nowrap;
    }
`;

export const DivCampo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
    margin: 1.875rem 0 1.25rem;
    
    @media screen and (max-width: 31.25rem) {
        padding: 5rem;
    }
`;

export const DivButton = styled.div`
    display: flex;
    gap: 0.625rem;
    
    @media screen and (max-width: 31.25rem) {
        margin-bottom: 2.5rem;
    }
`;
