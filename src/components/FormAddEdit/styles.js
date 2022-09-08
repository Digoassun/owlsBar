import styled from "styled-components";
import {
    InputForm,
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
    @media(max-width:1250px){
        font-size: 40px;
    }
`

export const InputFormMod = styled(InputForm)
`
@media(max-width:1250px){   
    input,textarea{
        width: 300px;
        height: 15px;
    }
}
`

export const FormAddEditStyle = styled.form `
    min-height: 650px;
    border-radius: 20px;
    background-color: #E5E5E599;
    padding:10px;
    display: flex;
    flex-direction: column;
    fieldset{
        min-height: 500px;
        border: none;
        display: flex;
        flex-direction:column;
        gap: 50px;
        align-items: center;
        div{
        border-radius: 7px 7px 0 0;
        background-color: white;
        }
    }   
    `