import styled from "styled-components";

import PlanoFundo from "../../assets/planodefundo.svg";

export const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 99.1rem;
    background-image: url(${PlanoFundo});
    background-repeat: no-repeat;
    width: 100%;
`;
export const Container = styled.div`
    width: 900px;
    height: 1350px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 882px) {
        width: 100%;
        height:3500px;
    }
`;

export const Pedidos = styled.h1`
    font-size: 40px;
    color: #228137;
    font-weight: bold;
    padding-bottom: 10px;

    @media screen and (max-width: 882px) {
        font-size:20px;
        white-space:nowrap;
        
        
    }

`;
export const TXT = styled.p`
    font-size: 24px;
    color: #af7503;
    padding-bottom: 15px;

    @media screen and (max-width: 882px) {
        font-size:13px;
        
    }

`;
export const PP = styled.p`
    font-size: 16px;
    color: #228137;
    font-weight: 600;
`;

export const CContainer = styled.div`
    display: flex;
    padding-top: 2.2rem;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 15px;

    @media screen and (max-width: 882px) {
        width: 100%;
        padding-bottom: 30px;
        height:400px;
    }
`;

export const CCaixa = styled.div`
    width: 750px;
    height: 340px;
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    position: relative;

    @media screen and (max-width: 882px) {
        width: 100%;
        gap:20px;
        height:420px;
        
    }
`;
export const PPP = styled.p`
    font-size: 16px;
    color: #228137;
    font-weight: bolder;

    @media screen and (max-width: 444px) {
       font-size:15px;
    }
`;
export const PPALAVRA = styled.p`
    font-size: 24px;
    color: #228137;
    font-weight: bold;

    @media screen and (max-width: 444px) {
       font-size:15px;
     
    }
`;

export const CCaixinha = styled.div`
    width: 100%;
    height: 230px;
    background-color: white;
    border: 2px solid #e0e0e0;

    @media screen and (max-width: 444px) {
        width: 100%;
        height:330px; 
    }
`;

export const PLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 6px;

    @media screen and (max-width: 444px) {
        font-size:16px;
    }

`;

export const PaLavra = styled.p`
    font-size: 12px;
    font-weight: bold;

    @media screen and (max-width: 444px) {
        font-size:9px;
     
    }
`;

export const Barra = styled.div`
    width: 425px;
    height: 2px;
    background-color: black;

`;
export const AAlinha = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

  

`;

export const IIIMG = styled.img`
    height: 110px;
    width: 150px;
    margin-top: 20px;
    border-radius: 4px;
`;

export const TTTitle = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: #228137;
`;
export const SobreContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;

    @media screen and (max-width: 466px) {
        flex-direction:column;
        height:400px;
    }
`;

export const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const BarraAguardando = styled.div`
    width: 210px;
    height: 12px;
    background-color: #aaaaaa;
    border-radius: 200px;

    @media screen and (max-width: 444px) {
        width: 110px;
        
    }
   
`;
export const BBarraAguardando = styled.div`
    width: 210px;
    height: 12px;
    background-color: red;
    position: absolute;
    border-radius: 200px;

    @media screen and (max-width: 444px) {
        width: 110px;
        
    }
`;
export const BBotao = styled.button`
    background-color: rgba(175, 117, 3, 0.9);
    color: #fff;
    font-size: 16px;
    border: none;
    padding: 0.6rem 1.1rem;
    border-radius: 4px;
    cursor: pointer;

    @media screen and (max-width: 882px) {
        font-size: 15px;
    }

   
`;

export const LETRA = styled.p`
    font-size: 16px;
    color: #228137;
`;

export const QuebraLinha = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 444px) {
        width: 312px;
        height:400px;
        flex-direction:column;
    }
`;

export const Flex = styled.div`
    display: flex;
    gap: 10px;
`;
export const FlexColomn = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Caixinha = styled.div`
    width: 100%;
    height: 28px;
    background-color: white;
    border-bottom: 2px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
`;

export const LLinks = styled.p`
    font-size: 14px;
    color: #228137;
    padding: 12px;
    cursor: pointer;
`;
export const PPalavra = styled.div`
    font-size: 16px;
    font-weight: bolder;
    color: #af7503;

    @media screen and (max-width: 444px) {
       font-size:10px;
    }
    
`;
export const BarraAguardandoC = styled.div`
    width: 210px;
    height: 12px;
    background-color: red;
    border-radius: 200px;

    @media screen and (max-width: 444px) {
        width: 110px;
        
    }

`;
export const BBarraAguardandoT = styled.div`
    width: 210px;
    height: 12px;
    border-radius: 200px;

    @media screen and (max-width: 444px) {
        width: 110px;
        
    }
`;








