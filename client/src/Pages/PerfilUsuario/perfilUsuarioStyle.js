import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Caixa = styled.div`
    background-color: white;
    display: flex;
    width: 60%;
    height: 600px;
    border-radius: 12px;
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.25);
    margin: 20px;

    @media screen and (max-width: 500px) {
        width: 80%;
    }
`;

export const ContainerPrimaty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #33603D;
    width: 50%;
    gap: 20px;
    border-radius: 12px 0px 0px 12px;

    @media screen and (max-width: 500px) {
        display: none;
    }
`
export const ImgPerfil = styled.img`
    width: 40%;

    @media screen and (max-width: 500px) {
        display: none;
    }
`
export const TituloNome = styled.h1`
    color: white;
`

export const ContainerSecondary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    gap: 20px;

    @media screen and (max-width: 500px) {
       width: 100%;
    }
`
export const TituloEditar = styled.h1`
    color: #228137;
    margin-top: 20px;

    @media screen and (max-width: 500px) {
       width: 100%;
    }

`
export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`

export const ContainerButton = styled.div`
    display: flex;
    width: 90%;
    justify-content: flex-end;
    margin-top: 24px;
`

export const ButtonExcluir = styled.button`
    background: none;
    border: none;
    color: #7B7B7B;
    cursor: pointer;
    
    &:hover{
        color: red;
        
    }

    @media screen and (max-width: 500px) {
       display:flex;
       flex-direction:column;
       
    }
`