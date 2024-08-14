import * as S from "./pixStyle.js";

import LogoBranca from "../../assets/LogoBranca.svg";
import ImgPix from "../../assets/qrcodepix.svg"
import ButtonMod from "../../Componentes/ButtonModelo/buttonModelo.jsx";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/navbar.jsx";
import Footer from "../../Componentes/Footer/footer.jsx";


export default function PaginaLogin() {
    const navigate = useNavigate();

    const handleFechar = () => {
        navigate("/");
    };

    return (
        <>
            <NavBar />
            <S.Caixa>
                <S.Modal>
                    
                    <S.ModalContainer>
                        <S.Imagem>
                            <S.ButtonContainer>
                                <S.Button onClick={handleFechar}>Voltar</S.Button>
                            </S.ButtonContainer>
                            <S.Logo src={LogoBranca} alt="" />
                            <div>

                            </div>
                        </S.Imagem>

                        <S.Form>
                            <S.Titulo>Pagamento</S.Titulo>
                            <h2>Pague com o Pix</h2>
                        
                            <img src={ImgPix} alt="" />
                            <p>00045870acsda887124reconstrui01714</p>

                            <ButtonMod text="Copiar" />
    
                        </S.Form>

                    </S.ModalContainer>
                </S.Modal>
            </S.Caixa>
            <Footer/>
        </>
    );
}
