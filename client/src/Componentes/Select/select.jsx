import * as S from "./selectStyle";

export default function Select ({ children }) {

    return(
        <>
            <S.SelectStyle >
              {children}
            </S.SelectStyle>
          
        </>
        
    )
}