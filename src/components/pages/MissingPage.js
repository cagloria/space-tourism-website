import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import bgMobile from "../../assets/background-home-mobile.jpg";
import bgTablet from "../../assets/background-home-tablet.jpg";
import bgDesktop from "../../assets/background-home-desktop.jpg";

const GlobalHomeStyle = createGlobalStyle`
    body {
        background-image: url(${bgMobile});

        @media screen and (min-width: 376px) {
            background-image: url(${bgTablet});
        }

        @media screen and (min-width: 769px) {
            background-image: url(${bgDesktop});
        }
    }
`;

const Heading = styled.h1`
    font-size: clamp(3.5rem, 8.3vw + 1rem, 6.25rem);
    margin: 0;
`;

const Body = styled.p`
    text-align: center;
    max-width: 50ch;
    margin: 0;
`;

const GoBackButton = styled.button`
    font-size: clamp(0.938rem, 6vw - 1.75rem, 1.25rem);
    color: white;
    text-transform: uppercase;
    background-color: transparent;
    padding: 0 0 12px;
    border: none;
    border-bottom: 3px solid transparent;
    margin-top: 8px;
    transition: border-bottom-color 0.2s ease-in-out;

    &:hover {
        border-bottom-color: #85868b;
    }

    &:active {
        border-bottom-color: white;
    }
`;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 24px;
`;

export default function MissingPage() {
    useEffect(() => {
        document.title = "404 | Space Tourism";
    }, []);

    function goBack() {
        window.history.back();
    }

    return (
        <Container className="background-overlay adjusted-top-padding">
            <GlobalHomeStyle />
            <Heading className="color-primary-white">404 Error</Heading>
            <Body>The page you're looking for doesn't exist!</Body>
            <GoBackButton onClick={goBack} className="nav-heading-small">
                Go back
            </GoBackButton>
        </Container>
    );
}
