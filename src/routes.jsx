import React from 'react'
import { BrowserRouter, Routes as Switcher, Route } from "react-router-dom";
import Header from "./components/Header";
import Add from "./pages/Add/Add";
import Cardapio from "./pages/Cardarpio/Cardapio";
import Edit from "./pages/Edit/Edit";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import { GlobalStyle } from "./styles/globalStyles";

const Routes = () => {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <Switcher>
          <Route path="/" element={<Home/>}/>
          <Route path="/cardapio" element={<Cardapio/>}/>
          <Route path="/editar" element={<Edit/>}/>
          <Route path="/adicionar" element={<Add/>}/>
          <Route path='/login' element={<Login/>} />
        </Switcher>
      </BrowserRouter>
    </>
  )
}

export default Routes