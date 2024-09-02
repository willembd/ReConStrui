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
    width: 363px;
    height: 189px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 20px;
    justify-content: space-around;
    
    @media screen and (max-width: 500px) {
               width: 297px;
    }

  
  `   


export const Itens = styled.div`
    padding: 10px;
    gap: 24px;
    color: #228137;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    

`

export const Texto = styled.h1`
         color: #228137;
         font-size: 19px;
         margin-left: 22px;
         
         @media screen and (max-width: 500px) {
            font-size: 14px;
    }



`

export const X = styled.button`
    
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 10px;
    font-size: 30px;
    font-weight: bold;
    color: #555;
    background-color: #fff;
    border: none;
` 
