import React, { useContext, useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import {
  BtnLaranja,
  ContainerPageLogin,
  ContainerForm,
} from "../../styles/globalStyles";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { TitleOrange } from "../Login/styles";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import { useNavigate } from "react-router-dom";
import { postFuncionario } from "../../services/api";
import { validaEmpty, validaSenha, validaNome,validaLogin } from "../../utils/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cadastro = () => {
  const navigate = useNavigate();
  const { usuarios } = useContext(OwlsBarContext);
  const [input, setInput] = useState({
    login: "",
    senha: "",
    nome: "",
  });
  const handleChange = (target, key) => {
    const value = target.value;
    setInput({ ...input, [key]: value });
  };
  const [cadastro, setCadastro] = useState(false);

  const handlePostFuncionario = async (e) => {
    e.preventDefault();
    if (
      !validaEmpty(input) &&
      validaNome(input.nome) &&
      validaLogin(input.login) &&
      validaSenha(input.senha)
    ) {
      toast.success("Cadastro efetuado com sucesso", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      await postFuncionario(input);
      setCadastro(true);
    }
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <ContainerPageLogin>
      <ContainerForm>
        <TitleOrange>Cadastro</TitleOrange>
        {!cadastro ? (
          <>
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
            <BtnLaranja onClick={handlePostFuncionario}>CADASTRE-SE</BtnLaranja>
          </>
        ) : (
          <BtnLaranja onClick={handleNavigate}>IR PARA LOGIN</BtnLaranja>
        )}
      </ContainerForm>
      <ToastContainer />
    </ContainerPageLogin>
  );
};

export default Cadastro;
