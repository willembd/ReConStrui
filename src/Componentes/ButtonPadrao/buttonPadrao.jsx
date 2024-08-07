import * as S from "./buttonPadraoStyles"

export default function ButtonPadrao({ text, ...rest }){
    return(
        <S.ButtonPadrao {...rest}>{ text }</S.ButtonPadrao>
    )
}