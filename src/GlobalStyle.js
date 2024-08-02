import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
    }

    *, ::before, ::after{
        box-sizing: inherit;
    }

    body{
        font-family: "Inter", sans-serif;
        background-color: rgba(251, 251, 254, 1);
    }
`