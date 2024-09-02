import styled from "styled-components";

import PlanoFundo from "../../assets/planodefundo.svg"

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
    background-color: white;

   
`;

export const ModalContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 50px;

    @media screen {
        width:95%;
       
    }

   
`;

export const Button = styled.button`
    padding: 12px;
    background-color: #228137;
    color: white;
    text-align: center;
    border: none;
    cursor: pointer;
    border-radius: 0px 0px 0px 0px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 10px;

    @media screen and (max-width: 500px) {
        width:10%;
        flex-direction: column;
    }
`;

export const Campos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 40%;
    height: 300px;
    border-radius: 12px 0px 0px 12px;
    gap: 10px;

    @media screen and (max-width: 500px) {
        width: 120px;
        flex-direction: column;
        height:200px;
    }
`;

export const Titulo = styled.h1`
    color: #228137;
    margin-top: 30px;
`;

export const Dados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 50px;
    color: #228137;
    align-items: center;

    @media screen and (max-width: 550px) {
        width:35px;
        flex-direction: column;
    }

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


