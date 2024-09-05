import styled from "styled-components";

export const Campo = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    position: static;
    width: 22.5rem;
    
    @media screen and (max-width: 74.375rem) {
        width: 18.125rem;
    }
    @media screen and (max-width: 57.5rem) {
        width: 15.625rem;
    }
    @media screen and (max-width: 51.875rem) {
        width: 13.75rem;
    }
    @media screen and (max-width: 46.875rem) {
        width: 12.5rem;
    }
    @media screen and (max-height: 37.8125rem) {
        height: 3.125rem;
    }
    @media screen and (max-height: 36.875rem) {
        height: 2.75rem;
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

        @media screen and (max-height: 37.8125rem) {
            padding: 0.5625rem 0.625rem;
        }
        @media screen and (max-height: 36.875rem) {
            padding: 0.4375rem 0.625rem;
        }
        @media screen and (max-width: 34.125rem) {
            padding: 0.25rem 0.375rem;
        }
    }
`;
