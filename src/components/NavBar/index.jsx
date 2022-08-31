import React from "react";
import { Link } from "react-router-dom";
import { BtnLaranja } from "../../styles/globalStyles";
import { NavBarStyled } from "./style";

const NavBar = ({column,gap,none}) => {
  return (
    <NavBarStyled column={column} gap={gap} none={none}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/cardapio">Cardápio</Link>
      </li>
      <li>
        <Link to="/">Contato</Link>
      </li>
      <li>
        <BtnLaranja>
          <Link to="/login">Login</Link>
        </BtnLaranja>
      </li>
    </NavBarStyled>
  );
};

export default NavBar;
