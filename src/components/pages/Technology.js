import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PagesHeading from "../elements/PagesHeading";
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

        @media screen and (min-width: 376px) {
            background-image: url(${bgTablet});
        }

        @media screen and (min-width: 769px) {
            background-image: url(${bgDesktop});
        }
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 34px;

    img {
        width: 100vw;
        height: 170px;
        object-fit: cover;
    }
`;

const TechTitle = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    row-gap: 9px;
    margin: 0 0 16px;
`;

const TechTerminology = styled.span`
    font-family: "Barlow Condensed", sans-serif;
    font-size: clamp(0.875rem, 5vw - 1rem, 1rem);
    color: #d0d6f9;
    text-transform: uppercase;
`;

const TechName = styled.span`
    font-size: 1.5rem;
    text-transform: uppercase;
`;

const Description = styled.p`
    max-width: 49ch;
    text-align: center;
    margin: 0 auto 0;
`;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding-bottom: 81px;

    h1 {
        margin: 0 0 32px;
        order: 1;
    }

    ${ImageContainer} {
        order: 2;
    }

    .number-slider {
        margin: 0 0 24px;
        order: 3;
    }

    ${TechTitle} {
        order: 4;
    }

    ${Description} {
        order: 5;
    }

    @media screen and (min-width: 425px) {
        ${ImageContainer} {
            img {
                height: 44vw;
            }
        }
    }

    @media screen and (min-width: 768px) {
        h1 {
            text-align: left;
            margin-bottom: 60px;
        }

        ${ImageContainer} {
            margin-bottom: 56px;

            img {
                height: 315px;
            }
        }

        .number-slider {
            margin-bottom: 44px;
        }

        ${TechTitle} {
            row-gap: 16px;
            margin-bottom: 16px;

            span:first-child {
                font-size: 1rem;
            }

            span:last-child {
                font-size: 3.5rem;
            }
        }
    }

    @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-rows: auto auto 1fr;
        grid-template-columns: auto 2fr 1fr;
        column-gap: 80px;

        h1 {
            grid-row: 1;
            grid-column: 1 / -1;
            margin-bottom: 137px;
        }

        ${ImageContainer} {
            grid-row: 2;
            grid-column: 3;
            margin-top: 60px;
            position: absolute;
            right: 0;

            img {
                width: clamp(300px, 32vw, 515px);
                height: 527px;
            }
        }

        .number-slider {
            grid-row: 2 / -1;
            grid-column: 1;
            align-self: start;
            margin: 0;
        }

        ${TechTitle} {
            text-align: left;
            row-gap: 11px;
            margin: 0 0 17px;
            grid-row: 2;
            grid-column: 2;
            align-self: start;

            span:last-child {
                font-size: 3.5rem;
            }
        }

        ${Description} {
            grid-row: 3;
            grid-column: 2;
            margin: 0;
            text-align: left;
            max-width: 44ch;
        }
    }

    @media screen and (min-width: 1024px) and (max-height: 800px) {
        padding-top: 0;
        padding-bottom: 40px;

        ${ImageContainer} {
            margin-top: 10vh;

            img {
                height: 400px;
            }
        }
    }

    @media screen and (min-width: 1440px) {
        ${ImageContainer} {
            right: 0;

            img {
                width: 515px;
            }
        }
    }

    @media screen and (min-width: 1920px) {
        ${ImageContainer} {
            right: 13vw;
        }
    }
`;

/**
 * Takes a technology object and returns markup describing that technology.
 * @param {object} tech     Technology object
 * @returns                 Technology Route page
 */
export default function Technology({ tech }) {
    const [onDesktop, setOnDesktop] = useState(false);
    const { technology } = data;
    const mediaQueryMinDesktop = window.matchMedia("(min-width: 1025px)");

    mediaQueryMinDesktop.addListener(handleDeviceChange); // Handle screen width change

    useEffect(() => {
        document.title = `Technology: ${tech.name} | Space Tourism`;
    }, [tech.name]);

    useEffect(() => {
        handleDeviceChange(mediaQueryMinDesktop);
    }, [mediaQueryMinDesktop]);

    function handleDeviceChange(media) {
        // Desktop
        if (media.matches) {
            setOnDesktop(true);
        }
        // Tablet
        else {
            setOnDesktop(false);
        }
    }

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

            <ImageContainer>
                <img
                    src={
                        onDesktop
                            ? getImages(tech.name).portrait
                            : getImages(tech.name).landscape
                    }
                    alt={tech.name}
                />
            </ImageContainer>

            <Description>{tech.description}</Description>
        </Container>
    );
}

Technology.defaultProps = {
    tech: {
        name: "Launch vehicle",
        image: {
            landscape: launchVehicleLandscape,
            portrait: launchVehiclePortrait,
        },
        description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
};
