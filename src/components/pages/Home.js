import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import LandingPageButton from "../links/LandingPageButton";
import bgMobile from "../../assets/background-home-mobile.jpg";
import bgTablet from "../../assets/background-home-tablet.jpg";
import bgDesktop from "../../assets/background-home-desktop.jpg";

const GlobalHomeStyle = createGlobalStyle`
    body {
        background-image: url(${bgMobile});

        @media screen and (min-width: 376px) {
            background-image: url(${bgTablet});
        }

        @media screen and (min-width: 769px) {
            background-image: url(${bgDesktop});
        }
    }
`;

const Heading = styled.h1`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin: 0;
`;

const Body = styled.p`
    margin: 16px auto 81px;
    text-align: center;
    max-width: 50ch;
`;

const Container = styled.section`
    .landing-page-button {
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 768px) {
        ${Heading} {
            row-gap: 24px;
        }

        ${Body} {
            margin-top: 24px;
            margin-bottom: 156px;
        }
    }

    /* Desktop layout */
    @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 49ch 1fr auto;
        grid-template-areas:
            "h . l"
            "p . l";

        ${Heading} {
            grid-area: h;
            text-align: left;
        }

        .landing-page-button {
            grid-area: l;
            align-self: end;
        }

        ${Body} {
            grid-area: p;
            margin: 0;
            text-align: left;
        }
    }
`;

export default function Home() {
    useEffect(() => {
        document.title = "Home | Space Tourism";
    }, []);

    return (
        <Container className="adjusted-top-padding">
            <GlobalHomeStyle />
            <Heading>
                <span className="nav-heading-small">
                    So, you want to travel to
                </span>{" "}
                <span className="color-primary-white">Space</span>
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
