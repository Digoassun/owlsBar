import React,{ useContext } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { OwlsBarContext } from "../../context/OwlsBarProvider";

const Login = () => {
    const navigate = useNavigate();
    const { setLogin } = useContext(OwlsBarContext);

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
    const handleValidaLogin = (e) => {
        e.preventDefault();
        if (
        (usuarios[0].value === input.usuario && usuarios[0].senha === input.senha) ||
        (usuarios[1].value === input.usuario && usuarios[1].senha === input.senha)
        ) {
            setLogin(true)
            navigate("/cardapio");
        } else {
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
        <BtnLaranja onClick={handleValidaLogin}>ENTRAR</BtnLaranja>
        <p>Não tem login?<Link to="/cadastro">Cadastre-se!</Link></p>
      </ContainerForm>
    </ContainerPageLogin>
  );
};

export default Login;
