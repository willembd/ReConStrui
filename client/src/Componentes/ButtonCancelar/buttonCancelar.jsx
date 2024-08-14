import * as S from "./buttonCancelarStyles"

export default function ButtonCancelar({padding, color, border, text, ...rest }){
    return(
        <S.ButtonCancelar tamanhobutton = {padding} modelobutton = {color} borderbutton = {border}  {...rest}>{ text }</S.ButtonCancelar>
    )
}