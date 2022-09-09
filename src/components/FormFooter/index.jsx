import React,{useState} from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { BtnFormFooter, FormFooterStyled } from "./style";
import { InputForm } from "../../styles/globalStyles";

const FormFooter = () => {
  const [footerEmail, setFooterEmail] = useState(false)

  const handleTroca = (e) =>{
    setFooterEmail(true)
  }

  return (
    <FormFooterStyled>
      {!footerEmail?
      <>
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
        <BtnFormFooter onClick={handleTroca}>Me inscrever</BtnFormFooter>
      </div> 
      </>
      :
      <p>Email cadastrado com sucesso!&#10004;&#65039;</p>
      }
    </FormFooterStyled>
  );
};

export default FormFooter;
