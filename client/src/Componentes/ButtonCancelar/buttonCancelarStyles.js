import styled from "styled-components";

export const ButtonCancelar = styled.button`
    background-color: #ffffff;
    border: 0.0625rem solid #295032;
    color: #228137;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;

    padding: ${props => 
    props.tamanhobutton === 'primary' ? '0.625rem 1rem' : 
    props.tamanhobutton === 'secondary' ? '0.6875rem 2.1875rem' :
    '0.625rem 1rem'
    };

    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);

        background-color: ${props => 
            props.withTransition ? 'red' : '#ffffff'};
    }
`;
