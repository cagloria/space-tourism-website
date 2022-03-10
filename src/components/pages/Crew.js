import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PagesHeading from "../elements/PagesHeading";
import Slider from "../links/Slider";
import { colors } from "../Theme";
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

        @media screen and (min-width: 376px) {
            background-image: url(${bgTablet});
        }

        @media screen and (min-width: 769px) {
            background-image: url(${bgDesktop});
        }
    }
`;

const Image = styled.picture`
    margin: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 222px;

    > * {
        height: 100%;
    }
`;

const HorizontalLine = styled.hr`
    margin: 0 0 32px;
`;

const CrewMemberTitle = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 8px;
    text-align: center;
    margin: 32px 0 0;
`;

const CrewMemberRole = styled.span`
    font-size: clamp(1rem, 5.2vw - 1rem, 2rem);
    color: ${colors.gray};
    text-transform: uppercase;
`;

const CrewMemberName = styled.span`
    font-size: clamp(1.5rem, 8.3vw - 1.5rem, 3.5rem);
    text-transform: uppercase;
`;

const Biography = styled.p`
    text-align: center;
    max-width: 66ch;
    margin: 16px 0 0;
`;

const Container = styled.section`
    padding-bottom: 79px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        width: 100%;
        margin: 0;
    }

    @media screen and (min-width: 376px) {
        padding-bottom: 0;

        ${Image} {
            height: clamp(13.875rem, 80vw - 5rem, 33.25rem);
            margin-top: 40px;
            order: 6;
        }

        ${HorizontalLine} {
            order: 7;
            margin: 0;
        }

        h1 {
            text-align: left;
            margin-bottom: 60px;
        }

        .slider {
            order: 5;
            margin: 40px 0 0;
        }
    }

    @media screen and (min-width: 1025px) {
        display: grid;
        grid-template-rows: auto auto 1fr auto;
        grid-template-columns: 56% 1fr;
        justify-items: start;
        column-gap: 81px;
        height: 65vh;
        max-height: 750px;
        padding-bottom: 94px;

        h1 {
            grid-row: 1;
            grid-column: 1;
            margin-bottom: clamp(0px, 17vh, 154px);
        }

        ${Image} {
            grid-row: 1 / -2;
            grid-column: 2;
            max-width: 615px;
            height: clamp(33.25rem, 45vw + 4rem, 43.75rem);
            position: fixed;
            bottom: 0;
            left: 55%;
        }

        ${HorizontalLine} {
            position: absolute;
            right: 100vw;
        }

        ${CrewMemberTitle} {
            grid-row: 2;
            grid-column: 1;
            row-gap: 15px;
        }

        ${Biography} {
            grid-row: 3;
            grid-column: 1;
            max-width: 45ch;
            align-self: start;
            margin-top: 27px;
        }

        .slider {
            grid-row: 4;
            grid-column: 1;
            position: absolute;
            bottom: 94px;
        }

        h1,
        ${CrewMemberTitle}, ${Biography} {
            text-align: left;
        }
    }

    @media screen and (min-width: 1025px) and (max-height: 820px) {
        padding-bottom: 0;

        h1 {
            margin-bottom: 50px;
        }

        .slider {
            bottom: 50px;
        }

        ${Image} {
            max-height: 550px;
        }
    }

    @media screen and (min-width: 1441px) {
        ${Image} {
            height: clamp(43.75rem, 87vw, 129.75rem);
            left: 60%;
        }

        ${CrewMemberRole} {
            font-size: clamp(2rem, 1vw + 1rem, 3rem);
        }

        ${CrewMemberName} {
            font-size: clamp(3.5rem, 1vw + 2.5rem, 4.5rem);
        }

        .slider {
            bottom: 10vh;
        }
    }

    @media screen and (min-width: 1921px) {
        .slider {
            bottom: 40vh;
        }
    }
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

        return { png, webp };
    }

    return (
        <Container className="background-overlay">
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

            <HorizontalLine aria-hidden="true" />

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
};
