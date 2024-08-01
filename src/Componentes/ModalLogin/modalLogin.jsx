
import ImgLogo from "../../assets/logoNavBar.svg";
import Input from "../Input/input";

import * as S from "./modalLoginStyle"

export default function ModalLogin({ isOpen, setOpen }){

    if(isOpen){
        return(
            <S.Caixa>
                <S.Modal>
                        <S.Button onClick={() => setOpen(!isOpen)} >Fechar</S.Button>
                        <S.Itens>
                            <S.Logo src={ImgLogo} alt="" />
                            <Input text="E-mail"/>
                        </S.Itens>
                        
                </S.Modal>        
            </S.Caixa>
        )
    }

    
}