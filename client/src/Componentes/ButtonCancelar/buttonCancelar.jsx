import * as S from "./buttonCancelarStyles"

export default function ButtonCancelar({color, padding, backgroundcolor,  text, actionTransition, ...rest }){
    return(
                      <S.ButtonCancelar 
                            withTransition={actionTransition}
                            tamanhobutton = {padding} 
                            modelobutton = {backgroundcolor} 
                                {...rest}>
                                { text }
                     </S.ButtonCancelar>
    )
}