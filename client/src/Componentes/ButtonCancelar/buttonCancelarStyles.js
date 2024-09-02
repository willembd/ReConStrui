import styled from "styled-components";

export const ButtonCancelar = styled.button`
    background-color: #ffffff;
    border: 1px solid #295032;
    color: #228137;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    padding: ${props => 
    props.tamanhobutton === 'primary' ?  '10px 16px;' : 
    props.tamanhobutton === 'secondary' ?  '11px 35px' :
    '10px 16px;'
    };

    transition: transform 0.3s ease; 

    &:hover {
    transform: scale(1.1); 

    background-color: ${props => 
            props.withTransition ? 'red' : '##ffffff'}; 
    }
`;
