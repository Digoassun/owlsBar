import React from "react";
import { CardFuncionarioStyled } from "./style";
import { GoTrashcan } from "react-icons/go";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardFuncionario = ({
  login,
  img,
  produto,
  desc,
  preco,
  setIsOpen,
  setSelectedProduct,
  endPoint,
}) => {
  return (
    <CardFuncionarioStyled>
      <div>
        <p>Nome: Rodrigo{}</p>
        <p>Login: digoassun{}</p>
        <p>Senha: 20231000{}</p>
      </div>
      <div className="icons">
        {/* <Link to={endPoint}> */}
        <BsPencilSquare color="#000" size={25} />
        {/* </Link> */}
        <GoTrashcan color={"#000"} size={25} />
      </div>
    </CardFuncionarioStyled>
  );
};

export default CardFuncionario;
