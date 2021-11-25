import React from "react";
import { createLinksListItems } from "../utilities/pages";

/**
 * Takes a destination object and returns markup describing that destination.
 * @param {object} destination      Destination object
 * @param {object} allDestinations  Array of destinations from data.json
 * @returns                         Destination Route page
 */
export default function Destination({ destination, allDestinations }) {
    const links = createLinksListItems(allDestinations, "destination");

    return (
        <section>
            <h1>
                <span>01</span> Pick your destination
            </h1>
            <ul>{links}</ul>

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
        </section>
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
    allDestinations: [
        { name: "Moon" },
        { name: "Mars" },
        { name: "Europa" },
        { name: "Titan" },
    ],
};
