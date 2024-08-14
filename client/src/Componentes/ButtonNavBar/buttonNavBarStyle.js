import styled from "styled-components";

export const ButtonNavBar =styled.button`
    padding: 0.25rem;
    border: none;
    border-bottom: 0.18rem #228137 solid;
    background-color: #FFFFFF;
    color: #228137;
    font-size: 1.5rem;
    cursor: pointer;
    

    @media screen and (max-width: 500px) {
        padding: 0.15rem;
        border-bottom: 0.12rem #228137 solid;
        font-size: 1rem;
    }
`