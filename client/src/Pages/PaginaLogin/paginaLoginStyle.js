import styled from "styled-components";

export const Response = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center; 
    @media screen and (max-width: 1024px) {
        gap: 0px;
    }
    @media screen and (max-width: 1000px) {
        gap: 40px;
    }
    @media screen and (max-width: 849px) {
        gap: 18px;
    }
    @media screen and (max-width: 830px) {
        gap: 40px;
    }
`;

export const Caixa = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    margin: 100px 0px;
`;

export const Modal = styled.div`
    background-color: #fcfcfc;
    width: 1040px;
    height: 590px;
    border-radius: 12px;
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 500px) {
        width: 350px;
        height: 500px;
        display: flex;
        justify-content: center;
    }
`;

export const ModalContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Button = styled.button`
    padding: 12px;
    background-color: #228137;
    color: white;
    text-align: center;
    border: none;
    cursor: pointer;
    border-radius: 0px 4px 4px 0px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 10px;
`;

export const Imagem = styled.div`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 590px;
    border-radius: 12px 0px 0px 12px;
    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const Logo = styled.img`
    object-fit: contain;
    max-width: 135%;
    max-height: 100%;
`;

export const FormLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    @media screen and (max-width: 500px) {
        width: 0px;
    }
`;

export const Titulo = styled.h1`
    color: #228137;
    font-size: 43px;

    @media screen and (max-width: 500px) {
        font-size: 36px;
    }
`;

export const Organizacao = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 50px 0px 05px 0px;
`;
export const Linksenha = styled.a`
    color: #288137;
    font-size:16px;
`;
export const DivRadio = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 25px;
    gap: 40px;
`;

export const DivRadioOpcoes = styled.div`
    display: flex;
    gap: 6px;
`

export const DivLink = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    color: #288137;
    
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

export const TextP = styled.p`
    font-size: 16px;

`

export const Links = styled.a`
    color: #af7503;
    text-decoration: underline;
    font-size:16px;

    @media screen and (max-width: 500px) {
        font-size: 13px;
    }
`;
