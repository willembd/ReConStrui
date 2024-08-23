import styled from "styled-components";

export const CaixaModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.7);
    z-index: 9999;
        
`
export const ModalStyle = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FCFCFC;
    border: 2px solid #295032; 
    width:861px;
    height: 500px;
    border-radius: 8px;
    display: flex;
  
    padding: 20px;
    justify-content: space-around;
    flex-direction: column;
    
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
     color: #af7503;
     font-size: 19px;
     margin-left: 22px;
     margin-bottom: 10px;
     font-weight: bold; 
         
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

