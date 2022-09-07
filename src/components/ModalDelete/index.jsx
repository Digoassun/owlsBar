import { Dialog } from "@headlessui/react";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import React, { useContext } from "react";
import { BtnSearch } from "../FormSearch/styles";
import { StyledDialog } from "./styles";
import { deleteFuncionario, deleteProduto } from "../../services/api";

const ModalDelete = ({
  infosFuncionario,
  selectedProduct,
  isOpen,
  setIsOpen,
  selectedFuncionario,
}) => {
  const { setView } = useContext(OwlsBarContext);

  const handleDelete = async () => {
    if (infosFuncionario) {
      await deleteFuncionario(selectedFuncionario);
    } else {
      await deleteProduto(selectedProduct);
    }
    console.log(selectedFuncionario);
    setIsOpen(false);
    setView(true);
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
