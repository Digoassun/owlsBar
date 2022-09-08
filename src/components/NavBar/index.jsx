import React, { useContext, useEffect } from "react";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import { Link } from "react-router-dom";
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
        <Link to="/" onClick={() => setMenu(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/cardapio" onClick={() => setMenu(false)}>
          Cardápio
        </Link>
      </li>
      <li>
        <Link to="/contato" onClick={() => setMenu(false)}>
          Contato
        </Link>
      </li>
      {getLogin == "gestora" ? (
        <li>
          <Link to="/funcionarios" onClick={() => setMenu(false)}>
            Funcionários
          </Link>
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
