import EsqueceuSenha from "../esqueceuSenhaStyle"

export default function ModalVerifiqueEmail({ isOpen, setOpen }){

    if(isOpen){
        return(
            <>
                <section>
                        <div  onClick={() => setOpen(!isOpen)} >Fechar</div>
                        <div>
    
                             <h1>Verifique seu email</h1>
                            
                        </div>
                        
                </section>        
            </>
        )
    }

    
}


    
