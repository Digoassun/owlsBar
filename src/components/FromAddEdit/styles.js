import styled from "styled-components";
import {
    Title
} from "../../styles/globalStyles";
import {
    laranja
} from "../../styles/variaveis";

export const TitleMod = styled(Title)
`
    font-size: 60px;
    text-align:center;
    color: ${laranja};
`

export const FormAddEditStyle = styled.form `
    min-height: 700px;
    border-radius: 20px;
    background-color: #E5E5E599;
    padding:10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    fieldset{
        min-height: 500px;
        border: none;
        display: flex;
        flex-direction:column;
        gap: 60px;
        align-items: center;
    }   
    `