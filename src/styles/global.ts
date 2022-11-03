import { createGlobalStyle } from "styled-components";
import theme from "../theme";

export const GlobalStyle = createGlobalStyle`


*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    @media(max-width: 1200px){
        font-size: 93.75%
    }
    @media(max-width: 720px){
        font-size: 87.5%
    }
}

body{
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.background};
    max-width: 1254px;
    margin: 0 auto;
    padding: 72px 0 ;
}

body, input, text-area, button{
    font-family: "Nunito", sans-serif;
    font-weight:400;
    border: 0;
}


button{
    cursor: pointer;
    border:0;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
`;
