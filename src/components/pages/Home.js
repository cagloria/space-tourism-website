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

const Container = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    padding: 111px 0 0;

    @media screen and (min-width: 376px) {
        padding-top: 202px;
    }
`;

const Heading = styled.h1`
    display: flex;
    flex-direction: column;
    row-gap: 21px;
    margin: 0;

    @media screen and (min-width: 376px) {
        row-gap: 24px;
    }
`;

const Body = styled.p`
    margin: 6px auto 64px;
    text-align: center;
    max-width: 50ch;

    @media screen and (min-width: 376px) {
        margin-top: 24px;
        margin-bottom: 156px;
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
