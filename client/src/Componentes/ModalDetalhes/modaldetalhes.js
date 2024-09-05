import styled from "styled-components";

export const CaixaModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
`;

export const ModalStyle = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FCFCFC;
    border: 0.125rem solid #295032;
    width: 53.8125rem;
    height: 31.25rem;
    border-radius: 0.5rem;
    display: flex;
    padding: 1.25rem;
    justify-content: space-around;
    flex-direction: column;

    @media screen and (max-width: 55.6875rem) {
        width: 49.5rem;
        height: 31.25rem;
    }
    @media screen and (max-width: 51.75rem) {
        width: 43.8125rem;
    }
    @media screen and (max-width: 45.5625rem) {
        width: 90%;
    }
    @media screen and (max-width: 31.25rem) {
        width: 22.625rem;
        height: 32.75rem;
        overflow: auto;
    }
    @media screen and (max-width: 23.4375rem) {
        width: 18.375rem;
        height: 34.6875rem;
        overflow: auto;
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
    color: #af7503;
    font-size: 1.1875rem;
    margin-left: 1.375rem;
    margin-bottom: 0.625rem;
    font-weight: bold;
`;

export const X = styled.div`
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0.625rem;
    font-size: 1.875rem;
    font-weight: bold;
    color: #555;
`;
