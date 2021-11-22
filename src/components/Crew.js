import React from "react";

export default function Crew({ title, name, description }) {
    return (
        <section>
            <h1>
                <span>02</span> Meet your crew
            </h1>

            {/* TODO: Slider controls */}

            <h2>
                <span>{title}</span> <span>{name}</span>
            </h2>

            <p>{description}</p>
        </section>
    );
}

Crew.defaultProps = {
    title: "Commander",
    name: "Douglas Hurley",
    description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
};
