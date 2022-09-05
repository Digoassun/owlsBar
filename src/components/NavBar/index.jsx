import React,{useContext,useEffect} from "react";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import { NavLink,Link } from "react-router-dom";
import { BtnLaranja } from "../../styles/globalStyles";
import { NavBarStyled } from "./style";

const NavBar = ({column,gap,none,setMenu}) => {
  const { login,handleLogout,loginA,setLogin } = useContext(OwlsBarContext);

  useEffect(() => {
    loginA?setLogin(true):setLogin(false)
  }, [])
  
  
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
        {login? 
        <BtnLaranja >
          <Link className="btn" to="/" onClick={handleLogout}>Sair</Link>
        </BtnLaranja>
        :
        <BtnLaranja>
          <Link className="btn" to="/login">Login</Link>
        </BtnLaranja>
        }
      </li>
    </NavBarStyled>
  );

};

export default NavBar;
