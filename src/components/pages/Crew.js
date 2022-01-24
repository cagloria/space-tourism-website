import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PagesHeading from "../PagesHeading";
import Slider from "../links/Slider";
import { colors, deviceMediaQueries } from "../Theme";
import bgMobile from "../../assets/crew/background-crew-mobile.jpg";
import bgTablet from "../../assets/crew/background-crew-tablet.jpg";
import bgDesktop from "../../assets/crew/background-crew-desktop.jpg";
import crewDouglasHPng from "../../assets/crew/image-douglas-hurley.png";
import crewDouglasHWebp from "../../assets/crew/image-douglas-hurley.webp";
import crewMarkSPng from "../../assets/crew/image-mark-shuttleworth.png";
import crewMarkSWebp from "../../assets/crew/image-mark-shuttleworth.webp";
import crewVictorGPng from "../../assets/crew/image-victor-glover.png";
import crewVictorGWebp from "../../assets/crew/image-victor-glover.webp";
import crewAnoushehAPng from "../../assets/crew/image-anousheh-ansari.png";
import crewAnoushehAWebp from "../../assets/crew/image-anousheh-ansari.webp";
import data from "../../data/data.json";

const GlobalCrewStyle = createGlobalStyle`
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

const Container = styled.section`
    padding-bottom: 79px;

    h1 {
        margin: 32px 0 0;
    }
`;

const Image = styled.picture`
    margin: 32px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 222px;

    > * {
        height: 100%;
    }
`;

const CrewMemberTitle = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const CrewMemberRole = styled.span`
    font-size: 1rem;
    color: ${colors.gray};
    text-transform: uppercase;
`;

const CrewMemberName = styled.span`
    font-size: 1.5rem;
    text-transform: uppercase;
`;

const Biography = styled.p`
    text-align: center;
    margin: 16px 0 0;
`;

/**
 * Takes a crew member object and returns markup describing that crew member.
 * @param {object} crewMember   Crew member object
 * @returns                     Crew member page
 */
export default function Crew({ crewMember }) {
    const { crew } = data;

    useEffect(() => {
        document.title = `Crew: ${crewMember.name} | Space Tourism`;
    }, [crewMember.name]);

    /**
     * Assigns image files based on the chosen crew member.
     * @param {string} destination  Name of crew member
     * @returns                     An object with file paths to a png file and
     *                              webp file
     */
    function getImages(crewMember) {
        let png = undefined;
        let webp = undefined;

        switch (crewMember) {
            case "Mark Shuttleworth":
                png = crewMarkSPng;
                webp = crewMarkSWebp;
                break;
            case "Victor Glover":
                png = crewVictorGPng;
                webp = crewVictorGWebp;
                break;
            case "Anousheh Ansari":
                png = crewAnoushehAPng;
                webp = crewAnoushehAWebp;
                break;
            default:
                png = crewDouglasHPng;
                webp = crewDouglasHWebp;
        }

        console.log(png);

        return { png, webp };
    }

    return (
        <Container>
            <GlobalCrewStyle />
            <PagesHeading number="02" text="Meet your crew" />

            <Image>
                <source
                    srcSet={getImages(crewMember.name).png}
                    type="image/webp"
                />
                <img
                    src={getImages(crewMember.name).webp}
                    alt={crewMember.name}
                />
            </Image>

            <Slider
                pathPrefix="crew"
                links={crew}
                currentPageName={crewMember.name}
            />

            <CrewMemberTitle>
                <CrewMemberRole>{crewMember.role}</CrewMemberRole>{" "}
                <CrewMemberName>{crewMember.name}</CrewMemberName>
            </CrewMemberTitle>

            <Biography>{crewMember.bio}</Biography>
        </Container>
    );
}

Crew.defaultProps = {
    crewMember: {
        role: "Commander",
        name: "Douglas Hurley",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    allCrewMembers: [
        { name: "Douglas Hurley" },
        { name: "Mark Shuttleworth" },
        { name: "Victor Glover" },
        { name: "Anousheh Ansari" },
    ],
};
