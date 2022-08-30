import React from "react";
import { BtnSearch, FormStyled } from "./styles";

const FormSearch = ({handleReq}) => {
  return (
    <FormStyled>
      <input type="text" placeholder="O que você está procurando?" />
      <BtnSearch onClick={handleReq}>Pesquisar</BtnSearch>
      <BtnSearch >Adicionar</BtnSearch>
    </FormStyled>
  );
};

export default FormSearch;
