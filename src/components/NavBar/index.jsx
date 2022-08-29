import React from "react";
import { Link } from "react-router-dom";
import { BtnLaranja } from "../UI";
import { NavBarStyled } from "./style";

const NavBar = () => {
  return (
    <NavBarStyled>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Cardápio</Link>
      </li>
      <li>
        <Link to="/">Cadastro</Link>
      </li>
      <li>
        <Link to="/">Contato</Link>
      </li>
      <li>
        <BtnLaranja>
          <Link to="/">Administrador</Link>
        </BtnLaranja>
      </li>
    </NavBarStyled>
  );
};

export default NavBar;
