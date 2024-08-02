import styled from "styled-components";

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
`;

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    text-align: center;
`;

export const TextoCadastro = styled.h1`
    color: #228137;
    margin-top: 10px;
   
    
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

export const BotaoCadastrar = styled.button`
    background-color: #C39B58;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    width: 100%;
`;

export const LinkCadastro = styled.a`
    color: #228137;
    text-decoration: none;
    margin-top: 10px;
    font-size: 16px;
    
    
`;
