import React from "react";
import { createLinksListItems } from "../utilities/pages";
import data from "../data/data.json";

/**
 * Takes a technology object and returns markup describing that technology.
 * @param {object} tech Technology object
 * @returns             Technology Route page
 */
export default function Technology({ tech }) {
    const { technology } = data;
    const links = createLinksListItems(technology, "technology");

    return (
        <section>
            <h1>
                <span>03</span> Space launch 101
            </h1>

            <ol>{links}</ol>

            <h2>
                <span>The terminology...</span> <span>{tech.name}</span>
            </h2>

            <p>{tech.description}</p>
        </section>
    );
}

Technology.defaultProps = {
    tech: {
        title: "Launch vehicle",
        description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
};
