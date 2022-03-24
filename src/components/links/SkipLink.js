import React from "react";
import styled from "styled-components";

const Link = styled.a`
    color: #d0d6f9;
    text-decoration: none;
    background-color: #0b0d17;
    padding: 4px;
    position: fixed;
    z-index: 99;
    top: -25px;
    left: 0;
    transition: transform 0.3s ease-out;
    transition-delay: 2s;

    &:focus {
        transition-delay: 0s;
        transform: translateY(25px);
    }
`;

export default function SkipLink() {
    return <Link href="#main">Skip to main content</Link>;
}
