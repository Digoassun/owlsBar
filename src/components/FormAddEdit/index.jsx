import React, { useState, useContext, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/variaveis";
import { FormAddEditStyle, InputFormMod, TitleMod } from "./styles";
import { BtnLaranja } from "../../styles/globalStyles";
import {
  postProduto,
  updateProduto,
  getProdutoParams,
} from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import { validaEmpty, validaDescricao } from "../../utils/utils";
import { ToastContainer } from "react-toastify";


const FormAddEdit = ({ text, txtBtn }) => {
  const { setView } = useContext(OwlsBarContext);

  const [produtos, setProdutos] = useState({
    produto: "",
    valor: "",
    img: "",
    descricao: "",
  });
  const navigate = useNavigate();
  const params = useParams();
  const produto = params.produto;

  const handleRequestParams = async () => {
    const response = await getProdutoParams(produto);
    setProdutos(response);
  };

    const handleAction = (e) => {
    e.preventDefault();
    if(validaDescricao(produtos.descricao) && !validaEmpty(produtos)){
      if(produto){
        updateProduto(produto, produtos);
        
      } else {
        postProduto(produtos);
        
      }
      navigate("/cardapio");
        setView(true);
    } 
  };

  const handleChange = (target, key) => {
    const value = target.value;
    setProdutos({ ...produtos, [key]: value });
  };

  const handleChangeNumber = (target, key) => {
    const value = target.valueAsNumber;
    setProdutos({ ...produtos, [key]: value });
  };
  useEffect(() => {
    if (produto) {
      handleRequestParams();
    }
  }, []);

  return (
    <FormAddEditStyle>
      <TitleMod>{text}</TitleMod>
      <fieldset>
        <ThemeProvider theme={theme}>
          <InputFormMod
            variant="filled"
            label="Produto"
            type="text"
            color="primary"
            onChange={({ target }) => handleChange(target, "produto")}
            value={produtos.produto}
          />
          <InputFormMod
            variant="filled"
            label="Valor"
            type="number"
            color="primary"
            onChange={({ target }) => handleChangeNumber(target, "valor")}
            value={produtos.valor}
          />
          <InputFormMod
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
            label={`Descricao ${produtos.descricao.length}/55`}
            rows={4}
            multiline
            color="primary"
            onChange={({ target }) => handleChange(target, "descricao")}
            value={produtos.descricao}
          />
          <BtnLaranja
            onClick={handleAction}
          >
            {txtBtn}
          </BtnLaranja>
        </ThemeProvider>
      </fieldset>
      <ToastContainer />
    </FormAddEditStyle>
  );
};

export default FormAddEdit;
