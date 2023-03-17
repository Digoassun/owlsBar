import axios from "axios";

export const api = axios.create({
  baseURL: "https://apirestpub-production.up.railway.app",
});

//Produtos
export const getProdutos = async () => {
  const response = await api.get("/menu");
  return response.data.dados;
};

export const getProdutoParams = async (produto) => {
  const response = await api.get(`/menu/produto/${produto}`)
  return response.data.dados;
}

export const deleteProduto = async (produto) => {
  await api.delete(`/menu/produto/${produto}`)
}

export const postProduto = async (body) => {
  const response = await api.post("/menu", body);
  return response.data.dados;
};

export const updateProduto = async (produto, body) => {
  await api.put(`/menu/produto/${produto}`, body)
}

//Funcionarios
export const getFuncionarios = async () => {
  const response = await api.get("/staff");
  return response.data.dados;
};

export const getFuncionariosParams = async (login) => {
  const response = await api.get(`/staff/login/${login}`)
  return response.data.dados;
}


export const postFuncionario = async (body) => {
  const response = await api.post("/staff", body);
  return response.data.dados;
};

export const deleteFuncionario = async (nome) => {
  await api.delete(`/staff/nome/${nome}`)
}