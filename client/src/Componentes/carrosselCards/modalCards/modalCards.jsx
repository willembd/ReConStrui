import { BACKGROUND_STYLE, MODAL_STYLE,Button } from '../carrosselCardsStyle.js'



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
