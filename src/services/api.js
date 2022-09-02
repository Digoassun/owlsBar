import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-pub-project.herokuapp.com",
});

export const getProdutos = async () => {
  const response = await api.get("/menu");
  return response.data.dados;
};

export const deleteProduto = async (produto) => {
  await api.delete(`/menu/produto/${produto}`)
}

export const postProduto = async (body) => {
  const response = await api.post("/menu", body);
  return response.data.dados;
};

// export const postProduto = async (data) => {
//   const response = await api.post("/menu", data)
//   return response.data.dados;
// }

// https://api-pub-project.herokuapp.com/menu -- Rota Get
// https://api-pub-project.herokuapp.com/menu/produto/:produto -- Rota Get(parametro)
// https://api-pub-project.herokuapp.com/menu -- Rota Post
// https://api-pub-project.herokuapp.com/menu/produto/:produto -- Rota Put
// https://api-pub-project.herokuapp.com/menu/produto/:produto -- Rota Delete