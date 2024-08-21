import * as S from "./buttonCancelarStyles"

export default function ButtonCancelar({ text, ...rest }){
    return(
        <S.ButtonCancelar  {...rest}>{ text }</S.ButtonCancelar>
    )
}