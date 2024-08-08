import styled from "styled-components";


export const BACKGROUND_STYLE = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:rgb(0,0,0, 0.7);
    z-index: 1000;
`

export const MODAL_STYLE = styled.div`
    position: fixed;
    max-height: 93%;
    max-width: 70%;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color: aliceblue;
    color: black;
    width: 900px;
    height: 700px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 30px;
`
export const ContainerModal =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

` 
export const ContainerDivModal =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    
` 
export const Button = styled.button`
    position: fixed;
    padding: 10px;
    top: 20px;
    right: 40px;
    background-color: green;
    color: white;
    text-align: center;
    line-height: 30px;
    border: none;
    cursor: pointer;
`;
export const QuebraLinha = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 300px;

`;

export const IImagem = styled.img`
    width: 18rem;
    height: 18rem;

`;


export const Barra = styled.div`
    padding: 230px 1px;
    background-color: rgba(28, 69, 37, 0.94);
`
export const FormOrçamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TituloModal = styled.h1`
    color: #228137;
    margin: 0.1rem;
`


export const DivRadio =styled.div`
    display: flex;
    margin-bottom: 1rem;
    gap: 3rem;

`
export const Transporte = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    margin-top: 1rem;
    font-size: 1rem;
`
export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding-top: 0.5rem;
`
export const TTitle = styled.div`
    color: #228137;
    font-weight: 600;
    font-size: 2rem;

`;
export const PPalavra = styled.p`
    font-size: 1rem;
    color: #AF7503;
`;

export const AAlinhamento = styled.div`
    display: flex;
    flex-direction: row;

`;

export const LLinha = styled.div`
    display: flex;
    flex-direction: column;
`

export const Th3 = styled.div`
    color: #228137;
    font-weight: bolder;
    font-size: 1.1rem;

`;
export const PP = styled.div`
    color: #228137;
    font-size: 0.8rem;

`;


