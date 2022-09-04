import styled from "styled-components";
import {
    BtnLaranja
} from "../../styles/globalStyles";

export const FormStyled = styled.form `
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
    gap:20px;
    div{
        @media(max-width:1250px){   
            width: 200px;
        }
    }
    @media(max-width:1000px){
        flex-direction: column;
        /* width: ; */
    }
   
`

export const BtnSearch = styled(BtnLaranja)
`
    padding:0.5em 1.5em;
    font-size: 1rem;
    text-align: center;
`