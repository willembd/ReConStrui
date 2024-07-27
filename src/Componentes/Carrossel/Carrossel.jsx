
import { Imagens } from "./carrosselStyle"
import Carrossel1 from "../../assets/Carrossel-1.png"
import Carrossel2 from "../../assets/Carrossel-2.png"
import Carrossel3 from "../../assets/Carrossel-3.png"




export default function Carrossel(){
    return (
        <>
          <Imagens className="imagenscarrossel">
            <section>
               <img src={Carrossel1} alt="Carrossel1" />
               <img src={Carrossel2} alt="Carrossel2" />
               <img src={Carrossel3} alt="Carrossel3" />

            </section>
          
          </Imagens>
        </>
    )
}