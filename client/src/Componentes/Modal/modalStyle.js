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
    width: 22.6875rem;
    height: 11.8125rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.625rem;
    padding: 1.25rem;
    justify-content: space-around;

    @media screen and (max-width: 31.25rem) {
        width: 18.5625rem;
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

export const Texto = styled.h1`
    color: #228137;
    font-size: 1.1875rem;
    margin-left: 1.375rem;

    @media screen and (max-width: 31.25rem) {
        font-size: 0.875rem;
    }
`;

export const X = styled.button`
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0.625rem;
    font-size: 1.875rem;
    font-weight: bold;
    color: #555;
    background-color: #fff;
    border: none;
`;
