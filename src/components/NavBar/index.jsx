import React,{useContext} from "react";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import { Link } from "react-router-dom";
import { BtnLaranja } from "../../styles/globalStyles";
import { NavBarStyled } from "./style";

const NavBar = ({column,gap,none,setMenu}) => {
  const { login,setLogin } = useContext(OwlsBarContext);

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
        {!login? 
        <BtnLaranja>
          <Link to="/login" onClick={()=>setMenu(false)}>Login</Link>
        </BtnLaranja>
        :
        <BtnLaranja >
           <Link to="/" onClick={()=>setLogin(false)}>Sair</Link>
        </BtnLaranja>
        }
      </li>
    </NavBarStyled>
  );
};

export default NavBar;
