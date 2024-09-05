import * as S from "./selectStyle";

export default function Select({ text, children, onChange }) {
    return (
        <S.Container>
            <label>{text}</label>
            <S.SelectStyle onChange={onChange}>{children}</S.SelectStyle>
        </S.Container>
    );
}

export const SelectEstadosPage = ({ name, id, title, dataArray, onChange, text }) => {
    return (
        <S.Container>
            <label>{text}</label>
            <S.SelectStyle onChange={onChange || null} name={name} id={id}>
                <option value="">{title}</option>
                {dataArray
                    ? dataArray.map((cd) => (
                          <option key={cd.nome} value={cd.sigla}>
                              {cd.nome}
                          </option>
                      ))
                    : []}
            </S.SelectStyle>
        </S.Container>
    );
};
