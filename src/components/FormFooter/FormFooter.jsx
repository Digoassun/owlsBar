import React from "react";
import { TextField, ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { BtnFormFooter, FormFooterStyled } from "./style";

const FormFooter = () => {
  return (
    <FormFooterStyled>      
        <label className="label">Receba as notícias mais recentes:</label>      
      <div>
        <ThemeProvider theme={theme}>
          <TextField
            id="filled-basic"
            variant="filled"
            label="Insira seu e-mail"
            type="text"
            color="primary"
            size="small"
            // fullWidth 
          />
        </ThemeProvider>
        <BtnFormFooter>Me inscrever</BtnFormFooter>
      </div>
    </FormFooterStyled>
  );
};

export default FormFooter;
