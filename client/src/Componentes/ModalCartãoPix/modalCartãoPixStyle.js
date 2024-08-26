import styled from "styled-components";

export const CaixaEmail = styled.div`
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
    width: 468px;
    height: 219px;
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
     margin-bottom: 10px;
     font-weight: bold; 
         
         

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
export const ButtonCartão = styled.div`
    color: #fff;
    background-color: #1C4525;
    border-radius: 4px;
    cursor: pointer;
    padding: 10px;


    transition: transform 0.3s ease; 

  &:hover {
    transform: scale(1.1); 
  }
;
`

export const ButtonPix = styled.div`

        transition: transform 0.3s ease; 

        &:hover {
        transform: scale(1.1); 
        }
            
     background-color: #1C4525;
     color: #fff;
     border-radius: 4px;
     cursor: pointer;
     padding: 10px;
     width: 87px;
     display: flex;
     justify-content: center

   
    
`;
export const StyleButtons = styled.div`
     display: flex;
     align-items: center;
     gap: 54px;


     

`