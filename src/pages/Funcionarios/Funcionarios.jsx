import React from "react";
import CardFuncionario from "../../components/CardFuncionario";
import { FuncionariosContainer, TitleFuncionarios } from "./styles";

const Funcionarios = () => {
  return (
    <FuncionariosContainer>
      <div className="containerFuncionarios">
        <TitleFuncionarios>Funcionários</TitleFuncionarios>
        <div className="divCard">
          <CardFuncionario />
        </div>
      </div>
    </FuncionariosContainer>
  );
};

export default Funcionarios;
