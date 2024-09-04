import styled from "styled-components";

export const Button = styled.button`
  padding: ${props => 
    props.tamanhobutton === 'primary' ?  '0.5rem 7.75rem' :
    props.tamanhobutton === 'secondary' ?  '0.75rem 2.5625rem' :
    '0.5rem 7.75rem'
  };

  background-color: rgba(175, 117, 3, 0.9);
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  @media screen and (max-width: 83.4375rem) {
    padding: 0.625rem 6.25rem;
  }

  @media screen and (max-width: 83.4375rem) {
    padding: 0.625rem 4.375rem;
  }

  @media screen and (max-width: 39.125rem) {
    padding: 0.625rem 3.75rem;
  }

  @media screen and (max-width: 34.125rem) {
    padding: 0.125rem 3.125rem;
  }

  @media screen and (max-height: 39.375rem) {
    padding: 0.25rem 4.375rem;
  }

  @media screen and (max-height: 29.6875rem) {
    padding: 0.1875rem 3.125rem;
  }
`
