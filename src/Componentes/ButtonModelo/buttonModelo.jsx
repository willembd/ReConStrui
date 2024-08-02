import * as S from "./buttonModeloStyle"

export default function ButtonMod({ text, ...rest }){
    return(
        <>
            <S.Button {...rest}>{text}</S.Button>
        </>
    )
}