import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import iconHamburger from "../../assets/icon-hamburger.svg";
import iconClose from "../../assets/icon-close.svg";
import { colors, zIndex } from "../Theme";

const LogoImg = styled.img`
    width: 40px;
    height: 40px;
`;

const NavButton = styled.button`
    position: absolute;
    top: 24px;
    right: 24px;
    z-index: ${zIndex.foreground + zIndex.forwardIncrement};
    width: 40px;
    height: 40px;
    border: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    background-image: ${(props) =>
        props.navIsOpen ? `url(${iconClose})` : `url(${iconHamburger})`};
`;

const NavLinks = styled.ol`
    position: fixed;
    z-index: ${zIndex.foreground};
    top: 0;
    transform: translateX(100vw);
    right: ${(props) => (props.navIsOpen ? "100vw" : "0")};
    margin: 0;
    box-sizing: border-box;
    width: 67.9%;
    height: 100%;
    padding: 113px 0 0 32px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    display: flex;
    flex-direction: column;
    row-gap: 19px;
    list-style-type: none;
    counter-reset: nav-counter -1; /* Sets starting number to be 0 */
    transition: right 0.4s ease-in-out;

    li {
        counter-increment: nav-counter;

        a {
            font-size: 1rem;
            text-decoration: none;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            column-gap: 13px;
            flex-grow: 1;
            padding: 6px 0;
            border-right: 4px solid transparent;
            transition: border-right-color 0.4s ease-out;

            &::before {
                content: "0" counter(nav-counter) " " / ""; /* Adds alternative content for accessibility software */
                font-weight: bold;
            }

            &:hover {
                border-right-color: ${colors.interactive.hover};
            }

            &:active {
                border-right-color: ${colors.interactive.active};
            }
        }
    }

    @media (prefers-reduced-motion) {
        opacity: ${(props) => (props.navIsOpen ? "1" : "0")};
        transition: opacity 0.5s ease-in-out;
    }
`;

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 24px;

    /* Tablet */
    @media screen and (min-width: 600px) {
        padding-left: 39px;
        padding-right: 0;

        ${LogoImg} {
            width: 48px;
            height: 48px;
        }

        ${NavButton} {
            right: 200vw;
        }

        ${NavLinks} {
            flex-direction: row;
            justify-content: center;
            column-gap: clamp(37px, 7vw, 42px);
            backdrop-filter: blur(81.5485px);
            box-sizing: content-box;
            width: fit-content;
            height: unset;
            padding: 39px 48px 0;
            position: absolute;
            right: 0;
            transform: unset;

            li {
                a {
                    font-size: clamp(0.875rem, 3vw - 1rem, 1rem);
                    text-align: center;
                    padding: 0 0 37px;
                    border-right: unset;
                    border-bottom: 4px solid transparent;
                    transition: border-bottom-color 0.4s ease-out;

                    &:hover {
                        border-bottom-color: ${colors.interactive.hover};
                    }

                    &:active {
                        border-bottom-color: ${colors.interactive.active};
                    }
                }
            }

            @media (prefers-reduced-motion) {
                transition: unset;
                opacity: 1;
            }
        }
    }

    /* Only tablet layout removes numbering for nav links */
    @media screen and (min-width: 600px) and (max-width: 1023px) {
        ${NavLinks} {
            li a {
                &::before {
                    content: none;
                }
            }
        }
    }

    /* Desktop */
    @media screen and (min-width: 1024px) {
        padding-top: 64px;
        padding-bottom: 65px;
        padding-left: 55px;
        position: relative;

        /* Horizontal line */
        &::before {
            content: "";
            display: block;
            height: 1px;
            background-color: #51525a;
            position: absolute;
            top: 50%;
            left: 12vw;
            right: clamp(780px, 60vw, 790px);
            z-index: ${zIndex.foreground + zIndex.forwardIncrement};
        }

        ${NavLinks} {
            padding-right: 167px;
            padding-left: 123px;
            top: 40px;
        }
    }

    @media screen and (min-width: 1440px) {
        &::before {
            left: 11.5vw;
        }
    }

    @media screen and (min-width: 1920px) {
        padding-left: clamp(167px, 15vw, 300px);

        &::before {
            left: 21.5vw;
            right: clamp(790px, 435vw, 900px);
        }

        ${NavLinks} {
            padding-right: 15vw;
            padding-right: clamp(167px, 15vw, 300px);
        }
    }
`;

export default function Header() {
    const [navIsOpen, setNavIsOpen] = useState(false);
    const [onDesktopLayout, setOnDesktopLayout] = useState(false);
    const mediaQueryMin768px = window.matchMedia("(min-width: 600px)");

    mediaQueryMin768px.addListener(handleDeviceChange); // Handle screen width change

    useEffect(() => {
        const mainElement = document.querySelector("main");
        if (navIsOpen) {
            mainElement.addEventListener("click", closeNav, true);
            window.addEventListener("scroll", closeNav);
        } else {
            mainElement.removeEventListener("click", closeNav, true);
            window.removeEventListener("scroll", closeNav);
        }
    }, [navIsOpen]);

    useEffect(() => {
        handleDeviceChange(mediaQueryMin768px);
    }, [mediaQueryMin768px]);

    /**
     * Handles the transition of device width between tablet and laptop.
     * @param {MediaQueryList} media  Media query
     */
    function handleDeviceChange(media) {
        // Tablet/Desktop
        if (media.matches) {
            setOnDesktopLayout(true);
        }
        // Mobile
        else {
            setOnDesktopLayout(false);
        }
    }

    function closeNav() {
        setNavIsOpen(false);
    }

    function toggleNav() {
        setNavIsOpen(!navIsOpen);
    }

    return (
        <Container navIsOpen={navIsOpen}>
            <LogoImg src={logo} alt="Space tourism logo" />
            <nav>
                <NavButton
                    navIsOpen={navIsOpen}
                    aria-label={
                        navIsOpen ? "Close navigation" : "Open navigation"
                    }
                    aria-haspopup="true"
                    aria-controls="IDREF"
                    aria-expanded={navIsOpen}
                    aria-hidden={onDesktopLayout ? "true" : "false"}
                    tabIndex={onDesktopLayout ? "-1" : "0"}
                    onClick={toggleNav}
                />
                <NavLinks
                    role="menubar"
                    aria-labelledby="IDREF"
                    className="nav-heading-small"
                    navIsOpen={navIsOpen}
                    aria-hidden={
                        navIsOpen || onDesktopLayout ? "false" : "true"
                    }
                >
                    <li role="none">
                        <Link
                            to="/"
                            role="menuitem"
                            tabIndex={navIsOpen || onDesktopLayout ? "0" : "-1"}
                            onClick={closeNav}
                        >
                            Home
                        </Link>
                    </li>
                    <li role="none">
                        <Link
                            to="/destination-moon"
                            role="menuitem"
                            tabIndex={navIsOpen || onDesktopLayout ? "0" : "-1"}
                            onClick={closeNav}
                        >
                            Destination
                        </Link>
                    </li>
                    <li role="none">
                        <Link
                            to="/crew-douglas-hurley"
                            role="menuitem"
                            tabIndex={navIsOpen || onDesktopLayout ? "0" : "-1"}
                            onClick={closeNav}
                        >
                            Crew
                        </Link>
                    </li>
                    <li role="none">
                        <Link
                            to="/technology-launch-vehicle"
                            role="menuitem"
                            tabIndex={navIsOpen || onDesktopLayout ? "0" : "-1"}
                            onClick={closeNav}
                        >
                            Technology
                        </Link>
                    </li>
                </NavLinks>
            </nav>
        </Container>
    );
}
