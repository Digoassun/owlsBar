import React from "react";
import { FooterStyled } from "./styles";
import logo from "../../assets/logo-header.png";
import { DivInfos } from "../common/Infos/styles";

const Footer = () => {
  return (
  <FooterStyled>
    <img src={logo} alt="logo footer" />
    <DivInfos>Sobre</DivInfos>
  </FooterStyled>)
};

export default Footer;
