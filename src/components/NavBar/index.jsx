import React,{useContext} from "react";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import { NavLink,Link } from "react-router-dom";
import { BtnLaranja } from "../../styles/globalStyles";
import { NavBarStyled } from "./style";

const NavBar = ({column,gap,none,setMenu}) => {
  const { login,setLogin } = useContext(OwlsBarContext);

  return (
    <NavBarStyled column={column} gap={gap} none={none}>
      <li>
        <NavLink to="/" onClick={()=>setMenu(false)}>Home</NavLink >
      </li>
      <li>
        <NavLink to="/cardapio" onClick={()=>setMenu(false)}>Cardápio</NavLink>
      </li>
      <li>
        <NavLink to="/contato" onClick={()=>setMenu(false)}>Contato</NavLink>
      </li>
      <li>
        {!login? 
        <BtnLaranja>
          <Link className="btn" to="/login" onClick={()=>setMenu(false)}>Login</Link>
        </BtnLaranja>
        :
        <BtnLaranja >
          <Link className="btn" to="/" onClick={()=>setLogin(false)}>Sair</Link>
        </BtnLaranja>
        }
      </li>
    </NavBarStyled>
  );
};

export default NavBar;
