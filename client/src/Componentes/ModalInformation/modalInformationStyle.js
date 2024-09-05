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
    height: 5.625rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 31.25rem) {
        width: 16.875rem;
        height: 4.25rem;
    }
`;

export const Itens = styled.div`
    padding: 0.625rem;
    gap: 3.125rem;
    color: #228137;
`;

export const Texto = styled.div`
    color: #228137;
    font-size: 1.25rem;

    @media screen and (max-width: 31.25rem) {
        font-size: 0.8125rem;
    }
`;

export const X = styled.button`
    background-color: #fff;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0.625rem;
    font-size: 1.875rem;
    font-weight: bold;
    color: #555;
    border: none;
`;
