import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import iconHamburger from "../assets/icon-hamburger.svg";
import iconClose from "../assets/icon-close.svg";

const Container = styled.header`
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
    background-image: url("${(props) =>
        props.navIsOpen ? iconClose : iconHamburger}");
`;

const NavLinks = styled.ol`
    position: fixed;
    z-index: 1;
    top: 0;
    right: ${(props) => (props.navIsOpen ? "0" : "-200vw")};
    margin: 0;
    box-sizing: border-box;
    width: 70.5%;
    height: 100%;
    padding: 112px 32px 0 32px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    list-style-type: none;
    counter-reset: nav-counter;
    transition: right 0.3s ease-in-out;
    li {
        counter-increment: nav-counter;

        &::before {
            content: "0" counter(nav-counter) " ";
            font-weight: bold;
            letter-spacing: 2.7px;
            margin-right: 6px;
        }
    }

    a {
        text-decoration: none;
        text-transform: uppercase;
    }
`;

export default function Header() {
    const [navIsOpen, setNavIsOpen] = useState(false);

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
                        >
                            Home
                        </Link>
                    </li>
                    <li role="none">
                        <Link
                            to="/destination-moon"
                            role="menuitem"
                            tabIndex={navIsOpen ? "0" : "-1"}
                        >
                            Destination
                        </Link>
                    </li>
                    <li role="none">
                        <Link
                            to="/crew-douglas-hurley"
                            role="menuitem"
                            tabIndex={navIsOpen ? "0" : "-1"}
                        >
                            Crew
                        </Link>
                    </li>
                    <li role="none">
                        <Link
                            to="/technology-launch-vehicle"
                            role="menuitem"
                            tabIndex={navIsOpen ? "0" : "-1"}
                        >
                            Technology
                        </Link>
                    </li>
                </NavLinks>
            </nav>
        </Container>
    );
}
