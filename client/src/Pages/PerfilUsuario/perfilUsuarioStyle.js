import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Caixa = styled.div`
    background-color: white;
    display: flex;
    width: 60%;
    height: 37.5rem;
    border-radius: 0.75rem;
    box-shadow: 0.5rem 0.5rem 0.625rem rgba(0, 0, 0, 0.25);
    margin: 1.25rem;

    @media screen and (max-width: 31.25rem) {
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
    gap: 1.25rem;
    border-radius: 0.75rem 0 0 0.75rem;

    @media screen and (max-width: 31.25rem) {
        display: none;
    }
`;

export const ImgPerfil = styled.img`
    width: 40%;

    @media screen and (max-width: 31.25rem) {
        display: none;
    }
`;

export const TituloNome = styled.h1`
    color: white;
`;

export const ContainerSecondary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    gap: 1.25rem;

    @media screen and (max-width: 31.25rem) {
       width: 100%;
    }
`;

export const TituloEditar = styled.h1`
    color: #228137;
    margin-top: 1.25rem;

    @media screen and (max-width: 31.25rem) {
       width: 100%;
    }
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.125rem;

    @media screen and (max-width: 61.875rem) {
       width: 12.5rem;
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    width: 90%;
    justify-content: flex-end;
    margin-top: 1.5rem;
`;

export const ButtonExcluir = styled.button`
    background: none;
    border: none;
    color: #7B7B7B;
    cursor: pointer;
    
    &:hover {
        color: red;
    }

    @media screen and (max-width: 31.25rem) {
       display: flex;
       flex-direction: column;
    }
`;
