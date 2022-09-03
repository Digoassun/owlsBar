import styled from "styled-components";
import { Title } from "../../styles/globalStyles";
import { cinza, laranja } from "../../styles/variaveis";

export const TitleContato = styled(Title)`
    color:${laranja};
`

export const ContainerContato = styled.section`
    position: relative;
    overflow: hidden; 
    background-color: ${cinza};    
    .divConteudo{
        position: relative;
        z-index: 2;
    }
    .background{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        opacity: 1;
     }    
  `