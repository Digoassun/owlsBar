import React from "react";
import { CardFuncionarioStyled } from "./style";
import { GoTrashcan } from "react-icons/go";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardFuncionario = ({
  login,
  nome,
  senha,
  setIsOpen,
  setSelectedProduct,
}) => {
  return (
    <CardFuncionarioStyled>
      <div>
        <p>Nome: {nome}</p>
        <p>Login: {login}</p>
        <p>Senha: {senha}</p>
      </div>
      <GoTrashcan color={"#000"} size={25} />
    </CardFuncionarioStyled>
  );
};

export default CardFuncionario;
