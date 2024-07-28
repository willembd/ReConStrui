import styled from "styled-components";

export const Caixa = styled.div`
    position: relative;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    height: 18,75rem;
    width:13,4375rem ;
    box-sizing: border-box;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    
`
export const Im = styled.img`
    width: 100%;
    height: auto;
    border-radius: 12px;
    
`
export const Botao = styled.button`
    width: 70%;
    padding: 12px;
    background-color: #AF7503;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
    margin: 10px;
    font-weight: bold;
`
export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
`
export const Linha = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    `
    // export const Linha = styled.div`
    // display: flex;
    // flex-wrap: wrap;
    // `
