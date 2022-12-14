import styled from "styled-components";

export const CardFuncionarioStyled = styled.article `
    width: 500px;
    height: 105px;
    background-color:#E5E5E599;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 5px ;
    @media(max-width:710px){
    width: 400px ;
    }
    @media(max-width:510px){
    width:250px;
    }
`