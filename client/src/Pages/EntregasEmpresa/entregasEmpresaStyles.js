import styled from "styled-components";

export const Caixa = styled.div`
    margin: 3.75rem 11.25rem;

    @media screen and (max-width: 75.625rem) {
        margin: 3.75rem 4.375rem;
    }
`;

export const DivLink = styled.div`
    display: flex;
    justify-content: space-around;

    a {
        color: #228137;
        font-size: 1.5rem;
        text-decoration: none;
        margin-bottom: 1.25rem;
    }
`;

export const Pedido = styled.div`
    display: flex;
    justify-content: space-around;
    border-radius: 0.75rem;
    box-shadow: 0.5rem 0.5rem 0.625rem rgba(0, 0, 0, 0.25);
    padding: 1.25rem;
    margin: 1.25rem 0 3.75rem 0;
`;

export const DivEmpresa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.625rem;
    margin-bottom: 0.625rem;

    h1 {
        color: #228137;
        font-weight: bold;
    }
    p {
        color: #AF7503;
    }

    @media screen and (max-width: 96.25rem) {
        h1 {
            font-size: 1.75rem;
        }
    }

    @media screen and (max-width: 84.375rem) {
        h1 {
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 71.5rem) {
        h1 {
            font-size: 1.375rem;
        }
    }
`;

export const Imagem = styled.img`
    border-radius: 0.75rem;

    @media screen and (max-width: 96.25rem) {
        width: 21.875rem;
    }
    @media screen and (max-width: 67.5rem) {
        width: 18.75rem;
    }
`;

export const Dados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h2 {
        color: #228137;
        font-weight: bold;
    }
    @media screen and (max-width: 96.25rem) {
        h2 {
            font-size: 1.125rem;
        }
    }
    @media screen and (max-width: 67.5rem) {
        h2 {
            font-size: 1rem;
        }
    }
`;

export const DivResposta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;

    h1 {
        color: #228137;
        font-size: 2rem;
    }

    @media screen and (max-width: 96.25rem) {
        h1 {
            font-size: 1.375rem;
        }
    }
    @media screen and (max-width: 67.5rem) {
        h1 {
            font-size: 1.125rem;
        }
    }
`;

export const Progress = styled.div`
    width: 22.5rem;
    height: 0.75rem;
    background-color: #AAAAAA;
    border-radius: 0.625rem;

    @media screen and (max-width: 96.25rem) {
        width: 16.25rem;
    }

    @media screen and (max-width: 67.5rem) {
        width: 11.25rem;
    }
`;

export const ProgressCampo = styled.div`
    width: 15rem;
    height: 0.75rem;
    background-color: #228137;
    border-radius: 0.3125rem;

    @media screen and (max-width: 96.25rem) {
        width: 10.75rem;
    }

    @media screen and (max-width: 67.5rem) {
        width: 7.5rem;
    }
`;

export const DivButton = styled.div`
    display: flex;
    gap: 1.25rem;
`;
