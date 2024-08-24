import * as S from "./selectStyle";

export default function Select({ text, children }) {
    return (
        <S.Container>
            <label htmlFor="">{text}</label>
            <S.SelectStyle>{children}</S.SelectStyle>
        </S.Container>
    );
}
