import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
