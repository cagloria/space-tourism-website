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

const Container = styled.section`
    padding-bottom: 58px;

    &::after {
        content: url(${bgMobile});
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: -9;

        @media screen and (min-width: 376px) {
            content: url(${bgTablet});
        }

        @media screen and (min-width: 769px) {
            content: url(${bgDesktop});
        }
    }

    .destination__heading {
        margin: 20px 0 1px;
        text-align: center;
        text-transform: uppercase;
    }
`;

const Image = styled.picture`
    margin: 32px 0 26px;
    display: flex;
    flex-direction: column;
    align-items: center;

    source,
    img {
        width: clamp(170px, 43vw, 445px);
    }
`;

const Description = styled.p`
    text-align: center;
    margin: 1px 0 32px;
`;

const Stats = styled.p`
    text-align: center;
    text-transform: uppercase;
    margin: 32px 0;

    &:last-child {
        margin-bottom: 0;
    }

    h3 {
        font-size: 14px;
        margin: 0 0 12px;
        color: ${colors.primary};
    }

    p {
        font-family: var(--font-body);
        font-size: 28px;
        margin: 12px 0 0;
    }
`;

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
                <img src={getImages(destination.name)} alt={destination.name} />
            </Image>

            <Tabs
                pathPrefix="destination"
                links={destinations}
                currentPageName={destination.name}
            />

            <h2 className="destination__heading">{destination.name}</h2>

            <Description>{destination.description}</Description>

            <hr />

            <Stats>
                <h3 className="nav-heading-small">Avg. distance</h3>
                <p>{destination.distance}</p>
            </Stats>

            <Stats>
                <h3 className="nav-heading-small">Est. travel time</h3>
                <p>{destination.travel}</p>
            </Stats>
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
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
    },
};
