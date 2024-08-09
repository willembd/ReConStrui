import * as S from "./buttonModeloStyle"

export default function ButtonMod({ padding, text, ...rest }){
    return(
        <>
            <S.Button tamanhobutton={padding} {...rest}>{text}</S.Button>
        </>
    )
}