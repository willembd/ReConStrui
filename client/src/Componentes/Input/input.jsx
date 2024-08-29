
import * as S from './inputStyle';

export default function Input({ text, ...rest }) {
  return (
    <S.Campo>
        <label className="text" > {text} </label>
        <input className="input" type="text"  required {...rest}/>
    </S.Campo>
  );
}
