import * as S from '../../Input/inputStyle';
import { Button } from '../styleCards.js';
import { BACKGROUND_STYLE, MODAL_STYLE } from './modalCards.js'

import { Input } from 'react-select/animated'


export default function ModalCards({isOpen,setModalOpen,children }) {
  
    if(isOpen){
        return(

            <BACKGROUND_STYLE>
                <MODAL_STYLE>
                    {children}
                    <Button onClick={setModalOpen}>X</Button>

                </MODAL_STYLE>
            </BACKGROUND_STYLE>
        )

    }

    return null
}
