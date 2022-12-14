import styled from "styled-components";
import {
    BtnLaranja
} from "../../styles/globalStyles";
import { gelo, jost } from "../../styles/variaveis";

export const BtnFormFooter = styled(BtnLaranja)`
    height: 39px;
    width:150px;
    padding:0;
    border-radius: 7px;
    @media(max-width:1250px){   
            width: 100px;
            font-size:14px;
        }
`

export const FormFooterStyled = styled.form `
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    .label{
        ${jost}
        font-size: 16px;
        color: ${gelo};
    }
    div{
        display: flex;
        gap: 20px;
    }
    p{
        font-size: 16px;
        color:${gelo};
    }
    
`