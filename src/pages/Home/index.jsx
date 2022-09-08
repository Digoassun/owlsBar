import React from "react";
import {
  ContainerCarousel,
  ContainerSabores,
  ContainerWelcome,
  TitleCorousel,
  TitleSabores,
  TitleWelcome,
} from "./styles";
import homeWelcome from "../../assets/homeWelcome.jpg";
import logoHome from "../../assets/logo-home.svg";
import blur from "../../assets/blur.jpg";
import cervejaBanner from "../../assets/cervejaBanner.jpg";
import SwiperComponent from "../../components/Swiper";

const Home = () => {
  return (
    <>
      <ContainerWelcome>
        <div>
          <img src={logoHome} alt="logo" />
          <TitleWelcome>
            Sejam bem-vindos a melhor experiência de todas!
          </TitleWelcome>
        </div>
        <img className="bannerHome" src={homeWelcome} alt="banner bem vindo" />
      </ContainerWelcome>
      <ContainerCarousel>
        <div className="divTexto">
          <TitleCorousel>Galeria</TitleCorousel>
          <div>
            <p>
              O cardápio do pub contempla cervejas vindas de diversos países.
              Também excelentes tipos de whiskys, bem como variedades de gin,
            </p>
            <p>
              rum, vodka, coqueteis e drinks únicos de dar água na boca. Entre
              os pratos e acompanhamentos é possível perceber a mistura de
            </p>
            <p>
              temperos brasileiros e unicamente preparados pelos chefs do Owl's
              Bar. Viva essa experiência!
            </p>
          </div>
        </div>
        <SwiperComponent />
        <img className="blur" src={blur} alt="" />
      </ContainerCarousel>
      <ContainerSabores>
        <div>
          <TitleSabores>
            Descubra os sabores das cervejas do mundo todo aqui!
          </TitleSabores>
        </div>
        <img src={cervejaBanner} alt="cerveja banner" />
      </ContainerSabores>
    </>
  );
};

export default Home;
