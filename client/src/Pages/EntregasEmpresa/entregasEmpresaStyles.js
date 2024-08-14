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

    a{
        color: #228137;
        font-size: 24px;
        text-decoration: none;
        margin-bottom: 20px;
    }
`

export const Pedido = styled.div`
    display: flex;
    justify-content: space-around;
    border-radius:12px;
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.25);
    padding: 20px;
    margin: 20px 0px 60px 0px;
`

export const DivEmpresa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;

    h1{
        color: #228137;
        font-weight: bold;
    }
    p{
        color: #AF7503;
    }

    @media screen and (max-width: 1540px) {
        h1{
            font-size: 1.75rem;
        }
    }

    @media screen and (max-width: 1350px) {
        h1{
            font-size: 24px;
        }
    }

    @media screen and (max-width: 1144px) {
        h1{
            font-size: 22px;
        }
    }
`
export const Imagem = styled.img`
    border-radius: 12px;

    @media screen and (max-width: 1540px){
        width: 350px;
    }
    @media screen and (max-width: 1080px){
        width: 300px;
    }
`

export const Dados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    h2{
        color: #228137;
        font-weight: bold;
    }
    @media screen and (max-width: 1540px){
        h2{
            font-size: 18px;
        }
    }
    @media screen and (max-width: 1080px){
        h2{
            font-size: 16px;
        }
    }
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

    @media screen and (max-width: 1540px) {
        h1{
            font-size: 22px;
        }
    }
    @media screen and (max-width: 1080px) {
        h1{
            font-size: 18px;
        }
    }
`
export const Progress = styled.div`
    width: 360px;
    height: 12px;
    background-color: #AAAAAA;
    border-radius: 10px;

    @media screen and (max-width: 1540px) {
        width: 260px;
    }

    @media screen and (max-width: 1080px) {
        width: 180px;
    }
`
export const ProgressCampo = styled.div`
    width: 240px;
    height: 12px;
    background-color: #228137;
    border-radius: 5px; 


    @media screen and (max-width: 1540px) {
        width: 172px;
    }

    @media screen and (max-width: 1080px) {
        width: 120px;
    }
`

export const DivButton = styled.div`
    display: flex;
    gap: 20px;
`
