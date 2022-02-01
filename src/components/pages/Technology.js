import React, { useEffect } from "react";
import styled from "styled-components";
import PagesHeading from "../PagesHeading";
import NumberSlider from "../links/NumberSlider";
import data from "../../data/data.json";

const TechTitle = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const TechTerminology = styled.span`
    font-family: "Barlow Condensed", sans-serif;
    font-size: 0.875rem;
    color: #d0d6f9;
    text-transform: uppercase;
`;

const TechName = styled.span`
    font-size: 1.5rem;
    text-transform: uppercase;
`;

/**
 * Takes a technology object and returns markup describing that technology.
 * @param {object} tech     Technology object
 * @returns                 Technology Route page
 */
export default function Technology({ tech }) {
    const { technology } = data;

    useEffect(() => {
        document.title = `Technology: ${tech.name} | Space Tourism`;
    }, [tech.name]);

    return (
        <section className="background-overlay">
            <PagesHeading number="03" text="Space launch 101" />

            <NumberSlider
                pathPrefix="technology"
                links={technology}
                currentPageName={tech.name}
            />

            <TechTitle>
                <TechTerminology className="nav-heading-small">
                    The terminology...
                </TechTerminology>{" "}
                <TechName>{tech.name}</TechName>
            </TechTitle>

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
