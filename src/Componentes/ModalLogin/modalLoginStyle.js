import styled from "styled-components";


export const Caixa = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.356);
    z-index: 9999;
`

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: aliceblue;
    color: black;
    width: 900px;
    height: 700px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    

`
export const Button = styled.button`
    position: fixed;
    padding: 5px;
    top: 10px; 
    right: 10px;  
    background-color: green;
    color: white;
    text-align: center;
    line-height: 30px;
    border: none;
    cursor: pointer;

`

export const Itens = styled.div`
    display: flex;
    padding: 10px;
    gap: 50px;

`


export const Logo = styled.img`
    width: 400px;

`
