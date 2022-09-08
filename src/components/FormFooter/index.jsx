import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { BtnFormFooter, FormFooterStyled } from "./style";
import { InputForm } from "../../styles/globalStyles";

const FormFooter = () => {
  return (
    <FormFooterStyled>
      <label className="label">Receba as notícias mais recentes:</label>
      <div>
        <ThemeProvider theme={theme}>
          <InputForm
            id="filled-basic"
            variant="filled"
            label="Insira seu e-mail"
            type="text"
            color="primary"
            size="small"
          />
        </ThemeProvider>
        <BtnFormFooter>Me inscrever</BtnFormFooter>
      </div>
    </FormFooterStyled>
  );
};

export default FormFooter;
