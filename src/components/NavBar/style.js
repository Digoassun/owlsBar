import styled from "styled-components";
import {
    jost,
    branco
} from "../UI/variaveis";

export const NavBarStyled = styled.ul `
    list-style-type: none;
    display: flex;    
    align-items: center;
    li{
        padding: 0 10px;
        
        a{
            color:${branco};
            font-family:${jost};
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 0.3px;
        }
    }
`