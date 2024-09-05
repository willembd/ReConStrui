import styled from "styled-components";

export const ContainerPai = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.25rem; 
    margin: 2.5rem 0; 
`

export const ContainerTitulo = styled.p`
    font-size: 1.525rem;
    font-weight: bolder;
    padding-bottom: 0.25rem;
    width: 80%;

    @media(max-width: 62.5rem){
        font-size: 1.25rem;
    }
`

export const TextFiltro = styled.p`
    font-weight: bolder;
    width: 80%;
    color: #228137;

    @media(max-width: 62.5rem){
        font-size: 0.9rem;
    }
`

export const Container = styled.div`
    display: flex;
    gap: 2.5rem; 
    width: 80%;

    @media(max-width: 62.5rem){
        display: flex;
        flex-direction: column;
        gap: 1.25rem; 
    }
`
