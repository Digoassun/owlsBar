import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import rodrigo from '../../assets/rodrigo.jpg'
import { CardContatoStyled } from "./styles";

const CardContato = ({ github, linkedin }) => {
  return (
    <CardContatoStyled>
      <figure>
        <img src={rodrigo} alt="foto do membro da equipe" />
      </figure>
      <div>
        <h2>Rodrigo</h2>
        <h3>Desenvolvedor Fullstack</h3>
      </div>
      <div>
        <a href={linkedin}>
          <AiFillLinkedin size={50} cursor="pointer" />
        </a>
        <a href={github}>
          <AiFillGithub size={50} cursor="pointer"/>
        </a>
      </div>
    </CardContatoStyled>
  );
};

export default CardContato;
