import * as S from "./campoDadosStyles"

export default function CampoDados({padding, borderbottom, fontsize, children, text, ...rest }){
    return(
        <S.Campo tamanho= {padding}corcampo= {borderbottom} tamanhoCampo = {fontsize} {...rest}>{ text }
         <span>{}</span>
         {children && <span>{children}</span>}

        </S.Campo>

    )
}