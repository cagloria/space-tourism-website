import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import iconHamburger from "../../assets/icon-hamburger.svg";
import iconClose from "../../assets/icon-close.svg";
import { colors, mediaQueryStrings } from "../Theme";

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 24px;

    @media (prefers-reduced-motion) {
        transition: unset;
    }

    @media screen and (min-width: ${mediaQueryStrings.minTablet}) {
        padding-left: 39px;
        padding-right: 48px;
    }
`;

const LogoImg = styled.img`
    width: 40px;
    height: 40px;

    @media screen and (min-width: 768px) {
        width: 48px;
        height: 48px;
    }
`;

const NavButton = styled.button`
    position: absolute;
    top: 24px;
    right: 24px;
    z-index: 11;
    width: 40px;
    height: 40px;
    border: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    background-image: ${(props) =>
        props.navIsOpen ? `url(${iconClose})` : `url(${iconHamburger})`};

    @media screen and (min-width: 768px) {
        right: 200vw;
    }
`;

const NavLinks = styled.ol`
    position: fixed;
    z-index: 10;
    top: 0;
    transform: translateX(100vw);
    right: ${(props) => (props.navIsOpen ? "100vw" : "0")};
    margin: 0;
    box-sizing: border-box;
    width: 67.9%;
    height: 100%;
    padding: 113px 0 0 32px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(45.5485px);
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    list-style-type: none;
    counter-reset: nav-counter -1; /* Sets starting number to be 0 */
    transition: right 0.4s ease-in-out;

    li {
        counter-increment: nav-counter;

        a {
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
                content: "0" counter(nav-counter) " " / "";
                font-weight: bold;
            }

            &:hover {
                border-right-color: ${colors.white};
            }
        }
    }

    @media (prefers-reduced-motion) {
        transition: unset;
    }

    @media screen and (min-width: ${mediaQueryStrings.minTablet}) {
        width: 59%;
        height: unset;
        padding: 39px 48px 0;
        right: 0;
        transform: unset;
        flex-direction: row;
        justify-content: space-between;
        backdrop-filter: blur(81.5485px);

        li {
            a {
                font-size: 0.875rem;
                text-align: center;
                padding: 0 0 37px;
                border-right: unset;
                border-bottom: 4px solid transparent;
                transition: border-bottom-color 0.4s ease-out;

                &:hover {
                    border-bottom-color: ${colors.white};
                }
            }
        }
    }

    @media screen and (min-width: ${mediaQueryStrings.minTablet}) and (max-width: ${mediaQueryStrings.minLargeLaptop}) {
        li a {
            &::before {
                content: none;
            }
        }
    }
`;

export default function Header() {
    const [navIsOpen, setNavIsOpen] = useState(false);
    const [atScrollTop, setAtScrollTop] = useState(true);
    const [onDesktop, setOnDesktop] = useState(false);
    const mediaQueryMin768px = window.matchMedia("(min-width: 768px)");

    window.addEventListener("scroll", checkScrollHeight);
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
        // Laptop/Desktop
        if (media.matches) {
            setOnDesktop(true);
        }
        // Tablet
        else {
            setOnDesktop(false);
        }
    }

    /**
     * Check if the user is scrolled to the top.
     */
    function checkScrollHeight() {
        if (window.scrollY > 0) {
            setAtScrollTop(false);
        } else {
            setAtScrollTop(true);
        }
    }

    function closeNav() {
        setNavIsOpen(false);
    }

    function toggleNav() {
        setNavIsOpen(!navIsOpen);
    }

    return (
        <Container atScrollTop={atScrollTop} navIsOpen={navIsOpen}>
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
                    aria-hidden={onDesktop ? "true" : "false"}
                    tabIndex={onDesktop ? "-1" : "0"}
                    onClick={toggleNav}
                />
                <NavLinks
                    role="menubar"
                    aria-labelledby="IDREF"
                    className="nav-heading-small"
                    navIsOpen={navIsOpen}
                >
                    <li role="none">
                        <Link
                            to="/"
                            role="menuitem"
                            tabIndex={navIsOpen || onDesktop ? "0" : "-1"}
                            onClick={closeNav}
                        >
                            Home
                        </Link>
                    </li>
                    <li role="none">
                        <Link
                            to="/destination-moon"
                            role="menuitem"
                            tabIndex={navIsOpen || onDesktop ? "0" : "-1"}
                            onClick={closeNav}
                        >
                            Destination
                        </Link>
                    </li>
                    <li role="none">
                        <Link
                            to="/crew-douglas-hurley"
                            role="menuitem"
                            tabIndex={navIsOpen || onDesktop ? "0" : "-1"}
                            onClick={closeNav}
                        >
                            Crew
                        </Link>
                    </li>
                    <li role="none">
                        <Link
                            to="/technology-launch-vehicle"
                            role="menuitem"
                            tabIndex={navIsOpen || onDesktop ? "0" : "-1"}
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
