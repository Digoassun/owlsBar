import React, { createContext, useState } from "react";

export const OwlsBarContext = createContext();

const OwlsBarProvider = ({ children }) => {
  const getLogin = localStorage.getItem("login");
  const getSenha = localStorage.getItem("senha");
  const getNome = localStorage.getItem("nome");
  const storage = getLogin && getSenha;
  const [login, setLogin] = useState(false);
  const [view, setView] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    setLogin(false);
    setInput("");
  };

  const context = {
    getNome: getNome,
    storage: storage,
    login: login,
    view: view,
    handleLogout: handleLogout,
    setLogin: setLogin,
    setView: setView,
  };
  return (
    <OwlsBarContext.Provider value={context}>
      {children}
    </OwlsBarContext.Provider>
  );
};

export default OwlsBarProvider;
