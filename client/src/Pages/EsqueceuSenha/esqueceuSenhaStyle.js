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
    height: 540px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 40px;
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
    margin-top: 20px;
`;

export const Imagem = styled.div`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 540px;
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

export const FormSenha = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    @media screen and (max-width: 500px) {
        width: 390px;
    }
`;

export const Titulo = styled.h1`
    color: #228137;
    white-space: nowrap;
    font-size: 35px;

    @media screen and (max-width: 500px) {
        font-size: 25px;
    }
`;

export const Texto = styled.p`
    color: #228137;
    font-size: 15px;

    @media screen and (max-width: 500px) {
        font-size: 11px;
    }
`;

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0px 0px 20px 0px;
`;
export const EsqueceuETexto = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 500px) {
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
`;

export const X = styled.button`
    background-color: #fff;
    cursor: pointer;
    position: absolute; 
    top: 0px;
    right: 10px;
    font-size: 30px;
    font-weight: bold;
    color: #555;
    border: none;

` 