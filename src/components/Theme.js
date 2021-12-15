import { createGlobalStyle } from "styled-components";

export const colors = {
    black: "#0B0D17",
    primary: "#D0D6F9",
    white: "#FFFFFF",
    gray: "#24262F",
};

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-heading: 'Barlow Condensed', sans-serif;
        --font-body: 'Bellefair', serif;
    }

    body {
        background-color: ${colors.black};
        color: ${colors.white};
        font-family: "Barlow", sans-serif;
        font-weight: 400;
        margin: 0;
    }

    h1, h2, h3, h4 {
        font-family: "Bellefair", sans-serif;
        font-weight: 400;
    }

    h5 {
        font-family: "Barlow Condensed", sans-serif;
        font-weight: 400;
    }
    
    .subtitle-1 {
        font-family: "Bellefair", sans-serif;
        font-weight: 400;
        font-size: 28px;
    }
    
    .subtitle-2 {
        font-family: "Barlow Condensed", sans-serif;
        font-weight: 400;
        font-size: 14px;
    }
    
    .nav-heading-small {
        font-family: "Barlow Condensed", sans-serif;
        font-weight: 400;
        font-size: 16px;
        letter-spacing: 2.7px;
    }

    h1 {
        font-size: clamp(5rem, 16vw, 9.375rem);
        text-transform: uppercase;
        text-align: center;
    }

    h2 {
        font-size: 100px;
    }

    h3 {
        font-size: 56px;
    }

    h4 {
        font-size: 32px;
    }

    h5 {
        font-size: 28px;
        letter-spacing: 4.72px;
    }

    p {
        font-size: clamp(0.9375rem, 1vw + 0.5rem, 1.125rem);
        line-height: 167%;
    }

    a {
        color: ${colors.white};
    }

    button {
        cursor: pointer;
    }
`;
