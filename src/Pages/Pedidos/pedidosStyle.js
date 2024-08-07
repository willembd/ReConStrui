import styled from "styled-components";

export const Caixa = styled.div`
    margin: 60px 180px;
    
    @media screen and (max-width: 1210px){
        margin: 60px 70px;
    }
`

export const DivLink = styled.div`
    display: flex;
    justify-content: space-around;

    h1{
        color: #228137;
        font-size: 38px;
        margin-bottom: 20px;
    }
`

export const Pedido = styled.div`
    display: flex;
    justify-content: space-around;
    border: 2px solid black;
    padding: 20px;
    margin: 20px 0px;
`

export const DivEmpresa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h1{
        color: #228137;
    }

    @media screen and (max-width: 1144px) {
        h1{
            font-size: 22px;
        }
    }
`


export const Dados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const DivResposta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h1{
        color: #228137;
        font-size: 32px;
    }

    @media screen and (max-width: 1144px) {
        h1{
            font-size: 22px;
        }
    }
`

export const DivButton = styled.div`
    display: flex;
    gap: 20px;
`
