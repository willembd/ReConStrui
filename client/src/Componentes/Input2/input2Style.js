import styled from "styled-components";

export const Campo = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    position: static;
    width: 360px;

    label.text {
        font-size: 0.75rem;
        color: #228137;
        font-weight: 700;
        position: relative;
        top: 0.5rem;
        margin: 0 0 0 16px;
        padding: 0 3px;
        background: #fff;
        width: fit-content;
        
    }

    .input {
        padding: 11px 10px;
        font-size: 1rem;
        border: 2px #E0E0E0 solid;
        border-radius: 12px;
        background: #fff;
        outline-color: #228137;
       
    }
`;
