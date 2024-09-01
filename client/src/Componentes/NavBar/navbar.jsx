import * as S from "./navbarStyle"

import ImgLogoNav from "../../assets/logoNavBar.svg"
import ButtonNav from "../ButtonNavBar/buttonNavBar"
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"


export default function NavBar(){
    const [type, setType] = useState()
    const token = localStorage.getItem("token")
    const navigation = useNavigate()   

    function handleLogout(){
        localStorage.removeItem("token")
        navigation("/")
    }

    useEffect(() => {
        if(token){
            try {
                const decodedToken = jwtDecode(token);
                const typeDecode = decodedToken.type
                setType(typeDecode)
            } catch (error) {
                console.log(error)
            }
        }
    },[])

    

    return(
        <>
            {token ? (
                <S.Nav >
                    <S.NavLogo src={ImgLogoNav} alt="" onClick={() => navigation('/')}/>
                    <S.ContainerButton>
                        <S.ButtonPrimary onClick={() => { {type === 'usuario' ? navigation('/pedidos') : navigation('/orcamentosempresa')} } }>Pedidos</S.ButtonPrimary>
                        <S.ButtonPrimary onClick={() => { {type === 'empresa' ? navigation('/perfilusuario') : navigation('/perfilempresa')} } }>Perfil</S.ButtonPrimary>
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