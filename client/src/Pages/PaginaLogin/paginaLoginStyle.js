import styled from "styled-components";

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
    height: 590px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 40px;
    border-radius: 12px;
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.25);
    overflow: hidden;
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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 590px;
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
    font-size: 43px;
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

export const DivLink = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    color: #288137;
    
`;

export const Links = styled.a`
    text-decoration: none;
    color: #af7503;
    text-decoration: underline;
    font-size:18px;
`;
