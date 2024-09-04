import styled from "styled-components";

export const Campo = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    position: static;
    width: 22.5rem;

    @media screen and (max-width: 57.5rem) {
        width: 15.625rem;
    } 

    label.text {
        font-size: 0.75rem;
        color: #228137;
        font-weight: 700;
        position: relative;
        top: 0.5rem;
        margin: 0 0 0 1rem;
        padding: 0 0.1875rem;
        background: #fff;
        width: fit-content;
    }

    .input {
        padding: 0.6875rem 0.625rem;
        font-size: 1rem;
        border: 0.125rem #E0E0E0 solid;
        border-radius: 0.75rem;
        background: #fff;
        outline-color: #228137;
    }
`;
