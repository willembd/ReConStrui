
import styled from "styled-components";

export const BigBox = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center; 
`
export const Caixa = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 91.2rem;
`;

export const Container = styled.div`
    width: 52.313rem;
    height: 68.25rem;
    background-color: white;
    padding: 1.25rem;
    border-radius:0.625rem;
    box-shadow: 0 0 0.938rem rgba(0, 0, 0, 0.1);
    position: relative;
  
    @media screen and (max-width: 500px) {
        width: 360px;
        height: 1800px;
        margin-bottom: 40px;
    }
   
`;


export const ButtonVoltar = styled.button`
    cursor: pointer;
    padding: 0.313rem;
    background-color: green;
    color: white;
    text-align: center;
    line-height: 1.875rem;
    border: none;
    position: absolute; 
    top: 0; 
    left: 0;
`;

export const ButtonContainer = styled.div`
    width: 100%;
`;

export const Titulo = styled.h1`
    color: #228137;
    margin-top: 0.625rem;
    justify-content: center;
    display: flex;
    margin-bottom: 3.125rem;
    font-weight: bold;
    font-size: 2.5rem;

    @media screen and (max-width: 500px) {
        font-size: 1.5rem;
    }
`;

export const ContainerCampos = styled.div`
    flex-direction: column;
    padding-bottom: 2.5rem;
    margin-left: 0.625rem;


    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`;



export const BarraInput = styled.div `
        padding: 0.06rem;
        width: 18.875rem;
        background-color: #1C4525;
        margin-top:0.5rem;
        border-radius: 0.13rem;

`
export const Dados = styled.div`
      display: flex;
      gap: 11.688rem;

      @media screen and (max-width: 500px) {
      
        gap: 11.688rem;

    }
     
`

export const BarraDados = styled.div`
       gap: 0.6rem;

`

export const SubTitulos = styled.h2`
    color: #AF7503;
    font-size: 1.5rem;
    width: auto;
    white-space: nowrap;
    margin-right: 15px;

    @media screen and (max-width: 500px) {
        font-size: 1rem;
        width: auto;
        white-space: nowrap;
    }


`;

export const ContainerCheckbox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    flex-direction: column;
    height: 100%;
    align-items: center;
    width: 68%;
`;

export const TextoCheckbox = styled.h3`
    color: #228137;
    margin-bottom: 0.6rem;
    color: #228137;
`;


export const FundoVerde = styled.div`
    height: 91.25rem;
    width: 81.25rem;
    background:#33603D;
    clip-path: polygon(0% 0%, 100% 0%, 40% 100%, 0% 100%);
    position: absolute;

    @media screen and (max-width: 500px) {
        width: 350px;
        height: 1842px;
    }
`;

export const BarraAmarela = styled.div`
    height: 91.25rem;
    width: 81.25rem;
    background: #B7821C;
    clip-path: polygon(100% 0%, 90% 0%, 40% 100%, 100% 0%);
    position: absolute;

    @media screen and (max-width: 500px) {
        width: 350px;
        height: 1842px;
    }
    
`;
export const LinhaA = styled.hr`
    color: black;
    width: 100%;

`
export const LinhaE = styled.hr`
    color: black;
    width: 100%;

`
export const BBarra = styled.div`
    height:0.125rem;
    width: 37.813rem;
    background-color: black;
    margin-top: 0.5rem;
    margin-left:2.438rem ;

    @media screen and (max-width: 500px) {
        width: 200px;
    }

`;

export const QuebraLinha = styled.div`
    display: flex;
    justify-content: space-around ;
    align-items: center;
    margin-bottom: 3rem;
  
    
`;

export const BBarra2 = styled.div`
    height:0.13rem;
    width: 42.5rem;
    background-color: black;
    margin-top: 0.5rem;
    margin-left: 2.438rem;

    @media screen and (max-width: 500px) {
        width: 200px;
    }

   

`;
export const BBarra3 = styled.div`
    height:0.13rem;
    width: 44.375rem;
    background-color: black;
    margin-top: 0.5rem;
    margin-left: 2.438rem;


    @media screen and (max-width: 500px) {
        width: 200px;
    }
`;


export const Botao = styled.div`
    padding: 0.9rem;
    width: 22.188rem;
    text-align: center;
    background-color: rgba(175, 117, 3, 0.9);
    color: #fff;
    border-radius: 0.3rem;
    margin-bottom:1.3rem ;
    margin-top: 1.875rem;
    font-weight: 600;
    font-size: 1.3rem;
    cursor: pointer;


    @media screen and (max-width: 500px) {
        padding: 12px;
        width: 300px;
    }
`;


export const CampoCentralizar = styled.div`
      display: flex;
      gap: 5.313rem;
      margin-bottom: 2.313rem;

      @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

`
export const InputCentralizar =   styled.div`
  display: flex;
  gap:5.313rem;

  @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`

export const CentralizarButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4.5rem;
`;


export const Linha = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`;

export const Campo = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  

  @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width:100%;
    }


`;

export const Label = styled.label`
  color: #228137;
  margin-bottom: 0.3rem;
  font-size: 1rem;

  @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`;




export const ValorTexto = styled.span`
  position: absolute;
  top: -2rem;
  left: 4.688rem;
  color: #000;
  font-size: 1rem;

  @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
  
`;


export const TextNome = styled.span`
  position: absolute;
  top: -2rem;
  left: 4.688rem;
  color: #000;
  font-size: 1rem;

  @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
  
`;
export const TextFone = styled.span`
  position: absolute;
  top: -2rem;
  left: 5.688rem;
  color: #000;
  font-size: 1rem;

  @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
  
`;

export const TextE = styled.span`
  position: absolute;
  top: -2rem;
  left: 5.688rem;
  color: #000;
  font-size: 1rem;

  @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
  
`;

export const TextCep = styled.span`
  position: absolute;
  top: -2rem;
  left: 3.688rem;
  color: #000;
  font-size: 1rem;

  @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
  
`;

export const TextM = styled.span`
  position: absolute;
  top: -2rem;
  left: 6.688rem;
  color: #000;
  font-size: 1rem;

  @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
  
`;

export const Valor = styled.div`
  height: 0.13rem;
  background-color: #1C4525;
  border-radius: 0.13rem;
  margin-top: 0.5rem;
  position: relative;

  @media screen and (max-width: 500px) {
        font-size: 16px;
    }
`;


