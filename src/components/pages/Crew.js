import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PagesHeading from "../PagesHeading";
import Slider from "../links/Slider";
import { colors, deviceMediaQueries } from "../Theme";
import bgMobile from "../../assets/crew/background-crew-mobile.jpg";
import bgTablet from "../../assets/crew/background-crew-tablet.jpg";
import bgDesktop from "../../assets/crew/background-crew-desktop.jpg";
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
    h1 {
        margin: 0;
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

    return (
        <Container>
            <GlobalCrewStyle />
            <PagesHeading number="02" text="Meet your crew" />

            <Slider
                pathPrefix="crew"
                links={crew}
                currentPageName={crewMember.name}
            />

            <CrewMemberTitle>
                <CrewMemberRole>{crewMember.role}</CrewMemberRole>{" "}
                <CrewMemberName>{crewMember.name}</CrewMemberName>
            </CrewMemberTitle>

            <p>{crewMember.bio}</p>
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
