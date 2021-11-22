import React from "react";

export default function Destination({
    name,
    description,
    distance,
    travelTime,
}) {
    return (
        <section>
            <h1>
                <span>01</span> Pick your destination
            </h1>
            <ul>
                <li>Moon</li>
                <li>Mars</li>
                <li>Europa</li>
                <li>Titan</li>
            </ul>

            <h2>{name}</h2>
            <p>{description}</p>

            <div>
                <h3>Avg. distance</h3>
                <p>{distance}</p>
            </div>
            <div>
                <h3>Est. travel time</h3>
                <p>{travelTime}</p>
            </div>
        </section>
    );
}

Destination.defaultProps = {
    name: "Moon",
    description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help  regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
};
