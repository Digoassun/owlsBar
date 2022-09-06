import React,{ useContext,useState } from "react";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import {
  BtnLaranja,
  ContainerPageLogin,
  ContainerForm
} from "../../styles/globalStyles";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { TitleOrange } from "./styles";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import { useNavigate,Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { usuarios,setLogin} = useContext(OwlsBarContext);
  const [input, setInput] = useState({
    login:"",
    senha: "",
    nome:"",
});

  const handleChange = (target, key) => {
    const value = target.value;
    setInput({ ...input, [key]: value });
};
  const handleLogin = (e) => {        
    e.preventDefault();
    if (
    (usuarios[0].value === input.login && usuarios[0].senha === input.senha) ||
    (usuarios[1].value === input.login && usuarios[1].senha === input.senha)
    ) {
        localStorage.setItem("login",input.login)
        localStorage.setItem("senha",input.senha)
        setLogin(true)
        navigate('/cardapio')
    } else {
    }
};
  return (
    <ContainerPageLogin>
      <ContainerForm>
        <TitleOrange>Login</TitleOrange>
        <p>Por favor preencha o dados abaixo para começar!</p>
        <ThemeProvider theme={theme}>
          <TextField
            select
            label="Selecione um usuário"
            value={input.login}
            onChange={({ target }) => handleChange(target, "login")}
          >
            {usuarios.map((option,index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            value={input.senha}
            onChange={({ target }) => handleChange(target, "senha")}
          />
        </ThemeProvider>     
        <BtnLaranja onClick={handleLogin}>ENTRAR</BtnLaranja>
        <p>Para cadastro de funcionário <Link to="/cadastro">clique aqui</Link></p>
      </ContainerForm>
    </ContainerPageLogin>
  );
};

export default Login;
