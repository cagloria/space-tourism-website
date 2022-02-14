import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { deviceMediaQueries } from "../Theme";
import PagesHeading from "../PagesHeading";
import NumberSlider from "../links/NumberSlider";
import data from "../../data/data.json";
import bgMobile from "../../assets/technology/background-technology-mobile.jpg";
import bgTablet from "../../assets/technology/background-technology-tablet.jpg";
import bgDesktop from "../../assets/technology/background-technology-desktop.jpg";
import launchVehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import launchVehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import spaceCapsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";

const GlobalTechnologyStyle = createGlobalStyle`
    body {
        background-image: url(${bgMobile});

        @media screen and (min-width: ${deviceMediaQueries.minTablet}) {
            background-image: url(${bgTablet});
        }

        @media screen and (min-width: ${deviceMediaQueries.minLaptop}) {
            background-image: url(${bgDesktop});
        }
    }
`;

const Image = styled.picture`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px 0 34px;

    > * {
        width: 100vw;
    }
`;

const TechTitle = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 26px 0 16px;

    span:first-child {
        margin-bottom: 9px;
    }
`;

const TechTerminology = styled.span`
    font-family: "Barlow Condensed", sans-serif;
    font-size: 0.875rem;
    color: #d0d6f9;
    text-transform: uppercase;
`;

const TechName = styled.span`
    font-size: 1.5rem;
    text-transform: uppercase;
`;

const Description = styled.p`
    text-align: center;
    margin: 16px 0 0;
`;

const Container = styled.section`
    padding-bottom: 40px;

    h1 {
        margin: 0;
    }

    .number-slider {
        margin: 34px 0 26px;
    }
`;

/**
 * Takes a technology object and returns markup describing that technology.
 * @param {object} tech     Technology object
 * @returns                 Technology Route page
 */
export default function Technology({ tech }) {
    const { technology } = data;

    useEffect(() => {
        document.title = `Technology: ${tech.name} | Space Tourism`;
    }, [tech.name]);

    function getImages(tech) {
        let portrait = undefined;
        let landscape = undefined;

        switch (tech) {
            case "Spaceport":
                portrait = spaceportPortrait;
                landscape = spaceportLandscape;
                break;
            case "Space capsule":
                portrait = spaceCapsulePortrait;
                landscape = spaceCapsuleLandscape;
                break;
            default:
                portrait = launchVehiclePortrait;
                landscape = launchVehicleLandscape;
        }

        return { portrait, landscape };
    }

    return (
        <Container className="background-overlay">
            <GlobalTechnologyStyle />
            <PagesHeading number="03" text="Space launch 101" />

            <Image>
                <source
                    srcSet={getImages(tech.name).landscape}
                    type="image/webp"
                />
                <img src={getImages(tech.name).landscape} alt={tech.name} />
            </Image>

            <NumberSlider
                pathPrefix="technology"
                links={technology}
                currentPageName={tech.name}
            />

            <TechTitle>
                <TechTerminology className="nav-heading-small">
                    The terminology...
                </TechTerminology>{" "}
                <TechName>{tech.name}</TechName>
            </TechTitle>

            <Description>{tech.description}</Description>
        </Container>
    );
}

Technology.defaultProps = {
    tech: {
        title: "Launch vehicle",
        description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
};
