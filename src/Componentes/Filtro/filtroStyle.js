import styled from "styled-components";


export const ContainerPai = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 10px 0;
`
export const ContainerTitulo = styled.p`
    font-size: 1.125rem;
    color: #228137;
    padding-bottom: 0.25rem;
    width: 80%;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    border: 0.25rem #4C7A56 solid;
    padding: 0.625rem 2.5rem;
    border-radius: 0.25rem;
    width: 80%;

    @media(max-width: 1000px){
        display: flex;
        flex-direction: column;
    }
`