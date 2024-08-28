import styled from "styled-components";

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
export const Bordas = styled.div`
    width: 64%;
  border-top: 0.2rem solid #1C4525;
  margin: 1.2rem 0;
`
export const Carrosel = styled.div`
    height:19.011rem;
    width: 75rem;
    min-width: 0.2rem;
`

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
`
export const Im = styled.img`
    width: 14.1rem;
    height: 19.5rem;
    border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.5);
    filter: brightness(1.2); 

`
export const Absoluto = styled.div`
    position: absolute;
`
export const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to right, rgba(60, 60, 60, 1) 0%, rgba(60, 60, 60, 0.5) 100%);
    border-radius: 0 0 0.75rem 0.75rem;
    filter: brightness(1.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 14.1rem;
    height: 6.5rem;
    justify-content: space-around;
    align-items: center;
    margin-top: 13rem;
`
export const Alinhamento = styled.div`
    display: flex;
    flex-direction: column;
`
export const Linha = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`
export const Title = styled.h1`
    font-size: 1.2rem ;
    font-weight: 500;
    color:#fff; 
`
export const Palavra = styled.p`
    font-size: 0.8rem ;
    font-weight: normal;
    margin: 0.3rem;
    color: #fff;
`
export const Botao = styled.button`
    background-color: rgba(175, 117, 3, 0.9);
    color: #fff;
    font-size: 16px;
    border: none;
    padding: 0.5rem 2.5rem;
    border-radius: 4px;
    cursor: pointer;
`
