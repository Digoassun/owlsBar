import React, { useContext, useEffect } from "react";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import { NavLink, Link } from "react-router-dom";
import { BtnNav, NavBarStyled } from "./style";

const NavBar = ({ column, gap, none,handleMenu }) => {
  const { login, handleLogout, storage, setLogin, getLogin } = useContext(OwlsBarContext);

  useEffect(() => {
    storage ? setLogin(true) : setLogin(false);
  }, []);

  return (
    <NavBarStyled column={column} gap={gap} none={none}>
      <li>
        <NavLink to="/" onClick={handleMenu}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/cardapio" onClick={handleMenu}>
          Cardápio
        </NavLink>
      </li>
      <li>
        <NavLink to="/contato" onClick={handleMenu}>
          Contato
        </NavLink>
      </li>
      {getLogin == "gestora" ? (
        <li>
          <NavLink to="/funcionarios" onClick={handleMenu}>
            Funcionários
          </NavLink>
        </li>
      ) : (
        ""
      )}
      <li>
        {login ? (
          <div>
            <Link className="btn" to="/" onClick={handleLogout}>
              <BtnNav>Logout</BtnNav>
            </Link>
          </div>
        ) : (
          <Link className="btn" to="/login" onClick={handleMenu}>
            <BtnNav>Login</BtnNav>
          </Link>
        )}
      </li>
    </NavBarStyled>
  );
};

export default NavBar;
