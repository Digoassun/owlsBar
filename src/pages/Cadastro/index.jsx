import React, { useState, useContext } from "react";
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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { theme } from "../../styles/variaveis";
import { TitleOrange } from "../Login/styles";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import { useNavigate } from "react-router-dom";
import { postFuncionario } from "../../services/api";
import {
  validaEmpty,
  validaSenha,
  validaNome,
  validaLogin,
  reqFailed,
  validaSenhaAdmin,
} from "../../utils/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cadastro = () => {
  const { handleClickShowPassword, showPassword, setShowPassword } =
    useContext(OwlsBarContext);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    login: "",
    senha: "",
    nome: "",
  });
  const [senhaAdmin, setSenhaAdmin] = useState("");

  const [cadastro, setCadastro] = useState(false);

  const handleChange = (target, key) => {
    const value = target.value;
    setInput({ ...input, [key]: value });
  };
  const handleChangeSenhaAdmin = (e) => {
    setSenhaAdmin(e.target.value);
  };

  const handlePostFuncionario = async (e) => {
    e.preventDefault();
    if (
      !validaEmpty(input) &&
      validaNome(input.nome) &&
      validaLogin(input.login) &&
      validaSenha(input.senha) &&
      validaSenhaAdmin(senhaAdmin)
    ) {
      try {
        await postFuncionario(input);
        toast.success("Cadastro efetuado com sucesso", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setShowPassword(false);
        setCadastro(true);
      } catch (error) {
        console.error(error);
        reqFailed();
      }
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
              <FormControl variant="outlined">
                <InputLabel>ADM</InputLabel>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  value={senhaAdmin}
                  label="ADM"
                  onChange={handleChangeSenhaAdmin}
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
            <BtnLaranja onClick={handlePostFuncionario}>CADASTRE-SE</BtnLaranja>
          </>
        ) : (
          <>
            <p>&#10004;&#65039; Usuário Cadastrado com sucesso</p>
            <BtnLaranja onClick={handleNavigate}>IR PARA LOGIN</BtnLaranja>
          </>
        )}
      </ContainerForm>
      <ToastContainer />
    </ContainerPageLogin>
  );
};

export default Cadastro;
