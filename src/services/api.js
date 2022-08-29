import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-pub-project.herokuapp.com/",
});


// https://api-pub-project.herokuapp.com/menu -- Rota Get
// https://api-pub-project.herokuapp.com/menu/produto/:produto -- Rota Get(parametro)
// https://api-pub-project.herokuapp.com/menu -- Rota Post
// https://api-pub-project.herokuapp.com/menu/produto/:produto -- Rota Put
// https://api-pub-project.herokuapp.com/menu/produto/:produto -- Rota Delete
