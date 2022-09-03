import styled from "styled-components";
import {
    Title
} from "../../styles/globalStyles";
import {
    cinza,
    laranja,
    preto
} from "../../styles/variaveis";

export const TitleContato = styled(Title)
`
    color:${laranja};
`

export const ContainerContato = styled.section `
    position: relative;
    overflow: hidden; 
    background-color: ${preto};
    display: flex;
    flex-direction:column ;
    align-items: center;
    min-height:80vh ;
    .divConteudo{
        text-align:center;
        min-height: 80vh;
        display: flex;
        flex-direction:column ;
        align-items: center;
        justify-content: space-around;
        position: relative;
        z-index: 2;
        padding: 50px 0;
    }
    .divCard{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        gap:90px;
    }
    .background{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        opacity: 1;
        @media(max-width:1365px){
            display: none;
        }
    }    
`