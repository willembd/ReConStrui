import styled from "styled-components";

export const Caixa = styled.div`
    box-sizing: border-box;
    
    min-height: 80vh;
    background-color: #F8F8F8;
`;

export const Container = styled.div`
    background-color: white;
    padding-left: 10rem;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    gap: 30px;
`;

export const InputLeft = styled.div`
    display: flex;
`;

export const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 40%;
`;

export const InputRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 70%;
`;

export const ContainerCheckbox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;
    flex-direction: row;
    height: 100%;
    align-items: center;
    width: 100%;
`;

export const QuebraLinha = styled.div`
    display: flex;
    padding-top: 30px;
    gap: 20px;
`

export const Button = styled.button`
    
    padding: 10px 70px;
    background-color: white;
    color: #228137;
    border: 2px solid #228137;
    text-align: center;
    cursor: pointer;
    border-radius: 0px 4px 4px 0px;
`;