import LogoHiper from "../../assets/logo-hipercard1.svg";
import LogoMaster from "../../assets/logo-mastercard1.svg";
import LogoVisa from "../../assets/logo-visa1.svg";
import LogoElo from "../../assets/logo-elo1.svg";
import LogoPix from "../../assets/logo-pix1.svg";
import Instagram from "../../assets/logo_instagram.png";
import Facebook from "../../assets/logo_facebook.png";
import Whastzapp from "../../assets/logo_whatsapp.png";
import Logo from "../../assets/logoFooter.svg"

import * as S from "./footerStyle";

export default function Footer() {
    return (
        <S.FooterContainer>
            <S.Logo>
                <img src={Logo} alt="logo rescontrui" />
            </S.Logo>

            <S.FooterContato>
                <S.Link>
                    <S.Titulo>Link Rápidos</S.Titulo>
                    <S.LinkContent>
                        <a href="">Sobre nós</a>

                        <a href="">Usinas Parceiras</a>
                    </S.LinkContent>
                </S.Link>

                <S.Pagamentos>
                    <S.Titulo>Formas de Pagamentos</S.Titulo>

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
                    <S.Titulo>Contatos</S.Titulo>
                    <S.ContatosD>
                        <p>Email: Reconstrue@gmail.com</p>
                        <p>Telefone: (81)3333-3333</p>
                    </S.ContatosD>
                </S.Contatos>

                <S.Redes>
                    <S.Titulo>Redes Sociais</S.Titulo>

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
