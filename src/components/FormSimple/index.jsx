import React from "react";
import { BtnSearch, FormStyled } from "./styles";

const FormSearch = () => {
  return (
    <FormStyled>
      <input type="text" placeholder="O que você está procurando?" />
      <BtnSearch>Pesquisar</BtnSearch>
      <BtnSearch>Adicionar</BtnSearch>
    </FormStyled>
  );
};

export default FormSearch;
