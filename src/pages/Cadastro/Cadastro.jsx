import React, { useState, useEffect } from "react";
import { ContainerForm, ContainerPageLogin } from "../../styles/globalStyles";
import { TitleOrange } from "../Login/styles";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { TextField } from "@mui/material";
import { ButtonMarginBot } from "./styles";

const Cadastro = () => {
  const [usuario, setUsuario] = useState(() => {
    const saved = localStorage.getItem("usuario");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [senha, setSenha] = useState(() => {
    const saved = localStorage.getItem("senha");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    localStorage.setItem("senha", JSON.stringify(senha));
  }, [usuario, senha]);

  return (
    <ContainerPageLogin>
      <ContainerForm>
        <TitleOrange>Cadastro</TitleOrange>
        <p>Cadastre os seus dados!</p>
        <ThemeProvider theme={theme}>
          <TextField
            id="outlined-basic"
            label="Usuario"
            type="text"
            variant="outlined"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            type="password"
            variant="outlined"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </ThemeProvider>
        <ButtonMarginBot>CADASTRE-SE</ButtonMarginBot>
      </ContainerForm>
    </ContainerPageLogin>
  );
};

export default Cadastro;
