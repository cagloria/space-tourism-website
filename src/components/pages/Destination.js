import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PagesHeading from "../PagesHeading";
import Tabs from "../links/Tabs";
import { colors, deviceMediaQueries } from "../Theme";
import bgMobile from "../../assets/destinations/background-destination-mobile.jpg";
import bgTablet from "../../assets/destinations/background-destination-tablet.jpg";
import bgDesktop from "../../assets/destinations/background-destination-desktop.jpg";
import moonPng from "../../assets/destinations/image-moon.png";
import moonWebp from "../../assets/destinations/image-moon.webp";
import marsPng from "../../assets/destinations/image-mars.png";
import marsWebp from "../../assets/destinations/image-mars.webp";
import europaPng from "../../assets/destinations/image-europa.png";
import europaWebp from "../../assets/destinations/image-europa.webp";
import titanPng from "../../assets/destinations/image-titan.png";
import titanWebp from "../../assets/destinations/image-titan.webp";
import data from "../../data/data.json";

const destinationMediaQueries = {
    twoColumn: deviceMediaQueries.minLargeLaptop,
};

const GlobalDestinationStyle = createGlobalStyle`
    body {
        background-image: url(${bgMobile});

        @media screen and (min-width: ${deviceMediaQueries.minTablet}) {
            background-image: url(${bgTablet});
        }

        @media screen and (min-width: ${deviceMediaQueries.minLaptop}) {
            background-image: url(${bgDesktop});
        }
    }

    .destination__animated {
        animation-duration: 0.75s;
        animation-timing-function: ease-in-out;

        @media (prefers-reduced-motion) {
            animation-name: unset;
        }

        &--slidein {
            animation-name: slidein;

            @keyframes slidein {
                from {
                    transform: translateY(-20px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            
        }

        &--fadein {
            animation-name: expand;
            animation-duration: 1.25s;
            
            @keyframes expand {
                0% {
                    opacity: 0;
                }
                75% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        }
    }
`;

const Image = styled.picture`
    margin: 32px 0 26px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
        width: clamp(10.625rem, 37vw + 1rem, 27.813rem);
    }
`;

const NameHeading = styled.h2`
    margin: 20px auto 1px;
    text-align: center;
    text-transform: uppercase;

    @media screen and (min-width: ${destinationMediaQueries.twoColumn}) {
        text-align: left;
    }
`;

const Description = styled.p`
    text-align: center;
    max-width: 64ch;
    margin: 1px auto 32px;

    @media screen and (min-width: ${destinationMediaQueries.twoColumn}) {
        text-align: left;
    }
`;

const HorizontalLine = styled.hr`
    margin: 32px 0;
`;

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    margin: 32px 0 0;

    @media screen and (min-width: ${deviceMediaQueries.minTablet}) {
        flex-direction: row;
        column-gap: 14.5vw;
        justify-content: center;
    }

    @media screen and (min-width: ${destinationMediaQueries.twoColumn}) {
        flex-direction: row;
        justify-content: flex-start;
        column-gap: 5.5vw;
    }
`;

const Stats = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    text-align: center;
    text-transform: uppercase;

    h3 {
        color: ${colors.primary};
        font-size: 14px;
        margin: 0;
    }

    p {
        font-family: var(--font-body);
        font-size: 28px;
        margin: 0;
        line-height: 120%;
    }

    @media screen and (min-width: ${destinationMediaQueries.twoColumn}) {
        text-align: left;
    }
`;

