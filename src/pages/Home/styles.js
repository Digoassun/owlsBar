import styled from "styled-components";
import {
    Title
} from "../../styles/globalStyles";
import {
    cinza,
    satisfy
} from "../../styles/variaveis";

export const TitleHome = styled(Title)`
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

export const ContainerWelcome = styled.section `
    position: relative;
    overflow: hidden;
    padding: 16px;
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