import Footer from "../../Componentes/Footer/footer";
import NavBar from "../../Componentes/NavBar/navbar";


export default function NovosOrcamentoEmp(){
    return (
        <>
            <NavBar/>

            <div>
                <a href="">Novos Orçamentos</a>
                <a href="">Entregas</a>
                <a href=""> Retiradas</a>
                <a href="">Finalizados</a>
                <div>
                    <div></div>
                    <div>
                        <span><p>Nome:</p>Bruno Gustavo</span>
                        <span><p>Quantidade:</p>15 metros</span>
                        <span><p>Rua:</p>Joaquim Nabuco</span>
                    </div>
                    <div>
                        <div>
                            <h2>Aguardando Recebido</h2>
                        </div>
                        <div>
                            <button>Cancelar</button>
                            <button>Verificar</button>
                        </div>
                    </div>
                </div>    
            </div>
        
            <Footer/>
        </>

    )
}