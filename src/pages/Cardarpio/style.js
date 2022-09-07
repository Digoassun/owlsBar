import styled from "styled-components";
import {
    preto
} from '../../styles/variaveis'
import banner from '../../assets/banner-cardapio.png'

export const ContainerPage = styled.main `
    display: flex;
    flex-direction: column;
    background-color:${preto};

.banner{
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
}
.cardBox{
    min-height: auto;
    margin: 100px 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 30px;
}
.containerCard{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin:100px 0;
    align-items: center;
}
`