import styled from "styled-components";
import {
    Title
} from "../../styles/globalStyles";
import {
    cinza,
    gelo,
    laranja,
    satisfy
} from "../../styles/variaveis";

export const TitleWelcome = styled(Title)
`
    font-size: 80px;
    ${satisfy}
    text-align: center;
    width: 1200px;
        @media(max-width:1430px){
                font-size:60px;
                width:900px;
            }
        @media(max-width:800px){
                font-size:40px;
                width:700px;
            }
        @media(max-width:500px){
            font-size:25px;
            width:450px;
        }
        @media(max-width:400px){
            font-size:20px;
            width:300px;
            }
`
export const TitleCorousel = styled(Title)`
    color:${laranja};
    @media(max-width:1100px){
        font-size: 60px;
    }
    @media(max-width:500px){
        font-size: 40px;
    }
`
export const TitleSabores = styled(Title)`
    color: ${gelo};
    font-size:50px;
    text-align: center;
    @media(max-width:700px){
        font-size: 25px;
        /* width:300px; */
    }
`

export const ContainerWelcome = styled.section `
    position: relative;
    overflow: hidden;
    background-color: ${cinza};
    div{        
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;        
        img{
            @media(max-width:1430px){
                width:350px;
                height:350px;
            }
            @media(max-width:800px){
                width:250px;
                height:250px;
            }
            @media(max-width:500px){
                width:150px;
                height:150px;
            }
            @media(max-width:400px){
                width:120px;
                height:120px;
            }
        }
    }
    .bannerHome{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        opacity: 0.5;
    }
`

export const ContainerCarousel = styled.section `
    position: relative;
    overflow: hidden;
    padding-bottom:20px;

    .swiper-button-next, .swiper-button-prev{
        color:${laranja};
    }
    .divTexto{        
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;        
    }
    .blur{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
    }
    p{
        color:${gelo};
        font-size: 24px;
        text-align: center;
        padding: 10px 0;
        line-height: 0.7;
        @media(max-width:1500px){
            font-size: 18px;
        }
        @media(max-width:1100px){
            font-size: 14px;
        }
        @media(max-width:900px){
            display: none;
        }
    }
    .carousel{
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
            width: 50%;
            height: 50%;
        }
    }
`

export const ContainerSabores = styled.section`
    position: relative;
    background-color: ${cinza};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    div{        
        display: flex;        
        align-items: center;
        width: 620px;
        height:520px;
        position: relative;
        z-index: 2;
        @media(max-width:800px){
            height: 350px;
        }
        @media(max-width:500px){
            height: 250px;
        }
    }
    img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        opacity:0.5;
    }   
`