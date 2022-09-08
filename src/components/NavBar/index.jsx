import React, { useContext, useEffect } from "react";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import { NavLink, Link } from "react-router-dom";
import { BtnNav, NavBarStyled } from "./style";

const NavBar = ({ column, gap, none, setMenu }) => {
  const { login, handleLogout, storage, setLogin, getLogin } =
    useContext(OwlsBarContext);

  useEffect(() => {
    storage ? setLogin(true) : setLogin(false);
  }, []);

  return (
    <NavBarStyled column={column} gap={gap} none={none}>
      <li>
        <NaLink to="/" onClick={() => setMenu(false)}>
          Home
        </NaLink>
      </li>
      <li>
        <NavLink to="/cardapio" onClick={() => setMenu(false)}>
          Cardápio
        </NavLink>
      </li>
      <li>
        <NavLink to="/contato" onClick={() => setMenu(false)}>
          Contato
        </NavLink>
      </li>
      {getLogin == "gestora" ? (
        <li>
          <NavLink to="/funcionarios" onClick={() => setMenu(false)}>
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
          <Link className="btn" to="/login" onClick={() => setMenu(false)}>
            <BtnNav>Login</BtnNav>
          </Link>
        )}
      </li>
    </NavBarStyled>
  );
};

export default NavBar;
