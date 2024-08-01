import Cards from "../../Componentes/cards/cards";
import Cards2 from "../../Componentes/Cards2/cards2"
import Carrossel from "../../Componentes/Carrossel/carrossel";
import Filtro from "../../Componentes/Filtro/filtro";
import Footer from "../../Componentes/Footer/footer"
import NavBar from "../../Componentes/NavBar/navbar";



export default function Home() {
    return (
        <>
            <NavBar />
            <Carrossel/>
            <Filtro/>
            <Cards/>
            <Cards2/>
            <Footer/>
        </>
    );
}
