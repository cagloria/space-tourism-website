import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import iconHamburger from "../../assets/icon-hamburger.svg";
import iconClose from "../../assets/icon-close.svg";
import { colors } from "../Theme";

const Container = styled.header`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 24px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`;

const LogoImg = styled.img`
    width: 40px;
    height: 40px;
`;

const NavButton = styled.button`
    position: fixed;
    top: 24px;
    right: 16px;
    z-index: 2;
    width: 40px;
    height: 40px;
    border: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    background-image: url("${(props) => props.navIsOpen ? iconClose : iconHamburger}");
`;

const NavLinks = styled.ol`
    position: fixed;
    z-index: 1;
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
    transition: right 0.3s ease-in-out;

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
                content: "0" counter(nav-counter) " ";
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
`;

export default function Header() {
    const [navIsOpen, setNavIsOpen] = useState(false);

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

    function closeNav() {
        setNavIsOpen(false);
    }

    function toggleNav() {
        setNavIsOpen(!navIsOpen);
    }

    return (
        <Container>
            <LogoImg src={logo} alt="Space tourism logo" />
            <nav>
                <NavButton
                    navIsOpen={navIsOpen}
                    aria-label={navIsOpen ? "Close nav" : "Open nav"}
                    aria-haspopup="true"
                    aria-controls="IDREF"
                    aria-expanded={navIsOpen}
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
                            tabIndex={navIsOpen ? "0" : "-1"}
                            onClick={closeNav}
                        >
                            Home
                        </Link>
                    </li>
                    <li role="none">
                        <Link
                            to="/destination-moon"
                            role="menuitem"
                            tabIndex={navIsOpen ? "0" : "-1"}
                            onClick={closeNav}
                        >
                            Destination
                        </Link>
                    </li>
                    <li role="none">
                        <Link
                            to="/crew-douglas-hurley"
                            role="menuitem"
                            tabIndex={navIsOpen ? "0" : "-1"}
                            onClick={closeNav}
                        >
                            Crew
                        </Link>
                    </li>
                    <li role="none">
                        <Link
                            to="/technology-launch-vehicle"
                            role="menuitem"
                            tabIndex={navIsOpen ? "0" : "-1"}
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
