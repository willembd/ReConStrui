import styled from "styled-components";


export const Caixa = styled.div`
    display: flex;
    justify-content: center;
    margin: 6.25rem 0rem;

    @media screen and (max-width: 31.25rem) {
        margin: 2.5rem 0rem;
    }
`;

export const Modal = styled.div`
    background-color: #fcfcfc;
    width: 65rem;
    height: 36.875rem;
    border-radius: 0.75rem;
    box-shadow: 0.5rem  0.5rem 0.625rem rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 31.25rem) {
        width: 21.875rem;
        height: 38.75rem;
        display: flex;
        justify-content: center;
    }
`;

export const ModalContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Button = styled.button`
    padding: 0.75rem;
    background-color: #228137;
    color: white;
    text-align: center;
    border: none;
    cursor: pointer;
    border-radius: 0rem 0.25rem 0.25rem 0rem;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 0.625rem;
`;

export const Imagem = styled.div`
    width: 50%;
    height: 36.875rem;
    border-radius: 0.75rem 0rem 0rem 0.75rem;

    @media screen and (max-width: 31.25rem) {
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

    @media screen and (max-width: 31.25rem) {
        width: 0rem;
    }
`;

export const Titulo = styled.h1`
    color: #228137;

    @media screen and (max-width: 31.25rem) {
        font-size: 2rem;
    }
    @media screen and (max-width: 25rem) {
        font-size: 1.5rem;
    }
`;

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin: 1.875rem 0rem 1.25rem 0rem;
`;

export const DivLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
    margin-top: 0.625rem;
`;

export const Links = styled.a`
    text-decoration: none;
    color: #228137;
    font-size: 1rem;

    @media screen and (max-width: 31.25rem) {
        font-size: 0.875rem;
    }
`;

export const CheckBoxTermo = styled.div`
     display: flex;
     justify-content: center;
     gap: 0.625rem;
     margin-bottom: 1.063rem;
`

export const ContainerTermo = styled.div`
    gap:0.875rem;
    display: flex;
    flex-direction: column

`
export const ContainerTextTermo = styled.div`
     width: 48.25rem;
     height: 17.938rem;
     overflow-y: scroll;
     border: 0.063rem solid #ccc;
     scrollbar-color: #228137 #ECECEC !important;


     @media screen and (max-width: 52.313rem) {
        width: 40.25rem;
        height: 17.938rem;
 }

     @media screen and (max-width: 45.225rem) {
        width:  36.813rem;
        height: 17.938rem;
}

     @media screen and (max-width: 31.25rem) {
         width: 19.563rem;
         height: 19.438rem;
}

    @media screen and (max-width: 24.625rem) {
        width: 15.25rem;
        height: 19.438rem;
}
 
`;

export const TittleTermo = styled.h1`
     color: #228137;
      

`
export const FlexText = styled.div`
     display: flex;
     flex-direction: column;
     margin: 1.188rem;
`
export const SubTittleTermo = styled.h2`
     margin-top: 0.625rem;
     margin-bottom: 0.625rem;
     color: black;
     font-size: 1.375rem;
`

export const TextTermo = styled.p`
      color: black;
`

export const TextP = styled.p`
        margin-bottom: 0.75rem;
`

export const ButtonTermo = styled.button`
    margin-left: 41.5rem;
    background-color: #fff;
    padding: 0.313rem 2.125rem;
    border: 0.063rem solid #228137;
    color: #228137;
    border-radius:0.25rem;
    font-size: 1.25rem;
    cursor: pointer;

    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 52.313rem) {
        margin-left: 32.375rem;
    }
    @media screen and (max-width: 45..625rem) {
         margin-left: 28.813rem;
    }      

    @media screen and (max-width: 31.25rem) {
        margin-left: 13.563rem;
        padding: 0.188rem 1.375rem;
        font-size: 1.125rem;
    }

    @media screen and (max-width: 24.625rem) {
        margin-left: 9.125rem;
       
    }
 ` 