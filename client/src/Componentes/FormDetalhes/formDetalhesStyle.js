import styled from "styled-components";

export const Container = styled.div`
    padding: 0.625rem;
    background-color: white;
`;

export const Caixa = styled.div`
    width: 46.875rem;
    height: 21.9375rem;
    background-color: rgba(231, 230, 230, 0.5);
    padding: 1.1875rem;
    border-radius: 0.625rem;
    box-shadow: 0 0 0.9375rem rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;

    @media screen and (max-width: 51.75rem) {
        width: 39.5rem;
        display: flex;
    }

    @media screen and (max-width: 45.75rem) {
        width: 106%;
    }

    @media screen and (max-width: 31.25rem) {
        width: 17.5625rem;
        height: 47.25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
    }

    @media screen and (max-width: 23.4375rem) {
        width: 14.9375rem;
    }
`;

export const PPALAVRA = styled.p`
    font-size: 0.9375rem;
    color: black;
    font-weight: 600;
    border: 1px #E1E1E1;
    padding-bottom: 0.9375rem;
`;

export const FlexCaixa1 = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 27.5rem;

    @media screen and (max-width: 31.25rem) {
        width: 11.9375rem;
    }
`;

export const FlexCaixa4 = styled.div`
    justify-content: center;
    align-items: flex-end;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 51.75rem) {
        height: 19.8125rem;
    }
`;

export const Caixa1 = styled.div`
    width: 9.375rem;
    height: 18.125rem;
    background-color: white;
    border: 1px solid #E0E0E0;

    @media screen and (max-width: 51.75rem) {
        width: 8.25rem;
    }
    @media screen and (max-width: 45.75rem) {
        width: 6.9375rem;
    }
    @media screen and (max-width: 31.25rem) {
        width: 12rem;
        height: 9.5625rem;
    }
`;

export const Caixa2 = styled.div`
    height: 18.125rem;
    background-color: white;
    margin-top: 1.125rem;
    border-bottom: 1px solid #E0E0E0;
    border-top: 1px solid #E0E0E0;
    border-right: 1px solid #E0E0E0;

    @media screen and (max-width: 51.75rem) {
        width: 11.6875rem;
        height: 18.125rem;
    }
    @media screen and (max-width: 31.25rem) {
        height: 11.1875rem;
    }
`;

export const Caixa3 = styled.div`
    width: 14.9375rem;
    height: 18.125rem;
    background-color: white;
    border-top: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
    margin-top: 1.125rem;

    @media screen and (max-width: 51.75rem) {
        width: 11.75rem;
        height: 18.125rem;
    }
    @media screen and (max-width: 31.25rem) {
        height: 10.0625rem;
    }
`;

export const Caixa4 = styled.div`
    width: 8.625rem;
    height: 18.125rem;
    background-color: white;
    border: 1px solid #E0E0E0;

    @media screen and (max-width: 51.75rem) {
        width: 6rem;
        height: 18.125rem;
    }
    @media screen and (max-width: 31.25rem) {
        width: 11.6875rem;
        height: 10.6875rem;
    }
`;

export const IdDados = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Alinha = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 5rem;
`;

export const TextBox = styled.p`
    font-size: 0.9375rem;
    margin-top: 0.375rem;

    @media screen and (max-width: 51.75rem) {
        font-size: 0.75rem;
    }
`;

export const Linha = styled.div`
    position: absolute;
    top: 0.125rem;
    left: 13.125rem;
    width: 0.25rem;
    height: 19.375rem;
    background-color: black;
    z-index: 10;
`;

export const Img = styled.img`
    height: 5.4375rem;
    width: 7.75rem;
    margin-top: 3.3125rem;

    @media screen and (max-width: 51.75rem) {
        height: 4.375rem;
        width: 6.125rem;
    }

    @media screen and (max-width: 31.25rem) {
        height: 4.375rem;
        width: 6.125rem;
        margin-top: 0.875rem;
    }
`;

export const TextProduto = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: #228137;

    @media screen and (max-width: 51.75rem) {
        font-size: 0.6875rem;
    }
