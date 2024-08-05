import styled from "styled-components";

export const Caixa = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Modal = styled.div`
    background-color: aliceblue;
    color: black;
    width: 900px;
    height: 500px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom:40px;
    border-radius:25px;
`;

export const ModalContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;

export const Button = styled.button`
    padding: 5px;
    background-color: green;
    color: white;
    text-align: center;
    line-height: 30px;
    border: none;
    cursor: pointer;
`;

export const ButtonContainer = styled.div`
    width: 100%;

`;

export const Imagem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    background-color: rgba(28, 69, 37, 0.94);
    width: 50%;
    height: 500px;

`;

export const Logo = styled.img`
    width: 300px;
`;

export const FormSenha = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding-right: 2rem;
    margin-top:50px;
    
`;

export const Titulo = styled.h1`
    color: #228137;
    white-space: nowrap;
    font-size: 28px;
    margin-top: 10px;
   
`;

export const Texto = styled.p `
    color: #228137;
    margin-left: 71px;
    margin-right: 10px;
    font-size: 15px;
    margin-bottom: 20px;
    margin-top: 21px;
  
`

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;  
    margin: 0px 0px 20px 0px;
`;
export const EsqueceuETexto = styled.div`
  display: flex; 
  justify-content: center; 
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  align-items: baseline

`






