import CarrosselCards2 from "../../Componentes/Cards2/carrosselCards2";
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
            <CarrosselCards2/>
            <Footer/>
        </>
    );
}
