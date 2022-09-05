import React,{useContext,useEffect} from "react";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import { NavLink,Link } from "react-router-dom";
import { BtnStyled, NavBarStyled } from "./style";

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
          <Link className="btn" to="/" onClick={handleLogout}>
              <BtnStyled >
                Sair
              </BtnStyled>
          </Link>
        :
          <Link className="btn" to="/login">
            <BtnStyled>
              Login
            </BtnStyled>
          </Link>
        }
      </li>
    </NavBarStyled>
  );

};

export default NavBar;
