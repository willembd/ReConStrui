import * as S from "./input2Style" 


export default function Input2({ text, ...rest }) {
    return (
        <S.Campo>
            <label class="text" for="input"> {text} </label>
            <input class="input" type="text"  required {...rest}/>
        </S.Campo>
    );
}
