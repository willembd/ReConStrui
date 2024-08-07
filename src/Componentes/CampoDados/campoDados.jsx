import * as S from "./campoDadosStyles"

export default function CampoDados({ text, ...rest }){
    return(
        <S.Campo {...rest}>{ text }</S.Campo>
    )
}