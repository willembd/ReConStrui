import styled from "styled-components";

export const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3C3C3C ;
    border-radius: 0.75rem;
    height: 19.5rem;
    width: 14rem;
    box-sizing: border-box;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    
`
export const Im = styled.img`
    width: 14.1rem;
    /* height: 20rem; */
    border-radius: 0.75rem 0.75rem 0 0 ;
    
`
export const Botao = styled.button`
    background-color: rgba(175, 117, 3, 0.9);
    color: #fff;
    font-size: 16px;
    border: none;
    padding: 0.5rem 4rem;
    border-radius: 4px;
    cursor: pointer;
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
    align-items: center;
    color:#fff ;
`
export const Carrosel = styled.div`
    height:19.011rem;
    width: 75rem;
    min-width: 0.2rem;
   
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
export const Bordas = styled.div`
    width: 64%;
  border-top: 0.2rem solid #1C4525;
  margin: 1.2rem 0;
`
export const Alinhaborda = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    gap:2rem ;
    margin: 1rem 0;

`
export const Texto = styled.h2`
    font-size: 1.3rem ;
    font-weight: bolder;
    color:#1C4525;
`
