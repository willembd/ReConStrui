import styled from "styled-components";

export const Campo = styled.p`
    display: flex;
    color: #228137;
    /* padding: 0px 50px 2px 2px; */

    font-size: ${props => 
    props.tamanhoCampo === 'primary' ?  '18px' :
    props.tamanhoCampo === 'secondary' ?  '11px ' :
    '18px'
 
  };

    border-bottom: ${props => 
    props.corcampo === 'primary' ?  '2px solid #228137' :
    props.corcampo === 'secondary' ? '2px solid #1C4525' :
    '2px solid #228137'
 
  };

    padding: ${props => 
    props.tamanho === 'primary' ?  '0px 50px 2px 2px' :
    props.tamanho === 'secondary' ? '0px 27px 2px 2px' :
    '0px 50px 2px 2px'
 
  };

    @media screen and (max-width: 1080px) {
        padding: 0px 30px 2px 2px;
        font-size: 14px;
    }
`