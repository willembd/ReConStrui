import styled from "styled-components";


export const Caixa = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px 0px;

    @media screen and (max-width: 500px) {
        margin: 40px 0px;
    }
`;

export const Modal = styled.div`
    background-color: #fcfcfc;
    width: 1040px;
    height: 590px;
    border-radius: 12px;
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 500px) {
        width: 350px;
        height: 620px;
        display: flex;
        justify-content: center;
    }
`;

export const ModalContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Button = styled.button`
    padding: 12px;
    background-color: #228137;
    color: white;
    text-align: center;
    border: none;
    cursor: pointer;
    border-radius: 0px 4px 4px 0px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 10px;
`;

export const Imagem = styled.div`
    width: 50%;
    height: 590px;
    border-radius: 12px 0px 0px 12px;

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const Logo = styled.img`
    max-height: 100%;
`;

export const FormLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    @media screen and (max-width: 500px) {
        width: 0px;
    }
`;

export const Titulo = styled.h1`
    color: #228137;

    @media screen and (max-width: 500px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 400px) {
        font-size: 1.5rem;
    }
`;

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin: 30px 0px 20px 0px;
`;

export const DivLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
`;

export const Links = styled.a`
    text-decoration: none;
    color: #228137;
    font-size: 16px;

    @media screen and (max-width: 500px) {
        font-size: 14px;
    }
`;

export const CheckBoxTermo = styled.div`
     display: flex;
     justify-content: center;
     gap: 10px;
     margin-bottom: 17px;
`

export const ContainerTermo = styled.div`
    gap: 14px;
    display: flex;
    flex-direction: column

`
export const ContainerTextTermo = styled.div`
     width: 772px;
     height: 287px;
     overflow-y: scroll;
     border: 1px solid #ccc;
     scrollbar-color: #228137 #ECECEC !important;


     @media screen and (max-width: 837px) {
        width: 644px;
        height: 287px;
 }

     @media screen and (max-width: 730px) {
        width:  589px;
        height: 287px;
}

     @media screen and (max-width: 500px) {
         width: 313px;
         height: 311px;
}

    @media screen and (max-width: 394px) {
        width: 244px;
        height: 311px;
}
 
`;

export const TittleTermo = styled.h1`
     color: #228137;
      

`
export const FlexText = styled.div`
     display: flex;
     flex-direction: column;
     margin: 19px;
`
export const SubTittleTermo = styled.h2`
     margin-top: 10px;
     margin-bottom: 10px;
     color: black;
     font-size: 22px;
`

export const TextTermo = styled.p`
      color: black;
`

export const TextP = styled.p`
        margin-bottom: 12px;
`

export const ButtonTermo = styled.button`
    margin-left: 644px;
    background-color: #fff;
    padding: 5px 34px;
    border: 1px solid #228137;
    color: #228137;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;

    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 837px) {
        margin-left: 518px;
    }
    @media screen and (max-width: 730px) {
         margin-left: 461px;
    }      

    @media screen and (max-width: 500px) {
        margin-left: 217px;
        padding: 3px 22px;
        font-size: 18px ;
    }

    @media screen and (max-width: 394px) {
        margin-left: 146px;
       
    }
 ` 