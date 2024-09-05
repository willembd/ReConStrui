import styled from "styled-components";

//stilizando o footer.
export const FooterContainer = styled.footer`
    background-color: #1c4525f0;
    display: flex;
    flex-direction: column;
    color: white;
    padding: 1.25rem 0 2.5rem 0; 
`;

//stilizando footercontato  Maior div componente onde os elementos do footer estão dentro.
export const FooterContato = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2.5rem;

    @media screen and (max-width: 64rem) {
        gap: 0;
    }
    @media screen and (max-width: 62.5rem) {
        gap: 2.5rem; 
    }
    @media screen and (max-width: 53.125rem) {
        gap: 1.125rem; 
    }
    @media screen and (max-width: 51.875rem) {
        gap: 2.5rem; 
    }
`;

//stilizando logo Reconstrue
export const Logo = styled.div`
    display: flex;
    padding: 1.25rem 11rem 3.125rem;

    img {
        width: 100%;
        max-width: 25rem; 
        line-height: 1px; 
    }
    @media screen and (max-width: 90rem) {
        padding: 1.25rem 5.125rem;
    }
    @media screen and (max-width: 75rem) {
        padding: 1.25rem 2.125rem; 
    }
    @media screen and (max-width: 64rem) {
        padding: 1.25rem 1.5rem; 
    }
    @media screen and (max-width: 48rem) {
        padding: 1.25rem 5.125rem; 
    }
`;

export const Titulo = styled.h2`
    font-size: 1.625rem;

    @media screen and (max-width: 42.75rem) {
        font-size: 1.375rem;
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

    a {
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
