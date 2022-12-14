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
import backLogin from '../assets/fundo-login.png'
import {
    TextField
} from "@mui/material";

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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;  
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


export const ContainerPageLogin = styled.main `   
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    min-height: 650px;
    background-color:${preto};
    background-image: url(${backLogin});
    background-position: center;
    background-size: cover;
`

export const ContainerForm = styled.form `   
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    padding: 20px;
    gap: 20px;
    background-color:${gelo};
    min-height: 200px;
    width: 400px;
    border-radius: 3%;
`


export const PageAddEdit = styled.section `
    min-height: 800px;
    width: 100%;
    background-color:${preto};
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
        border-radius: 7px 7px 0 0;
        background-color: white;
        width: 400px;
        height: 15px;        
        @media(max-width:1250px){   
            width: 200px;
        }
    }
`