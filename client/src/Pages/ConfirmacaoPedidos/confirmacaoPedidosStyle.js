import styled from "styled-components";

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

export const Caixa = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px 0px;

    @media screen and (max-width: 500px) {
        margin: 40px 0px;
    }
`;

export const Modal = styled.div`
    background-color: #fcfcfc;
    width: 1040px;
    height: 590px;
    border-radius: 12px;
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 500px) {
        width: 350px;
        height: 600px;
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
    height: 590px;
    border-radius: 12px 0px 0px 12px;

    @media screen and (max-width: 500px) {
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

    @media screen and (max-width: 500px) {
        width: 0px;
    }
`;
export const Titulo = styled.h1`
    color: #228137;

    @media screen and (max-width: 500px) {
        font-size: 25px;
        gap:10px;
        display:flex;
        align-items:center;
        margin-top:40px;
        white-space: nowrap;
    }
`;


export const DivCampo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 30px 0px 20px 0px;

    @media screen and (max-width: 500px) {
        padding: 80px;
    }
`;

export const DivButton = styled.div`
    display: flex;
    gap: 10px;

    @media screen and (max-width: 500px) {
       margin-bottom:40px;
       
    }
`