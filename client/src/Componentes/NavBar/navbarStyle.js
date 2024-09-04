import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 6.25rem;

    @media screen and (max-width: 39rem) {
        margin: 0 2rem;
    }
`;

export const NavLogo = styled.img`
    width: 100vh;
    max-width: 15.625rem;
    cursor: pointer;

    @media screen and (max-width: 33.125rem) {
        max-width: 7rem;
    }
`;

export const HamburgerMenu = styled.div`
    display: none;
    font-size: 2rem;
    cursor: pointer;

    @media screen and (max-width: 31.25rem) {
        display: block;
        color: #1C4525;
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    gap: 5rem;

    @media screen and (max-width: 62.5rem) {
        gap: 2.5rem;
    }

    @media screen and (max-width: 31.25rem) {
        display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
        flex-direction: column;
        gap: 1.25rem;
        position: absolute;
        top: 3.75rem;
        right: 0;
        background-color: white;
        padding: 1rem;
        box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
        z-index: 9;
    }
`;

export const ButtonPrimary = styled.button`
    padding: 0.25rem;
    border: none;
    background-color: #FFFFFF;
    color: #228137;
    font-size: 1.5rem;
    cursor: pointer;

    @media screen and (max-width: 31.25rem) {
        padding: 0.15rem;
        font-size: 1rem;
    }
`;

export const Borda = styled.div`
    border-bottom: 0.375rem #1C4525 solid;
    margin-top: 1rem;
    margin-bottom: 0;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 33.125rem) {
        border-bottom: 0.25rem #1C4525 solid;
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
    }
`;
