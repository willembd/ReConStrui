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
    min-height: 100vh;
    background-color: #F8F8F8;

`;

export const Container = styled.div`
    width: 900px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    position: relative;
  
`;

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    text-align: center;
`;

export const ButtonVoltar = styled.button`
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
    /* margin-bottom: 40px; */
   
    
`;

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const InputLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
`;

export const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
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
    list-style-type: none 
    
     
  

`
export const CheckboxMateriais2 = styled.div`
    display: flex;
    align-items: center ;
    gap: 75px;
    margin-bottom: 5px;
    color: #228137;
    list-style-type: none 
    
     

`
export const CheckboxTransporte1 = styled.li`
    display: flex;
    align-items: center ;
    /* margin-bottom: 5px; */
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
    
    align-items: flex-start
    
     
     
    
` 


export const LinkCadastro = styled.a`
    color: #228137;
    text-decoration: none;
    margin-top: 10px;
    font-size: 16px;
    
    
`;
