import styled from "styled-components";

export const Caixa= styled.div`
        z-index: 9999;  
        
`
export const ModalStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FCFCFC;
    border: 2px solid #295032; 
    width: 465px;
    height: 90px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 81px;
    justify-content: center;

    
   

  `   


export const Itens = styled.div`
    padding: 10px;
    gap: 50px;
    color: #228137;
    align-items: center;

   
   

`



export const Texto = styled.div`
         color: #228137;
         font-size: 16px;
         white-space: nowrap;
         display: flex;
         align-items: center;
         
         

`

export const X = styled.div`
    
    cursor: pointer;
    position: absolute; 
    top: 0px;
    right: 10px;
    font-size: 30px;
    font-weight: bold;
    color: #555;

` 
                             
export const Buttons = styled.div`
      margin-top: 20px;
      display: flex;
      align-items: center;
      gap: 65px;
      justify-content: center
      


`


