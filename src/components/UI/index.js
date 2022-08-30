import styled from "styled-components";
import {
    laranja,
    sancreek,
    branco,
    preto,
    jost
} from "./variaveis";
import banner from '../../assets/banner-cardapio.jpg'

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
`

export const ContainerCard = styled.section `
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin:100px 0;
`