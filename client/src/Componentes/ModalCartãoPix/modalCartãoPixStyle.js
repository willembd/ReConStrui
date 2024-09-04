import styled from "styled-components";

export const CaixaEmail = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
`;

export const ModalStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FCFCFC;
    border: 0.125rem solid #295032;
    width: 29.25rem;
    height: 13.69rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 31.25rem) {
        width: 16.5rem;
        height: 9.19rem;
    }
`;

export const Itens = styled.div`
    padding: 0.625rem;
    gap: 1.5rem;
    color: #228137;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Texto = styled.div`
    color: #228137;
    font-size: 1.4375rem;
    margin-left: 1.375rem;
    margin-bottom: 0.625rem;
    font-weight: bold;

    @media screen and (max-width: 31.25rem) {
        font-size: 1.0625rem;
    }
`;

export const X = styled.button`
    cursor: pointer;
    position: absolute;
    top: 0.5rem;
    right: 0.625rem;
    font-size: 1.625rem;
    font-weight: bold;
    color: #555;
    background-color: #fff;
    border: none;

    @media screen and (max-width: 31.25rem) {
        font-size: 1.0625rem;
    }
`;

export const ButtonCartão = styled.button`
    background-color: #295032;
    padding: 0.625rem 1.0625rem;
    border: 0.0625rem solid #295032;
    color: #fff;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;

    @media screen and (max-width: 31.25rem) {
        padding: 0.5rem 0.6875rem;
        font-size: 0.75rem;
    }

    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

export const ButtonPix = styled.button`
    background-color: #295032;
    padding: 0.625rem 2rem;
    border: 0.0625rem solid #295032;
    color: #fff;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;

    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 31.25rem) {
        padding: 0.5rem 1.375rem;
        font-size: 0.75rem;
    }
`;

export const StyleButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 3.375rem;
`;
