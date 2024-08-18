
import * as S from './inputStyle';

export default function Input({ text, ...rest }) {
  return (
    <S.InputContainer>
      <input type="text" id="input" required {...rest} />
      <label htmlFor="input" className="label">{text}</label>
      
    </S.InputContainer>
  );
}
