import styled from "styled-components";

export const SelectStyle = styled.select`
    background-color: rgb(255, 255, 255);
    width: 200px;
    height: 40px;
    border: 0.125rem #e0e0e0 solid;
    border-radius: 4px;
    color: #2f2f2f;
    outline-color: #2f2f2f;


    @media (max-width: 1000px) {
        padding: 0.625rem 1rem;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`
