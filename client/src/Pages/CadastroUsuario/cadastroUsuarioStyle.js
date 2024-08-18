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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 100px 0px;
`;

export const Modal = styled.div`
    background-color: #fcfcfc;
    color: black;
    width: 1040px;
    height: 540px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 40px;
    border-radius: 12px;
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.25);
`;

export const ModalContainer = styled.div`
    display: flex;
    width: 100%;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 540px;
    border-radius: 12px 0px 0px 12px;
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
`;

export const Titulo = styled.h1`
    color: #228137;
`;

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 50px 0px 20px 0px;
`;

export const DivLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
`;

export const Links = styled.a`
    text-decoration: none;
    color: #228137;
`;
