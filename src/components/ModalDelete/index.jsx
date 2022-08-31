import { useState } from 'react'
import { Dialog } from '@headlessui/react'

const ModalDelete = ({ isOpen,handleDelete,setIsOpen }) => {
  return (
    <Dialog open={isOpen} onClose={setIsOpen}>
      <Dialog.Panel>
        <Dialog.Title>Tem certeza que deseja excluir este item?</Dialog.Title>
        <button onClick={setIsOpen}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </Dialog.Panel>
    </Dialog>
  )
}

export default ModalDelete