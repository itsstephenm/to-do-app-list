"use client"
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Modal } from './Modal';


const AddTask = () => {
  const [ModalOpen, setModalOpen] = useState<boolean>(false);

  return (
   <div>
     <div>
      <button onClick={()=>setModalOpen(true)} className='btn btn-primary w-full'>ADD NEW TASK <AiOutlinePlus size={13} /> </button>
    </div>

    <Modal ModalOpen = {ModalOpen} setModalOpen={setModalOpen}>

        <h3 className='font-bold text-lg'>Add New Task</h3>
        <div className='modal-action'>
        <input
          type="text"
          placeholder="Type new task here"
          className="input input-bordered input-primary w-full"/>
          <button type='submit' className='btn'>Submit</button>
        </div>

    </Modal>
   </div>
  )
}

export default AddTask
