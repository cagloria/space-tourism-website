import React from "react";
import styled from "styled-components";

const HeadingNumber = styled.span`
    color: #808491;
    font-weight: 700;
    margin-right: 16px;
`;

/**
 * Creates a stylized H1 heading to display on content pages.
 * @param {string} number   Number to display
 * @param {string} text     Text to display
 * @returns                 H1 heading
 */
export default function PagesHeading({ number, text }) {
    return (
        <h1 className="nav-heading-small">
            <HeadingNumber aria-hidden="true">{number}</HeadingNumber>
            {text}
        </h1>
    );
}
