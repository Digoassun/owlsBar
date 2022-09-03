import React from "react";
import { Link } from "react-router-dom";
import { BtnLaranja } from "../../styles/globalStyles";
import { NavBarStyled } from "./style";

const NavBar = ({column,gap,none,setMenu}) => {
  return (
    <NavBarStyled column={column} gap={gap} none={none}>
      <li>
        <Link to="/" onClick={()=>setMenu(false)}>Home</Link >
      </li>
      <li>
        <Link to="/cardapio" onClick={()=>setMenu(false)}>Cardápio</Link>
      </li>
      <li>
        <Link to="/contato" onClick={()=>setMenu(false)}>Contato</Link>
      </li>
      <li>
        <BtnLaranja>
          <Link to="/login" onClick={()=>setMenu(false)}>Login</Link>
        </BtnLaranja>
      </li>
    </NavBarStyled>
  );
};

export default NavBar;
