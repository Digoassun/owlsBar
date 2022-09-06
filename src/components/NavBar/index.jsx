import React,{useContext,useEffect} from "react";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import { NavLink,Link } from "react-router-dom";
import { BtnNav, NavBarStyled } from "./style";

const NavBar = ({column,gap,none,setMenu}) => {
  const { login,handleLogout,storage,setLogin,getNome } = useContext(OwlsBarContext);

  useEffect(() => {
    storage?setLogin(true):setLogin(false)
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
        <div>
          <Link className="btn" to="/" onClick={handleLogout}>
              <BtnNav >
                Logout
              </BtnNav>
          </Link>
        </div>
        :
          <Link className="btn" to="/login">
            <BtnNav>
              Login
            </BtnNav>
          </Link>
        }
      </li>
    </NavBarStyled>
  );

};

export default NavBar;
