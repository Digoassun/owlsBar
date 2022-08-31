import { Dialog } from "@headlessui/react";
import React from "react";
import { BtnSearch } from "../FormSearch/styles";
import { StyledDialog } from "./styles";
import { api } from "../../services/api";

const ModalDelete = ({ selectedProduct, isOpen, setIsOpen, handleLoad }) => {
  const handleDelete = () => {
    api
      .delete(`menu/produto/${selectedProduct}`)
      .then((response) => {
        console.log(response.data);
        handleLoad()
      })
      .catch((error) => console.log(error));
    setIsOpen(false);
  };
  return (
    <StyledDialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="divModal">
        <Dialog.Panel className="panel">
          <Dialog.Title>Tem certeza que deseja excluir?</Dialog.Title>
          <div className="buttons">
            <BtnSearch onClick={handleDelete}>Delete</BtnSearch>
            <BtnSearch onClick={() => setIsOpen(false)}>Cancel</BtnSearch>
          </div>
        </Dialog.Panel>
        <div className="blackBox"></div>
      </div>
    </StyledDialog>
  );
};

export default ModalDelete;
