
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
    width: 900px;
    height: 1300px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    position: relative;

    @media screen and (max-width: 500px) {
        width: 360px;
        height: 1800px;
        margin-bottom: 40px;
    }
`;


export const ButtonVoltar = styled.button`
    cursor: pointer;
    padding: 5px;
    background-color: green;
    color: white;
    text-align: center;
    line-height: 30px;
    border: none;
    position: absolute; 
    top: 0; 
    left: 0;
`;

export const ButtonContainer = styled.div`
    width: 100%;
`;

export const TextoCadastro = styled.h1`
    color: #228137;
    margin-top: 10px;
    justify-content: center;
    display: flex;
    margin-bottom: 50px;
    font-weight: bold;
    font-size: 2.5rem;

    @media screen and (max-width: 500px) {
        font-size: 1.5rem;
    }
`;

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-bottom: 40px;
`;

export const InputFlex = styled.div`
    display: flex;

    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`;

export const TTitulo = styled.h2`
    font-size: 1.5rem;
   
    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`;

export const ContainerCheckbox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;
    flex-direction: column;
    height: 100%;
    align-items: center;
    width: 68%;
`;

export const TextoCheckbox = styled.h3`
    color: #228137;
    margin-bottom: 10px;
    color: #228137;
`;

export const CheckboxMateriais1 = styled.div`
    display: flex;
    margin-bottom: 4px;
    color: #228137;
    list-style-type: none;
    font-size: 20px;
    justify-content: space-around;
    padding-top: 30px;
    padding-bottom: 40px;

    @media screen and (max-width: 500px) {
        font-size: 16px;
    }
`;

export const CheckboxMateriais2 = styled.div`
    display: flex;
    align-items: center ;
    margin-bottom: 4px;
    color: #228137;
    list-style-type: none ;
    font-size: 20px;
    justify-content: space-around;
    padding-bottom: 30px;

    @media screen and (max-width: 500px) {
        font-size: 16px;
    }
`;

export const CheckboxTransporte1 = styled.li`
    display: flex;
    align-items: center ;
    color: #228137;
    margin-right: 130px;
    font-size: 20px;
    gap: 8px;

    @media screen and (max-width: 500px) {
        font-size: 16px;
    }
`;

export const CheckboxTransporte2 = styled.li`
    display: flex;
    align-items: center ;
    margin-bottom: 5px;
    color: #228137;
    font-size: 20px;  
    gap: 8px;

    @media screen and (max-width: 500px) {
        font-size: 16px;
    }
`;

export const CheckboxTransporte = styled.div`
    display: flex;
    justify-content: center;
    gap: 130px;
    padding: 30px; 

    @media screen and (max-width: 500px) {
        gap: 0px;
    }
` ;

export const LinkCadastro = styled.a`
    color: #228137;
    text-decoration: none;
    margin-top: 10px;
    font-size: 16px;
`;

export const CaixaFundo = styled.div`
    height: 1460px;
    width: 1300px;
    background:#33603D;
    clip-path: polygon(0% 0%, 100% 0%, 40% 100%, 0% 100%);
    position: absolute;

    @media screen and (max-width: 500px) {
        width: 350px;
        height: 1842px;
    }
`;

export const BarraVertical = styled.div`
    height: 1460px;
    width: 1300px;
    background: #B7821C;
    clip-path: polygon(100% 0%, 90% 0%, 40% 100%, 100% 0%);
    position: absolute;

    @media screen and (max-width: 500px) {
        width: 350px;
        height: 1842px;
    }
    
`;

export const BBarra = styled.div`
    height:2px;
    width: 500px;
    background-color: black;
    margin-top: 8px;

    @media screen and (max-width: 500px) {
        width: 200px;
    }
`;

export const QuebraLinha = styled.div`
    display: flex;
    justify-content: space-around ;
    align-items: center;
`;

export const BBarra2 = styled.div`
    height:2px;
    width: 680px;
    background-color: black;
    margin-top: 8px;

    @media screen and (max-width: 500px) {
        width: 200px;
    }

`;
export const BBarra3 = styled.div`
    height:2px;
    width: 710px;
    background-color: black;
    margin-top: 8px;

    @media screen and (max-width: 500px) {
        width: 200px;
    }
`;

export const BBarra4 = styled.div`
    height:2px;
    width: 700px;
    background-color: black;
    margin-top: 8px;

    @media screen and (max-width: 500px) {
        width: 200px;
    }
`;

export const Botao = styled.div`
    padding: 15px;
    width: 355px;
    text-align: center;
    background-color: rgba(175, 117, 3, 0.9);
    color: #fff;
    border-radius: 4px;
    margin-bottom:20px ;
    margin-top: 30px;
    font-weight: 600;
    font-size: 20px;

    @media screen and (max-width: 500px) {
        padding: 12px;
        width: 300px;
    }
    
`;

export const PP = styled.p`
    font-size: 20px;
    display: flex;
    justify-content: center;
`;

export const Centralizar = styled.div`
    display: flex;
    justify-content: center;
`;
export const Cor = styled.div`
    color: #B7821C;
`;