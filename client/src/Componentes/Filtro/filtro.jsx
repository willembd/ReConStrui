import {SelectEstadosPage} from "../Select/select";
import { useEffect, useState } from "react";
import Produto from "../SelectProduto/produto";
import * as S from './filtroStyle'

export default function Estado(){

    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    
    useEffect(() => {
        const loadEstados = async () => {
            const response = await fetch(`https://brasilapi.com.br/api/ibge/uf/v1`);
            const data = await response.json();
            setEstados(data);
        };

        loadEstados();
    }, []);

    const loadCidades = async (event) => {
        const estadoSelected = event.target.value;
        const response = await fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${estadoSelected}`); 
        const data = await response.json();
        setCidades(data);
    };

    return (
        <S.ContainerPai>
             <S.ContainerTitulo>
                Encontre o produto mais próximo a você:
            </S.ContainerTitulo>
            <S.TextFiltro>FILTRAR POR: </S.TextFiltro>
            <S.Container>
                <SelectEstadosPage onChange={(e) => loadCidades(e)} dataArray={estados ? estados : []} id={"estados"} name={"estados"} title={"Selecione um Estado"} text="Estado"/>
                <SelectEstadosPage dataArray={cidades || []} id={"cidades"} name={"cidades"} title={"Selecione uma cidade"} text="Cidade"/>
                <Produto/>
            </S.Container>
        </S.ContainerPai>
        
    );
}