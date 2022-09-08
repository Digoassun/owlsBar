import React from "react";
import { BrowserRouter, Routes as Switcher, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Add from "./pages/Add";
import Cadastro from "./pages/Cadastro";
import Cardapio from "./pages/Cardarpio";
import Contato from "./pages/Contato";
import Edit from "./pages/Edit";
import Funcionarios from "./pages/Funcionarios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { GlobalStyle } from "./styles/globalStyles";

const Routes = () => {
  return (
    <BrowserRouter basename="/">
      <GlobalStyle />
      <Header />
      <Switcher>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/edit/:produto" element={<Edit />} />
        <Route path="/adicionar" element={<Add />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
      </Switcher>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
