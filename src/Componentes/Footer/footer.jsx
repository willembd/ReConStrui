import LogoHiper from "../../assets/logo-hipercard.svg";
import LogoMaster from "../../assets/logo-mastercard.svg";
import LogoVisa from "../../assets/logo-visa.svg";
import LogoElo from "../../assets/logo-elo.svg";
import LogoPix from "../../assets/logo-pix.svg";
import Instagram from "../../assets/logo_instagram.png";
import Facebook from "../../assets/logo_facebook.png";
import Whastzapp from "../../assets/logo_whatsapp.png";
import LogoRecontrui from "../../assets/logo-recontrui.png";

import * as S from "./footerStyle";

export default function Footer() {
    return (
        <S.FooterContainer>
            <S.Logo>
                <img src={LogoRecontrui} alt="logo rescontrui" />
            </S.Logo>

            <S.FooterContato>
                <S.Link>
                    <h2>Link Rápidos</h2>
                    <S.LinkContent>
                        <a href="">Sobre nós</a>

                        <a href="">Usinas Parceiras</a>
                    </S.LinkContent>
                </S.Link>

                <S.Pagamentos>
                    <h2>Formas de Pagamentos</h2>

                    <S.Pagamentosimg>
                        <img src={LogoHiper} alt="logo mastercard" />
                        <img src={LogoVisa} alt="logo visa" />
                        <img src={LogoMaster} alt="logo master" />
                    </S.Pagamentosimg>
                    <S.imagemcont>
                        <img src={LogoElo} alt="logo elo" />
                        <img src={LogoPix} alt=" logo pix" />
                    </S.imagemcont>
                </S.Pagamentos>

                <S.Contatos>
                    <h2>Contatos</h2>
                    <S.ContatosD>
                        <p>Email: Reconstrue@gmail.com</p>
                        <p>Telefone: (81)3333-3333</p>
                    </S.ContatosD>
                </S.Contatos>

                <S.Redes>
                    <h2>Redes Sociais</h2>

                    <S.ContentRedes>
                        <img src={Instagram} alt="instagram" />
                        <img src={Whastzapp} alt="whastzapp" />
                        <img src={Facebook} alt="facebook" />
                    </S.ContentRedes>
                </S.Redes>
            </S.FooterContato>
        </S.FooterContainer>
    );
}
