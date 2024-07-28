import * as S from "./navbarStyle"

import ImgLogoNav from "../../assets/LogoNavBar.svg"
import ButtonNav from "../ButtonNavBar/buttonNavBar"

export default function NavBar(){
    return(
        <>
            <S.Nav>
                <S.NavLogo src={ImgLogoNav} alt=""/>
                <ButtonNav/>
                
            </S.Nav>
            <S.Borda/>
        </>
        
    )
}