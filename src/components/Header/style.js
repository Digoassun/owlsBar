import styled from "styled-components";
import {
    cinza,
    branco,
    gelo,
    jost
} from '../../styles/variaveis'

export const HeaderStyled = styled.header `
    width: 100%;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    background-color:${cinza} ;

    p{
        color:${gelo};
        ${jost}
        font-size:24px;
        @media(max-width:1100px){
            display:none;
        }
    }

    img{
        width: 200px;
        height: 100px;
    }

    .hamburguer{
        display: none;
        color:${branco};
    }

    @media(max-width:1000px){
    .hamburguer{
        display: flex;
    }
    }

    @media(max-width:500px){
    padding: 0 50px;

    img{
        width: 140px;
        height: 70px;
    }

    }
`