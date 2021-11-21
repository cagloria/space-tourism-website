import React from "react";

export default function Destination() {
    return (
        <div>
            <h1>
                <span>01</span> Pick your destination
            </h1>
            <ul>
                <li>Moon</li>
                <li>Mars</li>
                <li>Europa</li>
                <li>Titan</li>
            </ul>

            <h2>Moon</h2>
            <p>
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
            </p>

            <div>
                <h3>Avg. distance</h3>
                <p>384,400 km</p>
            </div>
            <div>
                <h3>Est. travel time</h3>
                <p>3 days</p>
            </div>
        </div>
    );
}
