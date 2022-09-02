import React from 'react'
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { FormAddEditStyle, InputFormMod, TitleMod } from './styles'
import { BtnLaranja, InputForm } from '../../styles/globalStyles';

const FormAddEdit = ({text,txtBtn}) => {
  return (
    <FormAddEditStyle>
      <TitleMod>{text}</TitleMod>
      <fieldset>
        <ThemeProvider theme={theme}>
            <InputFormMod
              id="filled-basic"
              variant="filled"
              label="Produto"
              type="text"
              color="primary"
            />
            <InputFormMod
              id="filled-basic"
              variant="filled"
              label="Valor"
              type="text"
              color="primary"
            />
            <InputFormMod
              id="filled-basic"
              variant="filled"
              label="Insira a URL da imagem"
              type="text"
              color="primary"
            />
            <InputFormMod
              id="filled-basic"
              variant="filled"
              label="Descrição"
              rows={4}
              multiline
              color="primary"
            />
            <BtnLaranja>{txtBtn}</BtnLaranja>
          </ThemeProvider>
      </fieldset>
    </FormAddEditStyle>
  )
}

export default FormAddEdit