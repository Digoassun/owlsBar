import styled from "styled-components";
import { jost, laranja } from "../../styles/variaveis";

export const CardContatoStyled = styled.article`
    background-color: #D9D9D980;
    width: 340px;
    height:430px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
    h2{
        color:${laranja};
        font-size: 28px;
    }
    h3{
        font-size: 24px;
    }
    h3,h2{
        ${jost}
        text-align:center;
    }
    img{
        height: 216px;
        width: 216px;
        border-radius:50%;
    }

    a{
        margin: 0 10px;
    }
`