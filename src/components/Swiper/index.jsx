import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import carousel1 from "../../assets/carousel1.png";
import carousel2 from "../../assets/carousel2.png";
import carousel3 from "../../assets/carousel3.png";
import carousel4 from "../../assets/carousel4.png";
import carousel5 from "../../assets/carousel5.png";
import { CarouselStyled } from "./styles";

const SwiperComponent = () => {
  return (
    <CarouselStyled>
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        grabCursor={true}
        modules={[Navigation, Autoplay]}
        className="swiper"
      >
        <SwiperSlide className="swiper-slide">
          <img src={carousel1} alt="imagem carousel" />
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
    </CarouselStyled>
  );
};

export default SwiperComponent;
