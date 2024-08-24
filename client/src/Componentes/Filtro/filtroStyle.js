import styled from "styled-components";


export const ContainerPai = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 20px;
   margin: 40px 0px;

`
export const ContainerTitulo = styled.p`
    font-size: 1.525rem;
    font-weight: bolder;
    padding-bottom: 0.25rem;
    width: 80%;
`
export const TextFiltro =styled.p`
    font-weight: bolder;
    width: 80%;
    color: #228137;
`

export const Container = styled.div`
    display: flex;
    gap: 40px;
    width: 80%;

    @media(max-width: 1000px){
        display: flex;
        flex-direction: column;
    }
`