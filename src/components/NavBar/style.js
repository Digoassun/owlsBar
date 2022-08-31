import styled from "styled-components";
import {
    jost,
    branco
} from "../../styles/variaveis";

export const NavBarStyled = styled.ul `
    list-style-type: none;
    display: flex;    
    flex-direction: ${({column}) => column ?"column":"row" };
    gap:${({gap}) => gap ?"30px" : 0};
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

    @media(max-width:1000px){
    display:${({none}) => none ?"flex" : "none"};
    }
`