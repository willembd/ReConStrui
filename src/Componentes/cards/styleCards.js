import styled from "styled-components";

export const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 0.75rem;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.5);
    height: 19rem;
    width: 14rem;
    box-sizing: border-box;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    
`
export const Im = styled.img`
    width: 14rem;
    border-radius: 0.75rem 0.75rem 0 0 ;
    
`
export const Botao = styled.button`
    width: 9rem;
    padding: 0.4rem;
    background-color: #AF7503;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
    margin: 0.625rem;
    font-weight: bolder;
    font-size: 1rem;
    margin: 0.4rem;
`
export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`
export const Linha = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    color:#1C4525 ;
`
export const Carrosel = styled.div`
    height:19.011rem;
    width: 73.581rem;
`
export const Alinhamento = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.h1`
    font-size: 1rem ;
    font-weight: bold;
`
export const Palavra = styled.p`
    font-size: 0.8rem ;
    font-weight: normal;
    margin: 0.3rem;
`