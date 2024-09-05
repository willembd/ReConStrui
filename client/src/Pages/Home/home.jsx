import CarrosselMaisVendidos from "../../Componentes/CardsSecond/carrosselMaisVendidos";
import Carrossel from "../../Componentes/Carrossel/carrossel";
import CarrosselCards from "../../Componentes/carrosselCards/carrosselCards";
import Filtro from "../../Componentes/Filtro/filtro";
import Footer from "../../Componentes/Footer/footer"
import NavBar from "../../Componentes/NavBar/navbar";



export default function Home() {
    return (
        <>
            <NavBar />
            <Carrossel/>
            <Filtro/>
            <CarrosselCards/>
            <CarrosselMaisVendidos/>
            <Footer/>
        </>
    );
}
