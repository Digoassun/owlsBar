import React, { useContext, useState } from "react";
import { TextField } from "@mui/material";
import {
  BtnLaranja,
  ContainerPageLogin,
  ContainerForm,
} from "../../styles/globalStyles";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { TitleOrange } from "./styles";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import { useNavigate, Link } from "react-router-dom";
import { getFuncionariosParams } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { setLogin } = useContext(OwlsBarContext);
  const [input, setInput] = useState({
    login: "",
    senha: "",
  });

  const handleChange = (target, key) => {
    const value = target.value;
    setInput({ ...input, [key]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await getFuncionariosParams(input.login);
      if (response.login === input.login && response.senha === input.senha) {
        localStorage.setItem("login",input.login)
        localStorage.setItem("senha",input.senha)
        setLogin(true)
        navigate('/cardapio')
      } else {
        toast.error("Login e senha não batem", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch {
      toast.error("Login inválido", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <ContainerPageLogin>
      <ContainerForm>
        <TitleOrange>Login</TitleOrange>
        <p>Por favor preencha o dados abaixo para começar!</p>
        <ThemeProvider theme={theme}>
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
        <BtnLaranja onClick={handleLogin}>ENTRAR</BtnLaranja>
        <p>
          Para cadastro de funcionário <Link to="/cadastro">clique aqui</Link>
        </p>
      </ContainerForm>
      <ToastContainer />
    </ContainerPageLogin>
  );
};

export default Login;
