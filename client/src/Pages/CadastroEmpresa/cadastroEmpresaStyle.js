import styled from "styled-components";

import PlanoFundo from "../../assets/planodefundo.svg";


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
    background-image: url(${PlanoFundo});
    background-repeat: no-repeat;

`;

export const Container = styled.div`
    width: 56.25rem;
    height: 81.25rem;
    background-color: white;
    padding: 1.25rem;
    border-radius: 0.065rem;
    box-shadow: 0rem 0rem 0.638rem rgba(0, 0, 0, 0.1);
    position: relative;

    @media screen and (max-width: 31.25rem) {
        width: 22.5rem;
        height: 112.5rem;
        margin-bottom: 2.5rem;
    }
`;


export const ButtonVoltar = styled.button`
    padding: 0.75rem;
    background-color: #228137;
    color: white;
    text-align: center;
    border: none;
    cursor: pointer;
    border-radius: 0rem 0.25rem 0.25rem 0rem;
    position: absolute; 
    top: 1.25rem ;
    left: 0rem;
`;

export const ButtonContainer = styled.div`
    width: 100%;
`;

export const TextoCadastro = styled.h1`
    color: #228137;
    margin-top:0.625rem;
    justify-content: center;
    display: flex;
    margin-bottom: 0.625rem;
    font-weight: bold;
    font-size: 2.2rem;

    @media screen and (max-width: 31.25rem) {
        font-size: 1.5rem;
    }
`;

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2.5rem;
`;

