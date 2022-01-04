import React, { useEffect } from "react";
import styled from "styled-components";
import PagesHeading from "../PagesHeading";
import Tabs from "../links/Tabs";
import { colors } from "../Theme";
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

const MEDIA = (() => {
    const desktopWidth = "1024px";
    return { desktopWidth };
})();

const Container = styled.section`
    padding-bottom: 58px;

    &::after {
        content: url(${bgMobile});
        display: block;
        width: 100vw;
        height: 100vh;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: -9;
    }

    h1 {
        margin: 0 0 32px;
        text-align: left;
        grid-area: heading;
    }

    .tabs {
        grid-area: tabs;
    }

    @media screen and (min-width: 376px) {
        padding-bottom: 62px;

        &::after {
            content: url(${bgTablet});
        }

        h1 {
            margin-bottom: 60px;
        }
    }

    @media screen and (min-width: 769px) {
        &::after {
            content: url(${bgDesktop});
        }
    }

    @media screen and (min-width: ${MEDIA.desktopWidth}) {
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
            margin-top: 37px;
            margin-bottom: 14px;
        }
    }
`;

const Image = styled.picture`
    margin: 32px 0 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: img;

    > * {
        width: clamp(170px, 39.2vw, 445px);
    }

    @media screen and (min-width: 376px) {
        margin: 60px 0 53px;
    }

    @media screen and (min-width: ${MEDIA.desktopWidth}) {
        padding-left: 42px;
    }
`;

const NameHeading = styled.h2`
    margin: 20px 0 1px;
    text-align: center;
    text-transform: uppercase;
    grid-area: name;

    @media screen and (min-width: 376px) {
        margin: 32px 0 8px;
    }

    @media screen and (min-width: ${MEDIA.desktopWidth}) {
        text-align: left;
        margin-top: 37px;
        margin-bottom: 14px;
    }
`;

const Description = styled.p`
    text-align: center;
    margin: 1px auto 32px;
    max-width: 64ch;
    grid-area: body;

    @media screen and (min-width: 376px) {
        text-align: left;
        margin-top: 8px;
        margin-bottom: 49px;
    }

    @media screen and (min-width: ${MEDIA.desktopWidth}) {
        margin: 0;
    }
`;

const HorizontalLine = styled.hr`
    margin: 32px 0;
    grid-area: line;

    @media screen and (min-width: ${MEDIA.desktopWidth}) {
        margin-top: 54px;
        margin-bottom: 28px;
    }
`;

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    grid-area: stats;

    @media screen and (min-width: 376px) {
        flex-direction: row;
        column-gap: 14.5vw;
        justify-content: center;
    }

    @media screen and (min-width: ${MEDIA.desktopWidth}) {
        flex-direction: row;
        justify-content: flex-start;
        column-gap: 5.5vw;
        margin: 0;
    }
`;

const Stats = styled.div`
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

    @media screen and (min-width: ${MEDIA.desktopWidth}) {
        text-align: left;
    }
`;

/**
 * Assigns image files based on the chosen destination.
 * @param {string} destination  Name of destination
 * @returns                     An object with file paths to a png file and webp
 *                              file
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
 * Takes a destination object and returns markup describing that destination.
 * @param {object} destination  Destination object
 * @returns                     Destination page
 */
export default function Destination({ destination }) {
    const { destinations } = data;

    useEffect(() => {
        document.title = `Destination: ${destination.name} | Space Tourism`;
    }, [destination.name]);

    return (
        <Container>
            <PagesHeading number="01" text="Pick your destination" />

            <Image>
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
            />

            <NameHeading className="destination__heading">
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
            png: "./assets/destination/image-moon.png",
            webp: "./assets/destination/image-moon.webp",
        },
        description:
            "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
    },
};
