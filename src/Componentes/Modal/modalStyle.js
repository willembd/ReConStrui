import styled from "styled-components";

export const CaixaEmail = styled.div`
        
        
`
export const ModalStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FCFCFC;
    border: 2px solid #295032; 
    width: 363px;
    height: 159px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 20px;
    justify-content: space-around
   

  `   


export const Itens = styled.div`
    padding: 10px;
    gap: 24px;
    color: #228137;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    
   
   

`



export const Texto = styled.div`
         color: #228137;
         font-size: 19px;
         margin-left: 22px;
         
         

`

export const X = styled.div`
    
    cursor: pointer;
    position: absolute; /* Posiciona o 'X' em relação ao modal */
    top: 0px;
    right: 10px;
    font-size: 30px;
    font-weight: bold;
    color: #555;

` 