const Container = styled.section`
    padding-bottom: 58px;

    h1 {
        margin: 0 0 32px;
        text-align: center;
        grid-area: heading;
    }

    .tabs {
        grid-area: tabs;
    }

    @media screen and (min-width: ${deviceMediaQueries.minTablet}) {
        h1 {
            text-align: left;
        }

        ${Image} {
            margin: 60px 0 53px;
        }

        ${NameHeading} {
            margin-top: 32px;
            margin-bottom: 8px;
        }

        ${Description} {
            margin-top: 8px;
            margin-bottom: 49px;
        }

        ${HorizontalLine} {
            margin-top: 49px;
            margin-bottom: 28px;
        }

        ${StatsContainer} {
            margin-top: 28px;
        }
    }

    @media screen and (min-width: ${destinationMediaQueries.twoColumn}) {
        padding-bottom: 62px;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: repeat(3, auto) 1fr repeat(2, auto);
        grid-template-areas:
            "heading heading"
            "img     tabs"
            "img     name"
            "img     body"
            "img     line"
            "img     stats";
        column-gap: clamp(5rem, 20vw - 8rem, 9.813rem);

        .tabs {
            justify-content: flex-start;
        }

        h1 {
            margin-bottom: 14px;
        }

        ${Image} {
            grid-area: img;
            margin-left: 42px;
        }

        ${NameHeading} {
            grid-area: name;
            margin: 37px 0 14px;
        }

        ${Description} {
            grid-area: body;
            margin: 0;
        }

        ${HorizontalLine} {
            grid-area: line;
            margin-top: 54px;
            margin-bottom: 28px;
        }

        ${StatsContainer} {
            grid-area: stats;
            margin: 0;
        }
    }
`;

/**
 * Takes a destination object and returns markup describing that destination.
 * @param {object} destination  Destination object
 * @returns                     Destination page
 */
export default function Destination({ destination }) {
    const { destinations } = data;

    useEffect(() => {
        document.title = `Destination: ${destination.name} | Space Tourism`;
    }, [destination.name]);

    /**
     * Assigns image files based on the chosen destination.
     * @param {string} destination  Name of destination
     * @returns                     An object with file paths to a png file and *                              webp file
     */
    function getImages(destination) {
        let png = undefined;
        let webp = undefined;

        switch (destination) {
            case "Mars":
                png = marsPng;
                webp = marsWebp;
                break;
            case "Europa":
                png = europaPng;
                webp = europaWebp;
                break;
            case "Titan":
                png = titanPng;
                webp = titanWebp;
                break;
            default:
                png = moonPng;
                webp = moonWebp;
                break;
        }

        return { png, webp };
    }

    /**
     * Restarts the animation of the destination image.
     * @param animatedClass Name of class to restart animation
     */
    function restartAnimation(animatedClass) {
        const animatedElements = document.querySelectorAll("." + animatedClass);
        animatedElements.forEach((element) => {
            element.classList.remove(animatedClass);
            void element.offsetWidth;
            element.classList.add(animatedClass);
        });
    }

    return (
        <Container>
            <GlobalDestinationStyle />
            <PagesHeading number="01" text="Pick your destination" />

            <Image
                id="planet-image"
                className="destination__animated destination__animated--slidein"
            >
                <source
                    srcSet={getImages(destination.name).png}
                    type="image/webp"
                />
                <img
                    src={getImages(destination.name).webp}
                    alt={destination.name}
                />
            </Image>

            <Tabs
                pathPrefix="destination"
                links={destinations}
                currentPageName={destination.name}
                onLinkClick={restartAnimation}
            />

            <NameHeading className="destination__heading destination__animated destination__animated--fadein">
                {destination.name}
            </NameHeading>

            <Description>{destination.description}</Description>

            <HorizontalLine />

            <StatsContainer>
                <Stats>
                    <h3 className="nav-heading-small">Avg. distance</h3>
                    <p>{destination.distance}</p>
                </Stats>

                <Stats>
                    <h3 className="nav-heading-small">Est. travel time</h3>
                    <p>{destination.travel}</p>
                </Stats>
            </StatsContainer>
        </Container>
    );
}

Destination.defaultProps = {
    destination: {
        name: "Moon",
        images: {
            png: moonPng,
            webp: moonWebp,
        },
        description:
            "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
    },
};
