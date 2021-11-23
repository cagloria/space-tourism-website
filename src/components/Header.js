import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import iconHamburger from "../assets/icon-hamburger.svg";
import iconClose from "../assets/icon-close.svg";

const NavButton = styled.button`
    width: 40px;
    height: 40px;
    border: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    background-image: url("${(props) =>
        props.navIsOpen ? iconHamburger : iconClose}");
`;

export default function Header() {
    const navIsOpen = false;

    return (
        <header>
            <img src={logo} alt="Space tourism logo" />
            <nav>
                <NavButton
                    navIsOpen
                    aria-label={navIsOpen ? "Close nav" : "Open nav"}
                    aria-haspopup="true"
                    aria-controls="IDREF"
                    aria-expanded={navIsOpen}
                />
                <ol role="menu" aria-labelledby="IDREF">
                    <li role="none">
                        <Link to="/" role="menuitem">
                            Home
                        </Link>
                    </li>
                    <li role="none">
                        <Link to="/destination-moon" role="menuitem">
                            Destination
                        </Link>
                    </li>
                    <li role="none">
                        <Link to="/crew-douglas-hurley" role="menuitem">
                            Crew
                        </Link>
                    </li>
                    <li role="none">
                        <Link to="/technology-launch-vehicle" role="menuitem">
                            Technology
                        </Link>
                    </li>
                </ol>
            </nav>
        </header>
    );
}
