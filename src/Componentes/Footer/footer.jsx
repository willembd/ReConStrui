import LogoHiper from "../../assets/logo-hipercard.png"
import LogoMaster from "../../assets/logo-mastercard.png"
import LogoVisa from "../../assets/logo-visa.png"
import LogoElo from "../../assets/logo-elo.png"
import LogoPix from "../../assets/logo-pix.png"
import Instagram from "../../assets/logo_instagram.png"
import Facebook from "../../assets/logo_facebook.png"
import Whastzapp from "../../assets/logo_whatsapp.png"
import LogoRecontrui from "../../assets/logo-recontrui.png"

import * as S from "./footerStyle"

export default function Footer(){
    return(
        <S.FooterContainer>
            <S.Logo>
                <img src={LogoRecontrui} alt="logo rescontrui" />
            </S.Logo>

            <div>
                <div>
                    <S.Link>
                        <h2>Link Rápidos</h2> 
                    </S.Link>
                    
                    <ul>
                        <li>
                            <a href="">Sobre nós</a>
                        </li>
                        <li>
                            <a href="">Usinas Parceiras</a>
                        </li>
                    </ul>
                </div>

                <S.Pagamentos>
                    <div>
                        <h2>Formas de Pagamentos</h2>
                    </div>
                    
                    <img src={LogoHiper} alt="logo mastercard" />
                    <img src={LogoVisa} alt="logo visa" />
                    <img src={LogoMaster} alt="logo master" />
                    <img src={LogoElo} alt="logo elo" />
                    <img src={LogoPix} alt=" logo pix" />
                </S.Pagamentos>

                <S.Contatos>
                    <h2>Contatos</h2>
                    <ul>
                        <li>Email:Reconstrue@gmail.com</li>
                        <li>Telefone:(81)3333-3333</li>
                    </ul>
                </S.Contatos>

                <S.Redes>
                    <div>
                        <h2>Redes Sociais</h2>
                    </div>

                    <div>
                        <img src={Instagram} alt="instagram" />
                        <img src={Whastzapp} alt="whastzapp" />
                        <img src={Facebook} alt="facebook" />
                    </div>
                </S.Redes>
            </div>
        </S.FooterContainer>
    );
}
