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
    justify-content: space-around;
   
    @media screen and (max-width: 500px) {
        width: 264px;
        height: 147px;


    }
  ` ;  


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
     font-size: 23px;
     margin-left: 22px;
     margin-bottom: 10px;
     font-weight: bold; 

     @media screen and (max-width: 500px) {
      font-size: 17px;


    }
         
         

`

export const X = styled.button`
    
    cursor: pointer;
    position: absolute; 
    top: 8px;
    right: 10px;
    font-size: 26px;
    font-weight: bold;
    color: #555;
    background-color: #fff ;
    border: none;

    @media screen and (max-width: 500px) {
    
   
      font-size: 17px;
}

` 
export const ButtonCartão = styled.button`
    background-color: #295032;
    padding: 10px 17px;
    border: 1px solid #295032;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
   

    @media screen and (max-width: 500px) {
    
        padding: 8px 11px;
        font-size:12px;

    }
         

 
    transition: transform 0.3s ease; 

  &:hover {
    transform: scale(1.1); 
  }
;
`

export const ButtonPix = styled.button`

        transition: transform 0.3s ease; 

        &:hover {
        transform: scale(1.1); 
        }
            
    background-color: #295032;
    padding: 10px 32px;
    border: 1px solid #295032;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    transition: transform 0.3s ease; 

    &:hover {
    transform: scale(1.1); 
    }
    
    @media screen and (max-width: 500px) {
    padding: 8px 22px;
    font-size:12px;


}

`;
export const StyleButtons = styled.div`
     display: flex;
     align-items: center;
     gap: 54px;


     

`