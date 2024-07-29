import styled from "styled-components";
//stilizando o footer.
export const FooterContainer = styled.footer`
    background-color: #1c4525f0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 35vh;
    color: white;
    a {
        color: white;
    }
    width: 100%;
`;

//stilizando footercontato  Maior div componente onde os elementos do footer estão dentro.
export const FooterContato = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, 1fr);
    align-content: center;
    justify-content: center;
    gap: 3.75rem;
    padding-bottom:1.688rem;
`;

//stilizando logo Reconstrue
export const Logo = styled.div`
    padding: 1.875rem;
    img {
        width: 100%;
        max-width: 20rem;
        margin-left: 6.25rem;
    }
`;

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
export const Contatos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
`;

export const ContatosD = styled.div``;
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
