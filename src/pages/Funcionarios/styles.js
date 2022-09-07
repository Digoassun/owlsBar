import styled from "styled-components";
import funcionarios from '../../assets/funcionarios.png'
import {
    Title
} from "../../styles/globalStyles";
import {
    laranja
} from "../../styles/variaveis";

export const TitleFuncionarios = styled(Title)
`
    font-size: 40px;
    color:${laranja};
    margin: 10px 0 ;
`

export const FuncionariosContainer = styled.section `  
    background-image: url(${funcionarios});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid; 
    grid-template-columns: 1fr 665px 1fr; 
    grid-template-rows:  752px; 
    gap: 0px 0px; 
    grid-template-areas: 
    ". containerFuncionarios .";
    @media(max-width:710px){
    grid-template-columns: 1fr 465px 1fr; 
    grid-template-rows:  652px; 
    }
    @media(max-width:510px){
    grid-template-columns: 1fr 305px 1fr; 
    grid-template-rows:  552px; 
    }
    .containerFuncionarios{
        grid-area: containerFuncionarios;
        background-color: #111113CC;
        padding:30px 0;
        margin:30px 0;
        border-radius: 20px;
        display:flex;
        flex-direction: column;
        align-items: center;
        .divCard{
            display:flex;
            flex-direction: column;        
            gap:10px;
            height: 75vh;
            overflow-y: auto;
        }
    }
`