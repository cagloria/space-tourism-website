import React, { useEffect } from "react";
import PageLinks from "./PageLinks";

/**
 * Takes a crew member object and returns markup describing that crew member.
 * @param {object} allCrew      An array of all crew objects
 * @param {object} crewMember   Crew member object
 * @returns                     Crew member page
 */
export default function Crew({ allCrew, crewMember }) {
    useEffect(() => {
        document.title = `Crew: ${crewMember.name} | Space Tourism`;
    }, [crewMember.name]);

    return (
        <section>
            <h1>
                <span>02</span> Meet your crew
            </h1>

            <ul>
                <PageLinks categoryArr={allCrew} urlPrefix="crew" />
            </ul>

            <h2>
                <span>{crewMember.role}</span> <span>{crewMember.name}</span>
            </h2>

            <p>{crewMember.bio}</p>
        </section>
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
