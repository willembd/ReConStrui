import * as S from "./buttonCancelarStyles"

export default function ButtonCancelar({color, padding, backgroundcolor, border, text, ...rest }){
    return(
        <S.ButtonCancelar colortext = {color} tamanhobutton = {padding} modelobutton = {backgroundcolor} borderbutton = {border}  {...rest}>{ text }</S.ButtonCancelar>
    )
}