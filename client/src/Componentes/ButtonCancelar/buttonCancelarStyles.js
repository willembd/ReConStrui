import styled from "styled-components";

export const ButtonCancelar = styled.button`

    background-color: ${props => 
     props.modelobutton === 'primary' ? '#DD0004' :
     props.modelobutton === 'secondary' ? '#AF7503' :
     '#DD0004'
   

    };
    
    
   padding: ${props => 
    props.tamanhobutton === 'primary' ?  '12px 16px;' :
    props.tamanhobutton === 'secondary' ?  '12px 28px;' :
    '12px 16px;'
 
};
   
    border: ${props => 
    props.borderbutton === 'primary' ?  ' 2px solid #228137' :
    props.borderbutton === 'secondary' ?  'none;' :
    '2px solid #228137'
 
};

    /* border: 2px solid #228137; */
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
`