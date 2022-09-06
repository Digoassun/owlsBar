import React, { useContext } from "react";
import { TextField } from "@mui/material";
import {
  BtnLaranja,
  ContainerPageLogin,
  ContainerForm,
  ErrorStyled,
} from "../../styles/globalStyles";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { TitleOrange } from "../Login/styles";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import { useNavigate } from "react-router-dom";
import { postFuncionario } from "../../services/api";

const Cadastro = () => {
  const navigate = useNavigate();
  const { handleChange, error, input } = useContext(OwlsBarContext);

  const handlePostFuncionario = (e) => {
    e.preventDefault();
    if (!Object.values(input).includes("")) {
      postFuncionario(input);
      navigate("/login");
      setView(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <ContainerPageLogin>
      <ContainerForm>
        <TitleOrange>Cadastro</TitleOrange>
        <p>Por favor preencha os campos abaixo</p>
        <ThemeProvider theme={theme}>
          <TextField
            label="Nome"
            type="text"
            variant="outlined"
            value={input.nome}
            onChange={({ target }) => handleChange(target, "nome")}
          />
          <TextField
            label="Login"
            type="text"
            variant="outlined"
            value={input.login}
            onChange={({ target }) => handleChange(target, "login")}
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            value={input.senha}
            onChange={({ target }) => handleChange(target, "senha")}
          />
        </ThemeProvider>
        {error ? (
          <ErrorStyled>Preencha os dados corretamente!</ErrorStyled>
        ) : (
          ""
        )}
        <BtnLaranja onClick={handlePostFuncionario}>ENTRAR</BtnLaranja>
      </ContainerForm>
    </ContainerPageLogin>
  );
};

export default Cadastro;
