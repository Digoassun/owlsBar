import styled from "styled-components";
import {
    cinza
} from "../../styles/variaveis";

export const FooterStyled = styled.footer `
    height: 290px;
    width: 100%;
    background: ${cinza};
    position: relative;

    img{
        position: absolute;
        top: 35px;
        left: 100px;

        @media(max-width:500px){   
            width: 140px;
            height: 70px;
        }
    }
`