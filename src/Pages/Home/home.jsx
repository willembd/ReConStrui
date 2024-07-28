import Cards from "../../Componentes/cards/cards";
import Carrossel from "../../Componentes/Carrossel/carrossel";
import Footer from "../../Componentes/Footer/footer"
import NavBar from "../../Componentes/NavBar/navbar";


export default function Home() {
    return (
        <>
            <NavBar />
            <Carrossel/>
            <Cards/>
            <Footer/>
        </>
    );
}
