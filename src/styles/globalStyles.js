import styled, {
    createGlobalStyle
} from "styled-components";
import {
    laranja,
    sancreek,
    branco,
    preto,
    gelo,
    jost
} from "./variaveis";
import banner from '../assets/banner-cardapio.png'
import backLogin from '../assets/fundo-login.png'
import { TextField } from "@mui/material";

export const GlobalStyle = createGlobalStyle `
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
}

body,html{
    min-height: 100vh;
    width:100%;
}
`
export const BtnLaranja = styled.button `
    position: relative;
    background-color: ${laranja};
    padding: 10px 50px;
    cursor: pointer;
    box-shadow:(0px 4px 4px rgba(5, 5, 5, 0.5));
    border-radius: 10px;
    border: none;
    color:${branco};
    ${jost}
`

export const Title = styled.h1 `
    ${sancreek}
    font-size: 100px;
    font-weight:400;
    color: ${branco};
    @media(max-width:500px){
        font-size: 80px;
    }
`

export const ContainerPage = styled.main `
    display: flex;
    flex-direction: column;
    background-color:${preto};
`
export const ContainerPageLogin = styled.main `   
    display: flex;
    flex-direction: row;
    justify-content:center;
    height: 650px;
    background-color:${preto};
    background-image: url(${backLogin});
    background-position: center;
    background-size: cover;
`

export const ContainerForm = styled.form `   
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 1%;
    margin-top: 110px;
    gap: 20px;
    background-color:${gelo};
    height: 400px;
    width: 400px;
    border-radius: 3%;
`

export const ContainerBanner = styled.section `
    display: flex;
    align-items: center;
    padding: 0 150px;
    height: 300px;
    background: url(${banner});
    background-position:center;

    @media(max-width:700px){
        padding: 0 50px;
    }

    @media(max-width:500px){
        padding: 0 10px;
    }
`

export const ContainerCard = styled.section `
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin:100px 0;

    p{
        font-size: 50px;
        color: white;
    }
`

export const CardBox = styled.div `
    min-height: auto;
    margin: 100px 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 30px;
    
`

export const GridPage = styled.section `
    min-height: 800px;
    width: 100%;
    background-color:black;
    display: flex;
    align-items:center ;
    justify-content: space-around;
    position: relative;
    figure{
        min-height: 797px;
        display: flex;
        align-items: flex-end;
        @media(max-width:1023px){
        display: none;
    }
    }
`
export const InputForm = styled(TextField)`    
    input,textarea{
        background-color: white;
        border-radius: 7px 7px 0 0;
        width: 400px;
        height: 15px;
        @media(max-width:1250px){   
            width: 200px;
            height: 15px;
        }
    }
`