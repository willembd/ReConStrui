import LogoHiper from "../../assets/logo-hipercard.png"
import LogoMaster from "../../assets/logo-mastercard.png"
import LogoVisa from "../../assets/logo-visa.png"
import LogoElo from "../../assets/logo-elo.png"
import LogoPix from "../../assets/logo-pix.png"
import Instagram from "../../assets/logo_instagram.png"
import Facebook from "../../assets/logo_facebook.png"
import Whastzapp from "../../assets/logo_whatsapp.png"
import LogoRecontrui from "../../assets/logo-recontrui.png"

export default function Footer(){
    return(
        <footer>
            <div>
                <img src={LogoRecontrui} alt="logo rescontrui" />
            </div>

            <div>
                <div>
                    <div>
                        <h2>Link Rápidos</h2> 
                    </div>
                    
                    <ul>
                        <li>
                            <a href="">Sobre nós</a>
                        </li>
                        <li>
                            <a href="">Usinas Parceiras</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <div>
                        <h2>Formas de Pagamentos</h2>
                    </div>
                    
                    <img src={LogoHiper} alt="logo mastercard" />
                    <img src={LogoVisa} alt="logo visa" />
                    <img src={LogoMaster} alt="logo master" />
                    <img src={LogoElo} alt="logo elo" />
                    <img src={LogoPix} alt=" logo pix" />
                </div>

                <div>
                    <h2>Contatos</h2>
                    <ul>
                        <li>Email:Reconstrue@gmail.com</li>
                        <li>Telefone:(81)3333-3333</li>
                    </ul>
                </div>

                <div>
                    <div>
                        <h2>Redes Sociais</h2>
                    </div>

                    <div>
                        <img src={Instagram} alt="instagram" />
                        <img src={Whastzapp} alt="whastzapp" />
                        <img src={Facebook} alt="facebook" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
