import * as S from "./navbarStyle"

import ImgLogoNav from "../../assets/logoNavBar.svg"
import ButtonNav from "../ButtonNavBar/buttonNavBar"
import { useNavigate } from "react-router-dom"


export default function NavBar(){

 const navigation = useNavigate()   

    return(
        <>
            <S.Nav>
                <S.NavLogo src={ImgLogoNav} alt="" onClick={() => navigation('/')}/>
                <ButtonNav text="Entrar" onClick={() => navigation('/paginalogin')} />
   
            </S.Nav>
            <S.Borda/>

        </>
        
    )
    
}