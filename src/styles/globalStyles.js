import {
    createGlobalStyle
} from "styled-components";

export const GlobalStyle = createGlobalStyle `
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
}

body,html{
    min-height: 100vh;
    width:100%;
}
`