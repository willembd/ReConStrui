import Select from "../Select/select";

export default function Produto(){
    return(
        <Select text="Produto">
            <option value="">Selecione</option>
            <option value="">Areia Reciclada</option>
            <option value="">Pedrisco</option>
            <option value="">Brita Reciclada</option>
            <option value="">Rachão</option>
        </Select>
    )
}