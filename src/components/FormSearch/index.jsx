import React from "react";
import { BtnSearch, FormStyled } from "./styles";
import { Link } from "react-router-dom";


const FormSearch = ({value, handleChange}) => {
  return (
    <FormStyled>
      <input onChange={handleChange} value={value} type="text" placeholder="O que você está procurando?" />
      <Link to="/adicionar">
      <BtnSearch >Adicionar</BtnSearch>
      </Link>
    </FormStyled>
  );
};

export default FormSearch;
