import styled from "styled-components";

export const CaixaModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.7);      
    z-index: 9999;

    @media screen and (max-width: 500px) {
   
       /* top:-245px; */
    }
        
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

    @media screen and (max-width: 907px) {
        width:89.08%;
        height: 508px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
}

    @media screen and (max-width: 500px) {
        width:314px;
        height: 591px;
    }

@media screen and (max-width: 380px) {
    width:304px;
    height: 724px;
}




  `

export const Itens = styled.div`
    padding: 10px;
    gap: 24px;
    color: #228137;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    @media screen and (max-width: 500px) {
        gap: 24px;
        display: flex;
       
}

@media screen and (max-width: 375px) {
        gap: 24px;
       
}

`

export const Texto = styled.h1`
     color: #228137;
     font-size: 32px;
     margin-left: 22px;
     margin-bottom: 10px;
     font-weight: bold; 
         

     @media screen and (max-width: 500px) {
        white-space: nowrap;
        font-size: 26px;
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

export const TextDados = styled.p`
     color: #AF7503;
     word-wrap: break-word;
     white-space: nowrap;
`
export const Linha = styled.hr`
    color: black;
    width: 95%;

`

export const ContainerTextLinha = styled.div`
    display: flex;
    align-items: center;
    width: 97%;
    gap: 10px;

`

export const ContainerInputFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`

export const ContainerInputs = styled.div`
      display: flex;
      gap: 59px;
      ;

      @media screen and (max-width: 500px) {
        gap: 14px;
        display: flex;
        flex-direction: column;
}

@media screen and (max-width: 380px) {
        gap: 14px;
        display: flex;
        flex-direction: column;
}


`

export const ContainerButtons  = styled.div`
       display: flex;
       gap: 41px;
    

       @media screen and (max-width: 500px) {
        gap: 24px;
        display: flex;
        flex-direction: column-reverse;
       
}
 
`

