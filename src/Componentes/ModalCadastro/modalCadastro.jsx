import {ModalStyleEmpresa} from "../ModalCadastro/modalCadastroStyle"
import {Style} from "../ModalCadastro/modalCadastroStyle"
import {XStyle} from "../ModalCadastro/modalCadastroStyle"

export default function ModalCadastroEmpresa({ isOpen, setModalOpen, children}) {
    if (isOpen){
       return (
         <Style>
             <ModalStyleEmpresa>
                <XStyle onClick={setModalOpen}>X</XStyle>
                 <div>
                   {children}
                 </div>
                 <button onClick={setModalOpen}>Fechar</button>

             </ModalStyleEmpresa>
         </Style>
         

      )
    }
    return null

}