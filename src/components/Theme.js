import { createGlobalStyle } from "styled-components";

export const colors = {
    primary: {
        black: "#000000",
        dark: "#0b0d17",
        light: "#d0d6f9",
        white: "#ffffff",
    },
    interactive: {
        hover: "#85868b",
        active: "#ffffff",
    },
};

// The value of z-index is "zIndex.foreground" or "z-index.background", with
// background being behind the base content
// To change z-index of an element to be relative to sibling elements, add
// backgroundIncrement or forwardIncrement to the value
export const zIndex = {
    background: -100,
    foreground: 100,
    backgroundIncrement: -10,
    forwardIncrement: 10,
};

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-heading: 'Barlow Condensed', sans-serif;
        --font-body: 'Bellefair', serif;
    }

    body {
        background-attachment: fixed;
        background-color: ${colors.primary.dark};
        background-position: center top;
        background-repeat: no-repeat;
        background-size: cover;
        color: ${colors.primary.light};
        font-family: "Barlow", sans-serif;
        font-weight: 400;
        margin: 0;

        section.background-overlay {
            /* Add an overlay to darken the background */
            &::before {
                content: "";
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                background-color: black;
                width: 100vw;
                height: 100vh;
                opacity: 0.25;
                z-index: ${zIndex.background};
            }
        }
    }

    main {
        padding: 0 6.4vw 0;

        @media screen and (min-width: 768px) {
            padding-left: 5vw;
            padding-right: 5vw;
        }

        @media screen and (min-width: 1024px) {
            padding-left: 12vw;
            padding-right: 9vw;
        }

        @media screen and (min-width: 1440px) {
            padding-left: 11.5vw;
            padding-right: 11.5vw;
        }

        @media screen and (min-width: 1920px) {
            padding-left: 21.5vw;
            padding-right: 21.5vw;
        }
    }

    section {
        @media screen and (min-width: 600px) {
            padding-top: 40px;
        }

        /* For Home page and Missing page */
        &.adjusted-top-padding {
            padding-top: 24px;

            @media screen and (min-width: 600px) {
                padding-top: 106px;
            }

            @media screen and (min-width: 1024px) {
                padding-top: 187px;
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                padding-top: 8vh;
            }
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
        font-size: clamp(5rem, 22vw - 1rem, 9.375rem);
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
        color: ${colors.primary.light};
        font-size: clamp(0.938rem, 4.2vw - 1rem, 1.125rem);
        line-height: 178%;
    }

    a {
        color: ${colors.primary.white};
    }

    button {
        cursor: pointer;
    }

    hr {
        border: none;
        width: 100%;
        height: 1px;
        background-color: #383B4B;
    }

    .color-primary-white {
        color: ${colors.primary.white};
    }
`;
