import styled from "styled-components";
import {
    BtnLaranja
} from "../UI";
import { laranja } from "../UI/variaveis";

export const FormStyled = styled.form `
    display: flex;
    justify-content: center;
    gap:20px;
    width:100%;

    input{
        width: 300px;
        border: ${laranja} solid 2px;
        border-radius: 7px;
    }
`

export const BtnSearch = styled(BtnLaranja)
`
    padding:0.5em 1.5em;
    font-size: 1rem;
    text-align: center;
`