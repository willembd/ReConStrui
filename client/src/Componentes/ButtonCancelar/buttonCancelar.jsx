import * as S from "./buttonCancelarStyles"

export default function ButtonCancelar({color, padding, backgroundcolor, border, text, actionTransition, ...rest }){
    return(
        <S.ButtonCancelar withTransition={actionTransition} colortext = {color} tamanhobutton = {padding} modelobutton = {backgroundcolor} borderbutton = {border}  {...rest}>{ text }</S.ButtonCancelar>
    )
}