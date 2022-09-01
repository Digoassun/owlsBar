import React from 'react'
import {  TextField, ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { FormAddEditStyle, TitleMod } from './styles'
import { InputForm } from '../../styles/globalStyles';

const FromAddEdit = ({text}) => {
  return (
    <FormAddEditStyle>
      <TitleMod>{text}</TitleMod>
      <fieldset>
        <ThemeProvider theme={theme}>
            <InputForm
              id="filled-basic"
              variant="filled"
              label="Produto"
              type="text"
              color="primary"
            />
            <InputForm
              id="filled-basic"
              variant="filled"
              label="Valor"
              type="text"
              color="primary"
            />
            <InputForm
              id="filled-basic"
              variant="filled"
              label="Insira a URL da imagem"
              type="text"
              color="primary"
            />
            <InputForm
              id="filled-basic"
              variant="filled"
              label="Descricao"
              multiline
              color="primary"
            />
          </ThemeProvider>
      </fieldset>
    </FormAddEditStyle>
  )
}

export default FromAddEdit