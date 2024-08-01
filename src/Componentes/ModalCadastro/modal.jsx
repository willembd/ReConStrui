import { useState } from "react";
import ModalCadastroEmpresa from "./modalCadastro";



export default function Modal(){
    const [openModal, setOpenModal] = useState(false)
    return (
       <div className="ButtonCadastro">
             Modal  
         <div>
             <button onClick={() => setOpenModal(true)}> Abrir modal </button>
         </div>
         <ModalCadastroEmpresa isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}>
              Conteúdo do modal
         </ModalCadastroEmpresa>
       </div>

        
    )
}