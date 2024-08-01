import React, { Children } from 'react'
import { BACKGROUND_STYLE, MODAL_STYLE } from './modalCards'



export default function ModalCards({isOpen, Children,setModalOpen}) {
  
    if(isOpen){
        return(

            <BACKGROUND_STYLE>
                <MODAL_STYLE>
                    <div>
                        {Children}
                    </div>
                    <button onClick={setModalOpen}>Fechar</button>
                </MODAL_STYLE>
            </BACKGROUND_STYLE>
        )

    }

    return null
}
