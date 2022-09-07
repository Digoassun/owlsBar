import React from "react";
import { FooterStyled } from "./styles";
import logo from "../../assets/logo-header.png";
import FormFooter from "../FormFooter";

const Footer = () => {
  return (
    <FooterStyled>
      <img src={logo} alt="logo footer" />
      <div className="sectionTop">
        <div className="infos">
          <p>Sobre</p>
          <p>Carreiras</p>
          <p>Imprensa</p>
          <p>SAC</p>
          <p>Serviços</p>
        </div>
        <FormFooter />
      </div>
      <hr />
      <div className="sectionLow">
        <div className="infosLow">
          <p>Termos & Condições</p>
          <hr />
          <p>Política de privaciade</p>
          <hr />
          <p>Acessibilidade</p>
          <hr />
          <p>Jurídico</p>
          <hr />
        </div>
        <div>
          <p>Resilia 2022, Direitos reservados.</p>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
