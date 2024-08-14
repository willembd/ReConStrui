
import * as S from './inputStyle';

export default function Input({ text }) {
  return (
    <S.InputContainer>
      <input type="text" id="input" required />
      <label htmlFor="input" className="label">{text}</label>
      
    </S.InputContainer>
  );
}
