import styled from "styled-components";
import {
    BtnLaranja
} from "../../styles/globalStyles";
import {
    jost,
    branco,
    laranja
} from "../../styles/variaveis";

export const BtnNav = styled(BtnLaranja)
`
    font-size: 24px;
    padding: 7px 30px;
    ${jost};    
    font-weight: 700;
`

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
            ${jost};
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 0.3px;
            transition: all 0.3s;
        }
        a:hover,.active{
            color: ${laranja};
        }
        
        .btn:hover{
            color: white;
        }
        /* div{
            display: flex;
            flex-direction: column;            
            align-items:center;
            justify-content:space-between;
        } */
        
    }

    @media(max-width:1000px){
    display:${({none}) => none ?"flex" : "none"};
    }
`