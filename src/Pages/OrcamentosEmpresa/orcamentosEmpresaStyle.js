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
    width: 900px;
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

export const Campos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 500%;
    height: 600px;
    border-radius: 12px 0px 0px 12px;
    margin-top: 10px;
    gap: 20px;
    margin-right: 50px;
`;

export const Titulo = styled.h1`
    color: #228137;
    margin-top: 30px;
`;

export const Dados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-right: 50px;
    margin-top: 50px;
`;

export const Titulo1 = styled.h1`
    color: #228137;
    margin-top: 60px;
    margin-right: 70px;
    display: flex;
    padding-left: 10px;
    padding: 5px;
    margin-bottom: 30px;
`;


