import { Container,Caixa,Im,Alinhamento,Linha,Title,Palavra,Botao } from "../styleCards"

import { useState } from "react"
export default function Cards({key}){
    return(
        <Container>
            <Caixa>
                <div className="box-item">
                    <div className="img">
                        <Im src={item.image} alt="Slide" className='slide-item'/>
                    </div>
                    <Alinhamento>
                        <Linha>
                            <Title>{item.title}</Title>
                            <Palavra>AGR Ambiental</Palavra>
                            <Botao onClick={() => console.log(clico)}>Comprar</Botao>
                        </Linha>
                    </Alinhamento>
                </div>
            </Caixa>

        </Container>
    )
}