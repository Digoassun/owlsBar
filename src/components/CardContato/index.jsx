import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CardContatoStyled } from "./styles";

const CardContato = ({ img,nome,stack,github, linkedin }) => {
  return (
    <CardContatoStyled>
      <figure>
        <img src={img} alt="foto do membro da equipe" />
      </figure>
      <div>
        <h2>{nome}</h2>
        <h3>{stack}</h3>
      </div>
      <div>
        <a href={linkedin} target="_blank">
          <AiFillLinkedin size={50} cursor="pointer" color="black" />
        </a>
        <a href={github} target="_blank">
          <AiFillGithub size={50} cursor="pointer" color="black"/>
        </a>
      </div>
    </CardContatoStyled>
  );
};

export default CardContato;
