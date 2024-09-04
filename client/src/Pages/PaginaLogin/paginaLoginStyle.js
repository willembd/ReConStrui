import styled from "styled-components";

export const Caixa = styled.div`
    display: flex;
    justify-content: center;
    margin: 6.25rem 0rem;
`;

export const Modal = styled.div`
    background-color: #fcfcfc;
    width: 65rem;
    height: 36.875rem;
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
    justify-content: space-around;
`;

export const Button = styled.button`
    padding: 0.75rem;
    background-color: #228137;
    color: white;
    text-align: center;
    border: none;
    cursor: pointer;
    border-radius: 0rem 0.25rem 0.25rem 0rem;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 0.625rem;
`;

export const Imagem = styled.div`
    width: 50%;
    height: 36.875rem;
    border-radius: 0.75rem 0rem 0rem 0.75rem;

    @media screen and (max-width: 31.25rem) {
        display: none;
    }
`;

export const Logo = styled.img`
    max-height: 100%;
`;

export const FormLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    
    @media screen and (max-width: 31.25rem) {
        width: 0rem;
    }
`;

export const Titulo = styled.h1`
    color: #228137;
    font-size: 2.628rem;

    @media screen and (max-width: 31.25rem) {
        font-size: 2.25rem;
    }
`;

export const Organizacao = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin: 3.125rem 0rem 0.313rem 0rem;
`;
export const Linksenha = styled.a`
    color: #288137;
    font-size:1rem;
`;
export const DivRadio = styled.div`
    display: flex;
    margin-top: 1.25rem;
    margin-bottom: 1.563rem;
    gap: 2.5rem;
`;

export const DivRadioOpcoes = styled.div`
    display: flex;
    gap: 0.375rem;
`

export const DivLink = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.25rem;
    color: #288137;
    
    @media screen and (max-width: 31.25rem) {
        flex-direction: column;
    }
`;

export const TextP = styled.p`
    font-size: 1rem;

`

export const Links = styled.a`
    color: #af7503;
    text-decoration: underline;
    font-size:1rem;

    @media screen and (max-width: 31.25rem) {
        font-size: 0.813rem;
    }
`;
