import React, { useEffect } from "react";
import styled from "styled-components";
import LandingPageButton from "../LandingPageButton";

const Body = styled.p`
    text-align: center;
`;

export default function Home() {
    useEffect(() => {
        document.title = "Home | Space Tourism";
    }, []);

    return (
        <section>
            <h1>
                <span className="nav-heading-small">
                    So, you want to travel to
                </span>{" "}
                <span>Space</span>
            </h1>

            <Body>
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
            </Body>

            <LandingPageButton text="Explore" path="/destination-moon" />
        </section>
    );
}
