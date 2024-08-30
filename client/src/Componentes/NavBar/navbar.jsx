import * as S from "./navbarStyle"

import ImgLogoNav from "../../assets/logoNavBar.svg"
import ButtonNav from "../ButtonNavBar/buttonNavBar"
import { useNavigate } from "react-router-dom"


export default function NavBar(){
    const token = localStorage.getItem("token")
    const navigation = useNavigate()   

    function handleLogout(){
        localStorage.removeItem("token")
        navigation("/")
    }

    return(
        <>
            {token ? (
                <S.Nav>
                    <S.NavLogo src={ImgLogoNav} alt="" onClick={() => navigation('/')}/>
                    <S.ContainerButton>
                        <S.ButtonPrimary onClick={() => navigation('/perfilusuario') }>Perfil</S.ButtonPrimary>
                        <ButtonNav text="Sair" onClick={() => handleLogout()} />
                    </S.ContainerButton>
                </S.Nav>
            

            ) : (
                <S.Nav>
                <S.NavLogo src={ImgLogoNav} alt="" onClick={() => navigation('/')}/>
                <S.ContainerButton>
                    <ButtonNav text="Entrar" onClick={() => navigation('/paginalogin')} />
                </S.ContainerButton>
                
                
            </S.Nav>
           
            )}
            <S.Borda/>
        </>
        
    )
    
}