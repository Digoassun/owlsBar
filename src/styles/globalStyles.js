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

export const GlobalStyle = createGlobalStyle`
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
export const BtnLaranja = styled.button`
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

export const Title = styled.h1`
    ${sancreek}
    font-size: 100px;
    font-weight:400;
    color: ${branco};
    @media(max-width:500px){
        font-size: 80px;
    }
`
export const TitleOrange = styled.h1`
    ${sancreek}
    font-size: 40px;
    font-weight:400;
    color: ${laranja};
    @media(max-width:500px){
        font-size: 30px;
    }
`

export const ContainerPage = styled.main`
    display: flex;
    flex-direction: column;
    background-color:${preto};

`
export const ContainerPageLogin = styled.main`   
    display: flex;
    flex-direction: row;
    align-itens: center;
    justify-content:center;
    height: 700px;
    background-color:${preto};
    background-image: url(${backLogin});
    background-position: center;
    background-size: cover;
}
`

export const ContainerForm = styled.form`   
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content:center;
    background-color:${gelo};
    height: 483px;
    width: 446px;
    border-radius: 3%
}
`

export const ContainerBanner = styled.section`
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

export const ContainerCard = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin:100px 0;

    p{
        font-size: 50px;
        color: white;
    }
`

export const CardBox = styled.div`
    min-height: auto;
    margin: 100px 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 30px;
    
`