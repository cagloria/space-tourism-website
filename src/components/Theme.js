import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-heading: 'Barlow Condensed', sans-serif;
        --font-body: 'Bellefair', serif;
    }

    body {
        background-color: #0B0D17;
        color: #FFFFFF;
        font-family: "Barlow", sans-serif;
        font-weight: 400;
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
    
    .nav-text {
        font-family: "Barlow Condensed", sans-serif;
        font-weight: 400;
        font-size: 16px;
        letter-spacing: 2.7px;
    }

    h1 {
        font-size: 150px;
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
        font-size: 18px;
        line-height: 32px;
    }

    a {
        color: #FFFFFF;
    }
`;
