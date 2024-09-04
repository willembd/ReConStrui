import styled from "styled-components";

export const Caixa = styled.div`
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
    width: 29.0625rem;
    height: 5.625rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.625rem;
    padding: 5.0625rem;
    justify-content: center;

    @media screen and (max-width: 31.25rem) {
        width: 19.5rem;
        height: 5.625rem;
    }
`;

export const Itens = styled.div`
    display: flex;
    padding: 0.625rem;
    gap: 0.5rem;
    color: #228137;
    align-items: center;
    flex-direction: column;
`;

export const Texto = styled.div`
    color: #228137;
    font-size: 1rem;
    white-space: nowrap;
    display: flex;
    align-items: center;

    @media screen and (max-width: 31.25rem) {
        font-size: 0.8125rem;
    }
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

export const Buttons = styled.div`
    margin-top: 1.25rem;
    display: flex;
    align-items: center;
    gap: 4.0625rem;
    justify-content: center;

    @media screen and (max-width: 31.25rem) {
        gap: 2.3125rem;
    }
`;

export const ButtonStyle = styled.button`
    background-color: #AF7503;
    padding: 0.625rem 1.5625rem;
    border: 0.0625rem solid #AF7503;
    color: #fff;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
        background-color: ${props => 
            props.withTransition ? 'red' : '#AF7503'};
    }

    @media screen and (max-width: 31.25rem) {
        padding: 0.625rem 1.5625rem;
    }
`;
