import React,{useState,useContext} from "react";
import { HeaderStyled } from "./style";
import logo from "../../assets/logo-header.png";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { MenuHamburguer } from "../MenuHamburguer";
import {AiOutlineMenu} from "react-icons/ai";
import { OwlsBarContext } from "../../context/OwlsBarProvider";


const Header = () => {
  const { getNome,login } = useContext(OwlsBarContext);

  const [menu, setMenu] = useState(false)

  return (
    <>
    <MenuHamburguer
    menu={menu}
    setMenu={setMenu}
    />
    <HeaderStyled>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    {login? <p>Bem-vindo(a), {getNome}</p> :""}
      <NavBar setMenu={setMenu}/>
      <AiOutlineMenu className="hamburguer" size={45} onClick={()=>setMenu(true)}/>
    </HeaderStyled>
    </>
  );
};

export default Header;
