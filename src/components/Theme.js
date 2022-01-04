import { createGlobalStyle } from "styled-components";

export const colors = {
    black: "#0B0D17",
    primary: "#D0D6F9",
    white: "#FFFFFF",
    darkGray: "#24262F",
    gray: "#979797",
    pageNav: {
        default: "#36373f",
        hover: "#85868b",
        active: "#ffffff",
    },
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

    main {
        padding: 0 clamp(1.5rem, 21vw - 7.7rem, 10.313rem) 0;
    }

    section {
        padding-top: 88px;

        @media screen and (min-width: 376px) {
            padding-top: 136px;
        }
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
        font-size: clamp(1rem, 2.6vw, 1.75rem);;
        letter-spacing: 2.7px;
    }

    h1 {
        font-size: clamp(5rem, 16vw, 9.375rem);
        text-transform: uppercase;
        text-align: center;
    }

    h2 {
        font-size: clamp(3.5rem, 5vw + 2.25rem, 6.25rem);
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
        color: ${colors.primary};
        font-size: clamp(0.9375rem, 1vw + 0.5rem, 1.125rem);
        line-height: 167%;
    }

    a {
        color: ${colors.white};
    }

    button {
        cursor: pointer;
    }

    hr {
        border: 1px solid #383B4B;
        width: 100%;
        height: 1px;
    }

    .color-primary {
        color: ${colors.primary};
    }
`;
