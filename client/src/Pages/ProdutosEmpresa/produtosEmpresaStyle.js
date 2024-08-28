import styled from "styled-components";


export const FundoVerde = styled.div`
    height: 1587px;
    width: 1300px;
    background:#33603D;
    clip-path: polygon(0% 0%, 100% 0%, 40% 100%, 0% 100%);
    position: absolute;
`;

export const BarraAmarela = styled.div`
    height: 1590px;
    width: 1300px;
    background: #B7821C;
    clip-path: polygon(100% 0%, 90% 0%, 40% 100%, 100% 0%);
    position: absolute;
    
`;

export const Caixa = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 99.2rem;
   
`;

export const Title = styled.h1`
    font-size: 40px;
    color: #228137;
    font-weight: bold;
    margin-top: 35px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center
   

`


export const Container = styled.div`
    flex-direction: column;
    gap: 24px;
    width: 900px;
    height: 1350px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    align-items: center
    

`;

export const ContainerSmall = styled.div`
    width: 705px;
    height: 279px;
    background-color:  rgba(231, 230, 230, 0.5);
    padding: 19px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center

`;

export const FlexCaixa = styled.div`
     justify-content: center;
     display: flex;
     flex-direction: column
     
`

export const Caixa1 = styled.div`
   justify-content: space-between;
    align-items: center;
    width: 618px;
    height: 213px;
    background-color: white;
    border: 1px solid #E0E0E0;
    display: flex;
  
    
 
`;

export const FlexTextChek = styled.div`
       display: flex;
       flex-direction: column;
       align-items: center;
       gap: 10px;
    

`

export const Button = styled.button`
     left: 22px;
	-webkit-box-shadow: -3px 0 3px 0 rgba(0,0,0,0.2);
	box-shadow: 3px 0 -3px 0 rgba(0,0,0,0.2);
	background: #2AC176;
  
`


export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 35px;
  display: flex;
  align-items: flex-end;


`;

export const TextPausar = styled.p`
          color: green;
          margin-right: 35px;


`

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #228137;
  transition: .4s;
  border-radius: 34px;
  

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }

  ${Checkbox}:checked + & {
    background-color: #f61313;
  }

  ${Checkbox}:checked + &:before {
    transform: translateX(26px);
  }
`;

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 38px;
 
    
`
export const TTTitle = styled.p`
    font-size: 1rem ;
    font-weight: bold;
    color: #228137;
`;

export const PPalavra = styled.div`
    font-size: 1rem;
    color: #AF7503;
`;

export const Logo = styled.img`
    height: 144px;
    width: 151px;
    margin-top: 11px; 

`

