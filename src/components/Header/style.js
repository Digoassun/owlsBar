import styled from "styled-components";
import {cinza} from '../UI/variaveis'

export const HeaderStyled = styled.header`
    width: 100%;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    background-color:${cinza} ;

    img{
        width: 200px;
        height: 100px;
    }
`