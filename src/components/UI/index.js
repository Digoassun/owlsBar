import styled from "styled-components";
import {
    laranja,
    sancreek,
    branco,
    preto,
    jost
} from "./variaveis";
import banner from '../../assets/banner-cardapio.png'

export const BtnLaranja = styled.button `
    position: relative;
    background-color: ${laranja};
    padding: 10px 12px;
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