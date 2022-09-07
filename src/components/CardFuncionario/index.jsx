import React from "react";
import { CardFuncionarioStyled } from "./style";
import { GoTrashcan } from "react-icons/go";

const CardFuncionario = ({
  login,
  nome,
  senha,
  setIsOpen,
  setSelectedFuncionario
}) => {
  const handleFuncionario = () =>{
    setIsOpen(true)
    setSelectedFuncionario(nome)
  }
  return (
    <CardFuncionarioStyled>
      <div>
        <p>Nome: {nome}</p>
        <p>Login: {login}</p>
        <p>Senha: {senha}</p>
      </div>
      <GoTrashcan color={"#000"} size={25} cursor="pointer" onClick={handleFuncionario}/>
    </CardFuncionarioStyled>
  );
};

export default CardFuncionario;
