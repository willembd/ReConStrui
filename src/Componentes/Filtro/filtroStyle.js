import styled from "styled-components";


export const ContainerPai = styled.div`
    margin: 2.5rem 10rem;
`
export const ContainerTitulo = styled.p`
    font-size: 1.125rem;
    color: #228137;
    padding-bottom: 0.25rem;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    border: 0.25rem #4C7A56 solid;
    padding: 0.625rem 2.5rem;
    border-radius: 0.25rem;

    @media(max-width: 1000px){
        display: flex;
        flex-direction: column;
    }
`