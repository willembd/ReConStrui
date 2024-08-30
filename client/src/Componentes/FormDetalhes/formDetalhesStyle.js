import styled from "styled-components";


export const Container = styled.div`
      padding: 10px;
      background-color: white;

`

export const Caixa = styled.div`
    width: 750px;
    height: 351px;
    background-color:  rgba(231, 230, 230, 0.5);
    padding: 19px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;



    @media screen and (max-width: 828px) {
        width: 632px;
        display: flex;
 }

 @media screen and (max-width: 729px) {
          width:106%;
       
 }

 @media screen and (max-width: 500px) {
        width: 281px;
        height: 758px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
 }
 
 @media screen and (max-width: 375px) {
        width:239px;
    
      
}

`;
export const PPALAVRA = styled.p`
    font-size: 15px;
    color: black;
    font-weight: 600;
    border: 1px #E1E1E1;
    padding-bottom: 15px;
`;
export const FlexCaixa1 = styled.div`
     justify-content: center;
     display: flex;
     flex-direction: column;
     width: 44%;

     @media screen and (max-width: 828px) {

}
     @media screen and (max-width: 500px) {
        width:  191px;
    
    
}  
`

export const FlexCaixa4 = styled.div`
     justify-content: center;
     align-items: flex-end;
     display: flex;
     flex-direction: column;
    
     @media screen and (max-width: 828px) {
      
      height: 317px;
  
}
     @media screen and (max-width: 500px) {
        
}
` 

export const Caixa1 = styled.div`
    width: 150px;
    height: 290px;
    background-color: white;
    border: 1px solid #E0E0E0;
    
    @media screen and (max-width: 828px) {
         width: 132px;
          
}
@media screen and (max-width: 729px) {
          width: 111px;
          
       
 }

@media screen and (max-width: 500px) {
        width:192px;
        height: 153px;
        
}

`;

export const Caixa2 = styled.div`
    height: 290px;
    background-color: white;
    margin-top: 18px;
    border-bottom: 1px solid #E0E0E0;
    border-top: 1px solid #E0E0E0;
    border-right: 1px solid #E0E0E0;

    @media screen and (max-width: 828px) {
        width: 187px;
        height:290px;
       
 }

 @media screen and (max-width: 500px) {

        height: 179px;
       
 }


`

export const Caixa3 = styled.div`
    width: 239px;
    height:290px;
    background-color: white;
    border-top: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
    margin-top: 18px;


    @media screen and (max-width: 828px) {
        width: 188px;
        height:290px;
 }

 @media screen and (max-width: 500px) {
      
        height:161px;
 }
   
`
export const Caixa4 = styled.div`
    width: 138px;
    height: 290px;
    background-color: white;
    border: 1px solid #E0E0E0;
    
    @media screen and (max-width: 828px) {
        width:96px;
        height:290px;
 }

 @media screen and (max-width: 500px) {
         width: 187px;
        height: 171px;
 }
 
 
`;

export const IdDados = styled.div`
    display: flex;
    justify-content: space-between
    /* align-items: flex-start; */


`;

export const Alinha = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 80px;

  
`;

export const TextBox = styled.p`
    font-size: 15px;
    margin-top: 6px;

    @media screen and (max-width: 828px) {
         font-size: 12px;
    }
`;

export const Linha = styled.div`
    position: absolute;
    top: 2px;  
    left: 210px;
    width: 4px; 
    height: 310; 
    background-color: black;
    z-index: 10; 

` 

export const Img= styled.img`
    height: 87px;
    width: 124px;
    margin-top: 53px;

    @media screen and (max-width: 828px) {
        height: 70px;
         width: 98px;
       
}
 
