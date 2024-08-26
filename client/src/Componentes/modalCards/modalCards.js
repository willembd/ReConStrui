import styled from "styled-components";

export const BACKGROUND_STYLE = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: -1px;
    right: 0px;
    background-color: rgb(0, 0, 0, 0.7);
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
    width: 1000px;
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
    @media screen  and (max-width: 1330px){
        margin: 2.8rem;
    }
    @media screen  and (max-width: 1230px){
            margin: 2.5rem;
    }
    @media screen  and (max-width: 1145px){
        gap: 1rem;
        margin: 2rem;
    } 
    @media screen  and (max-width:1100px){
        margin: 1rem;
    }
    @media screen  and (max-width:565px){
        margin: 0.5rem;
    }
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
    @media screen and (max-width:626px) {
        gap: 1rem;
    }
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
    @media screen  and (max-width: 1151px){
       width : max-content;
    }
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
    @media screen  and (max-width: 1151px){
        width: 14rem;
        height: 19rem;
    } 
    @media screen  and (max-width: 920px){
        width: 11rem;
        height: 17rem;
    } 
    @media screen  and (max-width: 660px){
        width: 10rem;
    }
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
    @media screen  and (max-width: 1151px){
        width: 14rem;
        height: 5rem;
        margin-top: 14.1rem;
    } 
    @media screen  and (max-width: 920px){
        width: 11rem;
        height: 4.1rem;
        margin-top: 13rem;
    } 
    @media screen  and (max-width: 660px){
        width: 10rem;
    }
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
    @media (max-width:768px) {
        font-size: 0.9rem;
    }
`;
export const Palavra = styled.p`
    font-size: 0.8rem ;
    font-weight: normal;
    margin: 0.3rem;
    color: #fff;
    @media screen  and (max-width:768px) {
        
    }

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
    @media screen and (max-width:920px) {
        font-size: 1.6rem;
    }
`;
export const CaixaFundo = styled.div`
    width: 100%;
    height: 100.01%;
    background: #33603D;
    clip-path: polygon(0% 0%, 50% 0%, 49% 100%, 0% 100%);
    position: absolute;
    z-index: -1;
    border-radius: 0.5rem;
    
    @media screen and (max-width:1301px) {
        margin: -1px;
    }
`;
export const FUNDO = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    gap: 0.4rem;
    @media screen and (max-width:1335px) {
        gap: 0.2rem;
        width: fit-content;
    }
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
    @media screen  and (max-width: 775px){
        font-size: 0.8rem;
    }
`;
export const PP = styled.div`
    color: #228137;
    font-size: 0.8rem;
`;
export const Organizacao =styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;
    @media screen  and (max-width: 1260px){
        gap: 3px;
    }
    @media screen  and (max-width: 1260px){
        gap: 3px;
    }
    @media screen  and (max-width: 1100px){
        gap: 4rem;
    }
    @media screen  and (max-width: 1010px){
        gap: 2rem;
    }
    @media screen  and (max-width: 660px){
        gap: 2rem;
    }
    @media screen  and (max-width: 610px){
        gap: 1rem;
    }
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
    @media screen  and (max-width: 1130px){
        width: 18rem;
    }
    @media screen  and (max-width: 970px){
        width: 16rem;
    }
    @media screen  and (max-width: 870px){
        width: 14rem;
    }
    @media screen  and (max-width: 780px){
        width: 13rem;
    }
    @media screen  and (max-width: 720px){
        width: 12rem;
        height: 5rem;
    }
    @media screen  and (max-width: 720px){
        width: 11rem;
    }
    @media screen  and (max-width: 720px){
        width: 10rem;
        height: 6rem;
    }
    @media screen  and (max-width: 590px){
        width: 8rem;
        height: 6rem;
    }
`