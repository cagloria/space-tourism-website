import React, { useEffect } from "react";
import styled from "styled-components";
import PagesHeading from "../PagesHeading";
import Tabs from "../links/Tabs";
import bgMobile from "../../assets/background-destination-mobile.jpg";
import bgTablet from "../../assets/background-destination-tablet.jpg";
import bgDesktop from "../../assets/background-destination-desktop.jpg";
import data from "../../data/data.json";

const Container = styled.section`
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

    return (
        <Container>
            <PagesHeading number="01" text="Pick your destination" />

            <Tabs
                pathPrefix="destination"
                links={destinations}
                currentPageName={destination.name}
            />

            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <div>
                <h3>Avg. distance</h3>
                <p>{destination.distance}</p>
            </div>
            <div>
                <h3>Est. travel time</h3>
                <p>{destination.travel}</p>
            </div>
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
