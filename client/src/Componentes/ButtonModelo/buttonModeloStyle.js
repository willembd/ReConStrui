import styled from "styled-components";

export const Button = styled.button`

  padding: ${props => 
    props.tamanhobutton === 'primary' ?  '8px 124px;' :
    props.tamanhobutton === 'secondary' ?  '12px 41px;' :
    '8px 124px;'
 
  };


    background-color: rgba(175, 117, 3, 0.9);
    color: #fff;
    font-size: 16px;
    border: none;
    /* padding: 8px 124px; */
    border-radius: 4px;
    cursor: pointer;
    @media screen and (max-width:1335px) {
        padding: 10px 100px;
    }
    @media screen and (max-width:1335px) {
        padding: 10px 70px;
    }
`

