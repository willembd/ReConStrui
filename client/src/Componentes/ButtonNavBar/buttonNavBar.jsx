import * as S from "./buttonNavBarStyle"

export default function ButtonNav({ text, ...rest }){
    return(
        <S.ButtonNavBar {...rest}>{ text }</S.ButtonNavBar>
    )
}