@media screen and (max-width: 500px) {
         height: 70px;
         width: 98px;
         margin-top: 14px;
}
`;

export const TextProduto = styled.p`
    font-size: 1rem ;
    font-weight: bold;
    color: #228137;

 @media screen and (max-width: 828px) {
        font-size: 11px ;
}
`;
export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    
    
`
export const Container2 = styled.div`
    margin: 18px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 60px;


    @media screen and (max-width: 500px) {
        margin-top: 15px;

    }
`
export const Container3 = styled.div`
    margin: 18px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 74px;


    @media screen and (max-width: 500px) {
        margin-top: 15px;

    }
`
export const Container4= styled.div`
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    display: flex;       
    justify-content: space-between;
  
    @media screen and (max-width: 500px) {
        margin-top: -52px;

    }
`
export const BarraAguardando = styled.div`
    width: 200px;
    height: 13px;
    background-color: #AAAAAA;
    border-radius:200px;
`
export const BBarraAguardando = styled.div`
    width: 106px;
    height: 13px;
    background-color: #228137;
    position: absolute;
    border-radius:200px;
`

export const LETRA = styled.p`
    font-size: 16px;
    color: #228137;
`
export const QuebraLinha = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`


export const LabelProduto = styled.div`
    width: 148px;
    height: 28px;
    background-color: white;
    border-bottom:  1px solid #E0E0E0;
   
    @media screen and (max-width: 828px) {
        width: 130px;

    @media screen and (max-width: 779px) {
         width: 129px;
          
       
 }
       
}
   
    
`;

export const LabelEndereço = styled.div`
    width: 204px;
    height: 28px;
    background-color: white;
    border-bottom: 1px solid #E0E0E0;
   
      
    @media screen and (max-width: 828px) {
        width:186px;
       
}
`;
export const LabelCliente = styled.div`
    width: 238px;
    height: 28px;
    background-color: white;
    border-bottom:  1px solid #E0E0E0;
 
       
    @media screen and (max-width: 828px) {
        width:188px;
       
}
   
`;

export const LabelQuantidade = styled.div`
    width: 133px;
    height: 28px;
    background-color: white;
    border-bottom:  1px solid #E0E0E0;

    @media screen and (max-width: 828px) {
        width:95px;
       
}
    @media screen and (max-width: 500px) {
        width:185px;
       
}
`;


export const NameUsina = styled.div`
    font-size: 1rem;
    color: #AF7503;

    @media screen and (max-width: 828px) {
        font-size: 12px ;
}
`;

export const Text = styled.div`
    color: black;
    white-space: nowrap;
    margin-left: 10px;
    font-size: 11px;

    @media screen and (max-width: 828px) {
        font-size: 10px;
 }

`
export const CampoPequeno = styled.div`
     display: flex;
     border-bottom: 2px solid #1C4525;
     height: 10px;
     width: 84px;
        

     
     @media screen and (max-width: 500px) {
     
        width: 129px;
   
     }
`

export const CampoMenor = styled.div` 
     display: flex;
     border-bottom: 2px solid #1C4525;
     height: 10px;
     width: 77px;

  @media screen and (max-width: 840px) {
     
        width: 69px;
   
     }

    
 
`

export const CampoFlex = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

`

export const Metros = styled.div`
      font-size:10px;
      display: flex;
      justify-content: center


`

export const FlexN = styled.div`
      display: flex;
      flex-wrap: wrap;
     
`
export const FlexCep = styled.div`
      display: flex;
      flex-wrap: wrap;

`
 
export const ColorP = styled.p`
       color: green ;
       font-size: 11px;
        margin-right: 8px;
`

export const ColorSpan = styled.span`
      color: black;
      font-size: 10px;

      
      @media screen and (max-width: 828px) {
        white-space: nowrap;
        font-size: 8px;
      
      
      }
      @media screen and (max-width: 500px) {
      
       
      }
`
export const FlexM = styled.div`
        display: flex;
        flex-wrap: wrap;
        margin-top: 99px;
     
       
`

 export const FlexContainerPrimeiro = styled.div`
            display: flex;
           

            @media screen and (max-width: 500px) {
                  display: flex;
       
}
 `