import React from "react";
import {
  ContainerCarousel,
  ContainerSabores,
  ContainerWelcome,
  TitleCorousel,
  TitleSabores,
  TitleWelcome,
} from "./styles";
import homeWelcome from "../../assets/homeWelcome.png";
import logoHome from "../../assets/logo-home.svg";
import blur from "../../assets/blur.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import carousel1 from "../../assets/carousel1.png";
import carousel2 from "../../assets/carousel2.png";
import carousel3 from "../../assets/carousel3.png";
import carousel4 from "../../assets/carousel4.png";
import carousel5 from "../../assets/carousel5.png";
import cervejaBanner from '../../assets/cervejaBanner.png'

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
              rum, vodka, coqueteis e drinks únicos de dar água na boca. Entre os
              pratos e acompanhamentos é possível perceber a mistura de
            </p>
            <p>
              temperos brasileiros e unicamente preparados pelos chefs do Owl's
              Bar. Viva essa experiência!
            </p>
          </div>
        </div>
        <div className="carousel">
          <Swiper navigation={true} modules={[Navigation]} className="swiper">
            <SwiperSlide className="swiper-slide">
              <img src={carousel1} alt="imagem carousel" />{" "}
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={carousel2} alt="imagem carousel" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={carousel3} alt="imagem carousel" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={carousel4} alt="imagem carousel" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={carousel5} alt="imagem carousel" />
            </SwiperSlide>
          </Swiper>
        </div>
        <img className="blur" src={blur} alt="" />
      </ContainerCarousel>
      <ContainerSabores>
        <div>
          <TitleSabores>Descubra os sabores das cervejas do mundo todo aqui!</TitleSabores>
        </div>
        <img src={cervejaBanner} alt="cerveja banner" />
      </ContainerSabores>
    </>
  );
};

export default Home;
