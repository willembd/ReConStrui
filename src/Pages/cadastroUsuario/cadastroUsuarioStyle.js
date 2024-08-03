import styled from "styled-components";

export const Caixa = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.356);
    z-index: 9999;
`;

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: aliceblue;
    color: black;
    height: 700px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 78px;
    padding: 0 30px;
`;

export const Button = styled.button`
    position: fixed;
    padding: 5px;
    top: 20px;
    right: 40px;
    background-color: green;
    color: white;
    text-align: center;
    line-height: 30px;
    border: none;
    cursor: pointer;
`;

export const Imagem = styled.div`
    display: flex;
    padding: 10px;
    gap: 50px;
`;

export const Logo = styled.img`
    width: 320px;
`;

export const Linha = styled.div`
    padding: 200px 1px;
    background-color: rgba(28, 69, 37, 0.94);
`;

export const FormLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:35px;
    padding-right:30px;
`;

export const Titulo = styled.h1`
    color: #228137;
`;

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding-top: 0.5rem;
`;

export const DivLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
`;

export const Links = styled.a`
    text-decoration: none;
    color: #228137;
`;
