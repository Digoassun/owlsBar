import React,{useState} from "react";
import { HeaderStyled } from "./style";
import logo from "../../assets/logo-header.png";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

const Header = () => {
  const [menu, setMenu] = useState(true)

  return (
    <HeaderStyled>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <NavBar/>
    </HeaderStyled>
  );
};

export default Header;
