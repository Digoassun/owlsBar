import React, { useContext, useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { reqFailed } from "../../utils/utils";

const Login = () => {
  const navigate = useNavigate();
  const { setLogin, handleClickShowPassword, showPassword, setShowPassword } =
    useContext(OwlsBarContext);
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
        localStorage.setItem("login", input.login);
        localStorage.setItem("senha", input.senha);
        localStorage.setItem("nome", response.nome);
        setLogin(true);
        setShowPassword(false);
        navigate("/cardapio");
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
      reqFailed();
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
          <FormControl variant="outlined">
            <InputLabel>Senha</InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              value={input.senha}
              label="Senha"
              onChange={({ target }) => handleChange(target, "senha")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </ThemeProvider>
        <BtnLaranja onClick={handleLogin}>ENTRAR</BtnLaranja>
        <p>
          Para cadastro de funcionário <Link to="/cadastro" onClick={()=>setShowPassword(false)}>clique aqui</Link>
        </p>
      </ContainerForm>
      <ToastContainer />
    </ContainerPageLogin>
  );
};

export default Login;
