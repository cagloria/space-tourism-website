import React from "react";
import { createLinksListItems } from "../utilities/pages";

/**
 * Takes a crew member object and returns markup describing that crew member.
 * @param {object} crewMember   Crew member object
 * @returns                     Crew member Route page
 */
export default function Crew({ crewMember, allCrewMembers }) {
    // Ensures that each crew member in data.json is listed as a link
    const links = createLinksListItems(allCrewMembers, "crew");

    return (
        <section>
            <h1>
                <span>02</span> Meet your crew
            </h1>

            <ul>{links}</ul>

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
