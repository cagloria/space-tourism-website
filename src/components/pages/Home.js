import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import LandingPageButton from "../links/LandingPageButton";
import { mediaQueryStrings } from "../Theme";
import bgMobile from "../../assets/background-home-mobile.jpg";
import bgTablet from "../../assets/background-home-tablet.jpg";
import bgDesktop from "../../assets/background-home-desktop.jpg";

const MEDIA = (() => {
    const desktopWidth = "1024px";

    return { desktopWidth };
})();

const GlobalHomeStyle = createGlobalStyle`
    body {
        background-image: url(${bgMobile});

        @media screen and (min-width: ${mediaQueryStrings.minTablet}) {
            background-image: url(${bgTablet});
        }

        @media screen and (min-width: ${mediaQueryStrings.minLaptop}) {
            background-image: url(${bgDesktop});
        }
    }
`;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
    max-width: 1380px;
    padding: 111px 0 0;
    margin: 0 auto;

    .landing-page-button {
        grid-area: l;
    }

    @media screen and (min-width: ${mediaQueryStrings.minTablet}) {
        padding-top: 202px;
    }

    @media screen and (min-width: ${MEDIA.desktopWidth}) {
        padding-top: 387px;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "h l"
            "p l";

        .landing-page-button {
            margin-left: auto;
            margin-top: 123px;
        }
    }
`;

const Heading = styled.h1`
    display: flex;
    flex-direction: column;
    row-gap: 21px;
    margin: 0;
    grid-area: h;

    @media screen and (min-width: ${mediaQueryStrings.minTablet}) {
        row-gap: 24px;
    }

    @media screen and (min-width: ${mediaQueryStrings.minLargeLaptop}) {
        text-align: left;
    }
`;

const Body = styled.p`
    margin: 6px auto 64px;
    text-align: center;
    max-width: 50ch;
    grid-area: p;

    @media screen and (min-width: ${mediaQueryStrings.minTablet}) {
        margin-top: 24px;
        margin-bottom: 112px;
    }

    @media screen and (min-width: ${mediaQueryStrings.minLargeLaptop}) {
        max-width: 46ch;
        text-align: left;
        margin: 0;
    }
`;

export default function Home() {
    useEffect(() => {
        document.title = "Home | Space Tourism";
    }, []);

    return (
        <Container>
            <GlobalHomeStyle />
            <Heading>
                <span className="nav-heading-small color-primary">
                    So, you want to travel to
                </span>{" "}
                <span>Space</span>
            </Heading>

            <Body>
                Let's face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we'll give you a truly out
                of this world experience!
            </Body>

            <LandingPageButton text="Explore" path="/destination-moon" />
        </Container>
    );
}
