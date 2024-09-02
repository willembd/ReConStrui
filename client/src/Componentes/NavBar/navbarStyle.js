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
    cursor: pointer;
    
    @media screen and (max-width: 530px) {
        max-width: 7rem;
    }
`

export const ContainerButton = styled.div`
    display: flex;
    gap: 80px;

    @media screen and (max-width: 1000px) {
        gap: 40px;
    }

    @media screen and (max-width: 500px) {
        gap: 20px;
    }
`

export const ButtonPrimary = styled.button`
    padding: 0.25rem;
    border: none;
    background-color: #FFFFFF;
    color: #228137;
    font-size: 1.5rem;
    cursor: pointer;
    

    @media screen and (max-width: 500px) {
        padding: 0.15rem;
        font-size: 1rem;
    }
` 

export const Borda = styled.div`
    
    border-bottom: 6px #1C4525 solid;
    margin-top: 1rem;
    margin-bottom: 0.0rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    
    @media screen and (max-width: 530px) {
        border-bottom: 4px #1C4525 solid;
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
    }
`

