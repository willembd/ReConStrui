import styled from "styled-components";

export const Campo = styled.p`
    display: flex;
    color: #228137;

    font-size: ${props => 
    props.tamanhoCampo === 'primary' ?  '1.125rem' :
    props.tamanhoCampo === 'secondary' ?  '0.6875rem' :
    '1.125rem'
 
  };

    border-bottom: ${props => 
    props.corcampo === 'primary' ?  '0.125rem solid #228137' :
    props.corcampo === 'secondary' ? '0.125rem solid #1C4525' :
    '0.125rem solid #228137'
 
  };

    padding: ${props => 
    props.tamanho === 'primary' ?  '0rem 3.125rem 0.125rem 0.125rem' :
    props.tamanho === 'secondary' ? '0rem 1.6875rem 0.125rem 0.125rem' :
    '0rem 3.125rem 0.125rem 0.125rem'
 
  };

    @media screen and (max-width: 61.875rem) {
        font-size: 0.625rem;
        padding: 0rem 1.875rem 0.125rem 0.125rem;
    }

    @media screen and (max-width: 31.25rem) {
        font-size: 0.625rem;
        padding: 0rem 1.875rem 0.125rem 0.125rem;
    }
`
