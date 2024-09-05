import * as S from "./inputPrimaryStyle" 


export default function InputPrimary({ text, ...rest }) {
    return (
        <S.Campo>
            <label className="text" > {text} </label>
            <input className="input" type="text"  required {...rest}/>
        </S.Campo>
    );
}
