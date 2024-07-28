import Select from "../Select/select";
import * as S from "./filtroStyle";

export default function Filtro(){
    return(
        <S.ContainerPai>
            <p>Encontre o produto mais próximo a você:</p>
            <S.Container>
                <Select/>
                <Select/>
                <Select/>
            </S.Container>
        </S.ContainerPai>
       
       
    )
}