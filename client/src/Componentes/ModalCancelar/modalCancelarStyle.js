import styled from "styled-components";

export const Caixa= styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.7);
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
    display: flex;
    padding: 10px;
    gap: 8px;
    color: #228137;
    align-items: center;
    flex-direction: column;

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
export const ButtonStyle = styled.button`
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    background-color: #AF7503 ;
    padding: 12px 36px;
    border: 2px solid #AF7503;
    color: #FFFFFF;

`


