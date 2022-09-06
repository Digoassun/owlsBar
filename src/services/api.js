import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-pub-project.herokuapp.com",
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

export const updateProduto = async (produto,body) =>{
  await api.put(`/menu/produto/${produto}`,body)
}

//Funcionarios
export const postFuncionario = async (body) => {
  const response = await api.post("/staff", body);
  return response.data.dados;
};