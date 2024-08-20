
import Cidade from "../SelectCidade/cidade";
import Estado from "../SelectEstado/estado";
import Produto from "../SelectProduto/produto";
import * as S from "./filtroStyle";

export default function Filtro(){

    
    return(
        <S.ContainerPai>
            <S.ContainerTitulo>Encontre o produto mais próximo a você:</S.ContainerTitulo>
            <S.Container>
                <Estado/>
                <Cidade/>
                <Produto/>
            </S.Container>
        </S.ContainerPai>
       
    )
}