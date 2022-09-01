import React,{useState} from "react";
import { HeaderStyled } from "./style";
import logo from "../../assets/logo-header.png";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { MenuHamburguer } from "../MenuHamburguer";
import {AiOutlineMenu} from "react-icons/ai";

const Header = () => {
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
      <NavBar/>
      <AiOutlineMenu className="hamburguer" size={45} onClick={()=>setMenu(true)}/>
    </HeaderStyled>
    </>
  );
};

export default Header;
