import styled from "styled-components";

import PlanoFundo from "../../assets/planodefundo.svg";

export const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 99.1rem;
    background-image: url(${PlanoFundo});
    background-repeat: no-repeat;
    width: 100%;

    @media screen and (max-width: 25.625rem) {
        width: 95%;
    }
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: #228137;
    font-weight: bold;
    margin-top: 2.1875rem;
    padding-bottom: 0.625rem;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 31.25rem) {
        font-size: 1.875rem;
    }
`;

export const Container = styled.div`
    flex-direction: column;
    gap: 2.1875rem;
    width: 56.25rem;
    height: 91.0rem;
    background-color: white;
    border-radius: 0.625rem;
    box-shadow: 0 0 0.9375rem rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;

    @media screen and (max-width: 54.75rem) {
        width: 43.75rem;
        margin-top: 1.25rem;
    }
    @media screen and (max-width: 44.5rem) {
        width: 37.5rem;
    }
    @media screen and (max-width: 38.75rem) {
        width: 31.25rem;
    }
    @media screen and (max-width: 33.125rem) {
        width: 25rem;
    }
`;

export const ContainerSmall = styled.div`
    width: 38.4375rem;
    height: 17.4375rem;
    background-color: rgba(231, 230, 230, 0.5);
    padding: 1.1875rem;
    border-radius: 0.625rem;
    box-shadow: 0 0 0.9375rem rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;

    @media screen and (max-width: 48.875rem) {
        width: 95%;
        gap: 1.25rem;
        height: 18.0625rem;
    }
`;

export const FlexCaixa = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 54.75rem) {
        width: 95%;
        gap: 16.3125rem;
    }
`;

export const Caixa1 = styled.div`
    justify-content: space-between;
    align-items: center;
    width: 38.625rem;
    height: 13.3125rem;
    background-color: white;
    border: 0.0625rem solid #e0e0e0;
    display: flex;

    @media screen and (max-width: 54.75rem) {
        width: 95%;
        gap: 16.3125rem;
    }
    @media screen and (max-width: 45rem) {
        gap: 7.5rem;
    }
    @media screen and (max-width: 33.125rem) {
        gap: 3.125rem;
    }

    @media screen and (max-width: 25.625rem) {
        gap: 14.3125rem;
        height: 14.375rem;
    }
`;

export const FlexTextChek = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;

    @media screen and (max-width: 42.5rem) {
        width: 85%;
        gap: -0.6875rem;
        margin-right: 0.625rem;
    }

    @media screen and (max-width: 25.625rem) {
        width: 9%;
    }
`;

export const Button = styled.button`
    left: 1.375rem;
    -webkit-box-shadow: -0.1875rem 0 0.1875rem 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0.1875rem 0 -0.1875rem 0 rgba(0, 0, 0, 0.2);
    background: #2ac176;
`;

export const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 3.75rem;
    height: 2.125rem;
    margin-right: 2.1875rem;
    display: flex;
    align-items: flex-end;

    @media screen and (max-width: 31.25rem) {
        margin-right: 15.0625rem;
    }
    @media screen and (max-width: 25.625rem) {
        width: 3.75rem;
        height: 1.375rem;
        margin-right: 20rem;
    }
`;

export const TextPausar = styled.p`
    color: green;
    margin-right: 2.1875rem;

    @media screen and (max-width: 31.25rem) {
        margin-right: 15.0625rem;
    }
    @media screen and (max-width: 25.625rem) {
        margin-right: 20rem;
        font-size: 0.75rem;
    }
`;

export const Checkbox = styled.input`
    width: 0;
    height: 0;

    @media screen and (max-width: 38.75rem) {
        width: 50%;
    }
`;

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #228137;
    transition: 0.4s;
    border-radius: 2.125rem;

    &:before {
        position: absolute;
        content: "";
        height: 1.25rem;
        width: 1.25rem;
        left: 0.25rem;
        bottom: 0.25rem;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;

        @media screen and (max-width: 25.625rem) {
            height: 0.9375rem;
            width: 0.875rem;
            left: 0.4375rem;
            bottom: 0.1875rem;
        }
    }

    ${Checkbox}:checked + & {
        background-color: #f61313;
    }

    ${Checkbox}:checked + &:before {
        transform: translateX(1.625rem);
    }
`;

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2.375rem;
`;

export const TextProdutos = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: #228137;
    @media screen and (max-width: 33.125rem) {
        font-size: 0.8rem;
    }
`;

export const NameEmpresa = styled.div`
    font-size: 1rem;
    color: #af7503;
    @media screen and (max-width: 33.125rem) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 25.625rem) {
        white-space: nowrap;
    }
`;

export const Logo = styled.img`
    height: 9rem;
    width: 9.4375rem;
    margin-top: 0.6875rem;

    @media screen and (max-width: 55.125rem) {
        height: 6.1875rem;
        width: 9.4375rem;
    }
    @media screen and (max-width: 33.125rem) {
        height: 6.1875rem;
        width: 6.25rem;
    }
`;
