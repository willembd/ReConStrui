import * as S from "./navbarStyle"

import ImgLogoNav from "../../assets/logoNavBar.svg"
import ButtonNav from "../ButtonNavBar/buttonNavBar"
import ModalLogin from "../ModalLogin/modalLogin"
import { useState } from "react"

export default function NavBar(){

    const [open, setOpen] = useState(false)

    return(
        <>
            <S.Nav>
                <S.NavLogo src={ImgLogoNav} alt=""/>
                <ButtonNav text="Entrar" onClick={() => setOpen(!open)} />

                <ModalLogin isOpen={open} setOpen={setOpen}/>
            </S.Nav>
            <S.Borda/>
        </>
        
    )
    
}