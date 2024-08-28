import styled from "styled-components";

export const ButtonCancelar = styled.button`
    background-color: #ffffff;
    padding: 10px 16px;
    border: 1px solid #295032;
    color: #228137;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    transition: transform 0.3s ease; 

    &:hover {
    transform: scale(1.1); 
  


    background-color: ${props => 
            props.withTransition ? 'red' : '##ffffff'}; 
    }
`;
