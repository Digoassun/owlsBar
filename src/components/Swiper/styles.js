import styled from "styled-components";

export const CarouselStyled = styled.section`

    position: relative;
    z-index: 2;
    display: flex;
    .swiper {
    width: 100%;
    height: 100%;
    }  
    .swiper-slide {
        min-height:100%;
        text-align: center;
        background: transparent;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }  
    .swiper-slide img {
        width: 60%;
        height: 60%;
    }

`