export const InputFlex = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 2.813rem;

    @media screen and (max-width: 31.25rem) {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
`;

export const TTitulo = styled.h2`
    font-size: 1.5rem;
    color: #AF7503;
   
    @media screen and (max-width: 31.25rem) {
        font-size: 1rem;
    }
`;

export const ContainerCheckbox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0rem;
    flex-direction: column;
    height: 100%;
    align-items: center;
    width: 68%;
`;

export const TextoCheckbox = styled.h3`
    color: #228137;
    margin-bottom: 0.625rem;
    color: #228137;
`;

export const CheckboxMateriais = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    color: #228137;
    list-style-type: none;
    font-size: 1.25rem;
    gap: 1.25rem;

    @media screen and (max-width: 31.25rem) {
        font-size: 0.938rem;
        flex-direction:column;
    }
`;

export const Material = styled.div`
    display: flex;
    gap:0.25rem;
`


export const CheckboxTransporte1 = styled.li`
    display: flex;
    align-items: center;
    color: #228137;
    font-size: 1.25rem;
    gap: 0.375rem;

    @media screen and (max-width: 31.25rem) {
        font-size: 1rem;
    }
`;


export const CheckboxTransporte = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    width: 80%;
    @media screen and (max-width: 31.25rem) {
        gap: 0px;
    }
` ;

export const LinkCadastro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
`;

export const CaixaFundo = styled.div`
    height: 91.25rem;
    width: 81.25rem;
    background:#33603D;
    clip-path: polygon(0% 0%, 100% 0%, 40% 100%, 0% 100%);
    position: absolute;

    @media screen and (max-width: 31.25rem) {
        width: 21.875rem;
        height: 115.125rem;
    }
`;

export const BarraVertical = styled.div`
    height: 91.25rem;
    width: 81.25rem;
    background: #B7821C;
    clip-path: polygon(100% 0%, 90% 0%, 40% 100%, 100% 0%);
    position: absolute;

    @media screen and (max-width: 31.25rem) {
        width: 21.87rem;
        height: 115.125rem;
    }
    
`;

export const BBarra = styled.div`
    height:2px;
    width: 500px;
    background-color: black;
    margin-top: 0.5rem;

    @media screen and (max-width: 31.25rem) {
        width: 12.5rem;
    }
`;

export const QuebraLinha = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    gap: 0.625rem;
   
`;

export const Linha = styled.hr`
    color: black;
    width: 60%;

`
export const LinhaE = styled.hr`
    color: black;
    width: 100%;

`

export const BBarra2 = styled.div`
    height:0.125rem;
    width: 37.5rem;
    background-color: black;
    margin-top: 0.5rem;

    @media screen and (max-width: 31.25rem) {
        width: 12.5rem;
    }

`;
export const BBarra3 = styled.div`
    height:2px;
    width: 710px;
    background-color: black;
    margin-top: 0.5rem;

    @media screen and (max-width: 31.25rem) {
        width: 12.5rem;
    }
`;

export const BBarra4 = styled.div`
    height:2px;
    width: 700px;
    background-color: black;
    margin-top: 8px;

    @media screen and (max-width: 31.25rem) {
        width: 200px;
    }
`;

export const Botao = styled.div`
    padding: 0.75rem;
    width: 21.625rem;
    text-align: center;
    background-color: rgba(175, 117, 3, 0.9);
    color: #fff;
    border-radius: 0.25rem;
    margin-bottom: 0.75rem ;
    font-weight: 37.5rem;
    font-size: 1.25rem;
    cursor: pointer;

    @media screen and (max-width: 31.25rem) {
        padding: 0.75rem;
        width: 12.5rem;
        height:25rem;
        font-size:0.938rem;
    }
    
`;

export const PP = styled.p`
    font-size: 1.25rem;
    color: #228137;
    display: flex;
    justify-content: center;

    @media screen {
        font-size:0.938rem;
    }
    
`;

export const Centralizar = styled.div`
    display: flex;
    justify-content: center;
`;
export const Link = styled.a`
    color: #B7821C;
    text-decoration: none;
    font-size: 1.25rem;

    @media screen {
        font-size:0.938rem;
    }
`;

export const CheckBoxTermo = styled.div`
     display: flex;
     justify-content: center;
     gap: 0.625rem;
     margin-bottom: 1.063rem;
`
export const ContainerTermo = styled.div`
    gap: 0.875rem;
    display: flex;
    flex-direction: column

`
export const ContainerTextTermo = styled.div`
     width: 48.25rem;
     height: 17.238rem;
     overflow-y: scroll;
     border: 0.063 solid #ccc;
     scrollbar-color: #228137 #ECECEC !important; 


     @media screen and (max-width: 52.313rem) {
        width: 40.25rem;
        height: 17.938rem;
 }

    @media screen and (max-width: 45.625rem) {
        width: 36.813rem;
        height: 17.938rem;
 }

    @media screen and (max-width: 31.25rem) {
        width: 19.563rem;
        height: 19.438rem;
 }

   @media screen and (max-width: 24.625rem) {
        width: 15.25rem;
        height: 19.438rem,;
}
 
`;

export const TittleTermo = styled.h1`
     color: #228137;
      

`
export const FlexText = styled.div`
     display: flex;
     flex-direction: column;
     margin: 1.188rem;
`
export const SubTittleTermo = styled.h2`
     margin-top: 0.625rem;
     margin-bottom: 0.625rem;
     color: black;
     font-size: 0.625rem;
         
`

export const TextTermo = styled.p`
      color: black;
`

export const TextP = styled.p`
        margin-bottom: 0.75rem;
`

export const ButtonTermo = styled.button`
    margin-left: 40.25rem;
    background-color: #fff;
    padding: 0.313rem  2.125rem;
    border: 0.063rem solid #228137;
    color: #228137;
    border-radius: 0.25rem,;
    font-size: 1.25rem;
    cursor: pointer;

    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 52.313rem) {
        margin-left: 32.375rem;
    }
    @media screen and (max-width: 45.625rem) {
         margin-left: 28.813rem;
    }      

    @media screen and (max-width: 31.25rem) {
        margin-left: 13.563rem;
        padding: 0.188rem  1.375rem;
        font-size: 1.125rem;
    }
    @media screen and (max-width: 24.625rem) {
        margin-left: 9.125rem;
       
    }
 
`