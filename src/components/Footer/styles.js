import styled from "styled-components";
import {
    cinza,
    gelo,
    jost
} from "../../styles/variaveis";

export const FooterStyled = styled.footer `
    height: 330px;
    width: 100%;
    background: ${cinza};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 130px;
    @media(max-width:1250px){   
        padding:0 40px;
    }
    @media(max-width:800px){  
            align-items: center;
            justify-content: space-evenly;
        }
    img{
        width: 200px;
        height: 100px;
        @media(max-width:500px){   
            width: 140px;
            height: 70px;
        }
    }
    .sectionTop{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items:center ;
        justify-content: space-between;
        padding: 30px 0;
        @media(max-width:800px){  
            justify-content:center;
        }
        .infos{
            height: 100%;
            display: flex;
            align-content: center;
            align-items: flex-end;
            ${jost}
            font-size: 16px;
            gap: 80px;
            color: ${gelo};
            @media(max-width:1441px){   
                gap: 20px;
            }
            @media(max-width:1250px){   
                gap: 20px;
            }
            @media(max-width:800px){  
                display: none;
            }
        }
    }
    hr{
        @media(max-width:800px){  
            width: 100%;
            }
    }
    .sectionLow{
        width: 100%;
        display: flex;
        padding: 30px 0;
        justify-content: space-between;
        .infosLow{
            display: flex;
            ${jost}
            font-size: 12px;
            gap: 30px;
            color: ${gelo};        
            @media(max-width:800px){  
                display: none;
            }
        }
        p{           
            ${jost}
            font-size: 12px;       
            color: ${gelo};            
        }
        @media(max-width:800px){  
                align-items:center;
            }
    }
    
    
`