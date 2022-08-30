import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Add from "./pages/Add/Add";
import Cardapio from "./pages/Cardarpio/Cardapio";
import Edit from "./pages/Edit/Edit";
import Home from "./pages/Home/Home";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cardapio" element={<Cardapio/>}/>
          <Route path="/editar" element={<Edit/>}/>
          <Route path="/adicionar" element={<Add/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
