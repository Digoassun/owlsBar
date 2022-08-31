import styled from "styled-components";
import {
    Dialog
} from '@headlessui/react'
import {
    cinza
} from "../../styles/variaveis";

export const StyledDialog = styled(Dialog)`
    position: relative;
    z-index: 50;

    .divModal{
        position:fixed ;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        .blackBox{
            position:absolute ;
            width: 100vw;
            height: 100vh;
            background: ${cinza} ;
            opacity: 0.5; 
        }
        .panel{
            height: 20%;
            padding: 40px 60px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            border-radius: 10px;
            background:white ;
            z-index: 100;
            
            .buttons{
               display: flex;
               gap: 20px;
            }
        }
    }
`