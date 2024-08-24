import styled from "styled-components";

export const BACKGROUND_STYLE = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:rgb(0,0,0, 0.7);
    z-index: 1000;
`;
export const MODAL_STYLE = styled.div`
    position: relative;
    max-height: 93%;
    max-width: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    color: black;
    width: 970px;
    height: 700px;
    border-radius: 8px;
    display: flex;
    align-items: center;
`;
export const ContainerModal =styled.div`
    display: flex;
    flex-direction: column;
    margin: 3.5rem ;
    align-items: center;
` ;
export const ContainerDivModal =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;  
` ;
export const QuebraLinha = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 19rem;
`;
export const Barra = styled.div`
    padding: 230px 1px;
    background-color: rgba(28, 69, 37, 0.94);
`;
export const DivRadio =styled.div`
    display: flex;
    margin-bottom: 1rem;
    gap: 3rem;
`;
export const Transporte = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 1rem 1rem 1rem;
    font-size: 1rem;
`;
export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    padding-right: 3rem;
`;
export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    flex-wrap: wrap;
`;
export const Im = styled.img`
    width: 14.1rem;
    height: 19.5rem;
    border-radius:0.75rem 0.75rem 0.75rem 0.75rem; 
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.5);
    filter: brightness(1.2);   
`;
export const IMG = styled.img`
    width: 19rem;
    height: 22rem;
    border-radius:0.75rem 0.75rem 0.75rem 0.75rem; 
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.5);
    filter: brightness(1.2);   
`;
export const Absoluto = styled.div`
    position: absolute;
`;
export const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to right, rgba(60, 60, 60, 1) 0%, rgba(60, 60, 60, 0.5) 100%);
    border-radius: 0 0 0.75rem 0.75rem; 
    filter: brightness(1.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 19rem;
    height: 6rem;
    justify-content: space-around;
    align-items: center;
    margin-top: 16rem;
`;
export const Alinhamento = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Linha = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;
export const Title = styled.h1`
    font-size: 1.2rem ;
    font-weight: 500;
    color:#fff; 
`;
export const Palavra = styled.p`
    font-size: 0.8rem ;
    font-weight: normal;
    margin: 0.3rem;
    color: #fff;
`;
export const Botao = styled.button`
    background-color: rgba(175, 117, 3, 0.9);
    color: #fff;
    font-size: 16px;
    border: none;
    padding: 0.5rem 4rem;
    border-radius: 4px;
    cursor: pointer;
`;
export const MoverBox = styled.div`
    display: flex;
`;
export const Button = styled.button`
    cursor: pointer;
    position: absolute; 
    top: 0px;
    right: 10px;
    font-size: 30px;
    font-weight: bold;
    padding: 0.3rem;
    border: none;
    background-color: #fff;
`;
export const TituloModal = styled.h1`
    color: #228137;
    margin: 0.1rem;
`;
export const CaixaFundo = styled.div`
    width: 1040px;
    height: 701px;
    background: #33603D;
    clip-path: polygon(0% 0%, 50% 0%, 49% 100%, 0% 100%);
    position: absolute;
    z-index: -1;
`;
export const BarraVertical = styled.div`
    width: 1095px;
    height: 701px;
    background: #B7821C;
    clip-path: polygon(100% 0%, 53% 0%, 35% 103%, 56% 0%);
    position: absolute;
    z-index: -1;
`;
export const FUNDO = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    gap: 0.4rem;
`;
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
`;
export const Th3 = styled.div`
    color: #228137;
    font-weight: bolder;
    font-size: 1.1rem;
`;
export const PP = styled.div`
    color: #228137;
    font-size: 0.8rem;
`;
export const Organizacao =styled.div`
    display: flex;
    align-items: center;
    gap: 5rem;
`;
export const TituloProduto = styled.h1`
    color: white;
    margin: 0.1rem;
`;
export const DivTransporte = styled.div`
    display: flex;
    gap: 0.3rem;
`
export const Descricao = styled.p`
    font-size: 1rem ;
    font-weight: 600;
    margin: 0.3rem;
    color: #1C4525;
    background-color: #fff;
    height: 3.2rem;
    width: 18.8rem;
    display: flex;
    text-align: center;
    border-radius: 0.5rem;
    align-items: center;
`