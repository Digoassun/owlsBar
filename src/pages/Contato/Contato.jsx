import React from "react";
import CardContato from "../../components/CardContato";
import { ContainerContato, TitleContato } from "./styles";
import bannerContato from "../../assets/bannerContato.png";
import rodrigo from "../../assets/rodrigo.jpg";
import rachelle from "../../assets/rachelle.jpg";
import lisandra from "../../assets/lisandra.jpg";

const Contato = () => {
  const props = [
    {
      img: `${rodrigo}`,
      nome: "Rodrigo",
      stack: "Desenvolvedor FullStack",
      github: "https://github.com/Digoassun",
      linkedin: "https://www.linkedin.com/in/rodrigo-assun/",
    },
    {
      img: `${lisandra}`,
      nome: "Lisandra",
      stack: "Desenvolvedora FullStack",
      github: "https://github.com/Lisandradecassia",
      linkedin: "https://www.linkedin.com/in/lisandradecassia/",
    },
    {
      img: `${rachelle}`,
      nome: "Rachelle",
      stack: "Desenvolvedora BackEnd",
      github: "https://github.com/rachellesdev",
      linkedin: "https://www.linkedin.com/in/rachelle-santolin/",
    },
  ];
  return (
    <ContainerContato>
      <div className="divConteudo">
        <TitleContato>Conheça o nosso time!</TitleContato>
        <div className="divCard">
          {props.map((props, index) => {
            return (
              <CardContato
                key={index}
                img={props.img}
                nome={props.nome}
                stack={props.stack}
                github={props.github}
                linkedin={props.linkedin}
              />
            );
          })}
        </div>
      </div>
      <img className="background" src={bannerContato} alt="Banner contato" />
    </ContainerContato>
  );
};

export default Contato;
