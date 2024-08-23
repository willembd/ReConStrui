import * as S from "./input2Style" 


export default function Input2({ text }) {
    return (
        <S.Campo>
            <label class="text" for="input"> {text} </label>
            <input class="input" name="input" type="text" />
        </S.Campo>
    );
}
