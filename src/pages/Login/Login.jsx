import React from "react";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useState } from "react";
import {
  BtnLaranja,
  ContainerPageLogin,
  ContainerForm,
} from "../../styles/globalStyles";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { TitleOrange } from "./styles";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const usuarios = [
    {
      value: "gerente",
      label: "Gerente",
      senha: "gerente123",
    },
    {
      value: "garcom",
      label: "Garçom",
      senha: "garçom123",
    },
  ];

  const [input, setInput] = useState({
    usuario: "",
    senha: "",
  });

  const handleChange = (target, key) => {
    const value = target.value;
    setInput({ ...input, [key]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      (usuarios[0].value === input.usuario &&
        usuarios[0].senha === input.senha) ||
      (usuarios[1].value === input.usuario && usuarios[1].senha === input.senha)
    ) {
      navigate("/cardapio");
    } else {
      console.log("aqui");
      return <p>Usuário ou senha incorretos</p>;
    }
  };

  return (
    <ContainerPageLogin>
      <ContainerForm>
        <TitleOrange>Login</TitleOrange>
        <p>Por favor preencha o dados abaixo para começar!</p>
        <ThemeProvider theme={theme}>
          <TextField
            id="outlined-select-currency"
            select
            label="Selecione um usuário"
            value={input.usuario}
            onChange={({ target }) => handleChange(target, "usuario")}
          >
            {usuarios.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-basic"
            label="Senha"
            type="password"
            variant="outlined"
            value={input.senha}
            onChange={({ target }) => handleChange(target, "senha")}
          />
        </ThemeProvider>
        <BtnLaranja onClick={handleLogin}>ENTRAR</BtnLaranja>
      </ContainerForm>
    </ContainerPageLogin>
  );
};

export default Login;
