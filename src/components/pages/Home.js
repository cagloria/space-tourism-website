import React, { useEffect } from "react";
import styled from "styled-components";
import LandingPageButton from "../LandingPageButton";
import bgMobile from "../../assets/background-home-mobile.jpg";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 111px 0 30px;
    row-gap: 15px;

    &::after {
        content: url(${bgMobile});
        width: 100vw;
        height: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -9;
    }
`;

const Heading = styled.h1`
    display: flex;
    flex-direction: column;
    row-gap: 21px;
    margin: 0;
`;

const Body = styled.p`
    margin: 6px 0 64px;
    text-align: center;
`;

export default function Home() {
    useEffect(() => {
        document.title = "Home | Space Tourism";
    }, []);

    return (
        <Container>
            <Heading>
                <span className="nav-heading-small">
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
