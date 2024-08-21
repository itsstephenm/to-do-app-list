import React from 'react';

interface ModalProps {
  ModalOpen: boolean;
  setModalOpen: (open: boolean)=> boolean | void;
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ModalOpen, setModalOpen, children}) => {
  return (
    
    <div className={`modal ${ModalOpen?"modal-open":""}`}>
      <div className="modal-box ">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={()=> setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
        {children}
      </div>
    </div>
  
  )
}


