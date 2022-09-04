import React from "react";
import { BtnSearch, FormStyled } from "./styles";
import { Link } from "react-router-dom";
import { InputForm } from "../../styles/globalStyles";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";

const FormSearch = ({ login, value, handleChange }) => {
  return (
    <FormStyled>
      <ThemeProvider theme={theme}>
          <InputForm
            onChange={handleChange}
            value={value}
            id="filled-basic"
            variant="filled"
            label="O que você deseja?"
            type="text"
            color="primary"
          />
        </ThemeProvider>
      <Link to="/adicionar">
        {!login ? "" : <BtnSearch>Adicionar</BtnSearch>}
      </Link>
    </FormStyled>
  );
};

export default FormSearch;
