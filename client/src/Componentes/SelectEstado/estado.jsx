import Select from "../Select/select";
import { useEffect, useState } from "react";


export default function Estado(){

    const [estadosNomes, setEstadosNomes] = useState([]);

    function setEstados(data = []) {
        const nomes = [];
        data.forEach((estado) => nomes.push( estado.nome ));
        setEstadosNomes(nomes);
    }

    useEffect(() => {
        fetch("https://brasilapi.com.br/api/ibge/uf/v1")
          .then((response) => response.json())
          .then((data) => setEstados(data));
      }, []);

    return(
       <Select>
            <option value="">Selecione um estado</option>
            {
                estadosNomes.map((nome, index) => (
                    <option key={index} value={nome}>{nome}</option>
                ))
            }
       </Select>
    )
}
