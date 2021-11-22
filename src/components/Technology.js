import React from "react";

export default function Technology({ title, description }) {
    return (
        <section>
            <h1>
                <span>03</span> Space launch 101
            </h1>

            <ol>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ol>

            <h2>
                <span>The terminology...</span> <span>{title}</span>
            </h2>

            <p>{description}</p>
        </section>
    );
}

Technology.defaultProps = {
    title: "Launch vehicle",
    description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
};
