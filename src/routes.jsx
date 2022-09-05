import React from 'react'
import { BrowserRouter, Routes as Switcher, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from "./components/Header";
import Add from "./pages/Add/Add";
import Cardapio from "./pages/Cardarpio/Cardapio";
import Contato from './pages/Contato/Contato';
import Edit from "./pages/Edit/Edit";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import { GlobalStyle } from "./styles/globalStyles";

const Routes = () => {

  return (
    
        <>
          <GlobalStyle />
          <BrowserRouter>
            <Header />
            <Switcher>
              <Route path="/" element={<Home />} />
              <Route path="/cardapio" element={<Cardapio />} />
              <Route path="/edit/:produto" element={<Edit />} />
              <Route path="/adicionar" element={<Add />} />
              <Route path='/login' element={<Login />} />
              <Route path='/contato' element={<Contato />} />
            </Switcher>
            <Footer />
          </BrowserRouter>
        </>
      
  )
}

export default Routes