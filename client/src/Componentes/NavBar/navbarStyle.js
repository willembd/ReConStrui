import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 6.25rem;

    @media screen and (max-width: 624px) {
        margin: 0 2rem;
    }
 
`

export const NavLogo = styled.img`
    width: 100vh;
    max-width: 15.625rem;
    
    @media screen and (max-width: 530px) {
        max-width: 7rem;
    }
`

export const Borda = styled.div`
    
    border-bottom: 6px #1C4525 solid;
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    
    @media screen and (max-width: 530px) {
        border-bottom: 4px #1C4525 solid;
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
    }
`