`;

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container2 = styled.div`
    margin: 1.125rem;
    display: flex;
    flex-direction: column;
    gap: 0.4375rem;
    margin-top: 3.75rem;

    @media screen and (max-width: 31.25rem) {
        margin-top: 0.9375rem;
    }
`;

export const Container3 = styled.div`
    margin: 1.125rem;
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
    margin-top: 4.625rem;

    @media screen and (max-width: 31.25rem) {
        margin-top: 0.9375rem;
    }
`;

export const Container4 = styled.div`
    align-items: center;
    flex-direction: column;
    margin-top: 0.625rem;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 31.25rem) {
        margin-top: -3.25rem;
    }
`;

export const BarraAguardando = styled.div`
    width: 12.5rem;
    height: 0.8125rem;
    background-color: #AAAAAA;
    border-radius: 1.25rem;
`;

export const BBarraAguardando = styled.div`
    width: 6.625rem;
    height: 0.8125rem;
    background-color: #228137;
    position: absolute;
    border-radius: 1.25rem;
`;

export const LETRA = styled.p`
    font-size: 1rem;
    color: #228137;
`;

export const QuebraLinha = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
`;




export const LabelProduto = styled.div`
    width: 9.25rem;
    height: 1.75rem;
    background-color: white;
    border-bottom: 0.0625rem solid #E0E0E0;

    @media screen and (max-width: 51.75rem) {
        width: 8.125rem;
    }

    @media screen and (max-width: 48.6875rem) {
        width: 8.0625rem;
    }
`;

export const LabelEndereço = styled.div`
    width: 12.75rem;
    height: 1.75rem;
    background-color: white;
    border-bottom: 0.0625rem solid #E0E0E0;

    @media screen and (max-width: 51.75rem) {
        width: 11.625rem;
    }
`;

export const LabelCliente = styled.div`
    width: 14.875rem;
    height: 1.75rem;
    background-color: white;
    border-bottom: 0.0625rem solid #E0E0E0;

    @media screen and (max-width: 51.75rem) {
        width: 11.75rem;
    }
`;

export const LabelQuantidade = styled.div`
    width: 8.3125rem;
    height: 1.75rem;
    background-color: white;
    border-bottom: 0.0625rem solid #E0E0E0;

    @media screen and (max-width: 51.75rem) {
        width: 5.9375rem;
    }

    @media screen and (max-width: 31.25rem) {
        width: 11.5625rem;
    }
`;

export const NameUsina = styled.div`
    font-size: 1rem;
    color: #AF7503;

    @media screen and (max-width: 51.75rem) {
        font-size: 0.75rem;
    }
`;

export const Text = styled.div`
    color: black;
    white-space: nowrap;
    margin-left: 0.625rem;
    font-size: 0.6875rem;

    @media screen and (max-width: 51.75rem) {
        font-size: 0.625rem;
    }
`;

export const CampoPequeno = styled.div`
    display: flex;
    border-bottom: 0.125rem solid #1C4525;
    height: 0.625rem;
    width: 5.25rem;

    @media screen and (max-width: 31.25rem) {
        width: 8.0625rem;
    }
`;

export const CampoMenor = styled.div`
    display: flex;
    border-bottom: 0.125rem solid #1C4525;
    height: 0.625rem;
    width: 4.8125rem;

    @media screen and (max-width: 52.5rem) {
        width: 4.3125rem;
    }
`;

export const CampoFlex = styled.div`
    margin-top: 0.625rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Metros = styled.div`
    font-size: 0.625rem;
    display: flex;
    justify-content: center;
`;

export const FlexN = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const FlexCep = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ColorP = styled.p`
    color: green;
    font-size: 0.6875rem;
    margin-right: 0.5rem;
`;

export const ColorSpan = styled.span`
    color: black;
    font-size: 0.625rem;

    @media screen and (max-width: 51.75rem) {
        white-space: nowrap;
        font-size: 0.5rem;
    }
`;

export const FlexM = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 6.1875rem;
`;

export const FlexContainerPrimeiro = styled.div`
    display: flex;

    @media screen and (max-width: 31.25rem) {
        display: flex;
    }
`;

