import React, { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { FormAddEditStyle, InputFormMod, TitleMod } from "./styles";
import { BtnLaranja } from "../../styles/globalStyles";
import { postProduto, updateProduto } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const FormAddEdit = ({ text, txtBtn }) => {
  const [produtos, setProdutos] = useState({
    produto: "",
    valor: "",
    img: "",
    descricao: "",
  });
  const navigate = useNavigate();
  const { produto } = useParams();

  const handlePost = (e) => {
    e.preventDefault();
    postProduto(produtos);
    navigate("/cardapio");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProduto(produto, produtos);
    navigate("/cardapio");
  };

  const handleChange = (target, key) => {
    const value = target.value;
    setProdutos({ ...produtos, [key]: value });
  };

  const handleChangeNumber = (target, key) => {
    const value = target.valueAsNumber;
    setProdutos({ ...produtos, [key]: value });
  };
  return (
    <FormAddEditStyle>
      <TitleMod>{text}</TitleMod>
      <fieldset>
        <ThemeProvider theme={theme}>
          <InputFormMod
            id="filled-basic"
            variant="filled"
            label="Produto"
            type="text"
            color="primary"
            onChange={({ target }) => handleChange(target, "produto")}
            value={produtos.produto}
          />
          <InputFormMod
            id="filled-basic"
            variant="filled"
            label="Valor"
            type="number"
            color="primary"
            onChange={({ target }) => handleChangeNumber(target, "valor")}
            value={produtos.valor}
          />
          <InputFormMod
            id="filled-basic"
            variant="filled"
            label="Insira a URL da imagem"
            type="text"
            color="primary"
            onChange={({ target }) => handleChange(target, "img")}
            value={produtos.img}
          />
          <InputFormMod
            id="filled-basic"
            variant="filled"
            label="Descrição"
            rows={4}
            multiline
            color="primary"
            onChange={({ target }) => handleChange(target, "descricao")}
            value={produtos.descricao}
          />
          <BtnLaranja onClick={!produto?handlePost:handleUpdate}>{txtBtn}</BtnLaranja>
        </ThemeProvider>
      </fieldset>
    </FormAddEditStyle>
  );
};

export default FormAddEdit;
