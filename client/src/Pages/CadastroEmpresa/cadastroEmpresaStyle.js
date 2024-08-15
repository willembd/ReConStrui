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
    min-height: 120.1rem;

`;

export const Container = styled.div`
    width: 1097px;
    height: 1648px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    position: relative;
  
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
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 3.5rem;
   
    
`;

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 40px;

`;

export const InputFlex = styled.div`
    display: flex;
    gap: 117px;

`;

export const TTitulo = styled.h2`
    font-size: 2rem;
    width: auto;
    align-items: end;
`;

export const InputRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
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
    align-items: center ;
    gap: 20px;
    margin-bottom: 5px;
    color: #228137;
    list-style-type: none ;
    
`;

export const CheckboxMateriais2 = styled.div`
    display: flex;
    align-items: center ;
    gap: 75px;
    margin-bottom: 5px;
    color: #228137;
    list-style-type: none ;
    
     

`;
export const CheckboxTransporte1 = styled.li`
    display: flex;
    align-items: center ;
    color: #228137;
    margin-right: 130px;
    

     

`
export const CheckboxTransporte2 = styled.li`
    display: flex;
    align-items: center ;
    margin-bottom: 5px;
    color: #228137;
   

    
    
     

`
export const CheckboxTransporte = styled.div`
    display: flex;
    
    align-items: flex-start;
    
     
     
    
` 


export const LinkCadastro = styled.a`
    color: #228137;
    text-decoration: none;
    margin-top: 10px;
    font-size: 16px;
    
    
`;

export const CaixaFundo = styled.div`
    height: 1923px;
    width: 1500px;
    background:#33603D;
    clip-path: polygon(0% 0%, 100% 0%, 40% 100%, 0% 100%);
    position: absolute;
`;
export const BarraVertical = styled.div`
    height: 1923px;
    width: 1500px;
    background: #B7821C;
    clip-path: polygon(100% 0%, 90% 0%, 40% 100%, 100% 0%);
    position: absolute;
    
`;