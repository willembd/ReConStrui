import styled from "styled-components";

//stilizando o footer.
export const FooterContainer = styled.footer`
    background-color: #1c4525f0;
    display: flex;
    flex-direction: column;
    color: white;
    padding: 20px 0px 40px 0px;
`;

//stilizando footercontato  Maior div componente onde os elementos do footer estão dentro.
export const FooterContato = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 40px;

    @media screen and (max-width: 1024px) {
        gap: 0px;
    }
    @media screen and (max-width: 1000px) {
        gap: 40px;
    }

`;

//stilizando logo Reconstrue
export const Logo = styled.div`
    display: flex;
    padding: 20px 176px 50px ;

    img {
        width: 100%;
        max-width: 25rem; 
        line-height:1px; 
    }
    @media screen and (max-width: 1440px) {
        padding: 20px 82px;
    }
    @media screen and (max-width: 1024px) {
        padding: 20px 24px;
    }
    @media screen and (max-width: 768px) {
        padding: 20px 82px;
    }
`;

export const Titulo = styled.h2`
    font-size: 26px;

    @media screen and (max-width: 682px) {
        font-size: 22px;
    }
`


//stilizando o elemento link
export const Link = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
`;

export const LinkContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.313rem;

    a{
        color: #fff;
        text-decoration: none;
    }
`;

//stilizando o elemento de pagamentos imagens geral
export const Pagamentos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    img {
        width: 3.438rem;
        height: 2.438rem;
    }
`;

//stilizando posicionalmento das imagens de pagamento (pagamentosimg e imagemcont)
export const Pagamentosimg = styled.div`
    display: flex;
    justify-content: space-around;
`;
export const imagemcont = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

//stilizando elemento contato
export const Contatos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
`;

export const ContatosD = styled.div`
p {
  line-height: 1.875rem;
}

`;
//stilizando elemento redes sociais
export const Redes = styled.div`
    display: grid;
`;
export const ContentRedes = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    img {
        width: 2.188rem;
        height: 2.188rem;
    }
`;
