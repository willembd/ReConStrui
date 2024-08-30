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
    height: 90px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 500px) {
        width: 270px;
        height: 68px;
}

   

  `   


export const Itens = styled.div`
    padding: 10px;
    gap: 50px;
    color: #228137;
   
   

`



export const Texto = styled.div`
         color: #228137;
         font-size: 20px ;
         
    @media screen and (max-width: 500px) {
        font-size: 13px ;

    }
    `

export const X = styled.button`
    background-color: #fff;
    cursor: pointer;
    position: absolute; /* Posiciona o 'X' em relação ao modal */
    top: 0px;
    right: 10px;
    font-size: 30px;
    font-weight: bold;
    color: #555;
    border: none;

` 
