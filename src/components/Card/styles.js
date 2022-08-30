import styled from "styled-components";
import {
    branco,
    gelo
} from "../UI/variaveis";

export const CardStyle = styled.article `    
    height: 360px;
    width: 280px;
    border-radius: 10px;
    background: ${gelo};
    figure{
        width: 280px;
        height: 160px;
        border-radius: 10px 10px 0 0 ;

        img{
            border-radius: 10px 10px 0 0 ;
            width: 280px;
            height: 160px;
        }
        /* i{
            height: 150px;
            width: 150px;
            background-color: ${branco};
            border-radius: 44%;
        } */
    }

    .infos{
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 25px 10px 10px 10px;

        h3{
            font-size: 20px;
        }

        p{
            display: flex;
            flex-wrap: wrap;
            color: grey;
            font-size: 12px;
        }

    }
    
    .editPrice{
        display: flex;
        justify-content: space-between;

        h4{
            font-size: 14px;
            font-weight: 400;
            color: grey;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        span{
            font-size: 18px;
            font-weight: 600;
            color: green;
        }
    }
`